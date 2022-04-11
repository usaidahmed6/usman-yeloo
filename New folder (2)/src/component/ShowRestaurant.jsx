import React from 'react'

const ShowRestaurant = () => {

  
  return (
    <div>
      <header className="site-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="header-logo">
                <a href="index.html">
                  <img src=".." width="160" height="36" alt="Logo" />
                </a>
              </div>
            </div>
            <div className="col-lg-10">
              <div className="main-navigation">
                <button className="menu-toggle"><span></span><span></span></button>
                <nav className="header-menu">
                  <ul className="menu food-nav-menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#contact">Contact</a></li>
                  </ul>
                </nav>
                <div className="header-right">
                  <form action="#" className="header-search-form for-des">
                    <input type="search" className="form-input" placeholder="Search Here..."/>
                      <button type="submit">
                        <i className="uil uil-search"></i>
                      </button>
                  </form>
                  <a href="javascript:void(0)" className="header-btn header-cart">
                    <i className="uil uil-shopping-bag"></i>
                    <span className="cart-number">3</span>
                  </a>
                  <a href="javascript:void(0)" className="header-btn">
                    <i className="uil uil-user-md"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default ShowRestaurant
