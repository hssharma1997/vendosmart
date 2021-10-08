import React from 'react'
import './vendor.css'
import ServiceList from './ServiceList.js'

export default function Vendor({ vendor }) {
    return (

        <div className="vendor">
            <div className="vendor_intro">
                <br />
                <br />
                <img className="vendor_logo" src={vendor.logo} alt="vendor-logo" />
                <br />
                <b>Verified by Vendosmart</b>
                <br />
                <p className="vendor_address">{vendor.address}</p>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>

                <p>Rated 0 (0 Reviews)</p>

            </div>

            <div className="vendor_info">
                <h1 className="vendor_name">{vendor.name}</h1>
                <p className="vendor_moto">"{vendor.tag_line}"</p>
                <hr />
                <p className="business_info">{vendor.about_business}</p>

                <div className="vendor_points">

                    <div className="vendor_point">
                        <p className="point_heading"> Last Delivery</p>
                        <p>{vendor.last_delivery}</p>
                    </div>

                    <div className="vendor_point">
                        <p className="point_heading">  Year Establishment</p>
                        <p>{vendor.created_at}</p>
                    </div>

                    <div className="vendor_point">
                        <p className="point_heading"> No of Team Members</p>
                        <p>{vendor.no_of_employees}</p>
                    </div>

                    <div className="vendor_point">
                        <p className="point_heading">Total Orders</p>
                        <p>{vendor.total_orders}</p>
                    </div>

                    <div className="vendor_point">
                        <p className="point_heading">Location</p>
                        <p>{vendor.city}</p>
                    </div>

                    <div className="vendor_point">
                        <p className="point_heading">  Response Rate</p>
                        <p>{vendor.response_time}</p>
                    </div>

                </div>
                <br />
                <br />
                <div className="service_rfq">
                    <div className="service_list">
                        {vendor.service_list.map(service => {
                            return <ServiceList name={service} />
                        })}

                    </div>
                    <div className="rfq_btn">
                        <button>Raise RFQ</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
