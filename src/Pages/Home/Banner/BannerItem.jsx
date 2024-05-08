
const BannerItem = ({ item }) => {
    return (
        <div className="hero h-[calc(100vh-66px)]" style={{ backgroundImage: `url(${item.img})` }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-neutral-content">
                <div className="max-w-3xl">
                    <h1 className="mb-5 text-5xl font-bold">{item.title}</h1>
                    <p className="mb-5 text-pretty">{item.description}</p>
                    <div className="space-x-6">
                        <button className="btn bg-[#FFA500] rounded-sm border-none tracking-widest">BECOME A TUTOR</button>
                        <button className="btn rounded-sm bg-transparent border-[#FFA500] hover:bg-transparent text-white tracking-widest">FIND A TUTOR</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerItem;