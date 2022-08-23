import React from 'react'
import UserAside from '../../../Layouts/UserAside'
import UserHeader from '../../../Layouts/UserHeader'
import Footer from '../../../Layouts/Footer'

const Category = () => {
  return (
   <>
   <UserHeader/>
   <UserAside/>

   <main id="main" className="main">
    <div className=" manage-user overflow-auto">


  <div className="gallery">
  <a href="Taxi">
    <img src="assets/img/Taxi.jpg" alt="Taxi" width="600" height="400"/>
  </a>
  <div className="desc">Taxi</div>
  </div>

  <div className="gallery">
  <a href="VehicleDetails">
    <img src="assets/img/miniBus.jpeg" alt="Mini Bus" width="600" height="400"/>
  </a>
  <div className="desc">Mini Bus</div>
  </div>

  <div className="gallery">
  <a href="Van">
    <img src="assets/img/Van.jpg" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <div className="desc">Van</div>
  </div>

  <div className="gallery">
  <a href="Tipper">
    <img src="assets/img/Tipper.jpeg" alt="Tipper" width="600" height="400"/>
  </a>
  <div className="desc">Tipper</div>
  </div>

  <div className="gallery">
  <a href="Canter">
    <img src="assets/img/Canter.jpeg" alt="Canter" width="600" height="400"/>
  </a>
  <div className="desc">Canter</div>
  </div>

  <div className="gallery">
  <a href="Car">
    <img src="assets/img/vehicle-05.png" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <div className="desc">Car</div>
  </div>

  <div className="gallery">
  <a href="Tractor">
    <img src="assets/img/tractor.jpg" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <div className="desc">Tractor</div>
  </div>

  <div className="gallery">
  <a href="Bulldozar">
    <img src="assets/img/bulldozer.jpeg" alt="bulldozer.jpeg" width="600" height="400"/>
  </a>
  <div className="desc">bulldozer</div>
  </div>

  <div className="gallery">
  <a href="Harvester">
    <img src="assets/img/harvester.jpeg" alt="harvester" width="600" height="400"/>
  </a>
  <div className="desc">harvester</div>
  </div>

  <div className="gallery">
  <a href="FrontLoaders">
    <img src="assets/img/frontLoaders.jpg" alt="frontLoaders" width="600" height="400"/>
  </a>
  <div className="desc">frontLoaders</div>
  </div>
  </div>
   </main>
   <Footer/>
   </>
  )
}

export default Category