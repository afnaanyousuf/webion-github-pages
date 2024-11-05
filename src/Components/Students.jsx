import React from 'react'
const Students = () => {
    return (
        <section className='empower'>
            <div className="container">
                <div className="empower-wrapper">
                    <div className="row">
                        <div className="col-md-6 justify-content-space-around">
                            <div className="empower-text">
                                <h2 className='text-green'>Empower your future with cutting-edge skills</h2>
                                <h2 className='text-blue'>
                                    New, Embrace innovation, master technology, &
                                    shape <br /> the digital world
                                </h2>
                                <h2 className='text-red'>Your journey to success <br /> starts here.</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="students-enrolled">
                                 <div className="students-enrolled">
                                 <p className='course-track'>
                                    Join our course with a proven track record of success, where learning isn't just about gaining skills; it's about growing them.
                                    Join us, learn with confidence, and watch your skills soar.
                                </p>
                                <div className="student-track">
                                    <div className="total">
                                        <a href="#" className='total-placed' >Total Students</a>
                                        <p>11</p>
                                    </div>
                                    <div className="placed">
                                        <a href="#" className='placed' >Total Placed</a>
                                        <p>5</p>
                                    </div>
                                    <div className="unplaced">
                                        <a href="#" className='unplaced'>Total Unplaced</a>
                                        <p>6</p>
                                    </div>
                                 </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Students
