import Info from "./Info";
import About from "./About";
import Interest from "./Interest";
import Footer from "./Footer";

export default function Card(props) {
    const { name, workstation, webside, aboutText, interestText } = props;
    return (
        <div className="digital-card">
            <Info name={name} workstation={workstation} webside={webside} />
            <About text={aboutText} />
            <Interest text={interestText} />
            <Footer></Footer>
        </div>
    );
}
