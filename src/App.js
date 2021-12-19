import PaitingList from './components/paintingList';
import paintings from './paiting.json';
import Section from './components/Section';
import Counter from './components/Counter';

export default function App() {
  return (
    <div>
      <Section title="Top">
        <PaitingList items={paintings} />
      </Section>

      <Counter step="1" />
    </div>
  );
}
