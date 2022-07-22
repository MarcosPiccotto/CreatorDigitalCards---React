export default function Interest(props) {
    const { text } = props;
    return (
        <div className="interest">
            <p className="interest-title">Interest</p>
            <p className="interest-text">{text}</p>
        </div>
    );
}
