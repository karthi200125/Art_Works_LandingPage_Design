import React from 'react';

import CreateCards from './CreateCards';
import TextAnimation from '../TextAnimation';

const CreateArt = () => {

    return (
        <section id='create' className='min-h-[600px] w-full space-y-[100px]'>
            <h2 className=''></h2>
            <TextAnimation className="text-center text-3xl lg:text-5xl font-semibold text-white">Create and Sell Artworks</TextAnimation>
            {/* Cards */}
            <CreateCards />
        </section>
    );
};

export default CreateArt;
