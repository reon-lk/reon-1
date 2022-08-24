import React from 'react'
import UserHeader from '../../Layouts/UserHeader'

const OwnerPage = () => {
  return (
    <>
    <UserHeader/>
<main className='paddingTop'>
    <div className="container bootstrap snippets bootdeys">
    <div className="row">
    <div className="col-md-12">
        <div className="bg-picture" style={{backgroundImage:"url('https://via.placeholder.com/700x300/')"}}>
          <span className="bg-picture-overlay"></span>
          {/* <!-- overlay --> */}
          {/* <!-- meta --> */}
          <div className="box-layout meta bottom">
            <div className="col-md-6 clearfix">
              <span className="img-wrapper pull-left m-r-15"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" style={{width:"64px"}} className="br-radius"/></span>
              <div className="media-body">
                <h3 className="text-white mb-2 m-t-10 ellipsis">Deyson Bejarano</h3>
                <h5 className="text-white"> @elgrones</h5>
              </div>
            </div>
            <div className="col-md-6">

              <div className="pull-right">
                <div className="dropdown">
                    <a data-toggle="dropdown" className="dropdown-toggle btn btn-primary" href="/" aria-expanded="false"> Following <span className="caret"></span></a>
                    <ul className="dropdown-menu dropdown-menu-right" role="menu">
                        <li><a href="/">Poke</a></li>
                        <li><a href="/">Private message</a></li>
                        <li className="divider"></li>
                        <li><a href="/">Unfollow</a></li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <!--/ meta --> */}
        </div>
    </div>
</div>
</div>
</main>
    </>
  )
}

export default OwnerPage