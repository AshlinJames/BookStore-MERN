import React from 'react'
import header from '../components/Header'
import Footer from '../../components/Footer'
import Header from '../components/Header'
function AllBooks() {
  return (
    <>
      <Header />
      <>
        <div className="flex justify-center items-center flex-col my-5">
          <h1 className='text-3xl'>Collections</h1>
          <div className='flex my-5'>
            <input type="text" className='p-2 rounded border border-gray-200 text-black w-100' />
          </div>
          <button className=' p-2 text-white bg-blue-500'>Search</button>
        </div>
        {/* grid */}
        <div className="grid grid-cols-4 md:px-20 p-5">
          {/* filter */}
          <div className="col-span-1">
            <h1 className='text-2xl font-semibold'>Filter</h1>
            <div className="mt-3">
              <input type="radio" id='literary' name='filter' />
              <label className='m' htmlFor="literary">literary</label>
            </div>
            <div className="mt-3">
              <input type="radio" id='Philosophy' name='filter' />
              <label className='m' htmlFor="Philosophy">Philosophy</label>
            </div>
            <div className="mt-3">
              <input type="radio" id='Romance' name='filter' />
              <label className='m' htmlFor="Romance">Romance</label>
            </div>
            <div className="mt-3">
              <input type="radio" id='/Mystery/Thriller' name='filter' />
              <label className='m' htmlFor="Mystery/Thriller">Mystery/Thriller</label>
            </div>
            <div className="mt-3">
              <input type="radio" id='Horror' name='filter' />
              <label className='m' htmlFor="Horror">Horror</label>
            </div>
            <div className="mt-3">
              <input type="radio" id='Politics' name='filter' />
              <label className='m' htmlFor="Politics">Politics</label>
            </div>
            <div className="mt-3">
              <input type="radio" id='Self-Help' name='filter' />
              <label className='m' htmlFor="Self-Help">Self-Help</label>
            </div>
            <div className="mt-3">
              <input type="radio" id='Auto/Biography' name='filter' />
              <label className='m' htmlFor="Auto/Biography">Auto/Biography</label>
            </div>
            <div className="mt-3">
              <input type="radio" id='No-Filter' name='filter' />
              <label className='m' htmlFor="No-Filter">No-Filter</label>
            </div>

          </div>
          {/* books */}
          <div className="col-span-3">
            <div className="md:grid grid-cols-4">
              <div className='shadow rounded p-3 mx-4'>
                <img src="https://tse4.mm.bing.net/th/id/OIP.MOw8E6VOioHuq3EPrxM2bQAAAA?pid=Api&P=0&h=180" alt="book" className='w-full' />
                <div className="flex flex-col justify-center items-center">
                  <p className='text-blue-700 font-bold'>Author</p>
                  <p >Book Title</p>
              


                </div>

              </div>
               <div className='shadow rounded p-3 mx-4'>
                <img src="https://tse4.mm.bing.net/th/id/OIP.MOw8E6VOioHuq3EPrxM2bQAAAA?pid=Api&P=0&h=180" alt="book" className='w-full' />
                <div className="flex flex-col justify-center items-center">
                  <p className='text-blue-700 font-bold'>Author</p>
                  <p >Book Title</p>
              


                </div>

              </div>
               <div className='shadow rounded p-3 mx-4'>
                <img src="https://tse4.mm.bing.net/th/id/OIP.MOw8E6VOioHuq3EPrxM2bQAAAA?pid=Api&P=0&h=180" alt="book" className='w-full' />
                <div className="flex flex-col justify-center items-center">
                  <p className='text-blue-700 font-bold'>Author</p>
                  <p >Book Title</p>
              


                </div>

              </div>
               <div className='shadow rounded p-3 mx-4'>
                <img src="https://tse4.mm.bing.net/th/id/OIP.MOw8E6VOioHuq3EPrxM2bQAAAA?pid=Api&P=0&h=180" alt="book" className='w-full' />
                <div className="flex flex-col justify-center items-center">
                  <p className='text-blue-700 font-bold'>Author</p>
                  <p >Book Title</p>
              


                </div>

              </div>
            </div>
          </div>
        </div>
      </>
      <Footer />
    </>
  )
}

export default AllBooks