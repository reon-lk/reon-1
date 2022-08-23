import React from 'react'
import UserHeader from '../../../Layouts/UserHeader'
import Dropdown from 'react-bootstrap/Dropdown';


const VehicleDetails = () => {
  return (
    <>
    <UserHeader/>

<main style={{paddingTop: "100px", paddingLeft:"40px"}}>
        <div className='row'>
            <div className='col-lg-5'>
                <div className='card size' style={{width:"550px"}}>
                <p style={{textAlign:"center",fontSize:"18px"}}>Description</p>
                    <div style={{padding:"25px"}}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, minima in architecto, placeat iste cum reprehenderit esse facilis commodi iure quibusdam obcaecati voluptatum nobis totam nisi impedit. Tempore, architecto est.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. In fuga saepe, blanditiis sit eaque corrupti dolorum assumenda numquam, magnam similique quibusdam a voluptatum, iure officia dignissimos. Dolorum numquam ipsum ratione?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, in impedit et quae pariatur facilis similique odit repellendus quos voluptates asperiores obcaecati animi non deleniti, commodi dolores consectetur iste. Delectus.
                    </div>
                </div>
                <Dropdown style={{paddingLeft:"50px"}}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/">Kopay-Jaffna=1000</Dropdown.Item>
                        <Dropdown.Item href="/">Inuvil-Jaffna=1000</Dropdown.Item>
                        <Dropdown.Item href="/">Mathakal-Jaffna=2000</Dropdown.Item>
                        <Dropdown.Item href="/">pointpedro-jaffna=5000</Dropdown.Item>
                        <Dropdown.Item href="/">Kodikaamam-Jaffna=1200</Dropdown.Item>
                    </Dropdown.Menu>
                    <button>Hire</button>
                </Dropdown>

            </div>
            
            <div className='col-lg-7 card size'>
                <img src='assets/img/Transperth_Volgren_CR228L_bodied_Volvo_B7RLE.jpg' alt='logo' style={{paddingRight:"40px"}}/> 
            </div>
            
        </div>
        
</main>
    </>
  )
}

export default VehicleDetails