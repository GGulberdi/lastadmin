import React from "react";
import axios from 'axios'
import {useState, useEffect} from 'react';
import Connect from './Connect'



const Rating =({})=>{
// export default function Rating({ className }) {
  // const [list, setList]= ({useState})



  return (
    <>
<Connect/>
    <div className="container">
      <div className="card card-custom gutter-b">
        <div className="card-header">
          <div className="card-title">
            <h3 className="card-label">Rating Lists</h3>
          </div>
          <div className="card-toolbar">
            {/* <button type="button" className="btn btn-primary">
              New Customer
            </button> */}
          </div>
        </div>
        <div className="card-body">
          <form className="form form-label-right">
            <div className="form-group row">
              <div className="col-lg-2">
                <select
                  className="form-control"
                  name="status"
                  placeholder="Filter by Status"
                >
                  <option value>All</option>
                  <option value={0}>Suspended</option>
                  <option value={1}>Active</option>
                  <option value={2}>Pending</option>
                </select>
                <small className="form-text text-muted">
                  <b>Filter</b> by Status
                </small>
              </div>
              <div className="col-lg-2">
                <select
                  className="form-control"
                  placeholder="Filter by Type"
                  name="type"
                >
                  <option value>All</option>
                  <option value={0}>Business</option>
                  <option value={1}>Individual</option>
                </select>
                <small className="form-text text-muted">
                  <b>Filter</b> by Type
                </small>
              </div>
              <div className="col-lg-2">
                <input
                  type="text"
                  className="form-control"
                  name="searchText"
                  placeholder="Search"
                  defaultValue
                />
                <small className="form-text text-muted">
                  <b>Search</b> in all fields
                </small>
              </div>
            </div>
          </form>
          <div className="react-bootstrap-table table-responsive">
            <table className="table table table-head-custom table-vertical-center overflow-hidden">
              <thead>
                <tr>
                  <th
                    className="selection-cell-header"
                    data-row-selection="true"
                  >
                    <input type="checkbox" style={{ display: "none" }} />
                    <label className="checkbox checkbox-single">
                      <input type="checkbox" />
                      <span />
                    </label>
                  </th>
                  <th
                    tabIndex={0}
                    aria-label="ID sort asc"
                    className="sortable sortable-active"
                  >
                    ID
                    <span className="svg-icon svg-icon-sm svg-icon-primary ml-1">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <title>Stockholm-icons / Navigation / Up-2</title>
                        <desc>Created with Sketch.</desc>
                        <defs />
                        <g
                          id="Stockholm-icons-/-Navigation-/-Up-2"
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <polygon id="Shape" points="0 0 24 0 24 24 0 24" />
                          <rect
                            id="Rectangle"
                            fill="#000000"
                            opacity="0.3"
                            x={11}
                            y={10}
                            width={2}
                            height={10}
                            rx={1}
                          />
                          <path
                            d="M6.70710678,12.7071068 C6.31658249,13.0976311 5.68341751,13.0976311 5.29289322,12.7071068 C4.90236893,12.3165825 4.90236893,11.6834175 5.29289322,11.2928932 L11.2928932,5.29289322 C11.6714722,4.91431428 12.2810586,4.90106866 12.6757246,5.26284586 L18.6757246,10.7628459 C19.0828436,11.1360383 19.1103465,11.7686056 18.7371541,12.1757246 C18.3639617,12.5828436 17.7313944,12.6103465 17.3242754,12.2371541 L12.0300757,7.38413782 L6.70710678,12.7071068 Z"
                            id="Path-94"
                            fill="#000000"
                            fillRule="nonzero"
                          />
                        </g>
                      </svg>
                    </span>
                  </th>
                  <th
                    tabIndex={0}
                    aria-label="Firstname sortable"
                    className="sortable"
                  >
                    Category
                    <span className="svg-icon svg-icon-sm svg-icon-primary ml-1 svg-icon-sort">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <title>Stockholm-icons / Shopping / Sort1</title>
                        <desc>Created with Sketch.</desc>
                        <defs />
                        <g
                          id="Stockholm-icons-/-Shopping-/-Sort1"
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect id="bound" x={0} y={0} width={24} height={24} />
                          <rect
                            id="Rectangle-8"
                            fill="#000000"
                            x={4}
                            y={5}
                            width={16}
                            height={3}
                            rx="1.5"
                          />
                          <path
                            d="M7.5,11 L16.5,11 C17.3284271,11 18,11.6715729 18,12.5 C18,13.3284271 17.3284271,14 16.5,14 L7.5,14 C6.67157288,14 6,13.3284271 6,12.5 C6,11.6715729 6.67157288,11 7.5,11 Z M10.5,17 L13.5,17 C14.3284271,17 15,17.6715729 15,18.5 C15,19.3284271 14.3284271,20 13.5,20 L10.5,20 C9.67157288,20 9,19.3284271 9,18.5 C9,17.6715729 9.67157288,17 10.5,17 Z"
                            id="Combined-Shape"
                            fill="#000000"
                            opacity="0.3"
                          />
                        </g>
                      </svg>
                    </span>
                  </th>
                  <th
                    tabIndex={0}
                    aria-label="Lastname sortable"
                    className="sortable"
                  >
                    Name
                    <span className="svg-icon svg-icon-sm svg-icon-primary ml-1 svg-icon-sort">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <title>Stockholm-icons / Shopping / Sort1</title>
                        <desc>Created with Sketch.</desc>
                        <defs />
                        <g
                          id="Stockholm-icons-/-Shopping-/-Sort1"
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect id="bound" x={0} y={0} width={24} height={24} />
                          <rect
                            id="Rectangle-8"
                            fill="#000000"
                            x={4}
                            y={5}
                            width={16}
                            height={3}
                            rx="1.5"
                          />
                          <path
                            d="M7.5,11 L16.5,11 C17.3284271,11 18,11.6715729 18,12.5 C18,13.3284271 17.3284271,14 16.5,14 L7.5,14 C6.67157288,14 6,13.3284271 6,12.5 C6,11.6715729 6.67157288,11 7.5,11 Z M10.5,17 L13.5,17 C14.3284271,17 15,17.6715729 15,18.5 C15,19.3284271 14.3284271,20 13.5,20 L10.5,20 C9.67157288,20 9,19.3284271 9,18.5 C9,17.6715729 9.67157288,17 10.5,17 Z"
                            id="Combined-Shape"
                            fill="#000000"
                            opacity="0.3"
                          />
                        </g>
                      </svg>
                    </span>
                  </th>
                  <th
                    tabIndex={0}
                    aria-label="Email sortable"
                    className="sortable"
                  >
                    Description
                    <span className="svg-icon svg-icon-sm svg-icon-primary ml-1 svg-icon-sort">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <title>Stockholm-icons / Shopping / Sort1</title>
                        <desc>Created with Sketch.</desc>
                        <defs />
                        <g
                          id="Stockholm-icons-/-Shopping-/-Sort1"
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect id="bound" x={0} y={0} width={24} height={24} />
                          <rect
                            id="Rectangle-8"
                            fill="#000000"
                            x={4}
                            y={5}
                            width={16}
                            height={3}
                            rx="1.5"
                          />
                          <path
                            d="M7.5,11 L16.5,11 C17.3284271,11 18,11.6715729 18,12.5 C18,13.3284271 17.3284271,14 16.5,14 L7.5,14 C6.67157288,14 6,13.3284271 6,12.5 C6,11.6715729 6.67157288,11 7.5,11 Z M10.5,17 L13.5,17 C14.3284271,17 15,17.6715729 15,18.5 C15,19.3284271 14.3284271,20 13.5,20 L10.5,20 C9.67157288,20 9,19.3284271 9,18.5 C9,17.6715729 9.67157288,17 10.5,17 Z"
                            id="Combined-Shape"
                            fill="#000000"
                            opacity="0.3"
                          />
                        </g>
                      </svg>
                    </span>
                  </th>
                  <th tabIndex={0}>Release Date</th>
                  <th
                    tabIndex={0}
                    aria-label="Status sortable"
                    className="sortable"
                  >
                    Status
                    <span className="svg-icon svg-icon-sm svg-icon-primary ml-1 svg-icon-sort">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <title>Stockholm-icons / Shopping / Sort1</title>
                        <desc>Created with Sketch.</desc>
                        <defs />
                        <g
                          id="Stockholm-icons-/-Shopping-/-Sort1"
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect id="bound" x={0} y={0} width={24} height={24} />
                          <rect
                            id="Rectangle-8"
                            fill="#000000"
                            x={4}
                            y={5}
                            width={16}
                            height={3}
                            rx="1.5"
                          />
                          <path
                            d="M7.5,11 L16.5,11 C17.3284271,11 18,11.6715729 18,12.5 C18,13.3284271 17.3284271,14 16.5,14 L7.5,14 C6.67157288,14 6,13.3284271 6,12.5 C6,11.6715729 6.67157288,11 7.5,11 Z M10.5,17 L13.5,17 C14.3284271,17 15,17.6715729 15,18.5 C15,19.3284271 14.3284271,20 13.5,20 L10.5,20 C9.67157288,20 9,19.3284271 9,18.5 C9,17.6715729 9.67157288,17 10.5,17 Z"
                            id="Combined-Shape"
                            fill="#000000"
                            opacity="0.3"
                          />
                        </g>
                      </svg>
                    </span>
                  </th>
                  <th
                    tabIndex={0}
                    aria-label="Type sortable"
                    className="sortable"
                  >
                    Rating
                    <span className="svg-icon svg-icon-sm svg-icon-primary ml-1 svg-icon-sort">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <title>Stockholm-icons / Shopping / Sort1</title>
                        <desc>Created with Sketch.</desc>
                        <defs />
                        <g
                          id="Stockholm-icons-/-Shopping-/-Sort1"
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect id="bound" x={0} y={0} width={24} height={24} />
                          <rect
                            id="Rectangle-8"
                            fill="#000000"
                            x={4}
                            y={5}
                            width={16}
                            height={3}
                            rx="1.5"
                          />
                          <path
                            d="M7.5,11 L16.5,11 C17.3284271,11 18,11.6715729 18,12.5 C18,13.3284271 17.3284271,14 16.5,14 L7.5,14 C6.67157288,14 6,13.3284271 6,12.5 C6,11.6715729 6.67157288,11 7.5,11 Z M10.5,17 L13.5,17 C14.3284271,17 15,17.6715729 15,18.5 C15,19.3284271 14.3284271,20 13.5,20 L10.5,20 C9.67157288,20 9,19.3284271 9,18.5 C9,17.6715729 9.67157288,17 10.5,17 Z"
                            id="Combined-Shape"
                            fill="#000000"
                            opacity="0.3"
                          />
                        </g>
                      </svg>
                    </span>
                  </th>
                  <th tabIndex={0} className="text-right pr-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {}
                <tr>
                  <td className="selection-cell">
                    <input type="checkbox" style={{ display: "none" }} />
                    <label className="checkbox checkbox-single">
                      <input type="checkbox" />
                      <span />
                    </label>
                  </td>
                  <td>1</td>
                  <td>Sonni</td>
                  <td>Gabotti</td>
                  <td>sgabotti0@wsj.com</td>
                  <td>Female</td>
                  <td>
                    <span className="label label-lg label-light-danger label-inline">
                      Suspended
                    </span>
                  </td>
                  <td>
                    <span className="label label-dot label-primary mr-2" />
                    &nbsp;
                    <span className="font-bold font-primary">Individual</span>
                  </td>
                  <td className="text-right pr-0" style={{ minWidth: 100 }}>
                    <a
                      title="Edit customer"
                      className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
                    >
                      <span className="svg-icon svg-icon-md svg-icon-primary">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>Stockholm-icons / Communication / Write</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Stockholm-icons-/-Communication-/-Write"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
                              id="Path-11"
                              fill="#000000"
                              fillRule="nonzero"
                              transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) "
                            />
                            <path
                              d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
                              id="Path-57"
                              fill="#000000"
                              fillRule="nonzero"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                    </a>{" "}
                    <a
                      title="Delete customer"
                      className="btn btn-icon btn-light btn-hover-danger btn-sm"
                    >
                      <span className="svg-icon svg-icon-md svg-icon-danger">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>Stockholm-icons / General / Trash</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Stockholm-icons-/-General-/-Trash"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                              id="round"
                              fill="#000000"
                              fillRule="nonzero"
                            />
                            <path
                              d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                              id="Shape"
                              fill="#000000"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="selection-cell">
                    <input type="checkbox" style={{ display: "none" }} />
                    <label className="checkbox checkbox-single">
                      <input type="checkbox" />
                      <span />
                    </label>
                  </td>
                  <td>2</td>
                  <td>Abie</td>
                  <td>Cowperthwaite</td>
                  <td>acowperthwaite1@storify.com</td>
                  <td>Male</td>
                  <td>
                    <span className="label label-lg label-light-success label-inline">
                      Active
                    </span>
                  </td>
                  <td>
                    <span className="label label-dot label-primary mr-2" />
                    &nbsp;
                    <span className="font-bold font-primary">Individual</span>
                  </td>
                  <td className="text-right pr-0" style={{ minWidth: 100 }}>
                    <a
                      title="Edit customer"
                      className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
                    >
                      <span className="svg-icon svg-icon-md svg-icon-primary">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>Stockholm-icons / Communication / Write</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Stockholm-icons-/-Communication-/-Write"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
                              id="Path-11"
                              fill="#000000"
                              fillRule="nonzero"
                              transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) "
                            />
                            <path
                              d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
                              id="Path-57"
                              fill="#000000"
                              fillRule="nonzero"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                    </a>{" "}
                    <a
                      title="Delete customer"
                      className="btn btn-icon btn-light btn-hover-danger btn-sm"
                    >
                      <span className="svg-icon svg-icon-md svg-icon-danger">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>Stockholm-icons / General / Trash</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Stockholm-icons-/-General-/-Trash"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                              id="round"
                              fill="#000000"
                              fillRule="nonzero"
                            />
                            <path
                              d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                              id="Shape"
                              fill="#000000"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="selection-cell">
                    <input type="checkbox" style={{ display: "none" }} />
                    <label className="checkbox checkbox-single">
                      <input type="checkbox" />
                      <span />
                    </label>
                  </td>
                  <td>3</td>
                  <td>Melody</td>
                  <td>Stodd</td>
                  <td>mstodd2@twitpic.com</td>
                  <td>Female</td>
                  <td>
                    <span className="label label-lg label-light-danger label-inline">
                      Suspended
                    </span>
                  </td>
                  <td>
                    <span className="label label-dot label-primary mr-2" />
                    &nbsp;
                    <span className="font-bold font-primary">Individual</span>
                  </td>
                  <td className="text-right pr-0" style={{ minWidth: 100 }}>
                    <a
                      title="Edit customer"
                      className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
                    >
                      <span className="svg-icon svg-icon-md svg-icon-primary">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>Stockholm-icons / Communication / Write</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Stockholm-icons-/-Communication-/-Write"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
                              id="Path-11"
                              fill="#000000"
                              fillRule="nonzero"
                              transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) "
                            />
                            <path
                              d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
                              id="Path-57"
                              fill="#000000"
                              fillRule="nonzero"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                    </a>{" "}
                    <a
                      title="Delete customer"
                      className="btn btn-icon btn-light btn-hover-danger btn-sm"
                    >
                      <span className="svg-icon svg-icon-md svg-icon-danger">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>Stockholm-icons / General / Trash</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Stockholm-icons-/-General-/-Trash"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                              id="round"
                              fill="#000000"
                              fillRule="nonzero"
                            />
                            <path
                              d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                              id="Shape"
                              fill="#000000"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="selection-cell">
                    <input type="checkbox" style={{ display: "none" }} />
                    <label className="checkbox checkbox-single">
                      <input type="checkbox" />
                      <span />
                    </label>
                  </td>
                  <td>4</td>
                  <td>Naomi</td>
                  <td>Galbreth</td>
                  <td>ngalbreth3@springer.com</td>
                  <td>Female</td>
                  <td>
                    <span className="label label-lg label-light-info label-inline">
                      Pending
                    </span>
                  </td>
                  <td>
                    <span className="label label-dot label-success mr-2" />
                    &nbsp;
                    <span className="font-bold font-success">Business</span>
                  </td>
                  <td className="text-right pr-0" style={{ minWidth: 100 }}>
                    <a
                      title="Edit customer"
                      className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
                    >
                      <span className="svg-icon svg-icon-md svg-icon-primary">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>Stockholm-icons / Communication / Write</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Stockholm-icons-/-Communication-/-Write"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
                              id="Path-11"
                              fill="#000000"
                              fillRule="nonzero"
                              transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) "
                            />
                            <path
                              d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
                              id="Path-57"
                              fill="#000000"
                              fillRule="nonzero"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                    </a>{" "}
                    <a
                      title="Delete customer"
                      className="btn btn-icon btn-light btn-hover-danger btn-sm"
                    >
                      <span className="svg-icon svg-icon-md svg-icon-danger">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>Stockholm-icons / General / Trash</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Stockholm-icons-/-General-/-Trash"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                              id="round"
                              fill="#000000"
                              fillRule="nonzero"
                            />
                            <path
                              d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                              id="Shape"
                              fill="#000000"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="selection-cell">
                    <input type="checkbox" style={{ display: "none" }} />
                    <label className="checkbox checkbox-single">
                      <input type="checkbox" />
                      <span />
                    </label>
                  </td>
                  <td>5</td>
                  <td>Ashley</td>
                  <td>Jandl</td>
                  <td>ajandl4@mapy.cz</td>
                  <td>Female</td>
                  <td>
                    <span className="label label-lg label-light-success label-inline">
                      Active
                    </span>
                  </td>
                  <td>
                    <span className="label label-dot label-primary mr-2" />
                    &nbsp;
                    <span className="font-bold font-primary">Individual</span>
                  </td>
                  <td className="text-right pr-0" style={{ minWidth: 100 }}>
                    <a
                      title="Edit customer"
                      className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
                    >
                      <span className="svg-icon svg-icon-md svg-icon-primary">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>Stockholm-icons / Communication / Write</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Stockholm-icons-/-Communication-/-Write"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
                              id="Path-11"
                              fill="#000000"
                              fillRule="nonzero"
                              transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) "
                            />
                            <path
                              d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
                              id="Path-57"
                              fill="#000000"
                              fillRule="nonzero"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                    </a>{" "}
                    <a
                      title="Delete customer"
                      className="btn btn-icon btn-light btn-hover-danger btn-sm"
                    >
                      <span className="svg-icon svg-icon-md svg-icon-danger">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>Stockholm-icons / General / Trash</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Stockholm-icons-/-General-/-Trash"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                              id="round"
                              fill="#000000"
                              fillRule="nonzero"
                            />
                            <path
                              d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                              id="Shape"
                              fill="#000000"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="selection-cell">
                    <input type="checkbox" style={{ display: "none" }} />
                    <label className="checkbox checkbox-single">
                      <input type="checkbox" />
                      <span />
                    </label>
                  </td>
                  <td>6</td>
                  <td>Mildrid</td>
                  <td>Duplan</td>
                  <td>mduplan5@msn.com</td>
                  <td>Female</td>
                  <td>
                    <span className="label label-lg label-light-success label-inline">
                      Active
                    </span>
                  </td>
                  <td>
                    <span className="label label-dot label-primary mr-2" />
                    &nbsp;
                    <span className="font-bold font-primary">Individual</span>
                  </td>
                  <td className="text-right pr-0" style={{ minWidth: 100 }}>
                    <a
                      title="Edit customer"
                      className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
                    >
                      <span className="svg-icon svg-icon-md svg-icon-primary">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>Stockholm-icons / Communication / Write</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Stockholm-icons-/-Communication-/-Write"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
                              id="Path-11"
                              fill="#000000"
                              fillRule="nonzero"
                              transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) "
                            />
                            <path
                              d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
                              id="Path-57"
                              fill="#000000"
                              fillRule="nonzero"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                    </a>{" "}
                    <a
                      title="Delete customer"
                      className="btn btn-icon btn-light btn-hover-danger btn-sm"
                    >
                      <span className="svg-icon svg-icon-md svg-icon-danger">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>Stockholm-icons / General / Trash</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Stockholm-icons-/-General-/-Trash"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                              id="round"
                              fill="#000000"
                              fillRule="nonzero"
                            />
                            <path
                              d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                              id="Shape"
                              fill="#000000"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="selection-cell">
                    <input type="checkbox" style={{ display: "none" }} />
                    <label className="checkbox checkbox-single">
                      <input type="checkbox" />
                      <span />
                    </label>
                  </td>
                  <td>7</td>
                  <td>Dall</td>
                  <td>Stow</td>
                  <td>dstow6@vistaprint.com</td>
                  <td>Male</td>
                  <td>
                    <span className="label label-lg label-light-info label-inline">
                      Pending
                    </span>
                  </td>
                  <td>
                    <span className="label label-dot label-primary mr-2" />
                    &nbsp;
                    <span className="font-bold font-primary">Individual</span>
                  </td>
                  <td className="text-right pr-0" style={{ minWidth: 100 }}>
                    <a
                      title="Edit customer"
                      className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
                    >
                      <span className="svg-icon svg-icon-md svg-icon-primary">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>Stockholm-icons / Communication / Write</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Stockholm-icons-/-Communication-/-Write"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
                              id="Path-11"
                              fill="#000000"
                              fillRule="nonzero"
                              transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) "
                            />
                            <path
                              d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
                              id="Path-57"
                              fill="#000000"
                              fillRule="nonzero"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                    </a>{" "}
                    <a
                      title="Delete customer"
                      className="btn btn-icon btn-light btn-hover-danger btn-sm"
                    >
                      <span className="svg-icon svg-icon-md svg-icon-danger">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>Stockholm-icons / General / Trash</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Stockholm-icons-/-General-/-Trash"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                              id="round"
                              fill="#000000"
                              fillRule="nonzero"
                            />
                            <path
                              d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                              id="Shape"
                              fill="#000000"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="selection-cell">
                    <input type="checkbox" style={{ display: "none" }} />
                    <label className="checkbox checkbox-single">
                      <input type="checkbox" />
                      <span />
                    </label>
                  </td>
                  <td>8</td>
                  <td>Burton</td>
                  <td>Dering</td>
                  <td>bdering7@europa.eu</td>
                  <td>Male</td>
                  <td>
                    <span className="label label-lg label-light-success label-inline">
                      Active
                    </span>
                  </td>
                  <td>
                    <span className="label label-dot label-success mr-2" />
                    &nbsp;
                    <span className="font-bold font-success">Business</span>
                  </td>
                  <td className="text-right pr-0" style={{ minWidth: 100 }}>
                    <a
                      title="Edit customer"
                      className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
                    >
                      <span className="svg-icon svg-icon-md svg-icon-primary">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>Stockholm-icons / Communication / Write</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Stockholm-icons-/-Communication-/-Write"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
                              id="Path-11"
                              fill="#000000"
                              fillRule="nonzero"
                              transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) "
                            />
                            <path
                              d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
                              id="Path-57"
                              fill="#000000"
                              fillRule="nonzero"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                    </a>{" "}
                    <a
                      title="Delete customer"
                      className="btn btn-icon btn-light btn-hover-danger btn-sm"
                    >
                      <span className="svg-icon svg-icon-md svg-icon-danger">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>Stockholm-icons / General / Trash</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Stockholm-icons-/-General-/-Trash"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                              id="round"
                              fill="#000000"
                              fillRule="nonzero"
                            />
                            <path
                              d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                              id="Shape"
                              fill="#000000"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="selection-cell">
                    <input type="checkbox" style={{ display: "none" }} />
                    <label className="checkbox checkbox-single">
                      <input type="checkbox" />
                      <span />
                    </label>
                  </td>
                  <td>9</td>
                  <td>Wolf</td>
                  <td>Blackaller</td>
                  <td>wblackaller8@biblegateway.com</td>
                  <td>Male</td>
                  <td>
                    <span className="label label-lg label-light-danger label-inline">
                      Suspended
                    </span>
                  </td>
                  <td>
                    <span className="label label-dot label-success mr-2" />
                    &nbsp;
                    <span className="font-bold font-success">Business</span>
                  </td>
                  <td className="text-right pr-0" style={{ minWidth: 100 }}>
                    <a
                      title="Edit customer"
                      className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
                    >
                      <span className="svg-icon svg-icon-md svg-icon-primary">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>Stockholm-icons / Communication / Write</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Stockholm-icons-/-Communication-/-Write"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
                              id="Path-11"
                              fill="#000000"
                              fillRule="nonzero"
                              transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) "
                            />
                            <path
                              d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
                              id="Path-57"
                              fill="#000000"
                              fillRule="nonzero"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                    </a>{" "}
                    <a
                      title="Delete customer"
                      className="btn btn-icon btn-light btn-hover-danger btn-sm"
                    >
                      <span className="svg-icon svg-icon-md svg-icon-danger">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>Stockholm-icons / General / Trash</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Stockholm-icons-/-General-/-Trash"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                              id="round"
                              fill="#000000"
                              fillRule="nonzero"
                            />
                            <path
                              d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                              id="Shape"
                              fill="#000000"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="selection-cell">
                    <input type="checkbox" style={{ display: "none" }} />
                    <label className="checkbox checkbox-single">
                      <input type="checkbox" />
                      <span />
                    </label>
                  </td>
                  <td>10</td>
                  <td>Adham</td>
                  <td>Hurtic</td>
                  <td>ahurtic9@friendfeed.com</td>
                  <td>Male</td>
                  <td>
                    <span className="label label-lg label-light-success label-inline">
                      Active
                    </span>
                  </td>
                  <td>
                    <span className="label label-dot label-success mr-2" />
                    &nbsp;
                    <span className="font-bold font-success">Business</span>
                  </td>
                  <td className="text-right pr-0" style={{ minWidth: 100 }}>
                    <a
                      title="Edit customer"
                      className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
                    >
                      <span className="svg-icon svg-icon-md svg-icon-primary">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>Stockholm-icons / Communication / Write</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Stockholm-icons-/-Communication-/-Write"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
                              id="Path-11"
                              fill="#000000"
                              fillRule="nonzero"
                              transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) "
                            />
                            <path
                              d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
                              id="Path-57"
                              fill="#000000"
                              fillRule="nonzero"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                    </a>{" "}
                    <a
                      title="Delete customer"
                      className="btn btn-icon btn-light btn-hover-danger btn-sm"
                    >
                      <span className="svg-icon svg-icon-md svg-icon-danger">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <title>Stockholm-icons / General / Trash</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Stockholm-icons-/-General-/-Trash"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect
                              id="bound"
                              x={0}
                              y={0}
                              width={24}
                              height={24}
                            />
                            <path
                              d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                              id="round"
                              fill="#000000"
                              fillRule="nonzero"
                            />
                            <path
                              d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                              id="Shape"
                              fill="#000000"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="d-flex flex-wrap py-2 mr-3 ">
              <a className="btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1">
                <i className="ki ki-bold-double-arrow-back icon-xs" />
              </a>
              <a className="btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1">
                <i className="ki ki-bold-arrow-back icon-xs" />
              </a>
              <a className="btn btn-icon btn-sm border-0 btn-light  btn-hover-primary active mr-2 my-1">
                1
              </a>
              <a className="btn btn-icon btn-sm border-0 btn-light  mr-2 my-1">
                2
              </a>
              <a className="btn btn-icon btn-sm border-0 btn-light  mr-2 my-1">
                3
              </a>
              <a className="btn btn-icon btn-sm border-0 btn-light  mr-2 my-1">
                4
              </a>
              <a className="btn btn-icon btn-sm border-0 btn-light  mr-2 my-1">
                5
              </a>
              <a className="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">
                ...
              </a>
              <a className="btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1">
                <i className="ki ki-bold-arrow-next icon-xs" />
              </a>
              <a className="btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1">
                <i className="ki ki-bold-double-arrow-next icon-xs" />
              </a>
            </div>
            <div className="d-flex align-items-center py-3">
              <select
                className="form-control form-control-sm font-weight-bold mr-4 border-0 bg-light false"
                style={{ width: 75 }}
              >
                <option className="btn ">3</option>
                <option className="btn ">5</option>
                <option className="btn ">10</option>
              </select>
              <span className="react-bootstrap-table-pagination-total">
                &nbsp;Showing rows 1 to&nbsp;10 of&nbsp;100
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Rating;

/* eslint-disable no-restricted-imports */
// import React from "react";
// import clsx from "clsx";
// import PropTypes from "prop-types";
// import {
//   makeStyles,
//   lighten,
//   withStyles,
//   useTheme
// } from "@material-ui/core/styles";
// import {
//   Paper,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   Checkbox,
//   Toolbar,
//   Typography,
//   Tooltip,
//   IconButton,
//   TableSortLabel,
//   TablePagination,
//   Switch,
//   FormControlLabel,
//   TableFooter
// } from "@material-ui/core";
// import DeleteIcon from "@material-ui/icons/Delete";
// import FilterListIcon from "@material-ui/icons/FilterList";
// import FirstPageIcon from "@material-ui/icons/FirstPage";
// import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
// import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
// import LastPageIcon from "@material-ui/icons/LastPage";
// import {Notice, KTCodeExample} from "../_metronic/_partials/controls";

// const useStyles1 = makeStyles(theme => ({
//   root: {
//     width: "100%",
//     marginTop: theme.spacing(3),
//     overflowX: "auto"
//   },
//   table: {
//     minWidth: 650
//   }
// }));

// function createData(NO, CATEGORY, NAME, DESCRIPTION, RELEASE_DATE, RATING, ACTION) {
//   return { NO, CATEGORY, NAME, DESCRIPTION, RELEASE_DATE, RATING, ACTION };
// }

// const rows = [
//   createData(1, "Movie", "MAn of Street", "Lorem ipsum", 2017, '9.2', 'empty'),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9)
// ];

// // Example 2
// const useStyles2 = makeStyles(theme => ({
//   root: {
//     width: "100%"
//   },
//   paper: {
//     marginTop: theme.spacing(3),
//     width: "100%",
//     overflowX: "auto",
//     marginBottom: theme.spacing(2)
//   },
//   table: {
//     minWidth: 650
//   }
// }));

// // Example 3
// function desc3(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function stableSort3(array, cmp) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = cmp(a[0], b[0]);
//     if (order !== 0) return order;
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map(el => el[0]);
// }

// function getSorting(order, orderBy) {
//   return order === "desc"
//     ? (a, b) => desc3(a, b, orderBy)
//     : (a, b) => -desc3(a, b, orderBy);
// }

// //original
// // const headRows3 = [
// //   {
// //     id: "name",
// //     numeric: false,
// //     disablePadding: true,
// //     label: "Dessert (100g serving)"
// //   },
// //   { id: "calories", numeric: true, disablePadding: false, label: "Calories" },
// //   { id: "fat", numeric: true, disablePadding: false, label: "Fat (g)" },
// //   { id: "carbs", numeric: true, disablePadding: false, label: "Carbs (g)" },
// //   { id: "protein", numeric: true, disablePadding: false, label: "Protein (g)" }
// // ];

// //mine
//  const headRows3 = [
//       {
//         id: "no",
//         numeric: true,
//         disablePadding: true,
//         label: "NO"
//       },
//       { id: "category", numeric: false, disablePadding: false, label: "category" },
//       { id: "name", numeric: false, disablePadding: false, label: "NAME" },
//       { id: "discription", numeric: false, disablePadding: false, label: "DISCRIPTION" },
//       { id: "release_date", numeric: true, disablePadding: false, label: "RELEASE DATE" },
//       { id: "rating", numeric: true, disablePadding: false, label: "RATING" },
//       { id: "action", numeric: false, disablePadding: false, label: "ACTION" }

//     ];

// function EnhancedTableHead3(props) {
//   const {
//     onSelectAllClick,
//     order,
//     orderBy,
//     numSelected,
//     rowCount,
//     onRequestSort
//   } = props;
//   const createSortHandler = property => event => {
//     onRequestSort(event, property);
//   };

//   return (
//     <TableHead>
//       <TableRow>
//         <TableCell padding="checkbox">
//           <Checkbox
//             indeterminate={numSelected > 0 && numSelected < rowCount}
//             checked={numSelected === rowCount}
//             onChange={onSelectAllClick}
//             inputProps={{ "aria-label": "Select all desserts" }}
//           />
//         </TableCell>
//         {headRows3.map(row => (
//           <TableCell
//             key={row.id}
//             align={row.numeric ? "right" : "left"}
//             padding={row.disablePadding ? "none" : "default"}
//             sortDirection={orderBy === row.id ? order : false}
//           >
//             <TableSortLabel
//               active={orderBy === row.id}
//               direction={order}
//               onClick={createSortHandler(row.id)}
//             >
//               {row.label}
//             </TableSortLabel>
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   );
// }

// // EnhancedTableHead3.propTypes = {
// //   numSelected: PropTypes.number.isRequired,
// //   onRequestSort: PropTypes.func.isRequired,
// //   onSelectAllClick: PropTypes.func.isRequired,
// //   order: PropTypes.string.isRequired,
// //   orderBy: PropTypes.string.isRequired,
// //   rowCount: PropTypes.number.isRequired
// // };

// const useToolbarStyles3 = makeStyles(theme => ({
//   root: {
//     paddingLeft: theme.spacing(2),
//     paddingRight: theme.spacing(1)
//   },
//   highlight:
//     theme.palette.type === "light"
//       ? {
//           color: theme.palette.secondary.main,
//           backgroundColor: lighten(theme.palette.secondary.light, )
//         }
//       : {
//           color: theme.palette.text.primary,
//           backgroundColor: theme.palette.secondary.dark
//         },
//   spacer: {
//     flex: "1 1 100%"
//   },
//   actions: {
//     color: theme.palette.text.secondary
//   },
//   title: {
//     flex: "0 0 auto"
//   }
// }));

// const EnhancedTableToolbar3 = props => {
//   const classes = useToolbarStyles3();
//   const { numSelected } = props;

//   return (
//     <Toolbar
//       className={clsx(classes.root, {
//         [classes.highlight]: numSelected > 0
//       })}
//     >
//       <div className={classes.title}>
//         {numSelected > 0 ? (
//           <Typography color="inherit" variant="subtitle1">
//             {numSelected} selected
//           </Typography>
//         ) : (
//           <Typography variant="h6" id="tableTitle">
//             Nutrition
//           </Typography>
//         )}
//       </div>
//       <div className={classes.spacer} />
//       <div className={classes.actions}>
//         {numSelected > 0 ? (
//           <Tooltip title="Delete">
//             <IconButton aria-label="Delete">
//               <DeleteIcon />
//             </IconButton>
//           </Tooltip>
//         ) : (
//           <Tooltip title="Filter list">
//             <IconButton aria-label="Filter list">
//               <FilterListIcon />
//             </IconButton>
//           </Tooltip>
//         )}
//       </div>
//     </Toolbar>
//   );
// };

// EnhancedTableToolbar3.propTypes = {
//   numSelected: PropTypes.number.isRequired
// };

// const useStyles3 = makeStyles(theme => ({
//   root: {
//     width: "100%",
//     marginTop: theme.spacing(3)
//   },
//   paper: {
//     width: "100%",
//     marginBottom: theme.spacing(2)
//   },
//   table: {
//     minWidth: 750
//   },
//   tableWrapper: {
//     overflowX: "auto"
//   }
// }));

// // Example 4
// const useStyles4 = makeStyles(theme => ({
//   root: {
//     width: "100%",
//     marginTop: theme.spacing(3),
//     overflowX: "auto"
//   },
//   table: {
//     minWidth: 700
//   }
// }));

// const StyledTableCell4 = withStyles(theme => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white
//   },
//   body: {
//     fontSize: 14
//   }
// }))(TableCell);

// const StyledTableRow4 = withStyles(theme => ({
//   root: {
//     "&:nth-of-type(odd)": {
//       backgroundColor: theme.palette.background.default
//     }
//   }
// }))(TableRow);

// // Example 5
// const useStyles52 = makeStyles(theme => ({
//   root: {
//     width: "100%",
//     marginTop: theme.spacing(3)
//   },
//   table: {
//     minWidth: 500
//   },
//   tableWrapper: {
//     overflowX: "auto"
//   }
// }));

// const useStyles51 = makeStyles(theme => ({
//   root: {
//     flexShrink: 0,
//     color: theme.palette.text.secondary,
//     marginLeft: theme.spacing(2.5)
//   }
// }));

// function TablePaginationActions5(props) {
//   const classes = useStyles51();
//   const theme = useTheme();
//   const { count, page, rowsPerPage, onChangePage } = props;

//   function handleFirstPageButtonClick(event) {
//     onChangePage(event, 0);
//   }

//   function handleBackButtonClick(event) {
//     onChangePage(event, page - 1);
//   }

//   function handleNextButtonClick(event) {
//     onChangePage(event, page + 1);
//   }

//   function handleLastPageButtonClick(event) {
//     onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
//   }

//   return (
//     <div className={classes.root}>
//       <IconButton
//         onClick={handleFirstPageButtonClick}
//         disabled={page === 0}
//         aria-label="First Page"
//       >
//         {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
//       </IconButton>
//       <IconButton
//         onClick={handleBackButtonClick}
//         disabled={page === 0}
//         aria-label="Previous Page"
//       >
//         {theme.direction === "rtl" ? (
//           <KeyboardArrowRight />
//         ) : (
//           <KeyboardArrowLeft />
//         )}
//       </IconButton>
//       <IconButton
//         onClick={handleNextButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="Next Page"
//       >
//         {theme.direction === "rtl" ? (
//           <KeyboardArrowLeft />
//         ) : (
//           <KeyboardArrowRight />
//         )}
//       </IconButton>
//       <IconButton
//         onClick={handleLastPageButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="Last Page"
//       >
//         {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
//       </IconButton>
//     </div>
//   );
// }

// TablePaginationActions5.propTypes = {
//   count: PropTypes.number.isRequired,
//   onChangePage: PropTypes.func.isRequired,
//   page: PropTypes.number.isRequired,
//   rowsPerPage: PropTypes.number.isRequired
// };

// // function createData5(name, calories, fat) {
// //   return { name, calories, fat };
// // }

// // const rows5 = [
// //   createData5("Cupcake", 305, 3.7),
// //   createData5("Donut", 452, 25.0),
// //   createData5("Eclair", 262, 16.0),
// //   createData5("Frozen yoghurt", 159, 6.0),
// //   createData5("Gingerbread", 356, 16.0),
// //   createData5("Honeycomb", 408, 3.2),
// //   createData5("Ice cream sandwich", 237, 9.0),
// //   createData5("Jelly Bean", 375, 0.0),
// //   createData5("KitKat", 518, 26.0),
// //   createData5("Lollipop", 392, 0.2),
// //   createData5("Marshmallow", 318, 0),
// //   createData5("Nougat", 360, 19.0),
// //   createData5("Oreo", 437, 18.0)
// // ].sort((a, b) => (a.calories < b.calories ? -1 : 1));

// // Example 6
// const TAX_RATE = 0.07;

// const useStyles6 = makeStyles(theme => ({
//   root: {
//     width: "100%",
//     marginTop: theme.spacing(3),
//     overflowX: "auto"
//   },
//   table: {
//     minWidth: 700
//   }
// }));

// function ccyFormat6(num) {
//   return `${num.toFixed(2)}`;
// }

// function priceRow6(qty, unit) {
//   return qty * unit;
// }

// function createRow6(desc, qty, unit) {
//   const price = priceRow6(qty, unit);
//   return { desc, qty, unit, price };
// }

// // function subtotal6(items) {
// //   return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
// // }

// // const rows6 = [
// //   createRow6("Paperclips (Box)", 100, 1.15),
// //   createRow6("Paper (Case)", 10, 45.99),
// //   createRow6("Waste Basket", 2, 17.99)
// // ];

// // const invoiceSubtotal6 = subtotal6(rows6);
// // const invoiceTaxes6 = TAX_RATE * invoiceSubtotal6;
// // const invoiceTotal6 = invoiceTaxes6 + invoiceSubtotal6;

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// export default function Rating() {
//   // Example 1
//   const classes1 = useStyles1();

//   // Example 2
//   const classes2 = useStyles2();

//   // Example 3
//   const classes3 = useStyles3();
//   const [order3, setOrder3] = React.useState("asc");
//   const [orderBy3, setOrderBy3] = React.useState("calories");
//   const [selected3, setSelected3] = React.useState([]);
//   const [page3, setPage3] = React.useState(0);
//   const [dense3, setDense3] = React.useState(false);
//   const [rowsPerPage3, setRowsPerPage3] = React.useState(5);

//   function handleRequestSort3(event, property) {
//     const isDesc = orderBy3 === property && order3 === "desc";
//     setOrder3(isDesc ? "asc" : "desc");
//     setOrderBy3(property);
//   }

//   function handleSelectAllClick3(event) {
//     if (event.target.checked) {
//       const newSelecteds = rows.map(n => n.name);
//       setSelected3(newSelecteds);
//       return;
//     }
//     setSelected3([]);
//   }

//   function handleClick3(event, name) {
//     const selectedIndex = selected3.indexOf(name);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected3, name);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected3.slice(1));
//     } else if (selectedIndex === selected3.length - 1) {
//       newSelected = newSelected.concat(selected3.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected3.slice(0, selectedIndex),
//         selected3.slice(selectedIndex + 1)
//       );
//     }

//     setSelected3(newSelected);
//   }

//   function handleChangePage3(event, newPage) {
//     setPage3(newPage);
//   }

//   function handleChangeRowsPerPage3(event) {
//     setRowsPerPage3(+event.target.value);
//   }

//   function handleChangeDense3(event) {
//     setDense3(event.target.checked);
//   }

//   const isSelected3 = name => selected3.indexOf(name) !== -1;

//   const emptyRows3 =
//     rowsPerPage3 - Math.min(rowsPerPage3, rows.length - page3 * rowsPerPage3);

// //   // Example 4
// //   const classes4 = useStyles4();

// //   // Example 5
// //   const classes5 = useStyles52();
// //   const [page5, setPage5] = React.useState(0);
// //   const [rowsPerPage5, setRowsPerPage5] = React.useState(5);

// // //   const emptyRows5 =
// // //     rowsPerPage5 - Math.min(rowsPerPage5, rows5.length - page5 * rowsPerPage5);

// //   function handleChangePage5(event, newPage) {
// //     setPage5(newPage);
// //   }

// //   function handleChangeRowsPerPage5(event) {
// //     setRowsPerPage5(parseInt(event.target.value, 10));
// //   }

// //   // Example 6
// //   const classes6 = useStyles6();
// /////////////////////////////////////////////////////
//   return (
//     <>
      

//           <KTCodeExample
//             jsCode={jsCode3}
//             beforeCodeTitle="Rating"
//             codeBlockHeight="400px"
//           >
           
//             <div className="separator separator-dashed my-7"></div>
//             <div className={classes3.root}>
//               <Paper className={classes3.paper}>
//                 <EnhancedTableToolbar3 numSelected={selected3.length} />
//                 <div className={classes3.tableWrapper}>
//                   <Table
//                     className={classes3.table}
//                     aria-labelledby="tableTitle"
//                     size={dense3 ? "small" : "medium"}
//                   >
//                     <EnhancedTableHead3
//                       numSelected={selected3.length}
//                       order={order3}
//                       orderBy={orderBy3}
//                       onSelectAllClick={handleSelectAllClick3}
//                       onRequestSort={handleRequestSort3}
//                       rowCount={rows.length}
//                     />
//                     <TableBody>
//                       {stableSort3(rows, getSorting(order3, orderBy3))
//                         .slice(
//                           page3 * rowsPerPage3,
//                           page3 * rowsPerPage3 + rowsPerPage3
//                         )
//                         .map((row, index) => {
//                           const isItemSelected = isSelected3(row.name);
//                           const labelId = `enhanced-table-checkbox-${index}`;

//                           return (
//                             <TableRow
//                               hover
//                               onClick={event => handleClick3(event, row.name)}
//                               role="checkbox"
//                               aria-checked={isItemSelected}
//                               tabIndex={-1}
//                               key={row.name}
//                               selected={isItemSelected}
//                             >
//                               <TableCell padding="checkbox">
//                                 <Checkbox
//                                   checked={isItemSelected}
//                                   inputProps={{
//                                     "aria-labelledby": labelId
//                                   }}
//                                 />
//                               </TableCell>
//                               <TableCell
//                                 component="th"
//                                 id={labelId}
//                                 scope="row"
//                                 padding="none"
//                               >
//                                 {row.name}
//                               </TableCell>
//                               <TableCell align="right">
//                                 {row.calories}
//                               </TableCell>
//                               <TableCell align="right">{row.fat}</TableCell>
//                               <TableCell align="right">{row.carbs}</TableCell>
//                               <TableCell align="right">{row.protein}</TableCell>
//                             </TableRow>
//                           );
//                         })}
//                       {emptyRows3 > 0 && (
//                         <TableRow style={{ height: 49 * emptyRows3 }}>
//                           <TableCell colSpan={6} />
//                         </TableRow>
//                       )}
//                     </TableBody>
//                   </Table>
//                 </div>
//                 <TablePagination
//                   rowsPerPageOptions={[5, 10, 25]}
//                   component="div"
//                   count={rows.length}
//                   rowsPerPage={rowsPerPage3}
//                   page={page3}
//                   backIconButtonProps={{
//                     "aria-label": "Previous Page"
//                   }}
//                   nextIconButtonProps={{
//                     "aria-label": "Next Page"
//                   }}
//                   onChangePage={handleChangePage3}
//                   onChangeRowsPerPage={handleChangeRowsPerPage3}
//                 />
//               </Paper>
//               <FormControlLabel
//                 control={
//                   <Switch checked={dense3} onChange={handleChangeDense3} />
//                 }
//                 label="Dense padding"
//               />
//             </div>
//           </KTCodeExample>

         
//     </>
//   );
// }


// const jsCode3 = `
// import React from 'react';
// import clsx from 'clsx';
// import PropTypes from 'prop-types';
// import { lighten, makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TablePagination from '@material-ui/core/TablePagination';
// import TableRow from '@material-ui/core/TableRow';
// import TableSortLabel from '@material-ui/core/TableSortLabel';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';
// import Checkbox from '@material-ui/core/Checkbox';
// import IconButton from '@material-ui/core/IconButton';
// import Tooltip from '@material-ui/core/Tooltip';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Switch from '@material-ui/core/Switch';
// import DeleteIcon from '@material-ui/icons/Delete';
// import FilterListIcon from '@material-ui/icons/FilterList';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Donut', 452, 25.0, 51, 4.9),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
//   createData('Honeycomb', 408, 3.2, 87, 6.5),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Jelly Bean', 375, 0.0, 94, 0.0),
//   createData('KitKat', 518, 26.0, 65, 7.0),
//   createData('Lollipop', 392, 0.2, 98, 0.0),
//   createData('Marshmallow', 318, 0, 81, 2.0),
//   createData('Nougat', 360, 19.0, 9, 37.0),
//   createData('Oreo', 437, 18.0, 63, 4.0),
// ];

// function desc(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function stableSort(array, cmp) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = cmp(a[0], b[0]);
//     if (order !== 0) return order;
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map(el => el[0]);
// }

// function getSorting(order, orderBy) {
//   return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
// }

// const headRows = [
//   { id: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)' },
//   { id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
//   { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
//   { id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
//   { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
// ];

// function EnhancedTableHead(props) {
//   const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
//   const createSortHandler = property => event => {
//     onRequestSort(event, property);
//   };

//   return (
//     <TableHead>
//       <TableRow>
//         <TableCell padding="checkbox">
//           <Checkbox
//             indeterminate={numSelected > 0 && numSelected < rowCount}
//             checked={numSelected === rowCount}
//             onChange={onSelectAllClick}
//             inputProps={{ 'aria-label': 'Select all desserts' }}
//           />
//         </TableCell>
//         {headRows.map(row => (
//           <TableCell
//             key={row.id}
//             align={row.numeric ? 'right' : 'left'}
//             padding={row.disablePadding ? 'none' : 'default'}
//             sortDirection={orderBy === row.id ? order : false}
//           >
//             <TableSortLabel
//               active={orderBy === row.id}
//               direction={order}
//               onClick={createSortHandler(row.id)}
//             >
//               {row.label}
//             </TableSortLabel>
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   );
// }

// EnhancedTableHead.propTypes = {
//   numSelected: PropTypes.number.isRequired,
//   onRequestSort: PropTypes.func.isRequired,
//   onSelectAllClick: PropTypes.func.isRequired,
//   order: PropTypes.string.isRequired,
//   orderBy: PropTypes.string.isRequired,
//   rowCount: PropTypes.number.isRequired,
// };

// const useToolbarStyles = makeStyles(theme => ({
//   root: {
//     paddingLeft: theme.spacing(2),
//     paddingRight: theme.spacing(1),
//   },
//   highlight:
//     theme.palette.type === 'light'
//       ? {
//           color: theme.palette.secondary.main,
//           backgroundColor: lighten(theme.palette.secondary.light, 0.85),
//         }
//       : {
//           color: theme.palette.text.primary,
//           backgroundColor: theme.palette.secondary.dark,
//         },
//   spacer: {
//     flex: '1 1 100%',
//   },
//   actions: {
//     color: theme.palette.text.secondary,
//   },
//   title: {
//     flex: '0 0 auto',
//   },
// }));

// const EnhancedTableToolbar = props => {
//   const classes = useToolbarStyles();
//   const { numSelected } = props;

//   return (
//     <Toolbar
//       className={clsx(classes.root, {
//         [classes.highlight]: numSelected > 0,
//       })}
//     >
//       <div className={classes.title}>
//         {numSelected > 0 ? (
//           <Typography color="inherit" variant="subtitle1">
//             {numSelected} selected
//           </Typography>
//         ) : (
//           <Typography variant="h6" id="tableTitle">
//             Nutrition
//           </Typography>
//         )}
//       </div>
//       <div className={classes.spacer} />
//       <div className={classes.actions}>
//         {numSelected > 0 ? (
//           <Tooltip title="Delete">
//             <IconButton aria-label="Delete">
//               <DeleteIcon />
//             </IconButton>
//           </Tooltip>
//         ) : (
//           <Tooltip title="Filter list">
//             <IconButton aria-label="Filter list">
//               <FilterListIcon />
//             </IconButton>
//           </Tooltip>
//         )}
//       </div>
//     </Toolbar>
//   );
// };

// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
// };

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '100%',
//     marginTop: theme.spacing(3),
//   },
//   paper: {
//     width: '100%',
//     marginBottom: theme.spacing(2),
//   },
//   table: {
//     minWidth: 750,
//   },
//   tableWrapper: {
//     overflowX: 'auto',
//   },
// }));

// export default function EnhancedTable() {
//   const classes = useStyles();
//   const [order, setOrder] = React.useState('asc');
//   const [orderBy, setOrderBy] = React.useState('calories');
//   const [selected, setSelected] = React.useState([]);
//   const [page, setPage] = React.useState(0);
//   const [dense, setDense] = React.useState(false);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);

//   function handleRequestSort(event, property) {
//     const isDesc = orderBy === property && order === 'desc';
//     setOrder(isDesc ? 'asc' : 'desc');
//     setOrderBy(property);
//   }

//   function handleSelectAllClick(event) {
//     if (event.target.checked) {
//       const newSelecteds = rows.map(n => n.name);
//       setSelected(newSelecteds);
//       return;
//     }
//     setSelected([]);
//   }

//   function handleClick(event, name) {
//     const selectedIndex = selected.indexOf(name);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, name);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1),
//       );
//     }

//     setSelected(newSelected);
//   }

//   function handleChangePage(event, newPage) {
//     setPage(newPage);
//   }

//   function handleChangeRowsPerPage(event) {
//     setRowsPerPage(+event.target.value);
//   }

//   function handleChangeDense(event) {
//     setDense(event.target.checked);
//   }

//   const isSelected = name => selected.indexOf(name) !== -1;

//   const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

//   return (
//     <div className={classes.root}>
//       <Paper className={classes.paper}>
//         <EnhancedTableToolbar numSelected={selected.length} />
//         <div className={classes.tableWrapper}>
//           <Table
//             className={classes.table}
//             aria-labelledby="tableTitle"
//             size={dense ? 'small' : 'medium'}
//           >
//             <EnhancedTableHead
//               numSelected={selected.length}
//               order={order}
//               orderBy={orderBy}
//               onSelectAllClick={handleSelectAllClick}
//               onRequestSort={handleRequestSort}
//               rowCount={rows.length}
//             />
//             <TableBody>
//               {stableSort(rows, getSorting(order, orderBy))
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((row, index) => {
//                   const isItemSelected = isSelected(row.name);
//                   const labelId = \`enhanced-table-checkbox-\${index}\`;

//                   return (
//                     <TableRow
//                       hover
//                       onClick={event => handleClick(event, row.name)}
//                       role="checkbox"
//                       aria-checked={isItemSelected}
//                       tabIndex={-1}
//                       key={row.name}
//                       selected={isItemSelected}
//                     >
//                       <TableCell padding="checkbox">
//                         <Checkbox
//                           checked={isItemSelected}
//                           inputProps={{ 'aria-labelledby': labelId }}
//                         />
//                       </TableCell>
//                       <TableCell component="th" id={labelId} scope="row" padding="none">
//                         {row.name}
//                       </TableCell>
//                       <TableCell align="right">{row.calories}</TableCell>
//                       <TableCell align="right">{row.fat}</TableCell>
//                       <TableCell align="right">{row.carbs}</TableCell>
//                       <TableCell align="right">{row.protein}</TableCell>
//                     </TableRow>
//                   );
//                 })}
//               {emptyRows > 0 && (
//                 <TableRow style={{ height: 49 * emptyRows }}>
//                   <TableCell colSpan={6} />
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </div>
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={rows.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           backIconButtonProps={{
//             'aria-label': 'Previous Page',
//           }}
//           nextIconButtonProps={{
//             'aria-label': 'Next Page',
//           }}
//           onChangePage={handleChangePage}
//           onChangeRowsPerPage={handleChangeRowsPerPage}
//         />
//       </Paper>
//       <FormControlLabel
//         control={<Switch checked={dense} onChange={handleChangeDense} />}
//         label="Dense padding"
//       />
//     </div>
//   );
// }
// `;
