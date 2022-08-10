import React from 'react'
import Aside from '../layout/Aside'
import Footer from '../layout/Footer'
import Header from '../layout/Header'

const Hires = () => {
  return (
<>
    <Header/>
    <Aside/>


    <main id="main" className="main">

<div className="pagetitle">
  <h1 className="theme-text2">Hires</h1>
  <nav>
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><a href="/"><i className="bi bi-house-door"></i></a></li>
      <li className="breadcrumb-item">Hires</li>
      <li className="breadcrumb-item active">Car</li>
    </ol>
  </nav>
</div>
{/* <!-- End Page Title --> */}

<section className="section manage-users">

  <div className="row">
    <div className="card pt-3 manage-pages overflow-auto">

      <div className="card-body">

        <table className="table table-striped table-borderless datatable">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Hire Id</th>
              <th scope="col">To</th>
              <th scope="col">From</th>
              <th scope="col">Hire Date</th>
              <th scope="col">Booked Date</th>
              <th scope="col">Vehicle Id</th>
              <th scope="col">Page Id</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>#10983</td>
              <td>Jaffna</td>
              <td>Colombo</td>
              <td>02 Aug 2022</td>
              <td>31 Jul 2022</td>
              <td>#0127</td>
              <td>#3043</td>
              <td><span className="badge bg-warning">Pending</span></td>
              <td className="d-flex align-items-center justify-content-between">
                <a href="hire-details.html?hid=10983"><button type="button" className="btn btn-primary theme-bg-blue">Details <i className="bi bi-receipt-cutoff"></i></button></a>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>#10983</td>
              <td>Jaffna</td>
              <td>Colombo</td>
              <td>02 Aug 2022</td>
              <td>31 Jul 2022</td>
              <td>#0127</td>
              <td>#3043</td>
              <td><span className="badge bg-success">Hired</span></td>
              <td className="d-flex align-items-center justify-content-between">
                <a href="hire.html?hid=10983"><button type="button" className="btn btn-primary theme-bg-blue">Details <i className="bi bi-receipt-cutoff"></i></button></a>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>#10983</td>
              <td>Jaffna</td>
              <td>Colombo</td>
              <td>02 Aug 2022</td>
              <td>31 Jul 2022</td>
              <td>#0127</td>
              <td>#3043</td>
              <td><span className="badge bg-danger">Declined</span></td>
              <td className="d-flex align-items-center justify-content-between">
                <a href="hire.html?hid=10983"><button type="button" className="btn btn-primary theme-bg-blue">Details <i className="bi bi-receipt-cutoff"></i></button></a>
              </td>
            </tr>
          </tbody>
        </table>

      </div>

    </div>
  </div>
</section>

</main>
{/* <!-- End #main --> */}



<a href="/" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

{/* <!-- Edit Page Popup --> */}
<div className="modal fade" id="maEditPage3043" tabIndex="-1" data-bs-backdrop="false">
<div className="modal-dialog modal-dialog-centered">
  <div className="modal-content">
    <div className="modal-header theme-bg-orange text-white">
      <h5 className="modal-title fw-bold">Edit Page #3043</h5>
      <button type="button" className="btn bg-white" data-bs-dismiss="modal" aria-label="Close"><i className="bi bi-x-lg theme-text-blue"></i></button>
    </div>
    <div className="modal-body">
      {/* <!-- Edit Page Form --> */}
      <form className="row g-3 needs-validation" noValidate>

        <div className="col-md-6">
          <label htmlFor="maEdit-user-firstName-2434" className="form-label">First Name</label>
          <input type="text" value="First Name 1" className="form-control" id="maEdit-user-firstName-2434" required/>
          <div className="valid-feedback">Looks good!</div>
          <div className="invalid-feedback">Please provide First Name.</div>
        </div>
        <div className="col-md-12">
          <label htmlFor="maEdit-page-conform-pwd-3043" className="form-label">Your Password</label>
          <input type="password" className="form-control" id="maEdit-page-conform-pwd-3043" required/>
          <div className="invalid-feedback">Please input password.</div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button  type="submit" className="btn btn-primary">Save</button>
        </div>

      </form>
      {/* <!-- End Edit Page Form --> */}
    </div>
  </div>
</div>
</div>
{/* <!-- End Edit Page Popup--> */}

{/* <!-- Delete Page Popup --> */}
<div className="modal fade" id="maDeletePage3043" tabIndex="-1" data-bs-backdrop="false">
<div className="modal-dialog modal-dialog-centered">
  <div className="modal-content">
    <div className="modal-header theme-bg-orange text-white">
      <h5 className="modal-title fw-bold">Delete Page #3043</h5>
      <button type="button" className="btn bg-white" data-bs-dismiss="modal" aria-label="Close"><i className="bi bi-x-lg theme-text-blue"></i></button>
    </div>
    <div className="modal-body">
      <div className="fw-bold fs-5 text-center conform-dialog">Are You Sure Delete This Page</div>
      {/* <!-- Delete Page Form --> */}
      <form className="row mt-2 g-3 needs-validation" noValidate>

        <div className="col-md-12">
          <label htmlFor="maDelete-page-conform-043" className="form-label">Conform Message</label>
          <textarea rows="5" className="form-control" id="maDelete-page-conform-043" required></textarea>
          <div className="invalid-feedback">Please provide conform message.</div>
        </div>
        <div className="col-md-12">
          <label htmlFor="maDelete-page-conform-pwd-043" className="form-label">Your Password</label>
          <input type="password" className="form-control" id="maDelete-page-conform-pwd-043" required/>
          <div className="invalid-feedback">Please input password.</div>
        </div>

        <div className="px-5">
          <div className="mx-5 d-flex align-items-center justify-content-between">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No <i className="bi bi-x-circle"></i></button>
            <button  type="submit" className="btn btn-primary">Yes <i className="bi bi-check-circle"></i></button>
          </div>
        </div>

      </form>
      {/* <!-- End Delete Page Form --> */}
    </div>
  </div>
</div>
</div>
{/* !-- End Delete Page Popup--> */}
<Footer/>
</>
  )
}

export default Hires