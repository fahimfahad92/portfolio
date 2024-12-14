const techStack = [
  "Java",
  "Spring Boot",
  "Oracle",
  "Gradle",
  "Gitlab",
  "Jenkins",
  "Microservice",
];

export default function DmoneyDetailPage() {
  return (
    <>
      <div className="grid grid-cols-1 gap-5 p-5">
        <div className="rounded shadow font-serif p-2">
          <div className="font-bold text-lg sm:text-sm lg:text-xl">
            Software Engineer
          </div>
          <div className="text-base sm:text-sm lg:text-base">
            DMoney Bangladesh Ltd. (Startup, Fintech)
          </div>
          <div>May 2017 - Jan 2020 (2 years 9 moonths)</div>
          <div>Dhaka, Bangladesh (Full-time - On-site)</div>
          <div className="pt-3">Tech stack</div>
          <div className="space-x-2">
            {techStack.map((tech) => (
              <div className="inline-block rounded shadow bg-black text-white px-1 py-1 text-xs sm:text-sm lg:text-sm">
                {tech}
              </div>
            ))}
          </div>
          <div className="pt-3">Related projects</div>
          <div className="space-x-2 space-y-2">
            <div className="inline-block rounded shadow bg-black text-white px-1 py-1 text-xs sm:text-sm lg:text-sm">
              DMoney Core Financial Engine
            </div>
            <div className="inline-block rounded shadow bg-black text-white px-1 py-1 text-xs sm:text-sm lg:text-sm">
              Notification Service
            </div>
            <div className="inline-block rounded shadow bg-black text-white px-1 py-1 text-xs sm:text-sm lg:text-sm">
              External Payment Gateway
            </div>
            <div className="inline-block rounded shadow bg-black text-white px-1 py-1 text-xs sm:text-sm lg:text-sm">
              User Management Service
            </div>
          </div>
        </div>
        <div>
          Dmoney is a platform for digital payments. It was a startup. Dmoney
          APP enables users to make online payments, send money to another
          wallet, pay different bills, and top up their mobile topup.
        </div>
        <div>
          <div className="font-bold">Primary responsibility:</div>
          <ul className="list-disc pl-5">
            <li> Backend service development and architecture design.</li>
            <li> New feature development and bug fixing</li>
            <li> Integrated third party APIs</li>
            <li> Load testing and performance improvement</li>
          </ul>
        </div>
        <div>
          <div className="font-bold">Mentionable achievements:</div>
          <ul className="list-disc pl-5">
            <li>
              Developed user management service and notification service from
              scratch.
            </li>
            <li> Integrated different biller apis, top up api.</li>
            <li>
              Managed 6 microservices that were directly involved in payment and
              notification.
            </li>
            <li>
              Performed regular load tests to maintain the system's performance.
            </li>
            <li> Migrated database for optimizing the payment flow.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
