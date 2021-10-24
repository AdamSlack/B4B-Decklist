import { DeckListing } from "./Components/DeckListing/DeckListing";
import { Deck, DeckCard } from "./Types/Deck";


const testDisciplineCard: DeckCard = {
  name: 'Antibiotic Ointment',
  cardId: 'antibioticOintment',
  type: 'DEFENCE',
  affinity: 'DISCIPLINE',
  effects: [],
  isCore: true,
};

const testBrawnCard: DeckCard = {
  name: 'Batter Up',
  cardId: 'batterUp',
  type: 'OFFENSE',
  affinity: 'BRAWN',
  effects: [],
  isCore: true,
}

const testReflexCard: DeckCard = {
  name: 'Adrenaline Fueled',
  cardId: 'adrenalineFueled',
  type: 'OFFENSE',
  affinity: 'REFLEX',
  effects: [],
  isCore: false,
}

const testFortuneCard: DeckCard = {
  name: 'Admin Reload',
  cardId: 'adminReload',
  type: 'UTILITY',
  affinity: 'FORTUNE',
  effects: [],
  isCore: false,
}

const decks: Deck[] = [
  {
    name: 'Demo Discipline Deck',
    id: '1',
    cards: [ testDisciplineCard, testDisciplineCard, testBrawnCard, testReflexCard ],
    preferredCleaner: {
      name: 'holly'
    },
  },
  {
    name: 'Demo Brawn Deck',
    id: '2',
    cards: [testBrawnCard, testDisciplineCard, testBrawnCard, testFortuneCard],
    preferredCleaner: {
      name: 'jim'
    },
  },
  {
    name: 'Demo Reflex Deck',
    id: '3',
    cards: [testReflexCard, testDisciplineCard, testReflexCard, testFortuneCard],
    preferredCleaner: {
      name: 'doc'
    }
  },
  {
    name: 'Demo Fortune Deck',
    id: '4',
    cards: [testFortuneCard, testDisciplineCard, testFortuneCard , testFortuneCard],
    preferredCleaner: {
      name: 'mom'
    }
  },
  {
    name: 'Demo Discipline Deck',
    id: '5',
    cards: [ testDisciplineCard, testDisciplineCard, testBrawnCard, testReflexCard ],
    preferredCleaner: {
      name: 'evangelo'
    },
  },
  {
    name: 'Demo Brawn Deck',
    id: '6',
    cards: [testBrawnCard, testDisciplineCard, testBrawnCard, testFortuneCard],
    preferredCleaner: {
      name: 'karlee'
    },
  },
  {
    name: 'Demo Reflex Deck',
    id: '7',
    cards: [testReflexCard, testDisciplineCard, testReflexCard, testFortuneCard],
    preferredCleaner: {
      name: 'walker'
    }
  },
  {
    name: 'Demo Fortune Deck',
    id: '8',
    cards: [testFortuneCard, testDisciplineCard, testFortuneCard , testFortuneCard],
    preferredCleaner: {
      name: 'mom'
    }
  },
  {
    name: 'Demo Discipline Deck',
    id: '9',
    cards: [ testDisciplineCard, testDisciplineCard, testBrawnCard, testReflexCard ],
    preferredCleaner: {
      name: 'holly'
    },
  },
  {
    name: 'Demo Brawn Deck',
    id: '10',
    cards: [testBrawnCard, testDisciplineCard, testBrawnCard, testFortuneCard],
    preferredCleaner: {
      name: 'jim'
    },
  },
  {
    name: 'Demo Reflex Deck',
    id: '11',
    cards: [testReflexCard, testDisciplineCard, testReflexCard, testFortuneCard],
    preferredCleaner: {
      name: 'doc'
    }
  },
  {
    name: 'Demo Fortune Deck',
    id: '12',
    cards: [testFortuneCard, testDisciplineCard, testFortuneCard , testFortuneCard],
    preferredCleaner: {
      name: 'mom'
    }
  }
]

function App() {
  return (
    <div className="app-root">
      <DeckListing decks={decks}/>
    </div>
  );
}

export default App;
