import React from 'react'


interface Props{    
    name: string;
    description: string;
}

const TopSale = ({name, description}: Props) =>  {
  return (
    <div className='top-sale'>
      <p> <b> O café queridinho:</b> </p>
      <p>{name} - {description}</p>
      
    </div>
  )
}

export default TopSale
