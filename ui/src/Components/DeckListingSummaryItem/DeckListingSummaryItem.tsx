import { Deck } from "../../Types/Deck"
import { countCardAffinities, countCardTypes } from "../../Utils";
import { useStyles } from './styles';

export type DeckListingSummaryItemProps = {
  deck: Deck,
}

export const DeckListingSummaryItem = (props: DeckListingSummaryItemProps) => {
  const styles = useStyles();
  const { deck } = props;
  const [firstCard] = deck.cards;
  const preferredCleanerName = deck.preferredCleaner.name;

  const totalBrawn = countCardAffinities(deck, 'BRAWN');
  const totalDiscipline = countCardAffinities(deck, 'DISCIPLINE');
  const totalFortune = countCardAffinities(deck, 'FORTUNE');
  const totalReflex = countCardAffinities(deck, 'REFLEX');

  return (
    <div className={styles.summaryItemCardContainer}>
      <section className={styles.summaryItemCardName}>
        {deck.name.toLocaleUpperCase()}
      </section>
        
      <section className={styles.summaryItemCardImageContainer}>
        <div>
          <img src={`images/cleanerCards/${preferredCleanerName}.png`} alt={`Deck preferred cleaner: ${preferredCleanerName}`} title={preferredCleanerName}/>
        </div>
        <div>
          <img src={`images/cards/${firstCard.cardId}.png`} alt={`Deck first card: ${firstCard.name}`} title={firstCard.name}/>
        </div>
      </section>

      <section className={styles.cardSummaryContainer}>
        <div className={styles.preferredCleanerName}>
          Preffered Cleaner: <span>{preferredCleanerName}</span>
        </div>
        <ul className={styles.cardAffinitySummaryContainer}>
          <li>
            <img src='images/icons/affinityBrawn.webp' alt='brawn-icon' title={`Brawn (${totalBrawn})`}/>
            {totalBrawn}
          </li>
          <li>
            <img src='images/icons/affinityDiscipline.webp' alt='discipline-icon' title={`Discipline (${totalDiscipline})`}/>
            {totalDiscipline}
          </li>
          <li>
            <img src='images/icons/affinityFortune.webp' alt='fortune-icons' title={`Fortune (${totalFortune})`}/>
            {totalFortune}
          </li>
          <li>
            <img src='images/icons/affinityReflex.webp' alt='reflect-icon' title={`Reflex (${totalReflex})`}/>
            {totalReflex}
          </li>
        </ul>
        <div className={styles.deckDescription}>
          Lorem Ipsum: Description of the deck, E.g. This deck works great if you have a balanced team with a support and ammo mule.
          Lorem Ipsum: Description of the deck, E.g. This deck works great if you have a balanced team with a support and ammo mule.
        </div>
      </section>
    </div>
  )
}