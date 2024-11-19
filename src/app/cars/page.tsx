
import React from 'react'

const Cars = () => {
const carsData = [
    {id:1, name:"Corolla" ,price:120000, description:"Reliable sedan",image:"/car1.jpg"},
    {id:2, name:"Daihatsu" ,price:15000, description:"luxury car",image:"/car2.jpg"},
    {id:3, name:" Honda Civic" ,price:23000, description:"Stylish, powerful.",image:"/car3.jpg"},
    {id:4, name:"BAIC Senova D20" ,price:80000, description:"Modern SUV.",image:"/car4.jpg"},
    {id:5, name:"New corolla" ,price:10000, description:"Compact, economical.",image:"/car5.jpg"},
    {id:6, name:"Changan Oshan X7" ,price:190000 ,description:"Luxurious SUV",image:"/car6.png"},
]




  return (
    <div>
        <div className='cars'>
            {carsData.map((cars) => (
<div key={cars.id} className='cars-card'>
    <img src={cars.image} alt={cars.name}/>
    <h3>{cars.name}</h3>
    <p>{cars.description}</p>
    <div className='price'>${cars.price}</div>
    <button>Add to Card</button>

</div>
            ))}
        </div>
    </div>
  )
}

export default Cars;