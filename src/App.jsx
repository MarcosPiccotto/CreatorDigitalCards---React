// import reactLogo from './assets/react.svg'
import Info from "./assets/components/Info";
import About from "./assets/components/About";
import Interest from "./assets/components/Interest";
import Footer from "./assets/components/Footer";
import "./App.css";

function App() {
    return (
        <div className="digital-card">
            <Info
                name="Marcos Piccotto"
                workstation="Back end devoloper"
                webside="marcos.webside"
            />
            <About
                text="I am a frontend developer with a particular interest in making
                things simple and automating daily tasks. I try to keep up with
                security and best practices, and am always looking for new
                things to learn."
            />
            <Interest text="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic." />
            <Footer></Footer>
        </div>
    );
}

export default App;
