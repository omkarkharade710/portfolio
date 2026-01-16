import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // ✅ Titles MUST exactly match constants.js
  const allowedProjects = [
    "CS Prep",
    "Movie Recommendation App",
    "Car Rental Platform",
    "AI Fitness Assistant",
    "Hotel Booking App",
    "E-Commerce App",
    "RAG AI Teaching Assistant",
    "House Price Prediction",
    "Sales Forecasting System",
    "Movie Recommendation System (ML)",
     "Credit Card Fraud Detection",
     "Visual Pattern Recognition Model",

  ];

  const filteredProjects = projects.filter((project) =>
    allowedProjects.includes(project.title)
  );

  return (
    <section
      id="work"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* ================= HEADING ================= */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-28 h-1 bg-purple-500 mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg">
          Full-Stack, MERN, AI & Machine Learning Applications
        </p>
      </div>

      {/* ================= PROJECT GRID ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="bg-gray-900 border border-gray-700 rounded-2xl cursor-pointer
                       hover:-translate-y-2 hover:shadow-purple-500/40
                       transition-all duration-300"
          >
            {/* IMAGE / PLACEHOLDER */}
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
            ) : (
              <div className="w-full h-48 flex items-center justify-center bg-black rounded-t-2xl">
                <span className="text-gray-400 text-sm">
                  No Preview Available
                </span>
              </div>
            )}

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] text-purple-400 text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= MODAL ================= */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">
          <div className="bg-gray-900 max-w-3xl w-full rounded-2xl relative shadow-2xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-5 text-3xl text-white hover:text-purple-500"
            >
              &times;
            </button>

            {selectedProject.image ? (
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-contain rounded-t-2xl bg-black"
              />
            ) : (
              <div className="w-full h-64 flex items-center justify-center bg-black rounded-t-2xl">
                <span className="text-gray-400">
                  No Preview Available
                </span>
              </div>
            )}

            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] text-purple-400 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
