import React from 'react'

const UserAside = () => {
  return (
     <aside id="sidebar" className="sidebar">

    <ul className="sidebar-nav" id="sidebar-nav">

      <li className="nav-item">
        <a className="nav-link " href="/category">
          <i className="bi bi-grid"></i>
          
          Categories
 
        </a>
      </li>
      {/* <!-- End Dashboard Nav --> */}

      <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#Farming-nav" href="/" data-bs-toggle="collapse" >
          <i className="bi bi-car-front"></i>
          <span className=' category' >Farming</span><i className="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="Farming-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="Farming-Tractors">
              <i className="bi bi-circle"></i><span>Tractors</span>
            </a>
          </li>
          <li>
            <a href="Farming-Harvester">
              <i className="bi bi-circle"></i><span>Combine or Harvester</span>
            </a>
          </li>
          <li>
            <a href="Seeders">
              <i className="bi bi-circle"></i><span>Seeders</span>
            </a>
          </li>
          <li>
            <a href="Autonomous">
              <i className="bi bi-circle"></i><span> Autonomous</span>
            </a>
          </li>
          <li>
            <a href="deutz fahr">
              <i className="bi bi-circle"></i><span>deutz fahr </span>
            </a>
          </li>
          <li>
            <a href="deutz fahr">
              <i className="bi bi-circle"></i><span>deutz fahr </span>
            </a>
          </li>
          <li>
            <a href="deutz fahr">
              <i className="bi bi-circle"></i><span>deutz fahr </span>
            </a>
          </li>
        </ul>
      </li>
      {/* <!-- End Farming Nav --> */}


      <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#Construction-nav" href="/" data-bs-toggle="collapse" >
          <i className="bi bi-car-front"></i>
          <span>Construction</span><i className="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="Construction-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="Farming-Tractors">
              <i className="bi bi-circle"></i><span>Tractors</span>
            </a>
          </li>
          <li>
            <a href="Construction-Bulldozers">
              <i className="bi bi-circle"></i><span>Bulldozers</span>
            </a>
          </li>
          <li>
            <a href="Constructions-FrontLoaders">
              <i className="bi bi-circle"></i><span>Front Loaders</span>
            </a>
          </li>
          <li>
            <a href="Autonomous">
              <i className="bi bi-circle"></i><span>Dump Trucks</span>
            </a>
          </li>
          <li>
            <a href="deutz fahr">
              <i className="bi bi-circle"></i><span>Backhoes</span>
            </a>
          </li>
        </ul>
      </li>
      {/* <!-- End Construction Nav --> */}
    


    <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#Tour-nav" href="/" data-bs-toggle="collapse" >
          <i className="bi bi-car-front"></i>
          <span>Tour</span><i className="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="Tour-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="Tractors">
              <i className="bi bi-circle"></i><span>Van</span>
            </a>
          </li>
          <li>
            <a href="Bus">
              <i className="bi bi-circle"></i><span>Bus</span>
            </a>
          </li>
          <li>
            <a href="MiniBus">
              <i className="bi bi-circle"></i><span>Mini bus</span>
            </a>
          </li>
          <li>
            <a href="Autonomous">
              <i className="bi bi-circle"></i><span> Balloon bus</span>
            </a>
          </li>
          <li>
            <a href="deutz fahr">
              <i className="bi bi-circle"></i><span>Taxi </span>
            </a>
          </li>
          <li>
            <a href="deutz fahr">
              <i className="bi bi-circle"></i><span>Car </span>
            </a>
          </li>
          
        </ul>
      </li>
      {/* <!-- End Tour Nav --> */}


      
      <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#Transportation-nav" href="/" data-bs-toggle="collapse" >
          <i className="bi bi-car-front"></i>
          <span>Transportation</span><i className="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="Transportation-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="Tractors">
              <i className="bi bi-circle"></i><span>Container transport</span>
            </a>
          </li>
          <li>
            <a href="Combine or Harvester">
              <i className="bi bi-circle"></i><span>tripper truck</span>
            </a>
          </li>
          <li>
            <a href="Seeders">
              <i className="bi bi-circle"></i><span>Canter</span>
            </a>
          </li>
          <li>
            <a href="Autonomous">
              <i className="bi bi-circle"></i><span>Super great</span>
            </a>
          </li>

        </ul>
      </li>
      {/* <!-- End Transportation Nav --> */}


      <a className="nav-link collapsed" data-bs-target="#schoolServices-nav" href="/" data-bs-toggle="collapse" >
          <i className="bi bi-car-front"></i>
          <span>School services</span>
      </a>


      <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#WeddingAndEvents-nav" href="/" data-bs-toggle="collapse" >
          <i className="bi bi-car-front"></i>
          <span>Events</span><i className="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="WeddingAndEvents-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="Wedding">
              <i className="bi bi-circle"></i><span>Wedding</span>
            </a>
          </li>
          <li>
            <a href="Combine or Harvester">
              <i className="bi bi-circle"></i><span>Funeral</span>
            </a>
          </li>

          
        </ul>
      </li>
      {/* <!-- End Wedding and events Nav --> */}
  </ul>
  </aside>
  // <!-- End Sidebar-->

  );
}

export default UserAside