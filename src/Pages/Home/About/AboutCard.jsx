
const AboutCard = ({info}) => {
    const {img, title, description} = info;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl rounded-sm">
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-pretty">{description}</p>
            </div>
        </div>
    );
};

export default AboutCard;