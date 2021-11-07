import GCarbon from '../assets/images/google-carbon.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div id="Nigeria">Nigeria</div>
            <div id="second-div">
                <div className="carbon hide-xl">
                    <img src={GCarbon} alt="google-carbon-icon" id="gcarbon" />
                    Carbon neutral since 2007
                </div>
                <div id="footer-links">
                    <div className="first-links">
                        <a href="#about">About</a>
                        <a href="#advert">Advertising</a>
                        <a href="#business">Business</a>
                        <a href="#how">How Search Works</a>
                    </div>
                    <div className="carbon show-xl">
                        <img src={GCarbon} alt="google-carbon-icon" id="gcarbon" />
                        Carbon neutral since 2007
                    </div>
                    <div className="second-links">
                        <a href="#privacy">Privacy</a>
                        <a href="#terms">Terms</a>
                        <a href="#settings">Settings</a>
                    </div>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer