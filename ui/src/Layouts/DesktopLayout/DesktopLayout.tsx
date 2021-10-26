import { Link } from 'react-router-dom';
import { useStyles } from './styles';

export type DesktopLayoutProps = {
  children: JSX.Element;
};

export const DesktopLayout = ({ children }: DesktopLayoutProps) => {
  const styles  = useStyles()
  return (
    <>
      <header className={styles.header}>
        <Link to='/'>B4B Decks</Link>
      </header>
      <section className={styles.mainBody}>
        <nav className={styles.nav}>
          <ul>
            <Link to='/your-decks'><li>Your Decks</li></Link>
            <Link to='/top-decks'><li>Top Decks</li></Link>
            <Link to='/campaign-cards'><li>Campaign Cards</li></Link>
            <Link to='/cleaners'><li>Cleaners</li></Link>
          </ul>
        </nav>
        <article className={styles.mainContent}>
          { children }
        </article>
      </section>
    </>
  )
}