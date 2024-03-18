import React from 'react'
import BannerTitle from '@/components/BannerTitle'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ProductCard from '@/components/smallComponents/ProductCard'
import Image from 'next/image'

const CategoriesListItem = ({itemsName, iconItem} : {itemsName:string, iconItem:string}) => {
    return <li className='flex gap-3 uppercase btn-font-regular'> <i className={`bi bi-${iconItem}`}></i> {itemsName}</li>
}
const SpecialDishItem= ({ imageDish, nameDish, priceDish} : {imageDish:string, nameDish:string, priceDish:string}) => {
    return (
        <div className="flex gap-2">
            <Image 
                src={`/images/${imageDish}`}
                alt="pizza image"
                className='text-center'
                width={80}
                height={25}
            /> 
            <div className="flex flex-col gap-1 sous-title-font-bold">
                <h4 className=''>{nameDish} </h4>
                <b className='text-red-500 font-semibold'>{priceDish} $</b>
            </div>
        </div>
    )
}
const FiltrerDish = () => {
    return (
        <aside className='flex flex-col gap-4'>
            <div className="flex flex-col ">
                <h3 className='text-gray-800 text-2xl uppercase title-font-regular'>Categories</h3>
                <ul className="flex flex-col gap-1 my-4 font-semibold text-gray-700">
                    <CategoriesListItem iconItem='search' itemsName='Pizza' />
                    <CategoriesListItem iconItem='flower1' itemsName='Pizza' />
                </ul>
            </div>

            {/* <div className="flex flex-col ">
                <h3 className='text-gray-800 text-2xl uppercase title-font-regular'>Filter par prix</h3>
                <ul className="flex flex-col gap-1 my-4 font-semibold text-gray-700">
                    <p>ajouter un filtrer</p>
                </ul>
            </div> */}

            <div className="flex flex-col ">
                <h3 className='text-gray-800 text-2xl uppercase title-font-regular'>Plat Spécial</h3>
                <div className="flex flex-col gap-1 my-4 font-semibold text-gray-700">
                    <SpecialDishItem nameDish="King burgze" priceDish="75" imageDish="pizzaimg.png" />
                </div>
            </div>
        </aside>
    )
} 

function Page() {
  return (
    <main className=' para-font-regular '>
        <div className="bg-gray-200 px-10 py-5">
            <Header />
        </div>
        <BannerTitle title='Shop' menu=' Shop' secondMenu=' ' />
        <section className='flex flex-row gap-6 py-[8%] px-10 bg-gray-200 h-auto '>
            <div className="w-[30%] ">
                <FiltrerDish />
            </div>
            <aside className="flex flex-col lg:flex-row justify-center lg:justify-start gap-4 my-6  px-10 ">
                <ProductCard 
                    titleCard='Big Mac'
                    imageName='pizzaimg.png' 
                    detailCard='contentText Lorem ipsum dolor sit amet consectetur'
                    priceCard={50}
                /> 
                <ProductCard 
                    titleCard='Big Mac'
                    imageName='pizzaimg.png' 
                    detailCard='contentText Lorem ipsum dolor sit amet consectetur'
                    priceCard={15}
                /> 
                <ProductCard 
                    titleCard='Big Mac'
                    imageName='pizzaimg.png' 
                    priceCard={20}
                    detailCard='contentText Lorem ipsum dolor sit amet consectetur'
                /> 
                <ProductCard 
                    titleCard='Big Mac'
                    imageName='pizzaimg.png' 
                    detailCard='contentText Lorem ipsum dolor sit amet consectetur'
                    priceCard={50}
                />

            </aside>
            

        </section>
        <Footer />


    </main>  )
}

export default Page