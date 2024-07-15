import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    const pikachu = {isFollowing: false, userName: "pikachu"}

    return (
        <section className='App'>
            <TwitterFollowCard isFollowing userName="duckduckgo/gummibeer.dev">
                Gummi Beer Dev
            </TwitterFollowCard>
            <TwitterFollowCard {...pikachu}>
                Pi Ka Chu
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing userName="duckduckgo">
                Duck Duck Go
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing>
                Brave
            </TwitterFollowCard>
        </section>
    )
}