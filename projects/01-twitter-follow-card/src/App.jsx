import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard isFollowing userName="duckduckgo/gummibeer.dev">
                <TwitterFollowCard isFollowing={false} userName="pikachu">
                    <strong>Pi Ka Chu</strong>
                </TwitterFollowCard>    
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing userName="duckduckgo">
                <strong>Duck Duck Go</strong>
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing userName="brave">
                <strong>Brave</strong>
            </TwitterFollowCard>
        </section>
    )
}