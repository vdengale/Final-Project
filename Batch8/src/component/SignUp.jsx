import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import img from "../images/Images1.png"
//import img from "../asset/css/Images.png"

function SignUp() {


    const [signUp, setSignUp] = useState({
        name: "",
        email: "",
        phone: "",
        shopname: "",
        password: "",
    })

    const signUpData = (e) => {
        setSignUp({ ...signUp, [e.target.name]: e.target.value });
        console.log(signUp);
    }

    const submitData = (e) => {
        // console.log("submit the button==>>>",signUp);
    }

    // useEffect(() => {
    //     // storing input name
    //     localStorage.setItem("name", JSON.stringify());
    //   }, [r]);


    return (
        <div className="container">
            <div className="row">
                <div className="col mt-4 pt-4">
                    <h2 style={{ color: "#575700", textShadow: "0 0 3px #FF0000" }}>Create Account Vmall Tenant</h2>
                    <h5 className='mb-4 mt-4' style={{ color: "purple",textDecoration:"underline"}}>Sign Up</h5>
                    <form >
                        <div className="mb-4">
                            <input type="text" className="form-control" name="name" onChange={signUpData} placeholder="Enter Full Name" aria-describedby="emailHelp" style={{ backgroundColor: "whitesmoke" }} />
                        </div>
                        <div className="mb-4 " >
                            <input type="email" className="form-control" name="email" onChange={signUpData} placeholder="Enter Email ID" style={{ backgroundColor: "whitesmoke" }} />
                        </div>
                        <div className="mb-4">
                            <input type="number" id="phone" className="form-control" name="phone" name="phone" onChange={signUpData} placeholder="Enter Phone Number" maxlength={10} required style={{ backgroundColor: "whitesmoke" }} />
                        </div>
                        <div className="mb-4">
                            <input type="text" className="form-control" name="shopname" onChange={signUpData} placeholder="Enter Shop Name" style={{ backgroundColor: "whitesmoke" }} />
                        </div>
                        <div className="mb-4">
                            <input type="password" className="form-control" minlength="8" required name="password" onChange={signUpData} placeholder="Enter Password" style={{ backgroundColor: "whitesmoke" }} />
                        </div>
                        <div className="d-grid gap-2 mt-4" style={{ boxShadow: "10px 10px 5px grey"}}>
                            <button className="btn btn-primary" type="submit" onSubmit={(e) => { submitData(e) }}>Signup</button>
                        </div>

                         <hr className="mb-4" style={{ borderBottom: "1px outset black" }}></hr> 

                        <div className="d-grid gap-2 mt-4" >
                            <button className="btn btn-success" type="button"  style={{color:"black"}}>Signup Via Google</button>
                        </div>
                        <div className="d-grid gap-2 mt-4 ">
                            <button className="btn btn-info" type="button">Signup Via Facebook</button>
                        </div>
                    </form>

                </div>



                <div className="col  bg-light">
                    <img src={img} alt="Banner" style={{ height: '100%', width: '100%' }} />

                </div>
            </div>
        </div>

    )
}

export default SignUp
