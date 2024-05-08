
const BannerItem = ({item}) => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${item.img})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content">
                <div className="max-w-4xl">
                    <h1 className="mb-5 text-5xl font-bold">{item.title}</h1>
                    <p className="mb-5">{item.description}</p>
                    <button className="btn btn-primary">Become a Tutor</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default BannerItem;