import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  offer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 120,
  },

  advantages: {
    width: 1232,
    maxWidth:1232,
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    margin: '0 auto 110px',
  },
 
  icons: {
    textAlign: 'center',
  },

  iconsIcon: {
    aspectRatio: '1 / 1',
    marginBottom: 42,
    maxWidth: 100,
  },

  description: {
    fontSize: 24,
    fontWeight: 400,
    color: 'var(--main-text)',
  },
}, {name:'Adv', index:2 });
