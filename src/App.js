import {Helmet} from "react-helmet"
import {Container, Navbar, NavbarBrand} from "react-bootstrap";
import "bootswatch/dist/zephyr/bootstrap.css";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {useState} from "react";
import Logos from "./logos"

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
                <meta name="description" content="Logos for popular cryptos, cryptocurrency projects, blockchains, exchanges and more."/>
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
                    {logos.filter(a => a.name.toLowerCase()
                        .includes(searchQuery.toLowerCase()))
                        .sort((a, b) => a.name >= b.name)
                        .map((logo) => {
                        return <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center mb-3">
                            <h2 className={"h6 fw-bolder d-block"}>{`${logo.name}`}</h2>
                            <LazyLoadImage className={"rounded"} alt={`${logo.name} logo`}
                                           title={`${logo.name} logo`} src={logo.logo} effect={"blur"} height={89} maxWidth={89}/>

                        </div>
                    })}
                </section>
            </Container>
            <footer className="footer p-3 bg-white justify-content-between d-flex flex-row border-top">
					<span className="text-muted">&copy; <a href="https://truemiller.com" className={"text-decoration-none"}>True Miller</a> 2020-2021. All rights
						reserved.</span>
                <span><a href="//rpc.info" className={"text-decoration-none"}>RPC Info</a></span>
                <span><a href="//twitter.com/truemiller_com" className={"text-decoration-none"}>Twitter</a></span>
                <span><a href="//t.me/truemiller1" className={"text-decoration-none"}>Telegram</a></span>

            </footer>
        </article>
    )
}


const logos = [
    {name: "AAVE", logo: Logos.aave},
    {name: "AVAX", logo: Logos.avax},
    {name: "AVE", logo: Logos.ave},
    {name: "AVME", logo: Logos.avme},
    {name: "BAG", logo: Logos.bag},
    {name: "BCH", logo: Logos.bch},
    {name: "BTC", logo: Logos.btc},
    {name: "CNR", logo: Logos.cnr},
    {name: "CYCLE", logo: Logos.cycle},
    {name: "DREGG", logo: Logos.dregg},
    {name: "ELK", logo: Logos.elk},
    {name: "ETH", logo: Logos.eth},
    {name: "GAJ", logo: Logos.gaj},
    {name: "GDL", logo: Logos.gdl},
    {name: "JOE", logo: Logos.joe},
    {name: "LINK", logo: Logos.link},
    {name: "LYD", logo: Logos.lyd},
    {name: "MFI", logo: Logos.mfi},
    {name: "MIM", logo: Logos.mim},
    {name: "PEFI", logo: Logos.pefi},
    {name: "PNG", logo: Logos.png},
    {name: "QI", logo: Logos.qi},
    {name: "SNOB", logo: Logos.snob},
    {name: "SUSHI", logo: Logos.sushi},
    {name: "TEDDY", logo: Logos.teddy},
    {name: "wBTC", logo: Logos.wbtc},
    {name: "XRP", logo: Logos.xrp},
]