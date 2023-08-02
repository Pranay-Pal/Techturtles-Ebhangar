import "./Homepage.css"
import { Icon } from '@iconify/react';
import Logo from "./assets/logo.png"
export default function Homepage() {
    return (
        <>
        <div className="header">
            <Icon className="icon" icon="ic:baseline-menu"/>
            <a className="Logo">
                <img src={Logo} alt="LOGO" className="LogoImg"/>
            </a>
            <button className="button-17" role="button">Signin</button>
        </div>
        <main>
            <div className="container">
                <div className="cardItems">
                    <div><h3>sell</h3></div>
                </div>
                <div className="cardItems">
                    <div><h3>sell</h3></div>
                </div>
                <div className="cardItems">
                    <div><h3>sell</h3></div>
                </div>
                <div className="cardItems">
                    <div><h3>sell</h3></div>
                </div>
            </div>
        </main>
        <footer></footer>
        </>)
}