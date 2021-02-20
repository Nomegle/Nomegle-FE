import React from 'react';
import { StyledHeader } from './styles'





const Homepage = (props : any) : JSX.Element => {
    return (
        <div>
            <StyledHeader>
                <p>Banner</p>
                <h2>Nomegle</h2>
                <p>Talk to strangers</p>
                <p>61,000+ online now</p>
            </StyledHeader>
            <div>
                <div>
                    <p>You don't need an app to use Omegle on your phone or tablet! The web site works great on mobile.</p>
                    <img />
                    <p>
                        Omegle (oh·meg·ull) is a great way to meet new friends, even while practicing social distancing. When you use Omegle,
                        we pick someone else at random and let you talk one-on-one. To help you stay safe, chats are anonymous unless you tell
                        someone who you are (not suggested!), and you can stop a chat at any time. Predators have been known to use Omegle,
                        so please be careful.
                    </p>
                    <p>
                        If you prefer, you can add your interests, and Omegle will look for someone who's into some of the same things as you 
                        instead of someone completely random. 
                    </p>
                    <p>
                        By using Omegle, you accept the terms at the bottom. You must be 18+ or 13+ with parental permission.
                    </p>
                    <div>
                        <div>
                            <label />
                            <input type="string" />
                        </div>
                        <div>
                            <label />
                            <div>
                                <button>Text</button>
                                <p>or</p>
                                <button>Video</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Homepage;