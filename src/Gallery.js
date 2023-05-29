import React, { useState } from 'react'
import Menu from './Menu'

const Gallery = () => {
    const [Item, setItem]=useState(Menu)
    const filterItem=(catItem)=>{
        const res=Menu.filter((cueElem)=>{
            return cueElem.category===catItem;


        })
setItem(res);
    }
  return (
    <div>
     

        

      <button type="button" className='btn btn-warning mb-4'style={{margin:'6px'}} onClick={()=>filterItem("men's clothing")} >Men's clothing</button>
        <button type="button"  className='btn btn-warning  mb-4'style={{margin:'6px'}} onClick={()=>filterItem("jewelery")}>Jewelery</button>
        <button type="button"  className='btn btn-warning  mb-4'style={{margin:'6px'}}onClick={()=>filterItem("electronics")} >Electronics</button>
        <button type="button" className='btn btn-warning  mb-4'style={{margin:'6px'}} onClick={()=>filterItem("women's clothing")}>Women's clothing</button>

       
      <div className="container my-4">
                
                <div className="row">
                    {
                        Item.map((element) => {
                            
                            const {  image } = element
                            

                            return (
                                <div className="card" style={{ width: "20rem", margin: '20px', height: 'auto' }}>
                                    <img style={{ height: '250px', width: '240px', margin: "5px" }} src={image} className="card-img-top" alt="..." />
                                    <div className="card-body" >
                                       
                                        ⭐⭐⭐⭐⭐
                                        
                                        
                                    </div>
                                </div>
                            )

                        })
                    }

                </div>
            </div>
    </div>
  )
}

export default Gallery
