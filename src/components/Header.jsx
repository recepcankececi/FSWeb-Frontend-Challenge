import { useApp } from '../context/AppContext';

const Header = () => {
  const { darkMode, language, toggleDarkMode, toggleLanguage } = useApp();

  return (
    <header className="bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex justify-end items-center gap-4 mb-6">
          <button
            onClick={toggleDarkMode}
            className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors"
          >
            <span className={`w-4 h-4 rounded-full ${darkMode ? 'bg-yellow-400' : 'bg-purple-600'}`}></span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {darkMode ? 'LIGHT MODE' : 'DARK MODE'}
            </span>
          </button>
          <span className="text-gray-400">|</span>
          <button
            onClick={toggleLanguage}
            className="text-primary dark:text-purple-400 font-medium hover:underline transition-colors"
          >
            <span className="uppercase">{language === 'tr' ? "TÜRKÇE'YE GEÇ" : "SWITCH TO ENGLISH"}</span>
          </button>
        </div>

        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold text-purple-600 dark:text-purple-400 inline-block" style={{ transform: 'rotate(15deg)' }}>A</span>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-purple-400 transition-colors font-medium">
              Skills
            </a>
            <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-purple-400 transition-colors font-medium">
              Projects
            </a>
            <button className="px-6 py-2 text-primary dark:text-purple-400 font-medium border-2 border-primary dark:border-purple-400 rounded-md hover:bg-primary hover:text-white dark:hover:bg-purple-600 transition-colors">
              Hire me
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
