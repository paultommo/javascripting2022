const LIST_ID = 'd1990c9666'
const SERVER  = 'us19'

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  let email
  try {
    email = JSON.parse(event.body || '{}').email
  } catch {
    return { statusCode: 400, body: JSON.stringify({ result: 'error', msg: 'Invalid request' }) }
  }

  if (!email) {
    return { statusCode: 400, body: JSON.stringify({ result: 'error', msg: 'Email required' }) }
  }

  const apiKey = process.env.MAILCHIMP_API_KEY
  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ result: 'error', msg: 'Server not configured' }) }
  }

  const auth = Buffer.from(`anystring:${apiKey}`).toString('base64')

  const res = await fetch(`https://${SERVER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${auth}`,
    },
    body: JSON.stringify({
      email_address: email,
      status: 'pending', // double opt-in — sends confirmation email
    }),
  })

  const data = await res.json()

  // 200/201 = added, 400 + Member Exists = already subscribed (treat as success)
  if (res.ok || (res.status === 400 && data.title === 'Member Exists')) {
    return { statusCode: 200, body: JSON.stringify({ result: 'success' }) }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ result: 'error', msg: data.detail || 'Something went wrong' }),
  }
}
