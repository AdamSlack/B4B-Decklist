import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  summaryItemCardContainer: {
    padding: '1em',
    display: 'flex',
    flexWrap: 'wrap',
    background: 'rgb(18, 18, 18)',
    color: 'rgb(255, 255, 255)',
    maxWidth: '20em',
    minWidth: '20em',
    height: '28em',
    margin: '1em',
    borderRadius: '3%',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
    textOverflow: 'ellipsis',
  },
  summaryItemCardName: {
    color: 'rgba(255, 255, 255, 0.7)',
    width: '100%',
    fontSize: '1.5em',
    textAlign: 'center',
  },
  summaryItemCardImageContainer: {
    width: '10em',

    '& img': {
      margin: '0.5em',
      width: '75%',
    }
  },
  cardSummaryContainer: {
    width: '10em',
  },
  preferredCleanerName: {
    color: 'rgba(255, 255, 255, 0.7)',
    '& span': {
      color: 'white',
      textTransform: 'capitalize',
      display: 'block',
      fontSize: '1.5em'
    },
  },
  cardTypeSummaryContainer: {},
  cardAffinitySummaryContainer: {
    listStyle: 'none',
    margin: '0',
    padding: '1em 0',
    '& li': {
      padding: '0.25em 0',
      width: '4em',
      display: 'flex',
      justifyContent: 'space-between',
      '& img': {
        maxWidth: '1.5em',
        maxHeight: '1.5em',
        padding: '0 1em 0 0',
      }
    },
  },
  deckDescription: {
    height: '11em',
    textOverflow: 'ellipsis',
    overflow: 'scroll',
    scrollbarWidth: 'thin',
  }
});