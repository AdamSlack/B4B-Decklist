import { createUseStyles } from 'react-jss';

const links = {
  '& a': {
    color: 'white',
    textDecoration: 'none',
    transition: '0.2s',
    '&:hover, &:visited:hover': {
      color: 'rgb(166,16,30)',
    },
    '&:visited': {
      color: 'white',
    }
  },
};

// backgroundColor: 'rgba(255, 255, 255, 0.7)',
export const useStyles = createUseStyles({
  header: {
    width: '100%',
    backgroundColor: 'rgb(18, 18, 18)',
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '2em',
    padding: '0.5em',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
    ...links
  },
  mainBody: {
    display: 'flex',
    height: '100%',
  },
  nav: {
    width: '20em',
    maxWidth: '20em',
    minWidth: '20em',
    backgroundColor: 'rgb(18, 18, 18)',
    ...links,
    '& ul': {
      listStyle: 'none',
      padding: '0',
      margin: '0',
      display: 'flex',
      flexWrap: 'wrap',
      '& a': {
        margin: '0 1em',
        padding: '1em 0',
        width: '100%',
        '&:hover, &:visited:hover': {
          fontSize: '1.25em'
        },
      },
    },
  },
  mainContent: {
  },
  '@media (max-width: 1200px)': {
    mainBody: {
      flexDirection: 'column',
    },
    nav: {
      width: '100%',
      backgroundColor: 'rgb(18, 18, 18)',
      boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
      maxWidth: '100%',
      '& ul': {
        justifyContent: 'space-between',
        '& a': {
          textAlign: 'center',
          width: '25%',
          padding: '1em 0',
          margin: '0',
          '&:hover, &:visited:hover': {
            fontSize: '1em',
            fontWeight: 'bold'
          },
        },
      },
    }
  },
});