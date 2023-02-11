//shorcut rafce
import React, { useState } from 'react'
const initialState = {};

const Register2 = () => {
    const [formData, setFromData] = useState(initialState)
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
            onChange={this.onChange}/>
        </div>

        <div class="form-group">
            <input 
            type="email" 
            placeholder="Email Address" 
            name="email" 
            value = {email} 
            onChange={this.onChange}
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
            onChange={this.onChange}
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
                onChange={this.onChange}
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