export default function About(props) {
    const { text } = props;
    return (
        <>
            <div className="about">
                <p className="about-title">About</p>
                <p className="about-text">{text}</p>
            </div>
        </>
    );
}
