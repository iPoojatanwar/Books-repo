import React from 'react'

const Allbook = ({item}) => {
  return (
<>
<div className='hover:shadow-lg hover:translate-y-2 duration-200'>
<div className="card  w-99  bg-base-100 shadow-xl    ">
          <figure className='dark:bg-black dark:text-white'>
            <img className=''
              src={item.url}
              alt="Shoes" />
          </figure>
          <div className="card-body dark:bg-black dark:text-white  ">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium porro aliquam voluptatibus iusto! </p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="badge badge-outline hover:bg-pink-600  hover:border-pink-500 duration-200 hover:text-white p-4 font-semibold">Buy Now</div>
            </div>
          </div>
        </div>
        </div>
</>
  )
}

export default Allbook