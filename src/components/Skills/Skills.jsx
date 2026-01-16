import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

// DS & ML Libraries section
const dsMlSection = {
  title: "DS & ML Libraries",
  skills: [
    { name: "NumPy", logo: "/images/numpy.png" },
    { name: "Pandas", logo: "/images/pandas.png" },
    { name: "Matplotlib", logo: "/images/matplotlib.png" },
    { name: "Seaborn", logo: "/images/seaborn.png" },
    { name: "Scikit-learn", logo: "/images/scikit-learn.png" },
    { name: "TensorFlow", logo: "/images/tensorflow.png" },
    { name: "PyTorch", logo: "/images/pytorch.png" },
  ],
};

const Skills = () => {
  const allSections = [...SkillsInfo, dsMlSection];

  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-10 lg:px-16 font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg font-medium max-w-2xl mx-auto">
          A collection of my technical skills and expertise honed through various projects and experiences.
        </p>
      </div>

      {/* Skill Categories */}
      <div className="flex flex-wrap gap-6 justify-center">
        {allSections.map((category) => {
          let filteredSkills = [];

          // Backend: remove Spring Boot, add Flask
          if (category.title === "Backend") {
            filteredSkills = category.skills
              .filter(
                (skill) => skill.name.toLowerCase().replace(/\s+/g, "") !== "springboot"
              )
              .concat({ name: "Flask", logo: "/images/flask.png" });

          // Languages: remove TypeScript and C#
          } else if (category.title === "Languages") {
            filteredSkills = category.skills.filter(
              (skill) =>
                skill.name !== "TypeScript" &&
                skill.name !== "C#" &&
                skill.name.toLowerCase() !== "c-sharp"
            );

          // Other categories: rename Tailwind CSS to Tailwind, remove GSAP, Redux, SASS
          } else {
            filteredSkills = category.skills
              .map((skill) => {
                if (skill.name === "Tailwind CSS") return { ...skill, name: "Tailwind" };
                if (["GSAP", "Redux", "SASS"].includes(skill.name)) return null;
                return skill;
              })
              .filter(Boolean);
          }

          return (
            <div
              key={category.title}
              className="bg-gray-900 backdrop-blur-md px-6 sm:px-8 py-8 w-full sm:w-[48%] md:w-[45%] rounded-2xl border border-white/20 shadow-lg"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-6 text-center">
                {category.title}
              </h3>

              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.03}
                transitionSpeed={700}
                gyroscope={true}
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
                  {filteredSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center justify-center gap-2 h-20 px-3 sm:px-4 border border-gray-700 rounded-2xl bg-black/20 hover:border-purple-500 transition-all duration-300"
                    >
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                      />
                      <span className="text-xs sm:text-sm text-gray-300 text-center">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </Tilt>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
