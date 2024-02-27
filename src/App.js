import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap'
import quotes from './quotes';
import Particle from './components/Particle';
import { useState, useEffect } from 'react'
// import './App.css';

function App() {
  const [nihilist, setNihilist] = useState('Has your knowledge really helped you understand this world? You’ve noticed it haven’t you? That the more you learn, the more you find you don’t know. It’s rather, fitting don’t you think? The fool and the imbecile know more about their world than you, for they have no clue about what they don’t know. You, who tries to stand at the top, looks down and sees a void, whilst everyone else cannot see over the canopy, and you become the most ignorant of them all');
  const [index, setIndex] = useState(0); // Initialize index to track the current quote

  useEffect(() => {
    // Function to log the next quote
  const logNextQuote = () => {
    if (index < quotes.length) {
      setNihilist(quotes[index]);
      setIndex(prevIndex => prevIndex + 1); // Increment index
    } else {
      clearInterval(interval); // Stop the interval once all quotes are logged
    }
  };
    const interval = setInterval(logNextQuote, 15000); // Log the next quote every 10 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [index]);

  
  return (
    <div>
     <Header />
     <Particle />
      <main className="py-3">
        <Container style={{ textAlign: 'center', marginTop: '30vh', transform: 'translateY(-50%)' }}>
        <h2 className="permanent-marker-regular">{nihilist}</h2>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

export default App;
