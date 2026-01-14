import { useApp } from '../context/AppContext';

const Skills = () => {
  const { data } = useApp();
  const { skills } = data;

  return (
    <section id="skills" className="bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
          {skills.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.items.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-primary dark:text-purple-400 mb-4">
                {skill.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
