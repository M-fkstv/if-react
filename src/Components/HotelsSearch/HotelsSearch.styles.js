import { createUseStyles } from 'react-jss';
import { animationColor, generalWhite } from '../../index.styles';

export const useSearchStyles = createUseStyles({

  magnifier: {
    display: 'none',
    height: 16,
    width: 16,
  },

  city: {
    position: 'relative',
    display: 'flex',
    width: '37.85%',
  },

  citySearch: {
    position: 'relative',
    width: '100%',
    paddingLeft: 8,

    '&$inputStyle':{
      border: 0,
      borderRadius: 8,
      fontWeight: 400,
      fontSize: 18,
      height: 59,
    },
    
    '&:focus-visible':{
      backgroundColor:`${generalWhite}`,
      outline: `3px solid ${animationColor}`,
      border: 0,
    },

    '&:selected':{
      backgroundColor:`${generalWhite}`,
    },
    

  },

  cityLabel: {
    position: 'absolute',
    top: -50,
    left: 20,
    composes: '$label',
  },
  
  label: {
    fontSize: 18,
    color:`${generalWhite}`,
  },
});

