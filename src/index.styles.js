import { createUseStyles } from 'react-jss';

export const generalBlue='#3077c6',
      bgColor='#eaf0f9',
      animationColor= '#f5bd41',
      mainText= '#383838';

export const useIndexStyles = createUseStyles({
  '@import': 'url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap)',

  '@global': {
    body: {
      margin: 0,
      boxSizing: 'border-box',
    },
    
  },

  html: {
    fontFamily: 'Roboto, sans-serif',
  },

  sprite: {
    display: 'none',
  },

  a: {
    textDecoration: 'none',
  },

  '@keyframes width': {
    from: { width: 0 },
    to: { width: 100 },
  },

  sectionTitle: {
    position: 'relative',
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 500,
    margin: '0 auto 106px',
    color: mainText,
    
    '&:hover:before': {
      position: 'absolute',
      content: '""',
      width: 100,
      borderBottom: `7px solid ${animationColor}`,
      top: '140%',
      left: '50%',
      color: animationColor,
      transform: 'translateX(-50%)',
      animation: '$width 300ms ease-in-out',
    },
  },

  

  colLg1: {
    width: 'calc(100% / 14)',
  },

  colLg2: {
    width: ' calc(100% / 14 * 2)',
  },
  colLg3: {
    width: 'calc(100% / 14 * 3)',
  },
  colLg4: {
    width: 'calc(100% / 14 * 4)',
  },
  colLg5: {
    width: 'calc(100% / 14 * 5)',
  },
  colLg6: {
    width: 'calc(100% / 14 * 6)',
  },
  colLg7: {
    width: '50%',
  },
  colLg8: {
    width: 'calc(100% / 14 * 8)',
  },
  colLg9: {
    width: 'calc(100% / 14 * 9)',
  },
  colLg10: {
    width: 'calc(100% / 14 * 10)',
  },
  colLg11: {
    width: 'calc(100% / 14 * 11)',
  },
  colLg12: {
    width: ' calc(100% / 14 * 12)',
  },
  colLg13: {
    width: 'calc(100% / 14 * 13)',
  },
  colLg14: {
    width: '100%',
  },
});

// import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

// * {
//   margin: 0;
//   box-sizing: border-box;
// }
