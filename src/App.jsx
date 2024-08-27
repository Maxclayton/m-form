import { useState, useEffect } from 'react';
import FormItems from './components/Form';
import './App.css';
import { motion } from "framer-motion";

function App() {
  const changingTexts = ['cool', 'great', 'the best'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % changingTexts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [changingTexts.length]);

  return (
    <>
      <div className='app-container'>
        <motion.div
          initial={{ y: -200, scale: 0 }}
          animate={{ y: 0, scale: 1 }}>
          <img
            src='https://media.licdn.com/dms/image/v2/D560BAQH1VMt-sVyrpw/company-logo_200_200/company-logo_200_200/0/1715283797157/motivosity_logo?e=1732752000&v=beta&t=6Mgnbjc1_CSBKXGMQ-VJJk8n_In9rWX7PRDrH3LN0gU'
            className='logo-img'
          />
        </motion.div>
        <motion.div
          initial={{ y: -50, scale: 0 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ delay: .15 }}
        >
          <img
            src='https://www.motivosity.com/static/cae2ad014aaa8ad77fa8649fcc49cf2f/f5a82/hero.webp'
            className='hero-img' />
        </motion.div>
        <motion.div
          initial={{ y: -50, scale: 0 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ delay: .25 }}
        >
          <div className='headline'>
            <h1>Motivosity is</h1>
            <motion.div
              key={currentIndex}
              className='changing-text'
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50 }}
              transition={{ duration: 0.3 }}
            >
              {changingTexts[currentIndex]}
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: -50, scale: 0 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ delay: .35 }}>
          <FormItems />
        </motion.div>
      </div>
    </>
  );
}

export default App;
