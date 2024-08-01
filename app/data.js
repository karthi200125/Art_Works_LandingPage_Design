import nft from './assets/nft.png'
import sale from './assets/sale.png'
import collection from './assets/collection.png'
import wallet from './assets/wallet.png'

export const artCards = [
    {
        id: 1,
        img: 'https://img.freepik.com/premium-photo/skater-punk-cool-ape-with-punk-rock-elements-such-as-mohawk-hairstyle-studded-collar-rebellious-attitude_296012-3462.jpg?size=626&ext=jpg&uid=R35344889&ga=GA1.1.1654768561.1721831904&semt=ais_hybrid',
        title: 'Punk Monkey',
        desc: '2.4 ETH',
    },
    {
        id: 2,
        img: 'https://img.freepik.com/free-photo/cute-tiger-wearing-clothes-studio_23-2150844509.jpg?uid=R35344889&ga=GA1.1.1654768561.1721831904&semt=ais_hybrid',
        title: 'Cybonk Pekachu',
        desc: '2.4 ETH',
    },
    {
        id: 3,
        img: 'https://img.freepik.com/premium-photo/hyperrealistic-ai-art-armored-female-skull-inspired-by-alena-aenami_916399-613.jpg?uid=R35344889&ga=GA1.1.1654768561.1721831904&semt=ais_hybrid',
        title: 'Robo Panther',
        desc: '3.1 ETH',
    },
    {
        id: 4,
        img: 'https://img.freepik.com/premium-photo/striking-neon-tiger-prowling-neon-infused-jungle_10307-7325.jpg?uid=R35344889&ga=GA1.1.1654768561.1721831904&semt=ais_hybrid',
        title: 'Neon Tiger',
        desc: '1.8 ETH',
    },
    {
        id: 5,
        img: 'https://img.freepik.com/premium-photo/amidst-dreamy-sci-fi-city-cybernetic-owl-projects-digital-constellations-blending-fantasy_521621-1885.jpg?uid=R35344889&ga=GA1.1.1654768561.1721831904&semt=ais_hybrid',
        title: 'Galactic Owl',
        desc: '2.9 ETH',
    },
    {
        id: 6,
        img: 'https://img.freepik.com/premium-photo/rabbit-with-gun-its-back-sits-stool_248267-6602.jpg?uid=R35344889&ga=GA1.1.1654768561.1721831904&semt=ais_hybrid',
        title: 'Steampunk Rabbit',
        desc: '2.5 ETH',
    },
];


export const createArt = [
    {
        id: 1,
        title: "Set up your wallet",
        desc: "Get started by setting up your digital wallet to store your NFTs and manage your crypto assets securely.",
        img: wallet.src,
        count: "01",
    },
    {
        id: 2,
        title: "Create your collection",
        desc: "Organize your artwork into collections. This helps in categorizing and managing your digital art pieces effectively.",
        img: collection.src,
        count: "02",
    },
    {
        id: 3,
        title: "Add your NFTs",
        desc: "Upload and showcase your unique NFTs in your collection. Ensure each piece is represented with detailed metadata.",
        img: nft.src,
        count: "03",
    },
    {
        id: 4,
        title: "List them for sale",
        desc: "Set your prices and list your NFTs on the marketplace. Reach potential buyers and start earning from your digital creations.",
        img: sale.src,
        count: "04",
    },
];