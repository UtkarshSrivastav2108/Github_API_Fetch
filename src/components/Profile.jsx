import React, { useEffect, useState } from 'react'

function Profile() {
    const [users, setusers] = useState([]);

    const getUsers = async () => {

        const response = await fetch('https://api.github.com/users');

        setusers(await response.json());

    }

    useEffect(() => {

        getUsers();

    }, [])



    return (
        <div>
            <h2 className='text-center mt-5 mb'>List Of GitHub Users</h2>
            <div className="container-fluid mt-5">
                <div className="row text-center">


                    {
                        users.map((curElem, index) => {
                            return (<div className="col-lg-4 col-md-12 col-sm-12 mt-5" key={curElem.id}>
                                <div className="card pt-2">
                                    <div className='d-flex align-items-center'>
                                        <div className="image ">
                                            <img className='image' src={curElem.avatar_url} alt="logo" />
                                        </div>
                                        <div className="ml-3 w-100">

                                            <h4 className=" lextLeft">{curElem.login} <br /> <br /> <span className="textLeft">{curElem.login}</span> </h4>
                                            <div className='p-2 m-2 bg-primary d-flex justify-content-between text-white stats'>
                                                <div className="d-flex flex-column "> <span className="articles">Articles</span><span className="number1">{curElem.login}</span></div>
                                                <div className="d-flex flex-column "> <span className="articles">Followers</span><span className="number1">{curElem.login}</span></div>
                                                <div className="d-flex flex-column "> <span className="articles">Ratings</span><span className="number1">{curElem.login}</span></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>)

                        })
                    }



                </div>
            </div>
        </div>
    )
}

export default Profile


