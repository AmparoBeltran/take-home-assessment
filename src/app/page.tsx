import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-24 py-12 gap-12">
      <h1 className="text-2xl">Take Home Assessment | Amparo Beltran</h1>
      <Accordion type="single" collapsible className="max-w-4xl w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            From
            <Link
              href={
                "https://gist.github.com/Pieparker/b04a4e9ff82ba949e5db9d5b0e9d89e8"
              }
              target="_blank"
              className="underline underline-offset-2"
            >
              this list,
            </Link>
            rank your 5 most favourite and 5 least favourite support tasks.
            Provide a brief explanation for each.
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3">
            <p>
              Even though I don’t have proper technical support experience,
              based on my own troubleshooting experience as a Frontend
              Developer, I believe the below to be an accurate representation of
              what I would enjoy the most and the least on the job.
            </p>
            <h4 className="font-semibold">The most:</h4>
            <ul className="list-disc p-4 flex flex-col gap-4">
              <li>
                <p className="font-semibold">
                  Analyze hundreds of support tickets to spot trends the product
                  team can use
                </p>
                <p>
                  I have an analytical mind and I believe that feedback is a
                  very powerful tool for improving customer experience which
                  would improve the product and, therefore increase sales.
                </p>
              </li>
              <li>
                <p className="font-semibold">
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  Dig through logs to troubleshoot a customer's broken project
                </p>
                <p>
                  Logs tend to be reliable and can be considered an immutable
                  source of truth and a valuable tool when it comes to
                  investigating issues. I don’t need to rely on the customer, if
                  something was logged it happened and it did in a certain way.
                </p>
              </li>
              <li>
                <p className="font-semibold">
                  Identify, file (and, where possible, resolve) bugs in private
                  and public Vercel/Next.js repos on GitHub
                </p>
                <p>
                  Today I’m a developer so this is part of my job. I
                  particularly enjoy digging into those kind of issues in my own
                  codebases.
                </p>
              </li>
              <li>
                <p className="font-semibold">
                  Work with the product team to develop a new feature based on
                  feedback from customers
                </p>
                <p>
                  I always come up with ideas for products that I use. I look
                  forward to working with the product team and leveraging
                  customer feedback to improve the product and customer
                  satisfaction.
                </p>
              </li>
              <li>
                <p className="font-semibold">
                  Manage a support team / Scheduling time-off coverage and
                  collaborating as part of a growing cohesive support team{" "}
                </p>
                <ul className="list-disc px-4">
                  <li>I have successfully managed teams in the past.</li>
                  <li>
                    While I was working for Hedra Enginyeria Agricola, I was the
                    bridge between the company’s owner and the team. I was
                    responsible for scheduling their jobs, gathering the
                    feedback they could bring from the clients and passing it on
                    to the company’s owner. I was the contact between the
                    company’s owner and the clients and providers as well.
                  </li>
                  <li>
                    I regularly worked out of hours to help ensure customers
                    would receive the quality of service they expected.{" "}
                  </li>
                </ul>
              </li>
            </ul>
            <h4 className="font-semibold">The least:</h4>
            <ul className="list-disc p-4 flex flex-col gap-4">
              <li>
                <p className="font-semibold">
                  Write and maintain support articles and docs pages
                </p>
                <p>Writing is not my preferred activity</p>
              </li>
              <li>
                <p className="font-semibold">
                  Create video tutorials to help teach users a specific feature
                  or use case
                </p>
                <p>
                  I’m too shy for that. I get very nervous because I need things
                  done perfectly. It would take me forever to get the right
                  video.
                </p>
              </li>
              <li>
                <p className="font-semibold">
                  Respond to queries on Twitter, Reddit, Hacker News and other
                  3rd party sites
                </p>
                <p>
                  I don’t like social media. That would be very stressful for
                  me.
                </p>
              </li>
              <li>
                <p className="font-semibold">
                  Run ticket review sessions to make sure tone is consistent
                </p>
                <p>
                  While I do believe in the importance of these sessions, and
                  know that I would highly benefit from them, I don’t believe I
                  would be the most adequate person to run them.
                </p>
              </li>
              <li>
                <p className="font-semibold">
                  Work with people to figure out if Vercel is suitable for their
                  use case
                </p>
                <p>
                  That is something I have done. But sales is not my strongest
                  suit and I don’t feel comfortable acting as a salesperson.
                </p>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            What do you want to learn or do more of at work?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3">
            <p>
              Anything and everything. During my transition to Frontend
              Development, I learned a lot about JavaScript, framworks, and
              building web applications, but not so much about the wider
              concepts that are required to serve a web application, such as
              HTTP, DNS, and Networking in general.
            </p>
            <p>
              I would like to work on a variety of issues, consolidating my
              existing knowledge and expanding into the previously mentioned
              concepts.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-left">
            Describe how you solved a challenge or technical issue that you
            faced in a previous role (preferably in a previous support role).
            How did you determine that your solution was successful?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3">
            <p>
              Once upon a time, I had a problem with one of my printers (it was
              a big one, the kind you use in a digital printing shop). I had to
              print a project for a client and the deadline was Monday. The
              customer service didn’t have support on the weekends, so I had to
              fix it myself. Thankfully, I’m a curious person and every time the
              technicians came to fix the machine, I paid attention to the error
              displayed and each step they perfomed to take the machine apart
              for each different error. Thankfully as well, I had started to
              stock up on some replacements for the most common issues.
            </p>

            <p>
              This time I was on my own, I checked the error and visualized the
              steps Roberto or Alex had taken to fix it.
            </p>

            <p>
              After sitting down for a moment to decide if the risk was worth it
              (the machine was worth €60000), I decided to try and fix it. I had
              told the client that I would have it done by Monday and I hate not
              being able to deliver.
            </p>

            <p>
              I grabbed my toolbox and took out the core of the machine, I
              removed the drum and replaced the faulty piece.
            </p>

            <p>
              I know the solution worked because I was there to see the face of
              my client when I showed him my beautifully printed designs.
            </p>

            <p>
              Since then, I've been able to confidently resolve many more issues
              on my own.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            When would you choose to use Edge Functions, Serverless Functions,
            or Edge Middleware with Vercel?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3">
            <p>
              <span className="font-semibold">Edge Functions</span> are deployed
              close to the user so they are fast. I would choose Edge functions
              when speed and performance is key. They have the advantage of
              being deployed globally, meaning round trips are shorter. Because
              the runtime is more lightweight and optimized than the Node.js
              runtime, their cold boot time is shorter as well. However, the
              system resources (CPU, RAM) and API coverage are limited.
            </p>
            <p>
              <span className="font-semibold">Serverless Functions</span>{" "}
              benefit from better system resources and have access to the full
              Node.js API. They are best suited for resource-intensive
              computations where latency can be sacrificed for performance, due
              to only being deployed in a single region.
            </p>
            <p>
              <span className="font-semibold">The Edge Middleware</span>{" "}
              executes before the rest of the stack. It is useful when
              implementing dynamic routing (redirects and rewrites),
              manipulating headers, and implementing personalisation at the
              edge. It suffers the same limitations as Edge Functions, as it
              runs on the same runtime.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-left">
            Imagine a customer writes in requesting help with a build issue on a
            framework or technology that you've not seen before. How would you
            begin troubleshooting this and what questions would you ask the
            customer to understand the situation better?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3">
            <p>
              I would start by analyzing any errors reported during the build
              phase, looking for any similarities with previously reported
              issues.
            </p>
            <p>
              If none match, I would then check whether the customer is using
              the latest versions of the libraries their project relies on and
              ask the customer to upgrade any outdated library.
            </p>
            <p>
              If the project is already up to date, I would ask the customer
              whether the issue can be reproduced locally or on Vercel only and
              if anything has changed since their last successful deployment.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-left">
            The customer from question 5 replies to your response with the
            below: “I’m so frustrated. I’ve been trying to make this work for
            hours and I just can’t figure it out. It must be a platform issue so
            just fix it for me instead of asking me questions.” Please write a
            follow-up reply to the customer.
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3">
            <p>Hello Melody,</p>
            <p>
              Thank you for your time answering my questions. I'm sorry to hear
              this issue has caused you such frustration.
            </p>
            <p>
              Unfortunately, based on the information provided, we are not able
              to determine whether the issue is caused by Vercel or your
              implementation.
            </p>
            <p>
              Would you be able to share a minimal reproduction for us to dig
              deeper into this issue?
            </p>
            <p>Many thanks.</p>
            <p>Regards,</p>
            <p>Amparo Beltran</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger className="text-left">
            A customer writes in to the Helpdesk asking "How do I do a redirect
            from the /blog path to https://example.com?" Please write a reply to
            the customer. Feel free to add any information about your decision
            making process after the reply.
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3">
            <p>Good morning Jack,</p>
            <p>Thank you for logging this ticket.</p>
            <p>
              Please find a snippet below with the code you need to add to your
              vercel.json file to redirect the /blog path to https://example.com
            </p>
            <pre>
              {JSON.stringify(
                {
                  redirects: [
                    {
                      source: "/blog/:path*",
                      destination: "https://example.com/:path*",
                    },
                  ],
                },
                null,
                2
              )}
            </pre>
            <p>
              In the following link, you can find the documentation related to
              your query:
            </p>
            <Link
              href={
                "https://vercel.com/docs/projects/project-configuration#redirects"
              }
              target="_blank"
              className="underline underline-offset-2"
            >
              https://vercel.com/docs/projects/project-configuration#redirects
            </Link>
            <p>I hope that helps.</p>
            <p>Regards,</p>
            <p>Amparo Beltran</p>
            <p className="font-medium p-4 border-t">
              To be able to reply to this customer, I searched for “redirect” on
              Vercel’s documentation, and found the link I gave to the customer.
              After reading it, I shared what I believe answers their query, and
              also gave them the link so they can refer to it in the future,
              should they have the same question again.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger className="text-left">
            A customer is creating a site and would like their project not to be
            indexed by search engines. Please write a reply to the customer.
            Feel free to add any information about your decision making process
            after the reply.
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3">
            <p>I had this situation with my last project.</p>
            <p>
              The following links are the steps I followed to find the solution
              for my client:
            </p>
            <Link
              href={
                "https://vercel.com/docs/deployments/preview-deployments#search-engine-indexing"
              }
              target="_blank"
              className="underline underline-offset-2"
            >
              https://vercel.com/docs/deployments/preview-deployments#search-engine-indexing
            </Link>
            <Link
              href={"https://vercel.com/docs/projects/project-configuration"}
              target="_blank"
              className="underline underline-offset-2"
            >
              https://vercel.com/docs/projects/project-configuration
            </Link>
            <Link
              href={
                "https://vercel.com/docs/projects/project-configuration#headers"
              }
              target="_blank"
              className="underline underline-offset-2"
            >
              https://vercel.com/docs/projects/project-configuration#headers
            </Link>
            <p>
              By adding the following snippet to the vercel.json file, I
              prevented my client's website from being indexed by search
              engines.
            </p>
            <pre>
              {JSON.stringify(
                {
                  headers: [
                    {
                      source: "/(.*)",
                      headers: [
                        {
                          key: "X-Robots-Tag",
                          value: "noindex",
                        },
                      ],
                    },
                  ],
                },
                null,
                2
              )}
            </pre>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger className="text-left">
            What do you think is one of the most common problems which customers
            ask Vercel for help with? How would you help customers overcome
            common problems, short-term and long-term?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3">
            <p>
              After looking at Vercel’s documentation and considering the amount
              of information about it. I believe that cache might be one of the
              most common problems.
            </p>
            <p>
              In the short-term, I would ensure common problems are properly
              documented, both internally and publicly, to ensure both support
              and customers are self-sufficient.
            </p>

            <p>
              In the long-term, I would escalate the problem to engineering for
              them to try to find a better solution for these.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-10">
          <AccordionTrigger className="text-left">
            How could we improve or alter this familiarisation exercise?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3">
            <p>
              I honestly don’t know. It’s my first time applying for a support
              position. I would say that this assessment is less time-consuming
              than others I did for Frontend development positions. I appreciate
              the time limit and consideration for the candidate's time.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
