import { useApp } from '../context/AppContext';

const Projects = () => {
  const { data } = useApp();
  const { projects } = data;

  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12">
          {projects.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.items.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 relative flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="text-6xl">📱</div>';
                  }}
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary dark:text-purple-400 mb-3">
                  {project.name}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white dark:bg-gray-800 text-primary dark:text-purple-400 text-xs rounded border-2 border-primary dark:border-purple-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={project.githubLink}
                    className="text-primary dark:text-purple-400 hover:underline font-medium"
                  >
                    Github
                  </a>
                  <a
                    href={project.viewSiteLink}
                    className="text-primary dark:text-purple-400 hover:underline font-medium"
                  >
                    View Site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
