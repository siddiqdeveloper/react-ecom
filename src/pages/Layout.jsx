import { Outlet,Link } from 'react-router-dom'


const Layout = ()=>{

    return <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
   
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">

        <Link to="/" className="nav-link active"> Add Product</Link>

          
        </li>
        <li class="nav-item">
        <Link to="/product-list" className="nav-link active"> Product List</Link>
        </li>
      </ul>
      <span class="navbar-text">
            Product Admin page
      </span>
    </div>
  </div>
</nav>

<div className='container'>
<Outlet></Outlet>
</div>
   

 
    
    </>
}

export default Layout