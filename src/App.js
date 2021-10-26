import {Helmet} from "react-helmet"
import {Container, Navbar, NavbarBrand} from "react-bootstrap";
import "bootswatch/dist/zephyr/bootstrap.css";
import {LazyLoadImage} from 'react-lazy-load-image-component';

import avax from "./logos/avalanche.png"
import btc from "./logos/bitcoin.png"
import bch from "./logos/bitcoin-cash.png"
import eth from "./logos/ethereum.png"
import wbtc from "./logos/wrapped-bitcoin.png"
import xrp from "./logos/xrp.png"
import {useState} from "react";

export default function Home() {
    const [searchQuery, setSearchQuery] = useState("")

    const handleSearchInput = (event) => {
        let input = event.target.value;
        setSearchQuery(input)
    }

    return (
        <article className={"d-flex flex-column vh-100"}>
            <Helmet>
                <title>Crypto Logos</title>
                <meta name="description" content="Find logos for your favourite cryptocurrencys."/>
                <link rel="icon" href="/favicon.ico"/>
            </Helmet>
            <header>
                <Navbar variant={"light"} className={"bg-light"}>
                    <Container>
                        <NavbarBrand>Crypto Logos</NavbarBrand>
                    </Container>
                </Navbar>
                <Container className={"text-center py-5"}>
                    <h1 className={"fw-bolder"}>Crypto Logos</h1>
                    <p className="lead">Logos for popular cryptocurrencies and projects.</p>
                    <section className={"row offset-lg-2 col-lg-8 px-3"}>
                        <input type="text" className="form-control form-control-lg" onChange={handleSearchInput}/>
                    </section>
                </Container>
            </header>

            <Container>
                <section className="row">
                    {Logos.filter(a=>a.name.toLowerCase().includes(searchQuery.toLowerCase())).sort((a, b) => a.name >= b.name).map((logo) => {
                        return <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center mb-3">
                            <h2 className={"h6 fw-bolder d-block"}>{`${logo.name}`}</h2>
                            <LazyLoadImage className={"rounded-circle"} alt={`${logo.name} logo`}
                                           title={`${logo.name} logo`} src={logo.logo} effect={"blur"}/>

                        </div>
                    })}
                </section>
            </Container>
            <footer className={"align-self-end mt-auto"}>
                <Container>
                    <a href="https://github.com/truemiller/crypto-logos">Github</a> - <a
                        href="//truemiller.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        True Miller
                    </a>
                </Container>
            </footer>
        </article>
    )
}


const Logos = [
    {name: "BTC", logo: btc},
    {name: "AVAX", logo: avax},
    {name: "BCH", logo: bch},
    {name: "ETH", logo: eth},
    {name: "wBTC", logo: wbtc},
    {name: "XRP", logo: xrp},
]