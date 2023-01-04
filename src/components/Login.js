
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashBoard from "./DashBoard";

const Login =() =>{

 const history = useNavigate();

    const [inpval,setInpval] = useState({
        
        email:"",
         password:""
    })
    const [data,setData] = useState([]);
    console.log(inpval)
  const getdata = (e) => {
  //console.log(e.target.value)

  const {value,name} = e.target;
  //console.log(value,name);
   
  setInpval (() =>{
    return{
        ...inpval,
        [name]:value
    }
  })

  };

  const addData =(e) =>{
   e.preventDefault();

   const getuserArr = localStorage.getItem("useryoutube")
   console.log(getuserArr);

  const {email,password} =inpval;

   if(email ===""){
    alert("email field is requred")
  }else if(!email.includes ("@")){
    alert("plz valid email")
  }else if(password ===""){
    alert("password field is requred")
  }else if(password.length < 5){
    alert("password lenght greater than five ")
  }else {
    if(getuserArr && getuserArr.length){
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((element,k)=>{
            return element.email === email && element.password === password
        });
       if(userlogin.length === 0) {
       alert ("invalis details")
       }else{
        console.log("user login succesfully");
        localStorage.setItem("user_login",JSON.stringify(userlogin))
        history ("/dashboard")
       }
    }
    }
  }
  return (
    <div className="container  mt-3 my-3">
      <section>
        <div className="left_data mt-3 ">
          <h3 className="text-center col-lg-6">Sign-Up</h3>
          
          <form>
            
            <div className="mb-3 col-lg-4">
              <input
                type="email"
                name="email"
                onChange={getdata}
                className="form-control"
                placeholder="Email"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            
            <div className="mb-3 col-lg-4">
              <input
                type="password"
                name="password"
                onChange={getdata}
                className="form-control"
                placeholder="Password"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit"
             className=" col-lg-4 btn btn-primary"
             onClick={addData}
             >
              Submit
            </button>
          </form>
          <p className="mt-3">
            Already Have an Account <span>SingIn</span>
          </p>
        </div>
      </section>
    </div>
  )
}
  export default Login;