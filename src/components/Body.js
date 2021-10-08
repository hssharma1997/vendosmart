import React, { useEffect, useState } from 'react'
import Vendor from './Vendor.js'
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import './body.css'

export default function Body({ city }) {
    const [query, setQuery] = useState("")
    const [rating, setRating] = useState("-1")
    const [locations, setLocations] = useState([])
    const [vendordata, setVendorData] = useState([])
    var options = []


    city.map((city) => {
        options.push({ label: city.city_title, value: city.city_title })
    })


    useEffect(() => {
        fetch('http://apitest.vendosmart.com/vendor_search_v2').then(response => response.json())
            .then(data => setVendorData(data.search_results));

        document.getElementsByClassName("css-1v99tuv").innerHTML = "Location"
    }, [])

    return (
        <div className="page_body">

            <div className="vendor_filter">
                <div className="heading"> <h3>Choose Best Manufacturing Suppliers Vendors in India</h3></div>
                <div className="search">
                    <input type="text" placeholder="Vendor Search" value={query} onChange={(e) => setQuery(e.target.value)} />
                    <input type="text" placeholder="Skills" />
                    <select name="ratings" id="ratings" value={rating}
                        onChange={e => setRating(e.currentTarget.value)}>
                        <option value="-1">Select Ratings</option>
                        <option value="5">Five Star Rating</option>
                        <option value="4">Four Star Rating</option>
                        <option value="3">Three Star Rating</option>
                        <option value="2">Two Star Rating</option>
                        <option value="1">One Star Rating</option>

                    </select>

                    <ReactMultiSelectCheckboxes options={options == null ? "Loading..." : options} value={locations}
                        onChange={setLocations}
                        labelledBy="Location"
                        className="location_selector"

                    />


                    <button className="search_btn">Search</button>

                </div>
            </div>

            {
             vendordata.filter((vendor) => {
                    if (query == "") { return vendor }
                    else if (vendor.name.toLowerCase().includes(query.toLowerCase())) { return vendor }


                }).filter((vendor) => {
                    if (locations.length == 0) { return vendor }

                    else {
                        for (let i = 0; i < locations.length; i++) {
                            if (vendor.city.toLowerCase().includes(locations[i].value.toLowerCase())) { return vendor }
                        }
                    }

                }).filter((vendor) => {
                    if (rating == "-1")
                        return vendor
                    else {
                        if (vendor.rating == rating)
                            return vendor
                    }
                })
                .map((vendor)=>{
                    return <Vendor vendor={vendor}/>
                })

            }
        </div>
    )
}
