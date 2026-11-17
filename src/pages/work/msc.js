import React from 'react'
import WorkFunnelPage from '../../components/WorkFunnelPage'

export default function MscPage() {
  return (
    <WorkFunnelPage
      meta={{
        title: "Marylebone Smile Clinic - Funnel Audit | Paul Tomlinson",
        description: "A paid traffic funnel audit of Marylebone Smile Clinic, Harley Street. Four conversion problems found, four fixes proposed.",
        url: "https://paultommo.com/work/msc/",
      }}
      hero={{
        eyebrow: "Funnel Audit · Dental · Harley Street",
        title: "Marylebone Smile Clinic",
        subtitle: "What happens when every ad click ends in a contact form and a wait.",
        context: "Harley Street cosmetic dental clinic. Running paid ads. 5★ reviews. No way to book online.",
      }}
      problems={[
        {
          title: "No booking calendar anywhere",
          text: "Every button on the site - veneers, implants, smile makeover - points to a contact form. Name, phone, email, photo. Submit and wait for a callback. No date, no time, no way to book yourself.",
        },
        {
          title: "Broken buttons on the implant cost page",
          text: "Every \"Book your consultation\" button on the implant pricing page links to nothing. The form is on the page but none of the buttons reach it. People ready to book, clicking links that go nowhere.",
        },
        {
          title: "£150 consultation fee hidden until after the form",
          text: "Most cosmetic dental clinics offer a free first consultation. MSC charges £150. That fee only appears on the fees page - invisible to anyone arriving from an ad. The drop-off happens when they find it.",
        },
        {
          title: "Full site navigation on ad landing pages",
          text: "The veneers and implant pages that ads point to carry the full site navigation - from blog to gallery - so anyone who clicks an ad arrives with 40+ other links pulling them away from booking.",
        },
      ]}
      fixes={[
        {
          title: "Bookable calendar on the landing page",
          text: "Replace the contact form with an embeddable calendar. The patient picks a slot and gets an instant confirmation. No waiting, no wondering whether anyone saw the form. More patients booked, less time spent on follow-up calls.",
        },
        {
          title: "£150 fee in the hero - not hidden",
          text: "Show the fee in the ad copy and at the top of the landing page. Anyone put off by the cost leaves before enquiring - not after the clinic has already called them back. The result is fewer wasted calls and better quality leads.",
        },
        {
          title: "Implant page buttons that actually work",
          text: "Fix every broken link to point to the booking calendar. One line of code. Beyond the lost bookings, broken buttons on a clinic's own pricing page erode trust - if the website doesn't work, why would the treatment? People who were ready to book can now actually book.",
        },
        {
          title: "Remove the navigation from ad landing pages",
          text: "Remove the site navigation from every page that ads point to. One job per page: get to the booking calendar. Everything else is a distraction that costs bookings.",
        },
      ]}
      gapClosed="Paid traffic was landing on a form with no way to book - every lead needed a phone call before anything was confirmed."
    />
  )
}
