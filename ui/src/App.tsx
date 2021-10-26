import { DeckListing } from "./Components/DeckListing/DeckListing";
import { DesktopLayout } from "./Layouts/DesktopLayout/DesktopLayout";
import { decks } from "./TEST_DATA";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>

        <Route path='/' exact>
          <DesktopLayout>
            <div>This is Root</div>
          </DesktopLayout>
        </Route>
        
        <Route path='/your-decks'>
          <DesktopLayout>
            <div>Your Decks</div>
          </DesktopLayout>
        </Route>
        
        <Route path='/top-decks'>
          <DesktopLayout>
            <DeckListing decks={decks} />
          </DesktopLayout>
        </Route>
        
        <Route path='/campaign-cards'>
          <DesktopLayout>
            <div>Campaign Cards</div>
          </DesktopLayout>
        </Route>
        
        <Route path='/cleaners'>
          <DesktopLayout>
            <div>Cleaners</div>
          </DesktopLayout>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
