import { HiArrowLongRight } from "react-icons/hi2";
import TextAnimation from "../TextAnimation";
import ai from '../../assets/ai1.png'

const Hero = () => {
    return (
        <section id="home" className='w-[92%] mx-auto md:w-full h-[80vh] sm:herocalc relative flex flex-row bg-white/10 rounded-[30px] mt-[110px] items-center justify-center overflow-hidden'>

            {/* center image */}
            <div className='relative z-10 h-full w-[500px] flex justify-between flex-col'>
                <img src={ai.src} alt="" className="absolute w-full h-full object-fill" />
                <div className='absolute bottom-0 max-w-max mx-auto left-1/2 transform -translate-x-1/2 h-[60px] text-md cursor-pointer font-bold flex flex-row items-center text-black gap-5 bg-white rounded-[10px] p-5'>
                    scroll down
                    <HiArrowLongRight size={20} />
                </div>
            </div>

            {/* bottom right video*/}
            <div className='hidden md:block absolute right-5 bottom-5 h-[65%] w-[300px] bg-black rounded-[20px] overflow-hidden'>
                <video
                    className="object-cover absolute top-0 left-0 w-full h-full"
                    src={'https://res.cloudinary.com/duextvtta/video/upload/v1722506446/ai_vikko4.mp4'}
                    autoPlay
                    muted
                    loop
                    playsInline
                />
            </div>

            {/* bottom left*/}
            <div className='hidden md:flex absolute text-white p-5 left-5 bottom-5 max-h-max space-y-5 w-[300px] bg-black rounded-[20px] overflow-hidden flex-col justify-between'>
                <h4>
                    <TextAnimation className='text-white'>All the amazing art</TextAnimation>
                </h4>
                <p className="text-white/20 leading-none">
                    <TextAnimation>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, explicabo?</TextAnimation>
                </p>
                <span className="h-[1px] bg-white w-full flex flex-row items-center justify-end"></span>
            </div>

            {/* top left main text */}
            <div className='absolute left-5 top-5 flex items-start flex-col'>
                <TextAnimation className='text-[80px] font-bold leading-[0.9] md:text-[200px] text-white/10'>FUTURE</TextAnimation>
                <TextAnimation className='text-[80px] font-bold leading-[0.9] md:text-[200px] text-white/10'>ARTS</TextAnimation>
            </div>

            {/* top right content*/}
            <div className='hidden md:flex absolute right-5 top-5 max-h-max w-[300px] bg-black rounded-[20px] overflow-hidden flex-col gap-5 p-5'>
                <p className='text-center text-white/30'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <div className='trans hover:bg-[var(--voilet)] w-full h-[40px] rounded-[10px] bg-white/10 flex flex-row items-center justify-between px-3 text-sm'>
                    Navigate
                    <HiArrowLongRight size={20} />
                </div>
            </div>

        </section>
    )
}

export default Hero