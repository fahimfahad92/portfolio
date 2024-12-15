import { ArrowOutwardIcon } from "@/app/components/icons/common-icons";

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

export default function GrowthDayCoreServiceDetailPage() {
  return (
    <>
      <div className="grid grid-cols-1 gap-5 p-5">
        <div className="rounded shadow font-serif p-2 ">
          <div className="font-bold text-lg sm:text-sm lg:text-xl">
            GrowthDay Core Service
          </div>
          <div className="text-base sm:text-sm lg:text-base">
            GrowthDay (Aug 2021 - Jun 2024)
          </div>
          <div className="pt-3">Tech stack</div>

          <div className="space-x-2 space-y-2">
            {techStack.map((tech) => (
              <div className="inline-block rounded shadow bg-black text-white px-1 py-1 text-xs sm:text-sm lg:text-sm">
                {tech}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap w-20 sm:w-10 md:w-16 lg:w-20 rounded shadow bg-slate-500 text-white px-2 py-1 mt-2 text-xs sm:text-sm">
            <a
              href="https://app.growthday.com/"
              target="_blank"
              className="hover:text-gray-300 flex items-center space-x-1"
            >
              <span>Demo</span>
              <ArrowOutwardIcon />
            </a>
          </div>
        </div>
        <div>
          GrowthDay is an all-in-one personal development platform. Strivers can
          write daily journals, create plans, set up goals, create different
          types of reminders, watch courses from various life coaches,
          participate in different types of challenges and many more. I worked
          as a backend developer.{" "}
        </div>
        <div>
          <div className="font-bold">Primary responsibility:</div>
          <ul className="list-disc pl-5">
            <li> Preparing engineering design document for new feature</li>
            <li> Develop and maintain new and existing features.</li>
            <li> Performance optimization</li>
            <li> Improve test coverage (unit and integration tests).</li>
            <li> Investigate production issues and fix bugs.</li>
            <li>
              On-call engineering responsibility for the customer support team.
            </li>
            <li> Collaborate with the product team and design team.</li>
            <li> R&D on various concepts.</li>
          </ul>
        </div>
        <div>
          <div className="font-bold">Mentionable achievements:</div>
          <ul className="list-disc pl-5">
            <li>
              Wrote an image resize lambda that reduced dashboard loading time.
            </li>
            <li>
              Worked on various notification-related tasks that increased user
              interactions with our app. Our daily active users (DAU) increased
              by 5% due to focused push notifications to various users.
            </li>
            <li>
              Implemented analytics events for all signup and purchase events.
              It improves visibility into the user’s interaction with the app.
              Also, the purchase flow. It was easy to track upgrades,
              downgrades, trial conversions, cancellation reasons.
            </li>
            <li> Optimized webhook setup process for the marketing team.</li>
            <li>
              Upgraded backend project Java version to 21 and spring boot
              version to 3.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
