export const metadata = {
  title: "Education",
  description: "Fahim Fahad",
};

export default function EducationPage() {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 p-5">
        <div className="bg-gray-200 rounded shadow font-serif p-2 flex flex-col space-y-4">
          <div className="font-bold">
            Jahangirnagar University । জাহাঙ্গীরনগর বিশ্ববিদ্যালয়
          </div>
          <div className="font-bold">
            Master of Science (MSc), Computer Science and Engineering
          </div>
          <div>Session: 2015 - 2016</div>
          <div>CGPA: 3.95</div>
          <div>Position: 1st</div>
          <div className="bg-gray-200 rounded shadow font-serif p-2 flex flex-col space-y-4 relative">
            <div className="font-bold">Publication</div>
            <div className="font-bold">
              Cloud-Based Solution for Improvement of Response Time of MySQL
              RDBMS
            </div>
            <div>IEEE · Feb 23, 2017</div>
            <div>
              MySQL is an open-source very popular RDBMS to store and manage
              data. But it faces difficulties of prolonged response time to
              handle big data. On the other hand, cloud is a perfect solution
              for managing and querying big data but it is not suitable to
              process small data due to delayed response time. In this paper, we
              propose a cloud-based solution that will improve response time and
              performance of the system to handle big as well small data. We
              combine MySQL and cloud to store and manage all the data. We also
              focus on migration of data between MySQL and cloud. It is found
              that the proposed solution performs better than the only MySQL
              solution.
            </div>
            <a
              href="https://ieeexplore.ieee.org/document/7860329"
              target="_blank"
            >
              <div className="flex flex-wrap w-20 sm:w-20 md:w-44 lg:w-44 rounded shadow bg-slate-500 text-white px-2 py-1 text-xs sm:text-sm">
                View On publication site
              </div>
            </a>
          </div>
        </div>
        <div className="bg-gray-200 rounded shadow font-serif p-2 flex flex-col space-y-4">
          <div className="font-bold">
            Jahangirnagar University । জাহাঙ্গীরনগর বিশ্ববিদ্যালয়
          </div>
          <div className="font-bold">
            Bachelor of Science (BSc), Computer Science and Engineering
          </div>
          <div>Session: 2010 - 2014</div>
          <div>CGPA: 3.79</div>
          <div>Position: 1st</div>

          <div className="bg-gray-200 rounded shadow font-serif p-2 flex flex-col space-y-4">
            <div className="font-bold">Publication</div>
            <div className="font-bold">
              Reform Based Version Management System for XML Data
            </div>
            <div>
              International Journal of Computer and Information Technology · Nov
              15, 2014
            </div>
            <div>
              The paper is based on version control system that uses reform
              operation and a specific naming process to maintain all the
              version for XML data. Forward deltas are used to generate a
              complete version. A specific version number is used to perform
              reform operation and all the mathematical operations are dependent
              on this "specific version" number. This will fasten the search
              when we will search for the older versions of the syllabus and
              make the response time even more predictable.
            </div>
            <a
              href="https://www.ijcit.com/archives/volume3/issue6/Paper030618.pdf"
              target="_blank"
            >
              <div className="flex flex-wrap w-20 sm:w-20 md:w-44 lg:w-44 rounded shadow bg-slate-500 text-white px-2 py-1 text-xs sm:text-sm">
                View On publication site
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
