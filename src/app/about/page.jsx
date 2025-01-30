import ProfileImageComponent from "../components/profile-component";

export const metadata = {
  title: "Sayed MD Fahim Fahad",
  description: "Software Engineer @ Toptal",
};

export default function AboutMePage() {
  return (
    <div className="flex items-center justify-center py-20 px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 bg-gray-100 p-8 mx-5 md:mx-20 lg:mx-40 rounded-xl shadow-lg gap-6">
        {/* Profile Image & Tags Section */}
        <div className="flex flex-col items-center col-span-1 space-y-4">
          <ProfileImageComponent />
          <div className="flex flex-wrap justify-center gap-2">
            {["SaaS", "Startup", "Fintech"].map((tag) => (
              <div
                key={tag}
                className="rounded-lg bg-black text-white flex justify-center items-center h-10 px-4 text-sm font-medium shadow"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Bio Section */}
        <div className="col-span-3 space-y-4 text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-900">
            Sayed MD Fahim Fahad
          </h2>
          <h3 className="text-lg font-semibold text-gray-700">
            Software Engineer
          </h3>

          <p className="text-gray-700">
            Hello, I am Sayed MD Fahim Fahad, a software engineer with 8 years
            of experience. I have contributed to fintech and life coaching
            projects, working with startups from inception. Both projects
            successfully launched and gained active users. I love building SaaS
            products.
          </p>

          <p className="text-gray-700">
            My expertise lies in Java, Spring Boot, and AWS services. I am also
            proficient in frontend technologies like React and Next.js, allowing
            me to contribute across the stack.
          </p>

          <p className="text-gray-700">
            I specialize in microservices, architecting scalable systems, and
            debugging production issues with strong root cause analysis skills.
          </p>

          <p className="text-gray-700">
            Additionally, I have experience with databases like Oracle,
            PostgreSQL, MongoDB, and Elasticsearch, and I am skilled in SQL for
            database management and optimization.
          </p>
        </div>
      </div>
    </div>
  );
}
