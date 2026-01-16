import React from "react";

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Engineering (Computer Engineering)",
      school: "JSPM’s Jayawantrao Sawant College of Engineering, Hadapsar",
      date: "2023 – 2027",
      grade: "CGPA: 9 / 10",
      desc: "Currently pursuing a Bachelor’s degree in Computer Engineering with a strong academic record. Developing expertise in data structures, algorithms, full stack web development, machine learning, deep learning, database systems, and software engineering through rigorous coursework and practical projects.",
      img: "/images/jscoe.png",
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate (11th & 12th) – PCMB",
      school:
        "L. N. Junior College, Jamkhed, Ahmednagar (Maharashtra State Board)",
      date: "2022 – 2023",
      grade: "72%",
      desc: "Completed Higher Secondary education in the PCMB stream, gaining strong analytical and problem-solving skills in Physics, Chemistry, Mathematics, and Biology. This academic phase laid the foundation for engineering and technical studies.",
      img: "/images/ln_junior_college.png",
    },
    {
      id: 3,
      degree: "Secondary School Certificate (10th – SSC)",
      school:
        "L. N. Hoshing School, Jamkhed, Ahmednagar (Maharashtra State Board)",
      date: "2020 – 2021",
      grade: "84%",
      desc: "Successfully completed SSC with excellent academic performance. Built a strong foundation in mathematics, science, and core subjects, reflecting consistency, discipline, and academic dedication.",
      img: "/images/ln_hoshing_school.png",
    },
  ];

  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Academic background and educational milestones
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Circle (College Logo) */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-900 border-4 border-[#8245ec] w-14 h-14 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
            </div>

            {/* Content Card */}
            <div className="w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
              sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105"
            >
              <div className="flex items-center space-x-6">
                {/* Logo */}
                <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm text-gray-300">{edu.school}</h4>
                  <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-400 font-bold">
                Grade: {edu.grade}
              </p>
              <p className="mt-2 text-gray-400 leading-relaxed">
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
