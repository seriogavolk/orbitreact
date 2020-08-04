import React from 'react';
import { Link } from 'react-router-dom';


const Price = () => {
    return(
        <>
        <div className="pricemain">
        <div className="tier1wrapper" >
            <h3>Tier 1</h3>
            <p>This Tier includes:</p>
            <ul>
                <li>Responsive Layout</li>
                <li>Designed in REACT Framework</li>
                <li>Lightning-Fast Page loading</li>
                <li>Lazy-Loading</li>
                <li>Up to 5 Pages</li>
                <li>API integrations</li>
            </ul>
            <h1>{`$500`}</h1>
          
        </div>
        <div className="tier2wrapper" >
            <h3>Tier 2</h3>
            <p>This Tier includes:</p>
            <ul>
                <li>Everything in Tier 1</li>
                <p>Plus:</p>
                <li>SEO optimiziation</li>
                <li>Up to 10 Pages</li>
                <li>SignUp/Login functionality</li>
                <li>6 months of support and modifications</li>
                <li>UI/UX Mockups and design</li>
                <li>One 3D design</li>
            </ul>
            <h1>{`$2000 + Financing Available`}</h1>
          
        </div>
        <div className="tier3wrapper" >
        <h3>Tier 3 - Premium</h3>
            <p>This Tier includes:</p>
            <ul>
                <li>Everything in Tier 1 and 2</li>
                <p>Plus:</p>
                <li>Back End api - NodeJS</li>
                <li>PostgreSQL/MongoDB - Database Management Solution</li>
                <li>Database optimization</li>
                <li>ThreeJS - 2x 3D model designs</li>
                <li>Digital Asset rework and editting done by a designer</li>
            </ul>

            <h4>* This Package is ideal for small startups including but not limited to E-Commerce, Inventory Management, Small Corporation with User-Base Management.</h4>
            <h1>{`$10000 + Financing Available`}</h1>
        </div>
        </div>
        <Link to="/"><p>Go Back Home</p></Link> 
  </>
    )
}

export default Price;