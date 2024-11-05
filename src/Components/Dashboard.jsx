import React from 'react'

const Dashboard = () => {
    return (
        <section className='dashboard'>
            <div className="container">
                <div className='dashboard-wrapper'>
                    <div className="row">
                        <div className="col-md-12 col-sm-6">
                            <h5>Open Source Theme and UI Components</h5>
                            <h3>Geaux Astro helps you</h3>
                            <h3>craft beautiful websites</h3>
                            <h3>efficiently</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                    <div className='dashboard-support'>
                            <div className='dashboard-supporters'>
                                <img src="./src/assets/medal.png" alt="medal" width="50px" height="50px" />
                                <div>
                                    <span>Certificate Distribution</span>
                                    <p>We offer certificates to validate and recognize your achievement.</p>
                                </div>
                            </div>
                            <div className='dashboard-supporters'>
                                <img src="./src/assets/thought.png" alt="thought" width="50px" height="50px" />
                                <div>
                                    <span>Knowledge</span>
                                    <p>We deliver transformative knowledge that empowers and inspires.</p>
                                </div>
                            </div>
                            <div className='dashboard-supporters'>
                                <img src="./src/assets/training.png" alt="training" width="50px" height="50px" />
                                <div>
                                    <span>Hands-on Experience</span>
                                    <p>We provide hands-on experience for real-world learning. You learn best by doing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                       <div className='dashboard-image'>
                            <img src="./src/assets/AboutDashboard.png" alt="Dashboard" width="100%"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard
