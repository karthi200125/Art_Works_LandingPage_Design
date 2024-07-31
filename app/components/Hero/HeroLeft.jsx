import Image from 'next/image'
import React from 'react'
import AvatarCircles from '../AvatarCircles'
import Button from '../Button'

const HeroLeft = () => {
    return (
        <div className='flex flex-col h-[80%] w-[80%] gap-10 mt-10'>
            <div className='flex flex-row items-center gap-3'>
                <AvatarCircles
                    numPeople={200}
                    avatarUrls={[
                        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
                        'https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&w=600',
                        'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=600'
                    ]}
                />
                Customers
            </div>
            <h1>Coloect you super rare digital art</h1>
            <div className='flex flex-row items-center w-[80%] gap-10'>
                <div>image</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde iste sequi debitis, quae minima fuga dolorem modi blanditiis sint ea?</p>
            </div>
            <div className='flex flex-row items-center gap-5'>
                <Button>one</Button>
                <Button>two</Button>
            </div>
        </div>
    )
}

export default HeroLeft