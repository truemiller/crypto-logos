import {Helmet} from "react-helmet"
import {Button, Container, Navbar, NavbarBrand} from "react-bootstrap";
import "bootswatch/dist/cosmo/bootstrap.css";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {useState} from "react";
import {Logos} from "./logos"

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
                    {Logos.filter(a => a.name.toLowerCase()
                        .includes(searchQuery.toLowerCase()))
                        .sort((a, b) => a.name >= b.name)
                        .map((logo) => {
                        return <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center card card-body rounded-0">
                            <a href={logo.logo}><h2 className={"h6 fw-bolder d-block"}>{`${logo.name}`}</h2>
                            <LazyLoadImage className={"rounded"} alt={`${logo.name} logo`}
                                           title={`${logo.name} logo`} src={logo.logo} effect={"blur"} height={89} maxWidth={89}/>
                            </a>
                        </div>
                    })}
                </section>
            </Container>
            <footer className="footer p-3 bg-white justify-content-between d-flex flex-row border-top">
					<span className="text-muted">&copy; <a href="https://truemiller.com" className={"text-decoration-none"}>True Miller</a> 2020-2021. All rights
						reserved.</span>
                <div>
                    <span><Button variant={"outline-primary"} href="//rpc.info" className={"text-decoration-none me-3"}>RPC Info</Button></span>
                    <span><Button variant={"outline-primary"} href="//twitter.com/truemiller_com" className={"text-decoration-none me-3"}>Twitter</Button></span>
                    <span><Button variant={"outline-primary"} href="//t.me/truemiller1" className={"text-decoration-none me-3"}>Telegram</Button></span>
                </div>

            </footer>
        </article>
    )
}

