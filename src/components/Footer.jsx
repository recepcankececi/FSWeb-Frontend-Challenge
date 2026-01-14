import { useApp } from '../context/AppContext';

const Footer = () => {
  const { data } = useApp();
  const { footer } = data;

  return (
    <footer className="bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex justify-between items-start mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {footer.title}
            </h2>
            <a
              href={`mailto:${footer.email}`}
              className="text-primary dark:text-purple-400 text-xl hover:underline"
            >
              👉 {footer.email}
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              className="text-gray-900 dark:text-white hover:text-primary dark:hover:text-purple-400 font-medium transition-colors"
            >
              {footer.links.blog}
            </a>
            <a
              href="#"
              className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium transition-colors"
            >
              {footer.links.github}
            </a>
            <a
              href="#"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
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
