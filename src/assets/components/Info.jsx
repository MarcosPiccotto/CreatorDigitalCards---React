import infoPhoto from "../info-avatar.png";

export default function Info(props) {
    const {name,workstation,webside} = props
    return (
        <>
            <div className="info-content">
                <img className="avatar" src={infoPhoto} alt="My face" />
                <p className="info-name">{name}</p>
                <p className="workstation">{workstation}</p>
                <p>{webside}</p>
                <div className="info-buttons">
                    <button className="button-email" onclick="location.href='MyMail.com'">
                        <span class="material-symbols-outlined">mail</span> Email 
                    </button>
                    <button className="button-linkedin" onclick="location.href='MyLinkedin.com'">
                    <span class="material-symbols-outlined">group</span> Linkedin
                    </button>
                </div>
            </div>
        </>
    );
}
