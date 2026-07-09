import "@/App.css";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Position } from "./components/Position";
import { Projects } from "./components/Projects";
import { Achievements } from "./components/Achievements";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";

function App() {
    return (
        <div className="App" data-testid="app-root">
            <Nav />
            <main>
                <Hero />
                <About />
                <Experience />
                <Position />
                <Projects />
                <Achievements />
                <Gallery />
                <Contact />
            </main>
            <footer
                style={{
                    padding: "40px 24px 30px",
                    textAlign: "center",
                    fontSize: 12,
                    color: "rgba(250,250,251,0.35)",
                    borderTop: "1px solid var(--border)",
                    fontFamily: "var(--font-body)",
                }}
                data-testid="site-footer"
            >
                © 2026 Saksham Goel · Built with intent · React &amp; a lot of coffee.
            </footer>
        </div>
    );
}

export default App;
