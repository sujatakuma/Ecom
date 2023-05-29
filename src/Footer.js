import React from 'react'

const Footer = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center', marginTop: '7px', marginBottom: '3px' }}>COUSTUMER SERVICE</h1>
            <div className="card-group" >
  <div className="card" style={{margin:'5px', padding:'2px', height:'250px', width:'400px'}}>
    <img style={{height:'150px', width:'300px'}} src="https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/Box-t3.png" class="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title"style={{textAlign:'center'}}>Customer Service</h5>
      
    </div>
  </div>
  <div className="card" style={{margin:'5px', padding:'2px'}}>
    <img style={{height:'150px', width:'300px', alignItems:'center'}} src="https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/returns-box-blue.png" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title" style={{textAlign:'center'}}>Returns, Refunds</h5>
      
    </div>
  </div>
  <div className="card" style={{margin:'5px', padding:'2px'}}>
    <img  style={{height:'150px', width:'300px'}} src="https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/family_device.png"  className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title" style={{textAlign:'center'}}>Digital Services and Device Support</h5>
      
    </div>
  </div>
</div>
            </div>


            )
}

            export default Footer
