import React from 'react';

import CreateCards from './CreateCards';

const CreateArt = () => {

    return (
        <section className='min-h-[600px] w-full space-y-[100px]'>
            <h2 className='text-center'>Create and Sell Artworks</h2>

            {/* Cards */}
            <CreateCards/>
        </section>
    );
};

export default CreateArt;
