import React, { useState } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [shouldRotate, setShouldRotate] = useState<boolean>(false);

  const backgroundVariant = {
    hidden: {
      backgroundColor: '#FDFDFD',
    },
    visible: {
      backgroundColor: '#1C1C1C',
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  const titleDivVariant = {
    hidden: {
      color: '#1C1C1C',
    },
    visible: {
      color: '#FDFDFD',
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };

  const svgVariant = {
    hidden: {
      x: -1920,
    },
    visible: {
      x: 0,
      transition: {
        duration: 1,
        type: 'spring',
      },
    },
  };

  const rotateVariant = {
    rotate: {
      rotate: shouldRotate ? 360 : 0,
      transition: {
        duration: 0.6,
        type: 'spring',
      },
    },
  };

  return (
    <motion.div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
      }}
      variants={backgroundVariant}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={titleDivVariant}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 animate={{
          y: [0, -20, 0],
          transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        >
          {' '}
          Click or Hover the logo!

        </motion.h1>
      </motion.div>

      <motion.div
        variants={svgVariant}
        initial="hidden"
        animate="visible"
      >
        <motion.svg
          variants={rotateVariant}
          animate="rotate"
          onTap={() => setShouldRotate(!shouldRotate)}
          whileTap={{
            scale: 0.9,
          }}
          whileHover={{
            scale: 1.2,
          }}
          style={{ cursor: 'pointer' }}
          width="208"
          height="208"
          viewBox="0 0 208 208"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M128.005 47.9981C101.497 47.9981 48.3986 26.5093 48.3986 0H48.0061C48.0061 21.2168 56.4342 41.5646 71.4365 56.5674C86.4387 71.5702 106.786 79.9991 128.003 79.9999C140.733 79.9999 152.942 85.0569 161.944 94.0585C170.946 103.06 176.003 115.269 176.003 127.999C176.006 140.729 170.951 152.94 161.951 161.943C152.951 170.947 140.743 176.006 128.013 176.009C115.282 176.011 103.072 170.956 94.0685 161.956C85.065 152.956 80.0054 140.748 80.0029 128.018C80.0026 117.512 77.9331 107.109 73.9124 97.4033C69.8917 87.6973 63.9987 78.8782 56.5697 71.4497C49.1407 64.0212 40.3214 58.1287 30.6151 54.1086C20.9089 50.0886 10.5058 48.0197 0 48.0201V48.4095C26.5043 48.4095 47.9932 101.485 48.0031 127.998H47.9981C47.998 143.821 52.6896 159.288 61.4798 172.444C70.2701 185.6 82.7641 195.854 97.382 201.909C112 207.965 128.085 209.55 143.604 206.463C159.122 203.377 173.377 195.758 184.566 184.571C195.754 173.383 203.374 159.129 206.462 143.61C209.55 128.092 207.966 112.007 201.912 97.3884C195.858 82.77 185.605 70.2751 172.45 61.4837C159.294 52.6923 143.827 47.9993 128.005 47.9981Z" fill="url(#paint0_linear_12_4)" />
          <defs>
            <linearGradient id="paint0_linear_12_4" x1="165.776" y1="179.92" x2="44.928" y2="13.936" gradientUnits="userSpaceOnUse">
              <stop offset="0.295" stopColor="#E73959" />
              <stop offset="0.384" stopColor="#E73D58" />
              <stop offset="0.477" stopColor="#E74955" />
              <stop offset="0.571" stopColor="#E95E51" />
              <stop offset="0.666" stopColor="#EA7B4B" />
              <stop offset="0.761" stopColor="#EDA044" />
              <stop offset="0.857" stopColor="#EFCE3B" />
              <stop offset="0.868" stopColor="#F0D43A" />
            </linearGradient>
          </defs>
        </motion.svg>
      </motion.div>

    </motion.div>
  );
}

export default App;
