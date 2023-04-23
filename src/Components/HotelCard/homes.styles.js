import { createUseStyles } from 'react-jss';
import { bgColor, generalBlue } from '../../index.styles';

export const useHomesStyles = createUseStyles({
  homes: {
    backgroundColor: bgColor,
    paddingTop: 120,
    paddingBottom: 120,
    
  },
  
  examples: {
    position: 'relative',
    maxWidth: 1232,
    gap: 16,
    display: 'flex',
    justifyContent: 'center',
    margin: '106px auto 0',
    flexWrap: 'wrap',
  },

  examplesIcons:{
    width: 296,
    margin: '0 auto',
    overflow: 'hidden',
  },

  examplesIcon:{
    width: '100%',
    aspectRratio: '1/1',
    transition: '0.5s',

    '&:hover':{
      scale: 1.1,
    },
  },

  description:{
    height: 120,
  },

  descriptionText: {
    marginTop: 20,
    fontFamily: 'Roboto, sans-serif',
    fontSize: 24,
    fontWeight: 400,
    color: generalBlue,

    '&:last-of-type':{
      color: '#bfbfbf',
    },
  },

});





