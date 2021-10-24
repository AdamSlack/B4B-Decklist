import { Deck } from "../../Types/Deck";
import { DeckListingSummaryItem } from "../DeckListingSummaryItem";
import { useStyles } from './styles';

export type DeckListingProps = {
  decks: Deck[],
}
export const DeckListing = (props: DeckListingProps) => {
  const styles = useStyles();

  const { decks } = props;
  return (
    <div className={styles.deckListingContainer}>
     {decks.map((deck) => <DeckListingSummaryItem deck={deck} />)}
    </div>
  );
};