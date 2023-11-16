import Image from 'next/image'
import someImage from '../images/sample.png'

export function Welcome() {
  return (
        <>
        <div className='flex relative z-0'>
            <div className='absolute z-10 w-80 h-80 bg-blue-600 rounded-full left-0 -top-80 blur-3xl'>Absulote</div>
                <Image src={someImage} alt="Some text" className='relative z-20' />
            <div className='flex gap-1 flex-col gap-10 relative z-20'>
                <div className='flex flex-col'>
                    <h1 className='text-4xl font-bold max-w-sm'>Turn Your Website Into Your Best Sales Person</h1>
                    <h4>Triple your sales with a pixel-perfect website.</h4>
                    <h4>At SmartSite Studio, we don't just design and write code,</h4>
                    <h4>we build a revenue-driving machine for your business.</h4>
                </div>
                <div className='flex gap-3'>
                    <button className='rounded-full border color:white p-3 hover:bg-orange-600 text-sm font-bold'>Talk to Us</button>
                    <button className='rounded-full border color:white p-3 hover:bg-orange-600 text-sm font-bold'>See Portfolio</button>
                </div>
            </div>  
        </div>
        </>
    ) 
}