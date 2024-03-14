'use client'
import React from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const HeroContent = ({isImageExpanded, title,sousTitle, contentText, boutonText} :
    {
        isImageExpanded:any, 
        title:string,
        sousTitle:string,
        contentText: string,
        boutonText: string
    }) => {
    return (
        <aside className='my-[5rem] flex flex-row gap-4 justify-between content-start items-start'>
            <div className="w-[50%] flex flex-col justify-center content-center items-center text-center">
                <h2 className='text-3xl text-yellow-400 uppercase'>{sousTitle} </h2>
                <h1 className='text-[4rem] font-bold text-center uppercase leading-none'>{title} </h1>
                <p className='mt-4 px-10 py-8'>
                    {contentText}
                </p>
                <button className='hidden lg:flex gap-1 bg-green-700 rounded-lg px-4 py-3 text-gray-50 font-semibold  hover:bg-red-500 duration-700 '>
                    {boutonText} <i className="bi bi-arrow-right"></i> 
                </button>
            </div>  
            <div className="flex flex-col content-start items-start border-4 border-red-300">
                <Image 
                    src='/images/discount.jpg'
                    alt="discount image"
                    className={`rounded-full  z-20 absolute right-[35rem] top-20 transition-transform duration-500 ${isImageExpanded ? 'transform scale-50' : 'transform scale-100'}`}
                    width={150}
                    height={30}
                    priority
                    />                
            </div>
        </aside>
    )
}
function HeroSection() {
    const [changeAside, setChangeAside] = useState(1);
    const [isImageExpanded, setIsImageExpanded] = useState(false);
    
    useEffect(() => {
        const interval = setInterval(() => {
          // Inverser l'état de l'agrandissement à chaque itération
          setIsImageExpanded((prev) => !prev);
        }, 6000); // Temps total d'une itération (900ms pour l'agrandissement + 1000ms pour la réduction)
    
        return () => clearInterval(interval);
    }, []);

    const showAsideContent = () => {
        if(changeAside === 1){
            setChangeAside(changeAside+1);
        }else if(changeAside === 2){
            setChangeAside(changeAside+1);
        }else if(changeAside === 3){
            setChangeAside(changeAside+1);
        }else {
            setChangeAside(1);
        }
    }
    setTimeout(() => {showAsideContent()}, 8000);


  return (
    <section className='flex flex-col'>
        { changeAside === 1 ?
            <HeroContent  
                isImageExpanded={isImageExpanded}
                title='Pizza au fromage'
                sousTitle='Pizza super délicieuse'
                boutonText='Commandez maintenant'
                contentText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, suscipi Lorem ipsum dolor sit amet.'
            />: changeAside === 2 ?
            <HeroContent  
                isImageExpanded={isImageExpanded}
                title = 'Meilleur Burger de Kin'
                sousTitle='Fast food Burgers'
                boutonText='Commandez maintenant'
                contentText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, suscipi Lorem ipsum dolor sit amet.'
            /> : changeAside === 3 ?
            <HeroContent  
                isImageExpanded={isImageExpanded}
                title="Burger avec Viande grillée"
                sousTitle='La grillarde de chez nous'
                boutonText='Commandez maintenant'
                contentText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, suscipi Lorem ipsum dolor sit amet.'
            /> : changeAside === 4 ?
            <HeroContent  
                isImageExpanded={isImageExpanded}
                title="Burger au chocolat sauté"
                sousTitle='La grillarde de chez nous'
                boutonText='Commandez maintenant'
                contentText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, suscipi Lorem ipsum dolor sit amet.'
            /> : null
        }


        <div className='flex justify-center content-center gap-2'>
            <span className="cursor-pointer"> <i className="bi bi-record-circle"></i></span>
            <span className="text-gray-400 cursor-pointer"> <i className="bi bi-circle-fill"></i></span>
            <span className="text-gray-400 cursor-pointer"> <i className="bi bi-circle-fill"></i></span>
            <span className="text-gray-400 cursor-pointer"> <i className="bi bi-circle-fill"></i></span>
        </div>
    </section>
   )
}

export default HeroSection