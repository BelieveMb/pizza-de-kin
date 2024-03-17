import React from 'react'

function ReservationForm() {
  return (
  <section className='bg-green-600 my-6 lg:my-[6rem] mx-2 lg:mx-[8rem]  p-[5%] rounded-2xl '>
    <form action="" method="post">
        <div  className='flex flex-row flex-wrap gap-4 lg:gap-12 justify-center items-center'>
            <div className="flex ">
                <input type="text" placeholder='Votre nom'  className='rounded-xl px-2 py-3 text-gray-50 outline-none bg-transparent focus:bg-gray-50 focus:text-gray-700 border border-gray-50' />
            </div>
            <div className="flex ">
                <input type="text" placeholder='Votre téléphone'  className='rounded-xl px-2 py-3 text-gray-50 outline-none bg-transparent focus:bg-gray-50 focus:text-gray-700 border border-gray-50' />
            </div>
            <div className="flex ">
                <input type="text"  placeholder='Votre email'  className='rounded-xl px-2 py-3 text-gray-50 outline-none bg-transparent focus:bg-gray-50 focus:text-gray-700 border border-gray-50' />
            </div>
            <div className="flex ">
                <input type="number" placeholder='Nombre de personnes'  className='rounded-xl px-2 py-3 text-gray-50 outline-none bg-transparent focus:bg-gray-50 focus:text-gray-700 border border-gray-50' />
            </div>
            <div className="flex ">
                <input type="date"   className='rounded-xl px-8 py-3 text-gray-50 outline-none bg-transparent focus:bg-gray-50 focus:text-gray-700 border border-gray-50' />
            </div>
            <div className="flex ">
                <input type="text"  placeholder="Heure d'arrivée"  className='rounded-xl px-2 py-3 text-gray-50 outline-none bg-transparent focus:bg-gray-50 focus:text-gray-700 border border-gray-50' />
            </div>
        </div>
        <div className="flex justify-center items-center mt-10 mx-5">
            <button   className='rounded-xl px-5 py-3 text-gray-800 outline-none bg-yellow-400 hover:bg-red-600 hover:text-gray-50 hoduration-500 btn-font-regular' > Resérver maintenant </button>
        </div>
    </form>
  </section>
  )
}

export default ReservationForm