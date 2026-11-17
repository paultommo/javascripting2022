import React from 'react'
import WorkFunnelPage from '../../components/WorkFunnelPage'

export default function HeatGeekPage() {
  return (
    <WorkFunnelPage
      meta={{
        title: "HeatGeek - Funnel Analysis | Paul Tomlinson",
        description: "A funnel analysis of HeatGeek's upgrades configurator. The best tool in the heat pump sector for checking if your home is ready - stopped dead by a login wall before £250 changed hands.",
        url: "https://paultommo.com/work/heatgeek/",
      }}
      hero={{
        eyebrow: "Funnel Analysis · Heat Pumps · UK",
        title: "HeatGeek",
        subtitle: "A tool that tells you exactly what heat pump your home needs and what it costs - then stops you at the last step to create an account.",
        context: "HeatGeek's configurator does the hard work upfront: it checks your home, recommends the right unit, and shows you the price after the government grant. All before you've created an account. Then it asks you to create an account.",
      }}
      problems={[
        {
          title: "You have to create an account before paying £250",
          text: "Click \"Book £250 design consultation\" and you hit a full account sign-up: name, email, phone, password with special characters, terms. You just want to pay. Instead you're filling in a form most people abandon. Every unnecessary step costs bookings.",
        },
        {
          title: "Some homes just get a dead end - with no way forward",
          text: "Some homes - Victorian terraces, large houses - can't be helped by HeatGeek due to poor EPC ratings or exceeding the heat loss threshold. But the tool just shows them a mailing list form. No explanation of why. No alternative. Just a dead end for someone who was ready to spend money.",
        },
        {
          title: "Specific prices the site visit might have to correct",
          text: "The tool can recommend a specific system - Vaillant aroTHERM plus 12kW at £4,500 - before anyone has visited the property. If the site visit then says 14kW and £5,800 (even though the tool states the recommendation might not be 100% accurate), the customer feels misled. That means a lost sale, a refund request, time wasted and quite possibly a bad review.",
        },
        {
          title: "Your results disappear if you close the tab",
          text: "Close the tab and your results are gone. There's no prompt to save them or sign in during the tool - only at the very end when you try to book. Someone who spends 10 minutes going through the configurator loses everything without ever being warned. They're unlikely to start again.",
        },
      ]}
      fixes={[
        {
          title: "Let people pay without creating an account",
          text: "Name, email, phone. Card details. Done. Account creation optional, offered after booking as a way to track the project. Move the barrier from before payment to after it. Fewer people drop off at the last step, more £250 consultations completed.",
        },
        {
          title: "Collect an email at every dead end",
          text: "Replace the silent rejection with: \"HeatGeek can't check this property type yet - leave your email and we'll let you know when we can.\" Dead ends become a future leads list. Every email collected is a potential booking when the product expands.",
        },
        {
          title: "Save the results to a link, not an account",
          text: "The URL /switch/estimate/zw28rp/ already exists. Email it to the customer straight away. No account needed to pick up where they left off. People who leave mid-journey can come back and complete it - recovering bookings that would otherwise be lost.",
        },
        {
          title: "Show a price range, not a specific number",
          text: "\"Properties like yours typically cost £4,000–£5,500 after the government grant.\" Show the range, not the exact unit and price. The site visit confirms it. That's a promise the site can keep - and a conversation the surveyor doesn't have to start by walking it back. Customers arrive with realistic expectations, which means fewer surprises, fewer cancellations, and fewer bad reviews.",
        },
      ]}
      gapClosed="The best tool in the heat pump sector for checking if your home is ready was losing people at the last step before they paid £250 - because of a login wall that didn't need to be there."
    />
  )
}
