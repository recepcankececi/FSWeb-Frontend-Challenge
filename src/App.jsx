import { useEffect } from 'react';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendDataToAPI } from './services/api';

function App() {
  useEffect(() => {
    const sendInitialData = async () => {
      try {
        await sendDataToAPI({
          message: 'Portfolio loaded',
          timestamp: new Date().toISOString()
        });
      } catch (error) {
        console.error('Failed to send data:', error);
      }
    };

    sendInitialData();
  }, []);

  return (
    <AppProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Header />
        <Hero />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </AppProvider>
  );
}

export default App;
