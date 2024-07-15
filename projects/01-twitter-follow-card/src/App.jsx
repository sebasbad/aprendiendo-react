import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard isFollowing userName="duckduckgo/gummibeer.dev">
                Gummi Beer Dev
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing={false} userName="pikachu">
                Pi Ka Chu
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing userName="duckduckgo">
                Duck Duck Go
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing userName="brave">
                Brave
            </TwitterFollowCard>
        </section>
    )
}