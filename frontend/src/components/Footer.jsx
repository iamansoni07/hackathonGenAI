import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=''>
        {/* <div className='relative'> */}
             {/*<div className=' z-[4]'>
               <svg
                    id="wave"
                    style={{ transform: 'rotate(0deg)', transition: '0.3s' }}
                    viewBox="0 0 1440 340"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                            <stop stopColor="rgba(62, 90.31, 243, 1)" offset="0%" />
                            <stop stopColor="rgba(11, 131.829, 255, 1)" offset="100%" />
                        </linearGradient>
                    </defs>
                    <path
                        style={{ transform: 'translate(0, 0px)', opacity: 1 }}
                        fill="url(#sw-gradient-0)"
                        d="M0,0L40,5.7C80,11,160,23,240,39.7C320,57,400,79,480,124.7C560,170,640,238,720,272C800,306,880,306,960,266.3C1040,227,1120,147,1200,147.3C1280,147,1360,227,1440,243.7C1520,261,1600,215,1680,198.3C1760,181,1840,193,1920,215.3C2000,238,2080,272,2160,255C2240,238,2320,170,2400,158.7C2480,147,2560,193,2640,221C2720,249,2800,261,2880,255C2960,249,3040,227,3120,204C3200,181,3280,159,3360,164.3C3440,170,3520,204,3600,232.3C3680,261,3760,283,3840,277.7C3920,272,4000,238,4080,215.3C4160,193,4240,181,4320,192.7C4400,204,4480,238,4560,221C4640,204,4720,136,4800,119C4880,102,4960,136,5040,141.7C5120,147,5200,125,5280,107.7C5360,91,5440,79,5520,102C5600,125,5680,181,5720,209.7L5760,238L5760,340L5720,340C5680,340,5600,340,5520,340C5440,340,5360,340,5280,340C5200,340,5120,340,5040,340C4960,340,4880,340,4800,340C4720,340,4640,340,4560,340C4480,340,4400,340,4320,340C4240,340,4160,340,4080,340C4000,340,3920,340,3840,340C3760,340,3680,340,3600,340C3520,340,3440,340,3360,340C3280,340,3200,340,3120,340C3040,340,2960,340,2880,340C2800,340,2720,340,2640,340C2560,340,2480,340,2400,340C2320,340,2240,340,2160,340C2080,340,2000,340,1920,340C1840,340,1760,340,1680,340C1600,340,1520,340,1440,340C1360,340,1280,340,1200,340C1120,340,1040,340,960,340C880,340,800,340,720,340C640,340,560,340,480,340C400,340,320,340,240,340C160,340,80,340,40,340L0,340Z"
                    ></path>
                    <defs>
                        <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
                            <stop stopColor="rgba(168.597, 62, 243, 1)" offset="0%" />
                            <stop stopColor="rgba(11, 90.496, 255, 1)" offset="100%" />
                        </linearGradient>
                    </defs>
                    <path
                        style={{ transform: 'translate(0, 50px)', opacity: 0.9 }}
                        fill="url(#sw-gradient-1)"
                        d="M0,0L40,34C80,68,160,136,240,141.7C320,147,400,91,480,73.7C560,57,640,79,720,79.3C800,79,880,57,960,90.7C1040,125,1120,215,1200,249.3C1280,283,1360,261,1440,209.7C1520,159,1600,79,1680,62.3C1760,45,1840,91,1920,119C2000,147,2080,159,2160,181.3C2240,204,2320,238,2400,255C2480,272,2560,272,2640,272C2720,272,2800,272,2880,260.7C2960,249,3040,227,3120,198.3C3200,170,3280,136,3360,119C3440,102,3520,102,3600,90.7C3680,79,3760,57,3840,90.7C3920,125,4000,215,4080,232.3C4160,249,4240,193,4320,164.3C4400,136,4480,136,4560,153C4640,170,4720,204,4800,215.3C4880,227,4960,215,5040,226.7C5120,238,5200,272,5280,243.7C5360,215,5440,125,5520,90.7C5600,57,5680,79,5720,90.7L5760,102L5760,340L5720,340C5680,340,5600,340,5520,340C5440,340,5360,340,5280,340C5200,340,5120,340,5040,340C4960,340,4880,340,4800,340C4720,340,4640,340,4560,340C4480,340,4400,340,4320,340C4240,340,4160,340,4080,340C4000,340,3920,340,3840,340C3760,340,3680,340,3600,340C3520,340,3440,340,3360,340C3280,340,3200,340,3120,340C3040,340,2960,340,2880,340C2800,340,2720,340,2640,340C2560,340,2480,340,2400,340C2320,340,2240,340,2160,340C2080,340,2000,340,1920,340C1840,340,1760,340,1680,340C1600,340,1520,340,1440,340C1360,340,1280,340,1200,340C1120,340,1040,340,960,340C880,340,800,340,720,340C640,340,560,340,480,340C400,340,320,340,240,340C160,340,80,340,40,340L0,340Z"
                    ></path>
                    <defs>
                        <linearGradient id="sw-gradient-2" x1="0" x2="0" y1="1" y2="0">
                            <stop stopColor="rgba(64.35, 62, 243, 1)" offset="0%" />
                            <stop stopColor="rgba(255, 179, 11, 1)" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <path
                        style={{ transform: "translate(0, 100px)", opacity: "0.8" }}
                        fill="url(#sw-gradient-2)"
                        d="M0,272L40,266.3C80,261,160,249,240,249.3C320,249,400,261,480,266.3C560,272,640,272,720,260.7C800,249,880,227,960,187C1040,147,1120,91,1200,102C1280,113,1360,193,1440,209.7C1520,227,1600,181,1680,147.3C1760,113,1840,91,1920,73.7C2000,57,2080,45,2160,34C2240,23,2320,11,2400,5.7C2480,0,2560,0,2640,0C2720,0,2800,0,2880,11.3C2960,23,3040,45,3120,79.3C3200,113,3280,159,3360,158.7C3440,159,3520,113,3600,107.7C3680,102,3760,136,3840,136C3920,136,4000,102,4080,124.7C4160,147,4240,227,4320,226.7C4400,227,4480,147,4560,113.3C4640,79,4720,91,4800,96.3C4880,102,4960,102,5040,124.7C5120,147,5200,193,5280,215.3C5360,238,5440,238,5520,232.3C5600,227,5680,215,5720,209.7L5760,204L5760,340L5720,340C5680,340,5600,340,5520,340C5440,340,5360,340,5280,340C5200,340,5120,340,5040,340C4960,340,4880,340,4800,340C4720,340,4640,340,4560,340C4480,340,4400,340,4320,340C4240,340,4160,340,4080,340C4000,340,3920,340,3840,340C3760,340,3680,340,3600,340C3520,340,3440,340,3360,340C3280,340,3200,340,3120,340C3040,340,2960,340,2880,340C2800,340,2720,340,2640,340C2560,340,2480,340,2400,340C2320,340,2240,340,2160,340C2080,340,2000,340,1920,340C1840,340,1760,340,1680,340C1600,340,1520,340,1440,340C1360,340,1280,340,1200,340C1120,340,1040,340,960,340C880,340,800,340,720,340C640,340,560,340,480,340C400,340,320,340,240,340C160,340,80,340,40,340L0,340Z">
                    </path>
                </svg>
            </div>  */}
            {/* <div className=' absolute bottom-7 left-[30%] text-white '> */}
            <div className='  text-white '>
                <div className='flex py-12 flex-col lg:flex-row bg-slate-800 items-center justify-center gap-4 lg:gap-10 '>
                <Link to={'https://www.kareai.com/'} className='text-sm font-bold'>&copy; KareAI 2024</Link>
                <span className='text-sm font-bold'>Privacy policy</span>
                <span className='text-sm font-bold'>Terms of use</span>
                <span className='text-xl flex items-center justify-center gap-4'>
                    <FaFacebook />
                    <FaLinkedin />
                    <FaTwitter />
                </span>
                </div>
            </div>
        </div>
    )
}

export default Footer