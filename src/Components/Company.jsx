import React from 'react'

const Company = () => {
    return (
        <div className='company'>
            <div className="container">
            <div className="company-wrapper">
                <h1>Our Placement Partners</h1>
                <div className="row company-image">
                   <div className="col-md-3 col-sm-12">
                    <img src="./src/assets/airbnb.png" alt="airbnb" width="200px" height="100px" />
                   </div>
                   <div className="col-md-3 col-sm-12">
                    <img src="./src/assets/coty.png" alt="coty" width="200px"  height="100px" />
                   </div>
                   <div className="col-md-3 col-sm-12">
                    <img src="./src/assets/lilly.png" alt="lilly" width="200px"  height="100px" />
                   </div>
                   <div className="col-md-3 col-sm-12">
                    <img src="./src/assets/tailus.png" alt="tailus" width="200px"  height="100px" />
                   </div>
                   <div className="col-md-3 col-sm-12">
                    <img src="./src/assets/lifegroups.png" alt="lifegroups" width="200px"  height="100px" />
                   </div>
                   <div className="col-md-3 col-sm-12">
                    <img src="./src/assets/client-8.png"alt="grabyo" width="200px"  height="100px" />
                   </div>
                   <div className="col-md-3 col-sm-12">
                    <img src="./src/assets/myob.png" alt="myob" width="200px"  height="100px" />
                   </div>
                   <div className="col-md-3 col-sm-12">
                    <img src="./src/assets/microsoft.png" alt="microsoft" width="200px"  height="100px" />
                   </div>
                </div>
                <button>and, more companies</button>
            </div>
            </div>
        </div>
    )
}

export default Company
