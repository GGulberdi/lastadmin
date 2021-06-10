/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";

export function AsideMenuList({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu &&
          "menu-item-active"} menu-item-open menu-item-not-hightlighted`
      : "";
  };

  return (
    <>
      {/* begin::Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {/*Dashbord::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/dashboard", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/dashboard">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} />
            </span>
            <span className="menu-text">Dashboard</span>
          </NavLink>
        </li>
        {/*Rating::1 Level*/}
       
        <li
          className={`menu-item ${getMenuItemActive("/rating", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/rating">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} />
            </span>
            <span className="menu-text">Rating</span>
          </NavLink>
        </li>
       

        {/*Comment::1 Level*/}

        <li
          className={`menu-item ${getMenuItemActive("/comment", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/comment">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")} />
            </span>
            <span className="menu-text">Comment</span>
          </NavLink>
        </li>

        {/*User::1 Level*/}

        <li
          className={`menu-item ${getMenuItemActive("/user", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/user">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")} />
            </span>
            <span className="menu-text">User</span>
          </NavLink>
        </li>


        {/*Category::1 Level*/}
       
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/category",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/category">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Cap-2.svg")} />
            </span>
            <span className="menu-text">Category</span>
            <i className="menu-arrow" />
          </NavLink>
          <div className="menu-submenu ">
            <i className="menu-arrow" />
            <ul className="menu-subnav">
              <li className="menu-item  menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text">Category</span>
                </span>
              </li>


 {/*Category child1::3 Level*/}
                <li
                      className={`menu-item ${getMenuItemActive(
                        "/category/addcategory"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/category/addcategory"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Add Category</span>
                      </NavLink>
                    </li>

 {/*Category child2::3 Level*/}
              <li
                      className={`menu-item ${getMenuItemActive(
                        "/category/categorylist"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/category/categorylist"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Category List</span>
                      </NavLink>
                    </li>     
            </ul>
          </div>
        </li>
       
       

  {/*Movie::1 Level*/}  

        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/google-material",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/google-material">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Cap-2.svg")} />
            </span>
            <span className="menu-text">Movie</span>
            <i className="menu-arrow" />
          </NavLink>
          <div className="menu-submenu ">
            <i className="menu-arrow" />
            <ul className="menu-subnav">
              <li className="menu-item  menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text">Movie</span>
                </span>
              </li>


 {/*Movie child1::3 Level*/}
                <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/inputs/checkboxes"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/inputs/checkboxes"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Add Movie</span>
                      </NavLink>
                    </li>

 {/*Movie child2::3 Level*/}
              <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/inputs/checkboxes"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/inputs/checkboxes"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Movie List</span>
                      </NavLink>
                    </li>     
                </ul>
          </div>
        </li>
       
      
  {/*Show::1 Level*/}

  <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/google-material",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/google-material">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Cap-2.svg")} />
            </span>
            <span className="menu-text">Show</span>
            <i className="menu-arrow" />
          </NavLink>
          <div className="menu-submenu ">
            <i className="menu-arrow" />
            <ul className="menu-subnav">
              <li className="menu-item  menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text">Show</span>
                </span>
              </li>


 {/*Show child1::3 Level*/}
                <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/inputs/checkboxes"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/inputs/checkboxes"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Add Show</span>
                      </NavLink>
                    </li>

 {/*Show child2::3 Level*/}
              <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/inputs/checkboxes"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/inputs/checkboxes"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Show List</span>
                      </NavLink>
                    </li>     
                </ul>
          </div>
        </li>
       

  {/*Pricing::1 Level*/}

  <li
          className={`menu-item ${getMenuItemActive("/pricing", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/pricing">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")} />
            </span>
            <span className="menu-text">Pricing</span>
          </NavLink>
        </li>


    
  {/*UI Elements::1 Level*/}

  <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/google-material",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/google-material">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Cap-2.svg")} />
            </span>
            <span className="menu-text">UI Elements</span>
            <i className="menu-arrow" />
          </NavLink>
          <div className="menu-submenu ">
            <i className="menu-arrow" />
            <ul className="menu-subnav">
              <li className="menu-item  menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text">UI Elements</span>
                </span>
              </li>


 {/*UI Elements child1::3 Level*/}
                <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/inputs/checkboxes"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/inputs/checkboxes"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Add Show</span>
                      </NavLink>
                    </li>

 {/*UI Elements child2::3 Level*/}
              <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/inputs/checkboxes"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/inputs/checkboxes"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Show List</span>
                      </NavLink>
                    </li>     
                </ul>
          </div>
        </li>
     
   
  {/*Pages::1 Level*/}

  <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/google-material",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/google-material">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Cap-2.svg")} />
            </span>
            <span className="menu-text"><b>Pages</b></span>
            <i className="menu-arrow" />
          </NavLink>
          <div className="menu-submenu ">
            <i className="menu-arrow" />
            <ul className="menu-subnav">
              <li className="menu-item  menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text"><b>Pages</b></span>
                </span>
              </li>

 {/*Pages child1::3 Level*/}
                <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/inputs/checkboxes"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/inputs/checkboxes"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text"><b>Add Show</b></span>
                      </NavLink>
                    </li>

 {/*Pages child2::3 Level*/}
              <li
                      className={`menu-item ${getMenuItemActive(
                        "/google-material/inputs/checkboxes"
                      )}`}
                      aria-haspopup="true"
                    >
                      <NavLink
                        className="menu-link"
                        to="/google-material/inputs/checkboxes"
                      >
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Show List</span>
                      </NavLink>
                    </li>     
                </ul>
          </div>
        </li>
</ul>
    </>
  );
}
