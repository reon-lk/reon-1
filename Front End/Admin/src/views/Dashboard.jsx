import React from 'react';
import Header from '../layout/Header';
import Aside from '../layout/Aside';
import Footer from '../layout/Footer';


const Dashboard = () => {
  return (
  <>
    <Header/>
    <Aside/>
    


    <main id="main" className="main">

<div className="pagetitle">
  <h1 className="theme-text2">Dashboard</h1>
  <nav>
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><a href="/"><i className="bi bi-house-door"></i></a></li>
      <li className="breadcrumb-item active">Dashboard</li>
    </ol>
  </nav>
</div>
{/* <!-- End Page Title --> */}

<section className="section dashboard">
  <div className="row">

    
        {/* <!-- Users Card --> */}
        <div className="col-xxl-3 col-xl-12">

          <div className="card info-card users-card">

            {/* <!-- <div className="filter">
              <a className="icon" href="/" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li className="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><a className="dropdown-item" href="/">Today</a></li>
                <li><a className="dropdown-item" href="/">This Month</a></li>
                <li><a className="dropdown-item" href="/">This Year</a></li>
              </ul>
            </div> --> */}

            <div className="card-body">
              <h5 className="card-title">Users</h5>

              <div className="d-flex align-items-center">
                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i className="bi bi-people"></i>
                </div>
                <div className="ps-3">
                  <h6>1244</h6>
                  <span className="text-danger small pt-1 fw-bold"><i className="bi bi-caret-down-fill"></i>12%</span><span className="text-muted small pt-2 ps-1 info-card-text">Last 48 Hours</span>
                </div>
              </div>

            </div>
          </div>

        </div>
        {/* <!-- End Users Card --> */}

        {/* <!-- Owners Card --> */}
        <div className="col-xxl-3 col-xl-12">

          <div className="card info-card owners-card">

            <div className="card-body">
              <h5 className="card-title">Owners</h5>

              <div className="d-flex align-items-center">
                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i className="bi bi-person"></i>
                </div>
                <div className="ps-3">
                  <h6>12</h6>
                  <span className="text-success small pt-1 fw-bold"><i className="bi bi-caret-up-fill"></i>2%</span><span className="text-muted small pt-2 ps-1 info-card-text">Last 48 Hours</span>

                </div>
              </div>

            </div>
          </div>

        </div>
        {/* <!-- End Owners Card --> */}

        {/* <!-- Vehicles Card --> */}
        <div className="col-xxl-3 col-xl-12">

          <div className="card info-card vehicles-card">

            <div className="card-body">
              <h5 className="card-title">Vehicles</h5>

              <div className="d-flex align-items-center">
                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i className="bi bi-car-front"></i>
                </div>
                <div className="ps-3">
                  <h6>10</h6>
                  <span className="text-danger small pt-1 fw-bold"><i className="bi bi-caret-down-fill"></i>1%</span><span className="text-muted small pt-2 ps-1 info-card-text">Last 48 Hours</span>

                </div>
              </div>

            </div>
          </div>

        </div>
        {/* <!-- End Vehicles Card --> */}

        {/* <!-- Hires Card --> */}
        <div className="col-xxl-3 col-md-6">
          <div className="card info-card hires-card">

            <div className="card-body">
              <h5 className="card-title">Hires</h5>

              <div className="d-flex align-items-center">
                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i className="bi bi-geo"></i>
                </div>
                <div className="ps-3">
                  <h6 className="mb-2">145</h6>
                  <span className="text-success small pt-1 fw-bold"><i className="bi bi-caret-up-fill"></i>12%</span><span className="text-muted small pt-2 ps-1 info-card-text">Last 48 Hours</span>

                </div>
              </div>
            </div>

          </div>
        </div>
        {/* <!-- End Hires Card --> */}

    {/* <!-- Left side columns --> */}
    <div className="col-lg-8">
      <div className="row">

        {/* <!-- Recent Page Requests --> */}
        <div className="col-12">
          <div className="card recent-requests overflow-auto">

            <div className="card-body">
              <h5 className="card-title">Recent Page Requests</h5>

              <table className="table table-borderless datatable">
                <thead>
                  <tr>
                    <th scope="col">/</th>
                    <th scope="col">UID</th>
                    <th scope="col">User</th>
                    <th scope="col">PID</th>
                    <th scope="col">Page</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <th scope="row"><a href="/">/2457</a></th>
                    <td>User Name 1</td>
                    <th scope="row"><a href="/">/1</a></th>
                    <td>Page Name 1</td>
                    <td><span className="badge bg-success">Approved</span></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <th scope="row"><a href="/">/2147</a></th>
                    <td>User Name 2</td>
                    <th scope="row"><a href="/">/11</a></th>
                    <td>Page Name 2</td>
                    <td><span className="badge bg-warning">Pending</span></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <th scope="row"><a href="/">/2049</a></th>
                    <td>User Name 3</td>
                    <th scope="row"><a href="/">/6</a></th>
                    <td>Page Name 3</td>
                    <td><span className="badge bg-success">Approved</span></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <th scope="row"><a href="/">/2644</a></th>
                    <td>User Name 4</td>
                    <th scope="row"><a href="/">/21</a></th>
                    <td>Page Name 4</td>
                    <td><span className="badge bg-danger">Rejected</span></td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <th scope="row"><a href="/">/2644</a></th>
                    <td>User Name 15</td>
                    <th scope="row"><a href="/">/5</a></th>
                    <td>Page Name 5</td>
                    <td><span className="badge bg-success">Approved</span></td>
                  </tr>
                </tbody>
              </table>

            </div>

          </div>
        </div>
        {/* <!-- End Recent Page Requests -->

        <!-- Recent Vehicle Requests --> */}
        <div className="col-12">
          <div className="card recent-requests overflow-auto">

            <div className="card-body">
              <h5 className="card-title">Recent Vehicle Requests</h5>

              <table className="table table-borderless datatable">
                <thead>
                  <tr>
                    <th scope="col">/</th>
                    <th scope="col">PID</th>
                    <th scope="col">Page</th>
                    <th scope="col">VID</th>
                    <th scope="col">Vehicle Type</th>
                    <th scope="col">Vehicle</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <th scope="row"><a href="/">/1</a></th>
                    <td>Page Name 1</td>
                    <th scope="row"><a href="/">/11</a></th>
                    <td>Car</td>
                    <td>Maruti Suzuki Alto 800</td>
                    <td><span className="badge bg-success">Approved</span></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <th scope="row"><a href="/">/4</a></th>
                    <td>Page Name 3</td>
                    <th scope="row"><a href="/">/15</a></th>
                    <td>Car</td>
                    <td>Mahindra Scorpio</td>
                    <td><span className="badge bg-warning">Pending</span></td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <th scope="row"><a href="/">/1</a></th>
                    <td>Page Name 1</td>
                    <th scope="row"><a href="/">/11</a></th>
                    <td>Car</td>
                    <td>Maruti Suzuki Alto 800</td>
                    <td><span className="badge bg-success">Approved</span></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <th scope="row"><a href="/">/4</a></th>
                    <td>Page Name 3</td>
                    <th scope="row"><a href="/">/15</a></th>
                    <td>Car</td>
                    <td>Mahindra Scorpio</td>
                    <td><span className="badge bg-warning">Pending</span></td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <th scope="row"><a href="/">/1</a></th>
                    <td>Page Name 1</td>
                    <th scope="row"><a href="/">/11</a></th>
                    <td>Car</td>
                    <td>Maruti Suzuki Alto 800</td>
                    <td><span className="badge bg-success">Approved</span></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <th scope="row"><a href="/">/4</a></th>
                    <td>Page Name 3</td>
                    <th scope="row"><a href="/">/15</a></th>
                    <td>Car</td>
                    <td>Mahindra Scorpio</td>
                    <td><span className="badge bg-warning">Pending</span></td>
                  </tr>
                </tbody>
              </table>

            </div>

          </div>
        </div>
        {/* <!-- End Recent Vehicle Requests -->
        
        <!-- Reports --> */}
        <div className="col-12">
          <div className="card">

            <div className="filter">
              <a className="icon" href="/" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li className="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><a className="dropdown-item" href="/">Today</a></li>
                <li><a className="dropdown-item" href="/">This Month</a></li>
                <li><a className="dropdown-item" href="/">This Year</a></li>
              </ul>
            </div>

            <div className="card-body">
              <h5 className="card-title">Reports <span>/ Last 12 Houres</span></h5>

              {/* <!-- Line Chart --> */}
              <div id="reportsChart"></div>

              {/* <script>
                document.addEventListener("DOMContentLoaded", () => {
                  new ApexCharts(document.querySelector("/reportsChart"), {
                    series: [{
                      name: 'Hires',
                      data: [31, 40, 2, 51, 42, 82, 56, 28, 51, 42, 82, 56, 0],
                    }, {
                      name: 'Revenue (in $)',
                      data: [11, 32, 45, 32, 34, 52, 41, 32, 45, 32, 34, 52, 0]
                    }],
                    chart: {
                      height: 350,
                      type: 'area',
                      toolbar: {
                        show: false
                      },
                    },
                    markers: {
                      size: 4
                    },
                    colors: ['/099bdf', '/ffbc03fd'],
                    fill: {
                      type: "gradient",
                      gradient: {
                        shadeIntensity: 1,
                        opacityFrom: 0.3,
                        opacityTo: 0.4,
                        stops: [0, 90, 100]
                      }
                    },
                    dataLabels: {
                      enabled: false
                    },
                    stroke: {
                      curve: 'smooth',
                      width: 2
                    },
                    xaxis: {
                      type: 'datetime',
                      categories: ["2022-07-19T00:30:00.000Z", "2022-07-19T01:30:00.000Z", "2022-07-19T02:30:00.000Z", "2022-07-19T03:30:00.000Z", "2022-07-19T04:30:00.000Z", "2022-07-19T05:30:00.000Z", "2022-07-19T06:30:00.000Z", "2022-07-19T07:30:00.000Z", "2022-07-19T08:30:00.000Z", "2022-07-19T09:30:00.000Z", "2022-07-19T10:30:00.000Z", "2022-07-19T11:30:00.000Z", "2022-07-19T12:30:00.000Z"]
                    },
                    tooltip: {
                      x: {
                        format: 'dd/MM/yyyy HH:mm'
                      },
                    }
                  }).render()
                });
              </script> */}
              {/* <!-- End Line Chart --> */}

            </div>

          </div>
        </div>
        {/* <!-- End Reports --> */}

      </div>
    </div>
    {/* <!-- End Left side columns --> */}

    {/* <!-- Right side columns --> */}
    <div className="col-lg-4">

      {/* <!-- Recent Hire --> */}
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Recent Hires <span>| Last 7 Hires</span></h5>

          <div className="activity">

            <div className="activity-item d-flex">
              <div className="activite-label">46 min</div>
              <i className="bi bi-circle-fill activity-badge align-self-start"></i>
              <div className="activity-content">
                Quia quae rerum <a href="/" className="fw-bold text-dark">explicabo officiis</a> beatae
              </div>
            </div>
            {/* <!-- End activity item--> */}

            <div className="activity-item d-flex">
              <div className="activite-label">1 hour</div>
              <i className="bi bi-circle-fill activity-badge align-self-start"></i>
              <div className="activity-content">
                Quia quae rerum <a href="/" className="fw-bold text-dark">explicabo officiis</a> beatae
              </div>
            </div>
            {/* <!-- End activity item--> */}

            <div className="activity-item d-flex">
              <div className="activite-label">13 hour</div>
              <i className="bi bi-circle-fill activity-badge align-self-start"></i>
              <div className="activity-content">
                Quia quae rerum <a href="/" className="fw-bold text-dark">explicabo officiis</a> beatae
              </div>
            </div>
            {/* <!-- End activity item--> */}

            <div className="activity-item d-flex">
              <div className="activite-label">1 day</div>
              <i className="bi bi-circle-fill activity-badge align-self-start"></i>
              <div className="activity-content">
                Quia quae rerum <a href="/" className="fw-bold text-dark">explicabo officiis</a> beatae
              </div>
            </div>
            {/* <!-- End activity item--> */}

            <div className="activity-item d-flex">
              <div className="activite-label">1 day</div>
              <i className="bi bi-circle-fill activity-badge align-self-start"></i>
              <div className="activity-content">
                Quia quae rerum <a href="/" className="fw-bold text-dark">explicabo officiis</a> beatae
              </div>
            </div>
            {/* <!-- End activity item--> */}

          </div>

        </div>
      </div>
      {/* <!-- End Hire -->

      
        <!-- Top Hiring --> */}
          <div className="card top-hiring overflow-auto">

            <div className="card-body pb-0">
              <h5 className="card-title">Top Hiring</h5>

              <table className="table table-borderless datatable">
                <thead>
                  <tr>
                    <th scope="col">VID</th>
                    <th scope="col">Preview</th>
                    <th scope="col">Page</th>
                    <th scope="col">Count</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="row"><a href="/" className="fw-bold vid">/5</a></td>
                    <th scope="row"><a href="/"><img src="assets/img/vehicle-01.png" alt=""/></a></th>
                    <td><a href="/" className="fw-bold page">Page Name 1</a></td>
                    <td className="fw-bold">124</td>
                  </tr>
                  <tr>
                    <td scope="row"><a href="/" className="fw-bold vid">/5</a></td>
                    <th scope="row"><a href="/"><img src="assets/img/vehicle-02.png" alt=""/></a></th>
                    <td><a href="/" className="fw-bold page">Page Name 1</a></td>
                    <td className="fw-bold">41</td>
                  </tr>
                  <tr>
                    <td scope="row"><a href="/" className="fw-bold vid">/5</a></td>
                    <th scope="row"><a href="/"><img src="assets/img/vehicle-03.png" alt=""/></a></th>
                    <td><a href="/" className="fw-bold page">Page Name 1</a></td>
                    <td className="fw-bold">98</td>
                  </tr>
                  <tr>
                    <td scope="row"><a href="/" className="fw-bold vid">/5</a></td>
                    <th scope="row"><a href="/"><img src="assets/img/vehicle-04.png" alt=""/></a></th>
                    <td><a href="/" className="fw-bold page">Page Name 1</a></td>
                    <td className="fw-bold">74</td>
                  </tr>
                  <tr>
                    <td scope="row"><a href="/" className="fw-bold vid">/5</a></td>
                    <th scope="row"><a href="/"><img src="assets/img/vehicle-04.png" alt=""/></a></th>
                    <td><a href="/" className="fw-bold page">Page Name 1</a></td>
                    <td className="fw-bold">74</td>
                  </tr>
                  <tr>
                    <td scope="row"><a href="/" className="fw-bold vid">/5</a></td>
                    <th scope="row"><a href="/"><img src="assets/img/vehicle-04.png" alt=""/></a></th>
                    <td><a href="/" className="fw-bold page">Page Name 1</a></td>
                    <td className="fw-bold">74</td>
                  </tr>
                </tbody>
              </table>

            </div>

          </div>
          {/* <!-- End Top Hiring -->

      <!-- Blog posts --> */}
      <div className="card pt-2 pb-4">

        <div className="card-body pb-0">
          <h5 className="card-title">Blog Posts</h5>

          <div className="blog-post">

            <div className="post-item clearfix">
              <img src="assets/img/news-3.jpg" alt=""/>
              <h4><a href="" target="_blank">Id quia et et ut maxime similique occaecati ut</a></h4>
              <p>Fugiat voluptas vero eaque accusantium eos. Consequuntur sed ipsam et totam...</p>
            </div>

            <div className="post-item clearfix">
              <img src="assets/img/news-4.jpg" alt=""/>
              <h4><a href="" target="_blank">Laborum corporis quo dara net para</a></h4>
              <p>Qui enim quia optio. Eligendi aut asperiores enim repellendusvel rerum cuder...</p>
            </div>

            <div className="post-item clearfix">
              <img src="assets/img/news-5.jpg" alt=""/>
              <h4><a href="" target="_blank">Et dolores corrupti quae illo quod dolor</a></h4>
              <p>Odit ut eveniet modi reiciendis. Atque cupiditate libero beatae dignissimos eius...</p>
            </div>

          </div>
          {/* <!-- End sidebar Blog posts--> */}

        </div>
      </div>
      {/* <!-- End News & Updates --> */}

    </div>
    {/* <!-- End Right side columns --> */}

  </div>
</section>

</main>
<Footer/>
</>
  )
}

export default Dashboard