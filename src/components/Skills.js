import React from "react";

const skills = [
  { name: "HTML", icon: "📄" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "Tailwind CSS", icon: "💨" },
  { name: "Communication", icon: "💬" },
  { name: "Teamwork", icon: "🤝" },
  { name: "Leadership", icon: "🌟" },
  { name: "Creativity", icon: "🎭" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-white text-gray-800 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <span className="text-4xl">{skill.icon}</span>
              <p className="ml-4 text-xl font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
