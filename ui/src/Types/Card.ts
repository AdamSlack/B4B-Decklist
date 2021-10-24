import { CardEffect } from "./CardEffect";

export type Card = {
  name: string;
  cardId: string;
  type: 'OFFENSE' | 'DEFENCE' | 'UTILITY' | 'MOBILITY';
  affinity: 'FORTUNE' | 'REFLEX' | 'DISCIPLINE' | 'BRAWN';
  effects: CardEffect[];
};