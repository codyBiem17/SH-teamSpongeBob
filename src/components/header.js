import AppDrawer from '../assets/images/app-drawer-50x50.png'

const Header = () => {
    return (
        <header className="App-header">
            <ul>
            <li>
                <a href="#click" className="list-link-hover">
                Gmail
                </a>
            </li>
            <li>
                <a href="#click" className="list-link-hover">
                Images
                </a>
            </li>
            <li className="list-item-border">
                <a href="#image">
                <img src={AppDrawer} alt="app-drawer" id="app-drawer"/>
                </a>
            </li>
            <li className="list-item-border list-item-initial">
                <a href="#click">
                SB
                </a>
            </li>
            </ul>
        </header>
    )
}

export default Header