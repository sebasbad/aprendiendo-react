import './App.css'

export function App () {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar'
                    alt="El avatar de duckduckgo/gummibeer.dev" 
                    src="https://unavatar.io/duckduckgo/gummibeer.dev" />
                <div className='tw-followCard-info'>
                    <strong>Gummi Beer Dev</strong>
                    <span className='tw-followCard-infoUserName'>@gummibeer.dev</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>Seguir</button>
            </aside>
        </article>
    )
}