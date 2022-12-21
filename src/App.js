import styles from './assets/styles/App.module.css';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
