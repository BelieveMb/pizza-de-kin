import React from 'react'
import Image from 'next/image';

const ServiceCard = ({imgName, title, contentPara}:
    {imgName:string, title:string, contentPara:string}) =>
    {
    return (
        <div className="flex flex-col items-center gap-4 w-[30%]">
            <div>
                <Image 
                    src={`/images/${imgName}`}
                    alt="pizza image"
                    className=''
                    width={100}
                    height={20}
                /> 
            </div>
            <h3 className='btn-font-regular text-xl lg:text-[1.5rem] uppercase '> {title} </h3>
            <p className='px-10 text-center'> {contentPara}</p>
        </div>
    )
}

function OurServices() {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center pb-20 " >
        <ServiceCard title='Repas qualité' 
            contentPara='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam id natus nobis!' 
            imgName='fastfood.svg'
        />
        <ServiceCard title='Plat spécial ' 
            contentPara='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam id natus nobis!' 
            imgName='pizza.svg'
        />
        <ServiceCard title='Livraison Rapide' 
            contentPara='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam id natus nobis!' 
            imgName='delivery.png'
        />
        
    </section>
  )
}

export default OurServices