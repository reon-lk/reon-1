import React from 'react'
import Aside from '../../Layouts/AdminAside'
import Header from '../../Layouts/AdminHeader'

const HireDetails = () => {
  return (
    <>
    <Header/>
    <Aside/>

    <main id="main" class="main">

<div class="pagetitle">
  <h1 class="theme-text2">Hire Details</h1>
  <nav>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="/"><i class="bi bi-house-door"></i></a></li>
      <li class="breadcrumb-item"><a href="HiresCar">Hires</a></li>
      <li class="breadcrumb-item active">Hire Details</li>
    </ol>
  </nav>
</div>
{/* <!-- End Page Title --> */}

<section class="section user-details">
  <div class="row">

    <div class="card">
      <div class="card-body">
        {/* <!-- User Details --> */}
        <table class="table mt-3 table-bordered">
          <tbody>
            <tr>
              <th colspan="2" class="text-center">Hire Details</th>
              <td></td>
              <th colspan="2" class="text-center">Vehicle Details</th>
            </tr>
            <tr>
              <th scope="row" class="col-sm-2">Hire ID</th>
              <th>#10983</th>
              <td></td>
              <th scope="row" class="col-sm-2">Vehicle ID</th>
              <th><a href="/" target="_blank">#0127</a></th>
            </tr>
            <tr>
              <th scope="row" class="col-sm-2">Status</th>
              <td><span class="badge bg-warning">Pending</span></td>
              <td></td>
              <th scope="row" class="col-sm-2">Vehicle Type</th>
              <td>Car</td>
            </tr>
            <tr>
              <th scope="row" class="col-sm-2">Vehicle ID</th>
              <td>#0127</td>
              <td></td>
              <th scope="row" class="col-sm-2">Vehicle Name</th>
              <td>Maruti Suzuki Alto 800</td>
            </tr>
            <tr>
              <th scope="row" class="col-sm-2">Vehicle Type</th>
              <td>Car</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" class="col-sm-2">Vehicle ID</th>
              <td>#0127</td>
              <td></td>
            </tr>

          </tbody>
        </table>
        {/* <!-- End User Details --> */}
      </div>

      <div class="card-footer">
        <a href="HiresCar"><button type="button" class="mx-2 btn btn-secondary"><i class="bi bi-chevron-double-left"></i> Back</button></a>
      </div>
    </div>

  </div>
</section>

</main>
{/* <!-- End #main --> */}
    </>
  )
}

export default HireDetails