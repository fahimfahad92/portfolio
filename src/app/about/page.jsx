import ProfileImageComponent from "../components/profile-component";

export default function AboutMePage() {
  return (
    <>
      <div className="flex items-center justify-center pt-20 pb-20">
        <div className="grid grid-cols-4 bg-gray-200 p-6 mx-40 rounded shadow">
          <div className="col-span-1 flex justify-center items-center">
            <div>
              <div>
                <ProfileImageComponent />
              </div>
              <div className="flex pt-5">
                <div className="rounded bg-black text-white flex justify-center items-center m-2 h-10 w-20">
                  SaaS
                </div>
                <div className="rounded bg-black text-white flex justify-center items-center m-2 h-10 w-20">
                  Startup
                </div>
                <div className="rounded bg-black text-white flex justify-center items-center m-2 h-10 w-20">
                  Fintech
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 pl-5 space-y-3">
            <h2 className="flex justify-center">Sayed MD Fahim Fahad</h2>
            <h3 className="flex justify-center">Software Engineer</h3>
            <p>
              Hello, I am Sayed MD Fahim Fahad, a software engineer with 8 years
              of professional experience. I have contributed to projects in the
              fintech and life coaching industries, working with two startups
              from the very beginning. Both projects were successfully launched
              and gained active users. I love working on SaaS products. 
            </p>
            <p>
              My expertise lies in Java, Spring Boot, and various AWS services.
              I am also proficient in frontend technologies like React and
              Next.js, allowing me to contribute to both backend and full-stack
              development.
            </p>
            <p>
              I have extensive experience in developing microservices, building
              projects from scratch, and designing scalable systems. I am good
              at debugging production issues and proficient in root cause
              analysis.
            </p>
            <p>
              Additionally, I have worked with various databases, including
              Oracle, PostgreSQL, MongoDB, and Elasticsearch, and I am skilled
              in SQL for database management and optimization.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
