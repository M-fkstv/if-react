import { createUseStyles } from 'react-jss';
import { generalWhite } from '../../index.styles';

export const useTopSectionStyles = createUseStyles({
  wrapper: {
    background: 'url("../Icons/castelmezzano-1979546 1.jpg")',
    backgroundSize: 'cover',
    height: 900,
    minHeight: '100vh',
  },

  main: {
    margin: '0 auto',
    paddingTop: 50,
    maxWidth: 1232,
  },

  titleText: {
    font: {
      weight: 500,
      size: 50,
    },
    color: `${generalWhite}`,
    margin: {
      top: 200,
      bottom: 145,
    },
  },

  apps: {
    display: 'flex',
    width: 270,
    justifyContent: 'space-between',
    margin: '120px auto',
  },
});
