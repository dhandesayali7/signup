import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
 
    const [inpval,setInpval] = useState({
        name:"",
        email:"",
        date:"",
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
   
  const {name,email,date,password} =inpval;

  if(name === ""){
    alert("name field is requred")
  }else if(email ===""){
    alert("email field is requred")
  }else if(!email.includes ("@")){
    alert("plz valid email")
  }else if(date ===""){
    alert("date field is requred")
  }else if(password ===""){
    alert("password field is requred")
  }else if(password.length < 5){
    alert("password lenght greater than five ")
  }else {
    console.log("data added succesfully");
     
    localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));


}
  


  }
  return (
    <div className="container  mt-3 my-3">
      <section>
        <div className="left_data mt-3 ">
          <h3 className="text-center col-lg-6">Sign-Up</h3>
          
          <form>
            <div className="mb-3 my-5 col-lg-4">
              <input
                type="text" 
                name="name"
                onChange={getdata}
                className="form-control"
                placeholder="Enter  Name"
                id="name"
              />
            </div>
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
              onChange={getdata} 
              name="date"
              type="date"  
              className="form-control" />
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
            Already Have an Account <span>
            <NavLink to="/login">SignIn</NavLink > </span>
          </p>
        </div>
      </section>
    </div>
  );
}
