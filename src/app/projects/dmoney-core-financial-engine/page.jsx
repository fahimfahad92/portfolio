import { ArrowOutwardIcon } from "@/app/components/icons/common-icons";

const techStack = [
  "Java",
  "Spring Boot",
  "Oracle",
  "Gradle",
  "Gitlab",
  "Jenkins",
  "Microservice",
  "Spring data Jpa",
  "Git",
];

export default function DmoneyCoreFinancialEngineDetailPage() {
  return (
    <>
      <div className="grid grid-cols-1 gap-5 p-5">
        <div className="rounded shadow font-serif p-2 ">
          <div className="font-bold text-lg sm:text-sm lg:text-xl">
            Dmoney Financial App
          </div>
          <div className="text-base sm:text-sm lg:text-base">
            DMoney Bangladesh Ltd. (May 2017 - Jan 2020)
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
              href="https://www.dmoney.com.bd/"
              target="_blank"
              className="hover:text-gray-300 flex items-center space-x-1"
            >
              <span>Demo</span>
              <ArrowOutwardIcon />
            </a>
          </div>
        </div>
        <div>
          Dmoney is a platform for digital payments. Users can make online
          payments. I worked as a backend developer.
        </div>
        <div>
          <div className="font-bold">Primary responsibility:</div>
          <ul className="list-disc pl-5">
            <li> Back-end service development and architecture design.</li>
            <li> Third party api integration</li>
            <li> Load testing</li>
          </ul>
        </div>
        <div>
          <div className="font-bold">Mentionable achievements:</div>
          <ul className="list-disc pl-5">
            <li>
              Managed 6 microservices that were directly involved in payment and
              notification.
            </li>
            <li>
              Perform regular load tests to maintain the integrity of the
              system.
            </li>
            <li> Database migration for optimizing the payment flow</li>
          </ul>
        </div>
      </div>
    </>
  );
}
