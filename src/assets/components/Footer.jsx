import FacebookIcon from "../Facebook-icon.png";
import GithubIcon from "../GitHub-Icon.png";
import InstragramIcon from "../Instagram-Icon.png";
import TwitterIcon from "../Twitter-Icon.png";

export default function Footer() {
    // const { text } = props;
    return (
        <>
            <div className="footer">
                <a href="https://facebook.com">
                    <img src={FacebookIcon} alt="" />
                </a>
                <a href="https://github.com/MarcosPiccotto">
                    <img src={GithubIcon} alt="" />
                </a>
                <a href="https://instagram.com/">
                    <img src={InstragramIcon} alt="" />
                </a>
                <a href="https://twitter.com/?lang=en">
                    <img src={TwitterIcon} alt="" />
                </a>
            </div>
        </>
    );
}
