import React from 'react'
import WorkFunnelPage from '../../components/WorkFunnelPage'

export default function BeCoolPage() {
  return (
    <WorkFunnelPage
      meta={{
        title: "Be Cool Refrigeration - Funnel Audit | Paul Tomlinson",
        description: "A paid traffic funnel audit of Be Cool Refrigeration, London. The AC side had a good quote tool. The higher-ticket refrigeration side had an 8-field form and no price.",
        url: "https://paultommo.com/work/be-cool/",
      }}
      hero={{
        eyebrow: "Funnel Audit · Commercial Refrigeration · London",
        title: "Be Cool Refrigeration",
        subtitle: "One half of the business had an instant quote tool. The other half had an 8-field form and no price.",
        context: "London-based AC installation and commercial refrigeration. Trading since 2004. The O2 Arena on the client list. Good operation with a split-personality website.",
      }}
      problems={[
        {
          title: "Two halves of the business - one online path",
          text: "AC installation has a 2-step quote tool that shows a price on screen in under a minute. Commercial refrigeration - walk-in freezers, cold rooms, cellar cooling - has an 8-field contact form and no price, which sends potential customers straight back to Google.",
        },
        {
          title: "The process section contradicts the quote tool",
          text: "The homepage says the first step is a free survey. The AC quote tool says you'll see your price in under a minute. Those two things contradict each other - and a confused visitor is a lost visitor.",
        },
        {
          title: "No price anywhere for the bigger jobs",
          text: "A restaurant owner looking for a walk-in cold room fills in a form and waits. No price on the page. Not even a rough starting figure. Just a form and silence.",
        },
        {
          title: "8 required fields for every refrigeration enquiry",
          text: "The refrigeration enquiry form has 8 required fields before you get any response. The AC quote tool shows a price after 5. The harder the job is to price, the harder the site makes it to even ask - which is exactly the wrong way round.",
        },
      ]}
      fixes={[
        {
          title: "Let refrigeration customers get a price online too",
          text: "Three questions: type of unit, rough size, install or repair. No calendar required - just an immediate price range based on those three answers. Refrigeration customers get the same confidence AC customers already have.",
        },
        {
          title: "Show a starting price",
          text: "Even a rough range - \"Cold rooms from £3,500. Walk-in freezers from £6,000\" - changes how enquiries go. Customers arrive knowing they can afford it. People who can't stop enquiring before wasting anyone's time. Better quality leads, fewer dead-end calls.",
        },
        {
          title: "Fix the process section to reflect reality",
          text: "If AC customers get an instant price, say so in the process diagram. If refrigeration customers need a site visit, explain why. Right now the homepage promises one thing and the product delivers something different. Fix that and visitors know exactly what to expect - which builds trust before they've even made contact.",
        },
        {
          title: "Separate landing pages by job type",
          text: "AC and commercial refrigeration are bought differently, by different people, on different timescales. Separating them lets each page do one job and speak to one buyer - without each getting in the way of the other. Each page converts better when it isn't trying to serve two audiences at once.",
        },
      ]}
      gapClosed="The higher-ticket half of the business had no online path to a price - refrigeration enquiries stalled at a form while AC enquiries got an instant quote."
    />
  )
}
