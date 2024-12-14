const techStack = [
  "Java (8, 11, 17, 21)",
  "Spring Boot",
  "AWS EventBridge",
  "SQS",
  "S3",
  "AWS Lambda",
  "AWS ParameterStore",
  "MongoDB",
  "JUnit",
  "Git",
  "Maven",
  "Statsig",
  "Stripe",
  "Sendgrid",
  "OneSignal",
  "Datadog",
  "GraphQL",
  "Docker",
  "CloudFront",
  "AWS API Gateway",
  "Go",
  "Python",
  "ElastiCache",
  "Microservice",
];

export default function GrowthdayDetailPage() {
  return (
    <>
      <div className="grid grid-cols-1 gap-5 p-5">
        <div className="rounded shadow font-serif p-2 ">
          <div className="font-bold text-lg sm:text-sm lg:text-xl">
            Backend Developer
          </div>
          <div className="text-base sm:text-sm lg:text-base">
            GrowthDay (Startup)
          </div>
          <div>May 2021 - Jun 2024 (3 years 2 moonths)</div>
          <div>California, United States (Full-time - Remote)</div>
          <div className="pt-3">Tech stack</div>
          <div className="space-x-2 space-y-2">
            {techStack.map((tech) => (
              <div className="inline-block rounded shadow bg-black text-white px-1 py-1 text-xs sm:text-sm lg:text-sm">
                {tech}
              </div>
            ))}
          </div>
          <div className="pt-3">Related projects</div>
          <div className="space-x-2 space-y-2">
            <div className="inline-block rounded shadow bg-black text-white px-1 py-1 text-xs sm:text-sm lg:text-sm">
              GrowthDay Core Service
            </div>
            <div className="inline-block rounded shadow bg-black text-white px-1 py-1 text-xs sm:text-sm lg:text-sm">
              Notification Service
            </div>
            <div className="inline-block rounded shadow bg-black text-white px-1 py-1 text-xs sm:text-sm lg:text-sm">
              Signup APP
            </div>
          </div>
        </div>
        <div>
          <div className="font-bold">Primary responsibility:</div>
          <ul className="list-disc pl-5">
            <li> Preparing engineering design document for new feature</li>
            <li> Develop and maintain new and existing features</li>
            <li> Performance optimization</li>
            <li> Improve test coverage (unit and integration)</li>
            <li> Investigate production issues and fix bugs</li>
            <li>
              On-call engineering responsibility for the customer support team
            </li>
            <li> Collaborate with the product team and design team</li>
            <li> R&D on various concepts</li>
          </ul>
        </div>
        <div>
          <div className="font-bold">Mentionable achievements:</div>
          <ul className="list-disc pl-5">
            <li>
              Wrote an image resize lambda that reduced dashboard loading time
            </li>
            <li>
              Worked on various notification-related tasks that increased user
              interactions with our app. Our daily active users (DAU) increased
              by 5% due to focused push notifications to various users
            </li>
            <li>Worked on a number of design documents and implemented them</li>
            <li>
              Implemented analytics events for all signup and purchase events.
              It improves visibility into the user’s interaction with the app.
              It was easy to track upgrades, downgrades, trial conversions,
              cancellation reasons, etc
            </li>
            <li>
              Optimized webhook setup process for the marketing team. It
              simplifies the webhook setup for the marketing team
            </li>
            <li>
              Improved scheduler processing flow by grouping same-frequency
              events into a single SQS event. It reduced SQS events and reduced
              the AWS bill
            </li>
            <li>
              Worked on the backend portion of the new signup project. It
              improved performance and increased signup
            </li>
            <li>
              Implemented simplified version of the payment flow to improve
              performance and reduce the complexity of the flow. It increased
              paid users on GrowthDay
            </li>
            <li>
              Implemented auto thumbnail generation for profile images (S3)
            </li>
            <li>
              Upgraded backend project Java version to 21 and spring boot
              version to 3
            </li>
            <li>
              Refactored complex service classes to simplify and improve
              readability
            </li>
            <li>
              Automated common CS issue fixing that reduces on-call engineering
              time
            </li>
            <li>
              Worked on a notification microservice (event-driven) that
              delivered real-time and reminder notifications to users from
              different timezones.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
