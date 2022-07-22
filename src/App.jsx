// import reactLogo from './assets/react.svg'
import "./App.css";
import Card from "./assets/components/Card";

function App() {
    return (
        <>
            <div className="main">
                <div className="digital-card">
                    <Card
                        name="Marcos Piccotto"
                        workstation="Back end devoloper"
                        webside="marcos.webside"
                        aboutText="I am a frontend developer with a particular interest in making
                things simple and automating daily tasks. I try to keep up with
                security and best practices, and am always looking for new
                things to learn."
                        interestText="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."
                    ></Card>
                </div>
                <div className="digital-card">
                    <Card
                        name="Marcos Piccotto"
                        workstation="Back end devoloper"
                        webside="marcos.webside"
                        aboutText="I am a frontend developer with a particular interest in making
                things simple and automating daily tasks. I try to keep up with
                security and best practices, and am always looking for new
                things to learn."
                        interestText="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."
                    ></Card>
                </div>
                <div className="digital-card">
                    <Card
                        name="Marcos Piccotto"
                        workstation="Back end devoloper"
                        webside="marcos.webside"
                        aboutText="I am a frontend developer with a particular interest in making
                things simple and automating daily tasks. I try to keep up with
                security and best practices, and am always looking for new
                things to learn."
                        interestText="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."
                    ></Card>
                </div>
            </div>
        </>
    );
}

export default App;
