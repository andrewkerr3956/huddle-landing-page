import './App.css';
import Header from './components/base/Header';
import Main from './components/base/Main';
import Footer from './components/base/Footer';
import Section from './components/styled/Section';
import Hero from './components/Hero';
import Diagram from './components/Diagram';
import GrowSection from './components/GrowSection';
import ConversationSection from './components/ConversationSection';
import UsersSection from './components/UsersSection';
import ReadySection from './components/ReadySection';

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Section id="hero">
          <Hero />
        </Section>
        <Section id="diagram">
          <Diagram />
        </Section>
        <Section id="grow">
          <GrowSection />
        </Section>
        <Section id="conversation">
          <ConversationSection />
        </Section>
        <Section id="users">
          <UsersSection />
        </Section>
        <Section id="ready">
          <ReadySection />
        </Section>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
