import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard userName="duckduckgo/gummibeer.dev" name="Gummi Beer Dev" />
            <TwitterFollowCard userName="pikachu" name="Pi Ka Chu" />
            <TwitterFollowCard userName="duckduckgo" name="Duck Duck Go" />
        </section>
    )
}