import { Card } from "./Card";
import { Cleaner } from "./Cleaner";

export type DeckCard = Card & { isCore: boolean };

export type Deck = {
  name: string;
  id: string;
  cards: Array<DeckCard>;
  preferredCleaner: Cleaner;
};