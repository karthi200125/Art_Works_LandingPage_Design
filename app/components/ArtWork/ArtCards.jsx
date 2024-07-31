import React from 'react'
import { HiArrowLongRight } from 'react-icons/hi2'

const ArtCards = () => {

    const cards = [
        {
            id: 1,
            img: "https://img.freepik.com/premium-photo/skater-punk-cool-ape-with-punk-rock-elements-such-as-mohawk-hairstyle-studded-collar-rebellious-attitude_296012-3462.jpg?size=626&ext=jpg&uid=R35344889&ga=GA1.1.1654768561.1721831904&semt=ais_hybrid",
            title: "Punk Monkey",
            desc: "2.4 ETH"
        },
        {
            id: 2,
            img: "https://img.freepik.com/free-photo/cute-tiger-wearing-clothes-studio_23-2150844509.jpg?uid=R35344889&ga=GA1.1.1654768561.1721831904&semt=ais_hybrid",
            title: "Cybonk Pekachu",
            desc: "2.4 ETH"
        },
        {
            id: 3,
            img: "https://img.freepik.com/premium-photo/hyperrealistic-ai-art-armored-female-skull-inspired-by-alena-aenami_916399-613.jpg?uid=R35344889&ga=GA1.1.1654768561.1721831904&semt=ais_hybrid",
            title: "Robo Panther",
            desc: "3.1 ETH"
        },
        {
            id: 4,
            img: "https://img.freepik.com/premium-photo/striking-neon-tiger-prowling-neon-infused-jungle_10307-7325.jpg?uid=R35344889&ga=GA1.1.1654768561.1721831904&semt=ais_hybrid",
            title: "Neon Tiger",
            desc: "1.8 ETH"
        },
        {
            id: 5,
            img: "https://img.freepik.com/premium-photo/amidst-dreamy-sci-fi-city-cybernetic-owl-projects-digital-constellations-blending-fantasy_521621-1885.jpg?uid=R35344889&ga=GA1.1.1654768561.1721831904&semt=ais_hybrid",
            title: "Galactic Owl",
            desc: "2.9 ETH"
        },
        {
            id: 6,
            img: "https://img.freepik.com/premium-photo/rabbit-with-gun-its-back-sits-stool_248267-6602.jpg?uid=R35344889&ga=GA1.1.1654768561.1721831904&semt=ais_hybrid",
            title: "Steampunk Rabbit",
            desc: "2.5 ETH"
        },
    ];


    return (
        <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {cards?.map((card) => (
                <div key={card?.id} className='w-full bg-white/10 h-[300px] rounded-[20px] p-5 relative overflow-hidden group cursor-pointer'>
                    <img src={card?.img} alt="" className='absolute top-0 left-0 w-full h-full brightness-100 group-hover:brightness-100 trans object-cover rounded-[20px]' />
                    <div className='absolute bottom-3 left-3 w-[60%] max-h-max space-y-3 text-sm'>
                        <h4>{card?.title}</h4>
                        <div className='max-w-max px-5 py-2 glass text-center rounded-full'>{card?.desc}</div>
                    </div>
                    <div
                        className='card absolute right-[-11px] bottom-[-11px] w-[85px] h-[85px] bg-black fullCenter'
                        style={{ borderTopLeftRadius: '34px' }}
                    >
                        <div className='fullCenter bg-white/10 text-white w-[60px] h-[60px] border-[1px] border-solid border-white/10 rounded-full -rotate-45 group-hover:rotate-0 trans group-hover:bg-[var(--voilet)]'>
                            <HiArrowLongRight size={20} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ArtCards