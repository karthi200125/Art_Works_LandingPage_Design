import React from "react";
import { FaRegHeart } from "react-icons/fa";

const LiveAuctionCards = () => {
    const liveAuctionCards = [
        {
            id: 1,
            title: "AI Concept Art",
            desc: "Generated AI artwork",
            img: "https://img.freepik.com/free-photo/ai-generated-concept-human_23-2150688431.jpg?size=626&ext=jpg&uid=R35344889&ga=GA1.1.1654768561.1721831904&semt=ais_hybrid",
            userImg: "https://img.freepik.com/free-photo/attractive-young-woman-sitting-against-plain-yellow-background-wearing-knitted-hat_23-2148204629.jpg?uid=R35344889&ga=GA1.1.1654768561.1721831904&semt=ais_hybrid",
            value: "4.2 WETH",
            likes: "100",
        },
        {
            id: 2,
            title: "Futuristic Cityscape",
            desc: "Digital cityscape design",
            img: "https://img.freepik.com/premium-photo/woman-with-headphones-that-says-music-it_869640-220794.jpg?size=626&ext=jpg&uid=R35344889&ga=GA1.1.1654768561.1721831904&semt=ais_hybrid",
            userImg: "https://img.freepik.com/free-photo/attractive-caucasian-teenage-girl-dresses-casual-denim-jacket-white-shirt-has-hair-bun_176532-10385.jpg?uid=R35344889&ga=GA1.1.1654768561.1721831904&semt=ais_hybrid",
            value: "3.5 WETH",
            likes: "80",
        },
        {
            id: 3,
            title: "Cyberpunk Portrait",
            desc: "Cyberpunk themed portrait",
            img: "https://img.freepik.com/premium-photo/virtual-reality-desktop-10-latest-news-about-computer-technology-painting-vr_1058796-51094.jpg?size=626&ext=jpg&uid=R35344889&ga=GA1.1.1654768561.1721831904&semt=ais_hybrid",
            userImg: "https://img.freepik.com/free-photo/portrait-young-man-wearing-heart-his-face-made-moisturizer_23-2149259929.jpg?uid=R35344889&ga=GA1.1.1654768561.1721831904&semt=ais_hybrid",
            value: "5.0 WETH",
            likes: "120",
        },
        {
            id: 4,
            title: "Robot Landscape",
            desc: "Landscape with robots",
            img: "https://img.freepik.com/free-photo/robot-landscape_23-2150688433.jpg",
            userImg: "https://img.freepik.com/free-photo/tender-woman-having-brow-color-added-her-eyebrows_231208-3536.jpg?uid=R35344889&ga=GA1.1.1654768561.1721831904&semt=ais_hybrid",
            value: "2.9 WETH",
            likes: "95",
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {liveAuctionCards.map((card) => (
                <div
                    key={card.id}
                    className="hover:drop-shadow-custom trans w-full h-[500px] rounded-[10px] bg-white/10 p-5 relative overflow-hidden cursor-pointer"
                >
                    <img
                        src={card.img}
                        alt={card.title}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-[200px] rounded-[10px] p-2">
                        <div className="w-full h-full bg-black/70 backdrop-blur-sm p-5 flex justify-between flex-col rounded-[10px]">
                            <h4 className="mt-5 text-white">{card.title}</h4>
                            <p>{card.desc}</p>
                            <div className="flex justify-between">
                                <h4 className="text-black font-bold px-5 text-sm py-2 rounded-full text-center bg-white">
                                    {card.value}
                                </h4>
                                <div className="flex gap-2 items-center">
                                    <FaRegHeart size={20} className="text-red-500" />
                                    {card.likes}
                                </div>
                            </div>
                        </div>

                        {/* User image */}
                        <img
                            src={card.userImg}
                            alt="User"
                            className="w-[50px] h-[50px] rounded-full bg-red-400 absolute left-[25px] top-[-20px]"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LiveAuctionCards;
