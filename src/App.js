import PaitingList from './components/paintingList'
import paintings from './paiting.json'
import Section from './components/Section'

export default function App() {
    return (
    <div>
        <Section title='Top'>
            <PaitingList items={paintings}/>
        </Section>
        <Section />
    </div>
    )
}