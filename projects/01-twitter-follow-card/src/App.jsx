import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard isFollowing userName="duckduckgo/gummibeer.dev" name="Gummi Beer Dev" />
            <TwitterFollowCard isFollowing={false} userName="pikachu" name="Pi Ka Chu" />
            <TwitterFollowCard isFollowing userName="duckduckgo" name="Duck Duck Go" />
            <TwitterFollowCard isFollowing userName="brave" name="Brave" />
        </section>
    )
}