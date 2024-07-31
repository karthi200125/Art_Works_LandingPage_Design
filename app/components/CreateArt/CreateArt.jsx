import React from 'react';
import nft from '../../assets/nft.png'
import sale from '../../assets/sale.png'
import collection from '../../assets/collection.png'
import wallet from '../../assets/wallet.png'

const CreateArt = () => {
    const createArt = [
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

    return (
        <section className='min-h-[600px] w-full space-y-[100px]'>
            <h2 className='text-center'>Create and Sell Artworks</h2>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {createArt.map((card) => (
                    <div
                        key={card.id}
                        className='w-full h-[400px] bg-white/10 rounded-[20px] p-5 relative flex flex-col justify-center gap-3 items-center trans hover:bg-[var(--voilet)] cursor-pointer'
                    >
                        <h2 className='mt-[50px] text-white/20 text-[60px]'>{card.count}</h2>
                        <h4>{card.title}</h4>
                        <p className='text-white/40 line-clamp-6'>{card.desc}</p>

                        {/* Image */}
                        <img
                            src={card.img}
                            alt={card.title}
                            className='imageshadow absolute top-[-30px] left-1/2 transform -translate-x-1/2 w-[100px] h-[100px] object-contain'
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CreateArt;
