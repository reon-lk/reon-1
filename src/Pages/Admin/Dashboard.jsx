import React from 'react'
import Aside from '../../Layouts/AdminAside'
import Header from '../../Layouts/AdminHeader'
import Footer from '../../Layouts/Footer'

// import ApexCharts from 'apexcharts'

const Dashboard = () => {
  return (
    <>
    <Header/>
    <Aside/>

    <main id="main" class="main">

<div class="pagetitle">
  <h1 class="theme-text2">Dashboard</h1>
  <nav>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="/"><i class="bi bi-house-door"></i></a></li>
      <li class="breadcrumb-item active">Dashboard</li>
    </ol>
  </nav>
</div>
{/* <!-- End Page Title --> */}

<section class="section dashboard">
  <div class="row">

    
        {/* <!-- Users Card --> */}
        <div class="col-xxl-3 col-xl-12">

          <div class="card info-card users-card">

            {/* <!-- <div class="filter">
              <a class="icon" href="/" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li class="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><a class="dropdown-item" href="/">Today</a></li>
                <li><a class="dropdown-item" href="/">This Month</a></li>
                <li><a class="dropdown-item" href="/">This Year</a></li>
              </ul>
            </div> --> */}

            <div class="card-body">
              <h5 class="card-title">Users</h5>

              <div class="d-flex align-items-center">
                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i class="bi bi-people"></i>
                </div>
                <div class="ps-3">
                  <h6>1244</h6>
                  <span class="text-danger small pt-1 fw-bold"><i class="bi bi-caret-down-fill"></i>12%</span><span class="text-muted small pt-2 ps-1 info-card-text">Last 48 Hours</span>
                </div>
              </div>

            </div>
          </div>

        </div>
        {/* <!-- End Users Card --> */}

        {/* <!-- Owners Card --> */}
        <div class="col-xxl-3 col-xl-12">

          <div class="card info-card owners-card">

            <div class="card-body">
              <h5 class="card-title">Owners</h5>

              <div class="d-flex align-items-center">
                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i class="bi bi-person"></i>
                </div>
                <div class="ps-3">
                  <h6>12</h6>
                  <span class="text-success small pt-1 fw-bold"><i class="bi bi-caret-up-fill"></i>2%</span><span class="text-muted small pt-2 ps-1 info-card-text">Last 48 Hours</span>

                </div>
              </div>

            </div>
          </div>

        </div>
        {/* <!-- End Owners Card --> */}

        {/* <!-- Vehicles Card --> */}
        <div class="col-xxl-3 col-xl-12">

          <div class="card info-card vehicles-card">

            <div class="card-body">
              <h5 class="card-title">Vehicles</h5>

              <div class="d-flex align-items-center">
                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i class="bi bi-car-front"></i>
                </div>
                <div class="ps-3">
                  <h6>10</h6>
                  <span class="text-danger small pt-1 fw-bold"><i class="bi bi-caret-down-fill"></i>1%</span><span class="text-muted small pt-2 ps-1 info-card-text">Last 48 Hours</span>

                </div>
              </div>

            </div>
          </div>

        </div>
        {/* <!-- End Vehicles Card --> */}

        {/* <!-- Hires Card --> */}
        <div class="col-xxl-3 col-md-6">
          <div class="card info-card hires-card">

            <div class="card-body">
              <h5 class="card-title">Hires</h5>

              <div class="d-flex align-items-center">
                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i class="bi bi-geo"></i>
                </div>
                <div class="ps-3">
                  <h6 class="mb-2">145</h6>
                  <span class="text-success small pt-1 fw-bold"><i class="bi bi-caret-up-fill"></i>12%</span><span class="text-muted small pt-2 ps-1 info-card-text">Last 48 Hours</span>

                </div>
              </div>
            </div>

          </div>
        </div>
        {/* <!-- End Hires Card --> */}

    {/* <!-- Left side columns --> */}
    <div class="col-lg-8">
      <div class="row">

        {/* <!-- Recent Page Requests --> */}
        <div class="col-12">
          <div class="card recent-requests overflow-auto">

            <div class="card-body">
              <h5 class="card-title">Recent Page Requests</h5>

              <table class="table table-borderless datatable">
                <thead>
                  <tr>
                    <th scope="col">#</th>
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
                    <th scope="row"><a href="/">#2457</a></th>
                    <td>User Name 1</td>
                    <th scope="row"><a href="/">#1</a></th>
                    <td>Page Name 1</td>
                    <td><span class="badge bg-success">Approved</span></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <th scope="row"><a href="/">#2147</a></th>
                    <td>User Name 2</td>
                    <th scope="row"><a href="/">#11</a></th>
                    <td>Page Name 2</td>
                    <td><span class="badge bg-warning">Pending</span></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <th scope="row"><a href="/">#2049</a></th>
                    <td>User Name 3</td>
                    <th scope="row"><a href="/">#6</a></th>
                    <td>Page Name 3</td>
                    <td><span class="badge bg-success">Approved</span></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <th scope="row"><a href="/">#2644</a></th>
                    <td>User Name 4</td>
                    <th scope="row"><a href="/">#21</a></th>
                    <td>Page Name 4</td>
                    <td><span class="badge bg-danger">Rejected</span></td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <th scope="row"><a href="/">#2644</a></th>
                    <td>User Name 15</td>
                    <th scope="row"><a href="/">#5</a></th>
                    <td>Page Name 5</td>
                    <td><span class="badge bg-success">Approved</span></td>
                  </tr>
                </tbody>
              </table>

            </div>

          </div>
        </div>
        {/* <!-- End Recent Page Requests --> */}

        {/* <!-- Recent Vehicle Requests --> */}
        <div class="col-12">
          <div class="card recent-requests overflow-auto">

            <div class="card-body">
              <h5 class="card-title">Recent Vehicle Requests</h5>

              <table class="table table-borderless datatable">
                <thead>
                  <tr>
                    <th scope="col">#</th>
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
                    <th scope="row"><a href="/">#1</a></th>
                    <td>Page Name 1</td>
                    <th scope="row"><a href="/">#11</a></th>
                    <td>Car</td>
                    <td>Maruti Suzuki Alto 800</td>
                    <td><span class="badge bg-success">Approved</span></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <th scope="row"><a href="/">#4</a></th>
                    <td>Page Name 3</td>
                    <th scope="row"><a href="/">#15</a></th>
                    <td>Car</td>
                    <td>Mahindra Scorpio</td>
                    <td><span class="badge bg-warning">Pending</span></td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <th scope="row"><a href="/">#1</a></th>
                    <td>Page Name 1</td>
                    <th scope="row"><a href="/">#11</a></th>
                    <td>Car</td>
                    <td>Maruti Suzuki Alto 800</td>
                    <td><span class="badge bg-success">Approved</span></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <th scope="row"><a href="/">#4</a></th>
                    <td>Page Name 3</td>
                    <th scope="row"><a href="/">#15</a></th>
                    <td>Car</td>
                    <td>Mahindra Scorpio</td>
                    <td><span class="badge bg-warning">Pending</span></td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <th scope="row"><a href="/">#1</a></th>
                    <td>Page Name 1</td>
                    <th scope="row"><a href="/">#11</a></th>
                    <td>Car</td>
                    <td>Maruti Suzuki Alto 800</td>
                    <td><span class="badge bg-success">Approved</span></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <th scope="row"><a href="/">#4</a></th>
                    <td>Page Name 3</td>
                    <th scope="row"><a href="/">#15</a></th>
                    <td>Car</td>
                    <td>Mahindra Scorpio</td>
                    <td><span class="badge bg-warning">Pending</span></td>
                  </tr>
                </tbody>
              </table>

            </div>

          </div>
        </div>
        {/* <!-- End Recent Vehicle Requests --> */}
        
        {/* <!-- Reports --> */}
        <div class="col-12">
          <div class="card">

            <div class="filter">
              <a class="icon" href="/" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li class="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><a class="dropdown-item" href="/">Today</a></li>
                <li><a class="dropdown-item" href="/">This Month</a></li>
                <li><a class="dropdown-item" href="/">This Year</a></li>
              </ul>
            </div>

            <div class="card-body">
              <h5 class="card-title">Reports <span>/ Last 12 Houres</span></h5>

              {/* <!-- Line Chart --> */}
              <div id="reportsChart"></div>

              {/* <script>
                document.addEventListener("DOMContentLoaded", () = {
                  new ApexCharts(document.querySelector("#reportsChart"), {
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
                    colors: ['#099bdf', '#ffbc03fd'],
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
    <div class="col-lg-4">

      {/* <!-- Recent Hire --> */}
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Recent Hires <span>| Last 7 Hires</span></h5>

          <div class="activity">

            <div class="activity-item d-flex">
              <div class="activite-label">46 min</div>
              <i class="bi bi-circle-fill activity-badge align-self-start"></i>
              <div class="activity-content">
                Quia quae rerum <a href="/" class="fw-bold text-dark">explicabo officiis</a> beatae
              </div>
            </div>
            {/* <!-- End activity item--> */}

            <div class="activity-item d-flex">
              <div class="activite-label">1 hour</div>
              <i class="bi bi-circle-fill activity-badge align-self-start"></i>
              <div class="activity-content">
                Quia quae rerum <a href="/" class="fw-bold text-dark">explicabo officiis</a> beatae
              </div>
            </div>
            {/* <!-- End activity item--> */}

            <div class="activity-item d-flex">
              <div class="activite-label">13 hour</div>
              <i class="bi bi-circle-fill activity-badge align-self-start"></i>
              <div class="activity-content">
                Quia quae rerum <a href="/" class="fw-bold text-dark">explicabo officiis</a> beatae
              </div>
            </div>
            {/* <!-- End activity item--> */}

            <div class="activity-item d-flex">
              <div class="activite-label">1 day</div>
              <i class="bi bi-circle-fill activity-badge align-self-start"></i>
              <div class="activity-content">
                Quia quae rerum <a href="/" class="fw-bold text-dark">explicabo officiis</a> beatae
              </div>
            </div>
            {/* <!-- End activity item--> */}

            <div class="activity-item d-flex">
              <div class="activite-label">1 day</div>
              <i class="bi bi-circle-fill activity-badge align-self-start"></i>
              <div class="activity-content">
                Quia quae rerum <a href="/" class="fw-bold text-dark">explicabo officiis</a> beatae
              </div>
            </div>
            {/* <!-- End activity item--> */}

          </div>

        </div>
      </div>
      {/* <!-- End Hire --> */}

      
        {/* <!-- Top Hiring --> */}
          <div class="card top-hiring overflow-auto">

            <div class="card-body pb-0">
              <h5 class="card-title">Top Hiring</h5>

              <table class="table table-borderless datatable">
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
                    <th scope="row"><a href="/" class="fw-bold vid">#5</a></th>
                    <th scope="row"><a href="/"><img src="assets/img/vehicle-01.png" alt="/"/></a></th>
                    <td><a href="/" class="fw-bold page">Page Name 1</a></td>
                    <td class="fw-bold">124</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="/" class="fw-bold vid">#5</a></th>
                    <th scope="row"><a href="/"><img src="assets/img/vehicle-02.png" alt="/"/></a></th>
                    <td><a href="/" class="fw-bold page">Page Name 1</a></td>
                    <td class="fw-bold">41</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="/" class="fw-bold vid">#5</a></th>
                    <th scope="row"><a href="/"><img src="assets/img/vehicle-03.png" alt="/"/></a></th>
                    <td><a href="/" class="fw-bold page">Page Name 1</a></td>
                    <td class="fw-bold">98</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="/" class="fw-bold vid">#5</a></th>
                    <th scope="row"><a href="/"><img src="assets/img/vehicle-04.png" alt="/"/></a></th>
                    <td><a href="/" class="fw-bold page">Page Name 1</a></td>
                    <td class="fw-bold">74</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="/" class="fw-bold vid">#5</a></th>
                    <th scope="row"><a href="/"><img src="assets/img/vehicle-04.png" alt="/"/></a></th>
                    <td><a href="/" class="fw-bold page">Page Name 1</a></td>
                    <td class="fw-bold">74</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="/" class="fw-bold vid">#5</a></th>
                    <th scope="row"><a href="/"><img src="assets/img/vehicle-04.png" alt="/"/></a></th>
                    <td><a href="/" class="fw-bold page">Page Name 1</a></td>
                    <td class="fw-bold">74</td>
                  </tr>
                </tbody>
              </table>

            </div>

          </div>
          {/* <!-- End Top Hiring --> */}

      {/* <!-- Blog posts --> */}
      <div class="card pt-2 pb-4">

        <div class="card-body pb-0">
          <h5 class="card-title">Blog Posts</h5>

          <div class="blog-post">

            <div class="post-item clearfix">
              <img src="assets/img/news-3.jpg" alt="/"/>
              <h4><a href="/" target="_blank">Id quia et et ut maxime similique occaecati ut</a></h4>
              <p>Fugiat voluptas vero eaque accusantium eos. Consequuntur sed ipsam et totam...</p>
            </div>

            <div class="post-item clearfix">
              <img src="assets/img/news-4.jpg" alt="/"/>
              <h4><a href="/" target="_blank">Laborum corporis quo dara net para</a></h4>
              <p>Qui enim quia optio. Eligendi aut asperiores enim repellendusvel rerum cuder...</p>
            </div>

            <div class="post-item clearfix">
              <img src="assets/img/news-5.jpg" alt="/"/>
              <h4><a href="/" target="_blank">Et dolores corrupti quae illo quod dolor</a></h4>
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
{/* <!-- End #main --> */}
<Footer/>

    </>
  )
}

export default Dashboard