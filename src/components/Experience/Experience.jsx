import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I am a fresher actively seeking internship and full-time opportunities
        </p>
      </div>

      {/* No Experience Card */}
      <div className="flex justify-center">
        <div className="max-w-xl w-full p-10 rounded-2xl border border-white bg-gray-900 shadow-[0_0_25px_2px_rgba(130,69,236,0.35)] text-center">
          <h3 className="text-2xl font-semibold text-white mb-4">
            No Professional Experience Yet
          </h3>

          <p className="text-gray-400 text-md leading-relaxed">
            I am a 3rd year Computer Engineering student with strong knowledge in
            Full Stack Web Development, Data Science, Machine Learning, and Deep
            Learning. Currently focused on building real-world projects and
            looking for opportunities to gain industry experience.
          </p>

          <div className="mt-6">
            <span className="inline-block bg-[#8245ec] text-white px-6 py-2 rounded-lg text-sm font-medium">
              Open to Internships & Entry-Level Roles
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
