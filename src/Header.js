import React from 'react'

const header = () => {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img style={{height:'500px'}} src="https://www.living.com.ng/wp-content/uploads/2021/08/Shopping-Quotes-For-Instagram.jpg" class="d-block w-100" alt="..."/>
      <div className="card-img-overlay">
    <h5 className="card-title" style={{fontSize:"5rem",color:'black'}}>Life is boring without.<br></br> sho<span style={{color:"red"}}>pp</span>ing</h5>
    
    <p className="card-text"></p>
  </div>
    </div>
    <div className="carousel-item">
      <img style={{height:'500px'}} src="https://www.cohosts.ca/wp-content/uploads/2020/10/shopping-shannon-springs-2.jpg" className="d-block w-100" alt="..."/>
      <div className="card-img-overlay">
    <h5 className="card-title"style={{fontSize:"5rem",color:'black'}}>Shopping is a bit of relaxing hobby for me, which is sometimes troubling for the bank balance.</h5>
    <p className="card-text"></p>
    <p className="card-text"></p>
  </div>
    </div>
    <div className="carousel-item">
      <img style={{height:'500px'}}src="https://www.cvisionlab.com/wp-content/themes/cvisionlab/images/editor/cases/fashion/demo-pic-3.jpg" className="d-block w-100" alt="..."/>
      <div className="card-img-overlay">
    <h5 className="card-title"style={{fontSize:"5rem",color:'black'}}>Work hard so you can shop harder</h5>
    <p className="card-text"></p>
    <p className="card-text"></p>
  </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default header
