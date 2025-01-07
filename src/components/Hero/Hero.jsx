import React from 'react'
import airpods1 from '../../assets/airpods1.png'
import airpods2 from '../../assets/airpods2.png'
import airpods3 from '../../assets/airpods3.png'
import { FaWhatsapp } from 'react-icons/fa'
import { UpdateFollower } from 'react-mouse-follower'
import { AnimatePresence, easeInOut, motion } from 'framer-motion'


const FadeUp = (delay) => {
    return {
        hidden: {
            opacity: 0,
            y: 100,
            scale: 0.5,
        },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.3,
                delay: delay,
                ease: easeInOut
            }
        },
        exit: {
            opacity: 1,
            y: 50,
            scale: 0.5,
            transition: {
                duration: 0.2,
                delay: delay,
                ease: easeInOut
            }
        }
    }
}

const AirpodsData = [
    {
        id: 1,
        image: airpods1,
        title: 'AirPods 2',
        price: "$120",
        subtitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, aliquam harum blanditiis, minus quasi fuga soluta culpa itaque ratione vero vitae aperiam a ea fugiat molestias. Repellat nulla corrupti iure?,",
        modal: "Modal 2nd ",
        BgColor: "black"
    },
    {
        id: 2,
        image: airpods2,
        title: 'AirPods 3',
        price: "$120",
        subtitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, aliquam harum blanditiis, minus quasi fuga soluta culpa itaque ratione vero vitae aperiam a ea fugiat molestias. Repellat nulla corrupti iure?,",
        modal: "Modal 3rd ",
        BgColor: "#eca6b8"
    },
    {
        id: 3,
        image: airpods3,
        title: 'AirPods 4',
        price: "$120",
        subtitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, aliquam harum blanditiis, minus quasi fuga soluta culpa itaque ratione vero vitae aperiam a ea fugiat molestias. Repellat nulla corrupti iure?,",
        modal: "Modal 4",
        BgColor: "#394826"
    },
]

const Hero = () => {
    const [activeData, setActiveData] = React.useState(AirpodsData[0])

    const HandleActiveData = (data) => {
        setActiveData(data)
    }

    return (
        <>
            <section className='bg-brandDark text-white'>
                <div className="container grid grid-cols-1
        md:grid-cols-2 min-h-[700px]
        ">
                    {/* Airpods info */}
                    <div className='flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px] font-varela'>
                        <div className='space-y-5 md:text-left text-center '>

                            <AnimatePresence mode='wait'>
                                <UpdateFollower
                                    mouseOptions={{
                                        backgroundColor: "white",
                                        zIndex: 9999,
                                        followSpeed: 0.5,
                                        scale: 10,
                                        rotate: -720,
                                        mixBlendMode: 'difference',
                                    }}
                                >
                                    <motion.h1
                                        key={activeData.id}
                                        variants={FadeUp(0.2)}
                                        initial="hidden"
                                        animate="show"
                                        exit="exit"
                                        className="text-4xl font-bold text-white"
                                    >
                                        {activeData.title}
                                    </motion.h1>

                                </UpdateFollower>

                            </AnimatePresence>
                            <AnimatePresence mode='wait'>
                                <motion.p
                                    key={activeData.id}
                                    variants={FadeUp(0.3)}
                                    initial="hidden"
                                    animate="show"
                                    exit="exit"
                                    className='text-sm leading-loose text-white/80 '>{activeData.subtitle}</motion.p>

                            </AnimatePresence>

                            <AnimatePresence mode='wait'>
                                <UpdateFollower
                                    mouseOptions={{
                                        backgroundColor: activeData.BgColor,
                                        zIndex: 9999,
                                        followSpeed: 0.5,
                                        scale: 6,
                                        rotate: -720,
                                        mixBlendMode: 'difference',
                                        backgroundElement:
                                            <div>
                                                <img src={activeData.image} alt="" />
                                            </div>,

                                    }}
                                >
                                    <motion.button
                                        key={activeData.id}
                                        variants={FadeUp(0.3)}
                                        initial="hidden"
                                        animate="show"
                                        exit="exit"
                                        style={{ backgroundColor: activeData.BgColor }}
                                        className='px-4 py-2 inline-block  font-normal rounded-sm'>Buy and listen
                                    </motion.button>
                                </UpdateFollower>
                            </AnimatePresence>

                            {/* airpods list separator */}
                            <div className='flex items-center justify-center md:justify-start gap-4 !mt-24'>
                                <div className='w-20 h-[1px] bg-white ' ></div>
                                <p className='uppercase text-xs'>Top airpods for you</p>
                                <div className='w-20 h-[1px] bg-white '></div>
                            </div>
                            {/* airpods list switcher */}
                            <div className=' grid grid-cols-3 gap-1 '>
                                {AirpodsData.map((item) => {
                                    return (
                                        <UpdateFollower
                                        mouseOptions={{
                                            backgroundColor: "black",
                                            zIndex: 9999,
                                            followSpeed: 0.5,
                                            scale: 3,
                                            text: "View Details",
                                            textFontSize:"3px",
                                            mixBlendMode: 'difference',
                                        }}
                                        >
                                            <div onClick={() => HandleActiveData(item)} className='gird grid-cols-2 place-items-center cursor-pointer'>
                                                <div>

                                                    <img src={item.image} className="w-[100px]" alt="" />
                                                </div>
                                                <div className='space-y-2 '>
                                                    <p className='text-base font-bold'>{item.price}</p>
                                                    <p className='text-xs font-normal text-nowrap' >{item.modal}</p>
                                                </div>
                                            </div>
                                        </UpdateFollower>
                                    )
                                })}
                            </div>

                        </div>

                    </div>

                    {/* Hero img with animation */}
                    <motion.div
                        key={activeData.id}
                        variants={FadeUp(0.4)}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        className='flex flex-col justify-end items-center '
                    >
                        <motion.img
                            key={activeData.id}
                            src={activeData.image}
                            alt=""
                            className='w-[350px] mb-14 ml-9 md:w-[550px] xl:[600px]'
                            style={{
                                scale: 1.05,
                                opacity: 0.8,
                            }}
                            whileHover={{ scale: 1.1, opacity: 1 }}
                            transition={{ duration: 0.4 }}
                        />
                    </motion.div>

                    {/* WhatsApp icon */}
                    <div className='text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference '>
                        <a href="">
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
