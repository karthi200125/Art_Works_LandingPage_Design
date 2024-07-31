import { HiArrowLongRight } from "react-icons/hi2";
import ai from '../../assets/ai1.png'

const Hero = () => {
    return (
        <section className='herocalc relative w-full flex flex-row bg-white/10 rounded-[30px] mt-[110px] items-center justify-center overflow-hidden'>

            {/* center image */}
            <div className='relative z-10 h-full w-[500px] flex justify-between flex-col'>
                {/* <img src={ai.src} alt="" className="absolute w-full h-full object-fill" /> */}
                <div className='absolute bottom-0 max-w-max mx-auto left-1/2 transform -translate-x-1/2 h-[60px] text-md cursor-pointer font-bold flex flex-row items-center text-black gap-5 bg-white rounded-[10px] p-5'>
                    scroll down
                    <HiArrowLongRight size={20} />
                </div>
            </div>

            {/* bottom right video*/}
            <div className='absolute right-5 bottom-5 h-[70%] w-[300px] bg-black rounded-[20px] overflow-hidden'>

            </div>

            {/* bottom left*/}
            <div className='absolute text-white p-5 left-5 bottom-5 max-h-max space-y-5 w-[300px] bg-black rounded-[20px] overflow-hidden flex flex-col justify-between'>
                <h4>All the amazing art </h4>
                <p className="text-white/20 leading-none">Lorem ipsum dolor sit  Lorem ipsum Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, explicabo?</p>
                <span className="h-[1px] bg-white w-full flex flex-row items-center justify-end"></span>
            </div>

            {/* top left main text */}
            <div className='absolute left-5 top-5'>
                <h1 className='text-[200px] text-white/10' style={{ lineHeight: "0.8" }}>FUTURE </h1>
                <h1 className='text-[200px] text-white/10' style={{ lineHeight: "0.8" }}>ARTS</h1>
            </div>

            {/* top right content*/}
            <div className='absolute right-5 top-5 max-h-max w-[300px] bg-black rounded-[20px] overflow-hidden flex flex-col gap-5 p-5'>
                <p className='text-center text-white/30'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <div className='w-full h-[40px] rounded-[10px] bg-white/10 flex flex-row items-center justify-between px-3 text-sm'>
                    Navigate
                    <HiArrowLongRight size={20} />
                </div>
            </div>

            {/* bottom left */}
            {/* <div>
                bottom left
            </div> */}

        </section>
    )
}

export default Hero