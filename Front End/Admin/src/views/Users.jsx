import React from 'react'
import Aside from '../layout/Aside'
import Footer from '../layout/Footer'
import Header from '../layout/Header'

const Users = () => {
  return (
<>
<Header/>
<Aside/>



<main id="main" className="main">

<div class="pagetitle">
  <h1 class="theme-text2">Users</h1>
  <nav>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="/"><i class="bi bi-house-door"></i></a></li>
      <li class="breadcrumb-item active">Users</li>
    </ol>
  </nav>
</div>
{/* <!-- End Page Title --> */}
<section className="section manage-users">

<button className="mb-4 btn btn-primary shadow-sm text-white fw-bold theme-bg-blue" data-bs-toggle="modal" data-bs-target="/addNewUser">Add New User <i className="bi bi-person-plus"></i></button>

<div className="row">
  <div className="card pt-3 manage-user overflow-auto">

  <div className="card-body">
    <div class="dataTable-top">
      <div class="dataTable-dropdown">
        <label>
          <select class="dataTable-selector">
            <option value="5">5</option>
            <option value="10" selected="">10</option>
            <option value="15">15</option><option value="20">20</option>
            <option value="25">25</option>
          </select> 
            entries per page
        </label></div>
      <div class="dataTable-search">
          <input class="dataTable-input" placeholder="Search..." type="text"/>
    </div>
  </div>

      <table className="table table-striped table-borderless datatable">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">User Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Created Date</th>
            <th scope="col">Is Page</th>
            <th scope="col">Hires</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>#2434</td>
            <td>First Name 1</td>
            <td>15 Jul 2022</td>
            <td><span className="badge theme-bg-orange">No</span></td>
            <td>28</td>
            <td><span className="badge bg-success">Active</span></td>
            <td className="d-flex align-items-center justify-content-between">
              <a href="user-details"><button type="button" className="btn btn-success">Details <i className="bi bi-file-person"></i></button></a>
              <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="/maEditUser2434">Edit <i className="bi bi-pencil-square"></i></button>
              <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="/maDeleteUser2434">Delete <i className="bi bi-trash"></i></button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>#2458</td>
            <td>First Name 2</td>
            <td>16 Jul 2022</td>
            <td><span className="badge theme-bg-blue">Yes</span></td>
            <td>0</td>
            <td><span className="badge bg-success">Active</span></td>
            <td className="d-flex align-items-center justify-content-between">
              <a href="user-details.html?uid=2458"><button type="button" className="btn btn-success">Details <i className="bi bi-file-person"></i></button></a>
              <button type="button" className="btn btn-warning theme-bg-orange">Edit <i className="bi bi-pencil-square"></i></button>
              <button type="button" className="btn btn-danger">Delete <i className="bi bi-trash"></i></button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>#2460</td>
            <td>First Name 3</td>
            <td>16 Jul 2022</td>
            <td><span className="badge theme-bg-blue">Yes</span></td>
            <td>3</td>
            <td><span className="badge bg-warning">Blocked</span></td>
            <td className="d-flex align-items-center justify-content-between">
              <a href="/"><button type="button" className="btn btn-success">Details <i className="bi bi-file-person"></i></button></a>
              <button type="button" className="btn btn-warning theme-bg-orange">Edit <i className="bi bi-pencil-square"></i></button>
              <button type="button" className="btn btn-danger">Delete <i className="bi bi-trash"></i></button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>#2465</td>
            <td>First Name 4</td>
            <td>17 Jul 2022</td>
            <td><span className="badge theme-bg-orange">No</span></td>
            <td>1</td>
            <td><span className="badge bg-danger">Deleted</span></td>
            <td className="d-flex align-items-center justify-content-between">
              <a href="/"><button type="button" className="btn btn-success">Details <i className="bi bi-file-person"></i></button></a>
              <button type="button" className="btn btn-warning theme-bg-orange disabled">Edit <i className="bi bi-pencil-square"></i></button>
              <button type="button" className="btn btn-danger disabled">Delete <i className="bi bi-trash"></i></button>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>#2457</td>
            <td>First Name 1</td>
            <td>15 Jul 2022</td>
            <td><span className="badge theme-bg-orange">No</span></td>
            <td>1</td>
            <td><span className="badge bg-success">Active</span></td>
            <td className="d-flex align-items-center justify-content-between">
              <a href="/"><button type="button" className="btn btn-success">Details <i className="bi bi-file-person"></i></button></a>
              <button type="button" className="btn btn-warning theme-bg-orange">Edit <i className="bi bi-pencil-square"></i></button>
              <button type="button" className="btn btn-danger">Delete <i className="bi bi-trash"></i></button>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>#2458</td>
            <td>First Name 2</td>
            <td>16 Jul 2022</td>
            <td><span className="badge theme-bg-blue">Yes</span></td>
            <td>0</td>
            <td><span className="badge bg-success">Active</span></td>
            <td className="d-flex align-items-center justify-content-between">
              <a href="/"><button type="button" className="btn btn-success">Details <i className="bi bi-file-person"></i></button></a>
              <button type="button" className="btn btn-warning theme-bg-orange">Edit <i className="bi bi-pencil-square"></i></button>
              <button type="button" className="btn btn-danger">Delete <i className="bi bi-trash"></i></button>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>#2460</td>
            <td>First Name 3</td>
            <td>16 Jul 2022</td>
            <td><span className="badge theme-bg-blue">Yes</span></td>
            <td>3</td>
            <td><span className="badge bg-warning">Blocked</span></td>
            <td className="d-flex align-items-center justify-content-between">
              <a href="/"><button type="button" className="btn btn-success">Details <i className="bi bi-file-person"></i></button></a>
              <button type="button" className="btn btn-warning theme-bg-orange">Edit <i className="bi bi-pencil-square"></i></button>
              <button type="button" className="btn btn-danger">Delete <i className="bi bi-trash"></i></button>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>#2465</td>
            <td>First Name 4</td>
            <td>17 Jul 2022</td>
            <td><span className="badge theme-bg-orange">No</span></td>
            <td>1</td>
            <td><span className="badge bg-danger">Deleted</span></td>
            <td className="d-flex align-items-center justify-content-between">
              <a href="/"><button type="button" className="btn btn-success">Details <i className="bi bi-file-person"></i></button></a>
              <button type="button" className="btn btn-warning theme-bg-orange disabled">Edit <i className="bi bi-pencil-square"></i></button>
              <button type="button" className="btn btn-danger disabled">Delete <i className="bi bi-trash"></i></button>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>#2457</td>
            <td>First Name 1</td>
            <td>15 Jul 2022</td>
            <td><span className="badge theme-bg-orange">No</span></td>
            <td>1</td>
            <td><span className="badge bg-success">Active</span></td>
            <td className="d-flex align-items-center justify-content-between">
              <a href="/"><button type="button" className="btn btn-success">Details <i className="bi bi-file-person"></i></button></a>
              <button type="button" className="btn btn-warning theme-bg-orange">Edit <i className="bi bi-pencil-square"></i></button>
              <button type="button" className="btn btn-danger">Delete <i className="bi bi-trash"></i></button>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>#2458</td>
            <td>First Name 2</td>
            <td>16 Jul 2022</td>
            <td><span className="badge theme-bg-blue">Yes</span></td>
            <td>0</td>
            <td><span className="badge bg-success">Active</span></td>
            <td className="d-flex align-items-center justify-content-between">
              <a href="/"><button type="button" className="btn btn-success">Details <i className="bi bi-file-person"></i></button></a>
              <button type="button" className="btn btn-warning theme-bg-orange">Edit <i className="bi bi-pencil-square"></i></button>
              <button type="button" className="btn btn-danger">Delete <i className="bi bi-trash"></i></button>
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>#2460</td>
            <td>First Name 3</td>
            <td>16 Jul 2022</td>
            <td><span className="badge theme-bg-blue">Yes</span></td>
            <td>3</td>
            <td><span className="badge bg-warning">Blocked</span></td>
            <td className="d-flex align-items-center justify-content-between">
              <a href="/"><button type="button" className="btn btn-success">Details <i className="bi bi-file-person"></i></button></a>
              <button type="button" className="btn btn-warning theme-bg-orange">Edit <i className="bi bi-pencil-square"></i></button>
              <button type="button" className="btn btn-danger">Delete <i className="bi bi-trash"></i></button>
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>#2465</td>
            <td>First Name 4</td>
            <td>17 Jul 2022</td>
            <td><span className="badge theme-bg-orange">No</span></td>
            <td>1</td>
            <td><span className="badge bg-danger">Deleted</span></td>
            <td className="d-flex align-items-center justify-content-between">
              <a href="/"><button type="button" className="btn btn-success">Details <i className="bi bi-file-person"></i></button></a>
              <button type="button" className="btn btn-warning theme-bg-orange disabled">Edit <i className="bi bi-pencil-square"></i></button>
              <button type="button" className="btn btn-danger disabled">Delete <i className="bi bi-trash"></i></button>
            </td>
          </tr>
        </tbody>
      </table>

    </div>

  </div>
</div>
</section>
</main>
<Footer/>
</>
  )
}

export default Users