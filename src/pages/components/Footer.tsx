import React from 'react'
import Image from 'next/image';


function Footer() {
  return (
    <footer className="flex flex-row justify-between gap-5 bg-gray-900 px-[2rem] py-20">
        <div className="flex flex-col gap-2 justify-start w-[33%] ">
            <div>
                <Image 
                    src='/images/logo.svg'
                    alt="logo image"
                    className=''
                    width={150}
                    height={30}
                /> 
            </div>
            <p className='w-full lg:w-[20rem] '> Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
            <div className="flex flex-col justify-start">
                <p> <a href="mailto:mbolokobelieve@gmail.com">support@example.com</a></p>
                <p> <a href="tel:+243817723066">+243 817 723 066</a></p>

            </div>
        </div>

        <div className="flex flex-col gap-2 justify-start w-[33%] ">
            <h4 className='text-xl  sous-title-font-bold mb-2'>Nos produits</h4>
            <ul className="flex flex-col justify-start">
                <a href="#" className='hover:text-red-500 duration-500 font-semibold text-gray-400'>Pizza Inn 1</a>
                <a href="#" className='hover:text-red-500 duration-500 font-semibold text-gray-400'>Pizza Inn 1</a>
                <a href="#" className='hover:text-red-500 duration-500 font-semibold text-gray-400'>Pizza Inn 1</a>
                <a href="#" className='hover:text-red-500 duration-500 font-semibold text-gray-400'>Pizza Inn 1</a>
            </ul>
        </div>

        <div className="flex flex-col gap-2 justify-start w-[33%] ">
            <h4 className='text-xl  sous-title-font-bold mb-2'>Liens rapides</h4>
            <ul className="flex flex-col justify-start">
                <a href="#" className='hover:text-red-500 duration-500 font-semibold text-gray-400'>Link 1</a>
                <a href="#" className='hover:text-red-500 duration-500 font-semibold text-gray-400'>Link 1</a>
                <a href="#" className='hover:text-red-500 duration-500 font-semibold text-gray-400'>Link 1</a>
                <a href="#" className='hover:text-red-500 duration-500 font-semibold text-gray-400'>Link 1</a>
            </ul>
        </div>

     
        <div className="flex flex-col gap-2 justify-start w-[33%] border-l-2 border-gray-400 pl-10">
            <h4 className='text-xl  sous-title-font-bold mb-2'>Heures d'ouverture</h4>
            <div className="flex flex-col justify-start text-gray-100 font-medium">
                <span > Lundi - Vendredi : <span className="text-red-500">8h - 21h</span> </span>
                <span > Samedi: <span className="text-red-500">12h - 21h</span> </span>
            </div>
            <div className="flex flex-row justify-start text-gray-100 gap-5 text-xl">
                <a href="" className="hover:text-red-500 duration-500 "><i className="bi bi-facebook"></i></a>
                <a href="" className="hover:text-red-500 duration-500 "><i className="bi bi-instagram"></i> </a>
                <a href="" className="hover:text-red-500 duration-500 "><i className="bi bi-twitter"></i> </a>
                <a href="" className="hover:text-red-500 duration-500 "><i className="bi bi-whatsapp"></i></a>
            </div>

        </div>
        
    </footer>
  )
}

export default Footer