import { useApp } from '../context/AppContext';

const Footer = () => {
  const { data } = useApp();
  const { footer } = data;

  return (
    <footer className="bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 py-16">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 mb-12">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 break-words">
              {footer.title}
            </h2>
            <a
              href={`mailto:${footer.email}`}
              className="text-primary dark:text-purple-400 text-lg sm:text-xl hover:underline break-all"
            >
              👉 {footer.email}
            </a>
          </div>

          <div className="flex flex-wrap gap-4 lg:gap-6">
            <a
              href="#"
              className="text-gray-900 dark:text-white hover:text-primary dark:hover:text-purple-400 font-medium transition-colors whitespace-nowrap"
            >
              {footer.links.blog}
            </a>
            <a
              href="#"
              className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium transition-colors whitespace-nowrap"
            >
              {footer.links.github}
            </a>
            <a
              href="#"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors whitespace-nowrap"
            >
              {footer.links.linkedin}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
