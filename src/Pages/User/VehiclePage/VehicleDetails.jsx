import React from 'react'
import UserHeader from '../../../Layouts/UserHeader'
import Dropdown from 'react-bootstrap/Dropdown';
import Footer from '../../../Layouts/Footer';
import Booking from '../../../Layouts/Booking';


const VehicleDetails = () => {
  return (
    <>
    <UserHeader/>

<main style={{paddingLeft:"40px",paddingTop:"65px"}}>
        <div className='row'>
            <div className='col-lg-5'>
                <div className='card size' style={{width:"550px"}}>
                <p style={{textAlign:"center",fontSize:"18px"}}>Description</p>
                    <div style={{padding:"25px"}}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, minima in architecto, placeat iste cum reprehenderit esse facilis commodi iure quibusdam obcaecati voluptatum nobis totam nisi impedit. Tempore, architecto est.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. In fuga saepe, blanditiis sit eaque corrupti dolorum assumenda numquam, magnam similique quibusdam a voluptatum, iure officia dignissimos. Dolorum numquam ipsum ratione?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, in impedit et quae pariatur facilis similique odit repellendus quos voluptates asperiores obcaecati animi non deleniti, commodi dolores consectetur iste. Delectus.<br/>
                    <div style={{paddingLeft:"160px"}}>
                    {/* <button type="button" class="btn btn-warning">BookNow</button> */}
                    <Booking/>
                    </div>
                    </div>
                </div>
                <div style={{paddingLeft:"20%"}}>
                </div>
            </div>
            
            <div className='col-lg-7 card size'>
                <img src='assets/img/Transperth_Volgren_CR228L_bodied_Volvo_B7RLE.jpg' alt='logo' style={{paddingRight:"40px"}}/>
                <Dropdown style={{paddingLeft:"300px"}}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Prices
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/">Kopay-Jaffna=1000</Dropdown.Item>
                        <Dropdown.Item href="/">Inuvil-Jaffna=1000</Dropdown.Item>
                        <Dropdown.Item href="/">Mathakal-Jaffna=2000</Dropdown.Item>
                        <Dropdown.Item href="/">pointpedro-jaffna=5000</Dropdown.Item>
                        <Dropdown.Item href="/">Kodikaamam-Jaffna=1200</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> 
            </div>
            
        </div>
            <div style={{paddingLeft:"200px"}}>
            <div class="card mb-4" style={{maxWidth: "740px"}}>
            <div class="row g-0">
            <div class="col-md-4">
            <img src="..." class="img-fluid rounded-start" alt="..."/>
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Company/Owner Details</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor placeat, reprehenderit, aut dolorum cupiditate accusantium ut minima quasi laborum distinctio praesentium. Adipisci, ullam ipsum minima obcaecati voluptates quas! Eius, qui!</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            </div>
        </div>
        </div>
        
</main>
<Footer/>
    </>
  )
}

export default VehicleDetails