import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const formatUserName = (username) => `@${username}`

    return (
        <section className='App'>
            <TwitterFollowCard 
                formatUserName={formatUserName} 
                isFollowing 
                userName="duckduckgo/gummibeer.dev" 
                name="Gummi Beer Dev" />

            <TwitterFollowCard 
                formatUserName={formatUserName} 
                isFollowing={false} 
                userName="pikachu" 
                name="Pi Ka Chu" />

            <TwitterFollowCard 
                formatUserName={formatUserName} 
                isFollowing 
                userName="duckduckgo" 
                name="Duck Duck Go" />
                
            <TwitterFollowCard 
                formatUserName={formatUserName} 
                isFollowing 
                userName="brave" 
                name="Brave" />
        </section>
    )
}