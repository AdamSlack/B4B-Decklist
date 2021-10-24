import { Card } from "../Types/Card"
import { Deck } from "../Types/Deck"

export const countCardTypes = (deck: Deck, typeToCount: Card['type']) => {
  return deck.cards.reduce((acc, { type }) => acc + (type === typeToCount ? 1 : 0) ,0)
}

export const countCardAffinities = (deck: Deck, affinityToCount: Card['affinity']) => {
  return deck.cards.reduce((acc, { affinity }) => acc + (affinity === affinityToCount ? 1 : 0) ,0)
}