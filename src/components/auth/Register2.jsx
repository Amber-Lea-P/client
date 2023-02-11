//shorcut rafce
import React, { useState } from 'react'
import axios from "axios"; 

const initialState = { 
    name: "", 
    email: "", 
    password: "", 
    confirmPassword: "",
};

const Register2 = () => {
    const [formData, setFromData] = useState(initialState)

    const {name, email, password, confirmPassword} = formData;
    // destructuring of the state object.

    const [error, setError] = useState({});
    // to hold the error related messages from the rest api call. 

 const onChange = (e) => {
        setFromData({ ...formData, [e.target.name] : e.target.value });
        //...formData : spread operator.

        //this.setState({[e.target.name]: e.target.value}); 
     
      };
      // to handle the change event for input tags
 const onSubmit = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(formData));
        axios.
          post("/api/users", this.state)
          .then((res) => console.log(JSON.stringify(res)))
    
          .catch((err) => {
            const errorObj = {}
            console.error(JSON.stringify(err.response.data.errors));
            err.response.data.errors.forEach
            ((element) => {
              console.log({ msg: element.msg, field: element.param });
              if (element.param == "email") errorObj.email = element.msg;
              if (element.param == "password") errorObj.password = element.msg;
            });
            this.setState({errors:errorObj});
          });
        console.log("hello from register form");
      };
      // to handle submition of form. 
    

  return (     
  <>
    <section class="container"> 
        <h1 class="large text-primary">Sign Up</h1>
        <p class="lead"><i class="fas fa-user"></i> Create Your Account</p>
        <form class="form" onSubmit={this.onSubmit}>

        <div class="form-group">
            <input 
            type="text" 
            placeholder="Name" 
            name="name" 
            value ={name} 
            required 
            onChange={onChange}/>
        </div>

        <div class="form-group">
            <input 
            type="email" 
            placeholder="Email Address" 
            name="email" 
            value = {email} 
            onChange={onChange}
            className={classnames
            ("form-control form-control-lg",
            {
            "is-invalid": this.state.errors && this.state.errors.email, })}
            />
        <div className="d-block invalid-feedback">{this.state.errors.email}</div>
            <small class="form-text"
            >This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small>
        </div>

        <div class="form-group">
            <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value = {password}
            onChange={onChange}
            className={classnames
                ("form-control form-control-lg",
            {
                "is-invalid": this.state.errors && this.state.errors.password, 
            })}
            />
            <div className="d-block invalid-feedback">
            {this.state.errors.password}
            </div>
        </div>

        <div class="form-group">
                <input
                type="password"
                placeholder="Confirm Password"
                name="password2"
                minLength="6"
                value={confirmPassword}
                onChange={onChange}
                />
        </div>

        <input type="submit" class="btn btn-primary" value="Register"/>
        </form>
        <p class="my-1">
        Already have an account? <a href="login.html">Sign In</a>
        </p>
    </section>
  </>
  );
};

export default Register2