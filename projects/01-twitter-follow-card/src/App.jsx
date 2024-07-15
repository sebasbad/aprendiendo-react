import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const formatedUserName = <span>@pikachu</span>

    return (
        <section className='App'>
            <TwitterFollowCard 
                formatedUserName={formatedUserName}
                isFollowing 
                userName="duckduckgo/gummibeer.dev" 
                name="Gummi Beer Dev" />

            <TwitterFollowCard 
                formatedUserName={formatedUserName}
                isFollowing={false} 
                userName="pikachu" 
                name="Pi Ka Chu" />

            <TwitterFollowCard 
                formatedUserName={formatedUserName}
                isFollowing 
                userName="duckduckgo" 
                name="Duck Duck Go" />

            <TwitterFollowCard 
                formatedUserName={formatedUserName}
                isFollowing 
                userName="brave" 
                name="Brave" />
        </section>
    )
}