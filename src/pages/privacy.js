import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Privacy" />

    <div className="about-container">
    <h1>Privacy Policy</h1>

<p>Last updated: {new Date().getFullYear()}</p>

<p>Paul Tomlinson ("us," "we," or "our") operates paultommo.com (the "Website"). This page informs you of our policies regarding the collection, use, and disclosure of Personal Information we receive from users of the Website.</p>

<p>We use your Personal Information only for providing and improving the Website. By using the Website, you agree to the collection and use of information in accordance with this policy.</p>

<h2>Information Collection and Use</h2>

While using our Website, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include but is not limited to your name, email address, and other information ("Personal Information").

<h3>Log Data</h3>

Like many site operators, we collect information that your browser sends whenever you visit our Website ("Log Data"). This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Website that you visit, the time and date of your visit, the time spent on those pages, and other statistics.

<h4>Cookies</h4>

Cookies are files with small amounts of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive.

<p>Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Website.</p>

<h5>Security</h5>

The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.

<h6>Links to Other Sites</h6>

Our Website may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.

<h6>Changes to This Privacy Policy</h6>

This Privacy Policy is effective as of {new Date().getFullYear()} and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.

<p>We reserve the right to update or change our Privacy Policy at any time, and you should check this Privacy Policy periodically. Your continued use of the Website after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.</p>

<h6>Contact Us</h6>

<p>If you have any questions about this Privacy Policy, please contact us at hello@paultommo.com.</p>

    </div>
    
  </Layout>
)

export default IndexPage
