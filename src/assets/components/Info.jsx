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
                    {/* ver de hacer funcionar el onClick */}
                    <button className="button-email">
                        <span className="material-symbols-outlined">mail</span> Email 
                    </button>
                     {/* ver de hacer funcionar el onClick */}
                    <button className="button-linkedin">
                    <span className="material-symbols-outlined">group</span> Linkedin
                    </button>
                </div>
            </div>
        </>
    );
}
