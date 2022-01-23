import React from "react";
import Link from "next/link";
const Signup = () => {
  return (<div className="container mt-3 mb-3 w-50">
    <div className="h3 text-center">
      CREATE ACCOUNT
    </div>
    <section className="form-group">
      <form onSubmit={ () => { } }>
        <label htmlFor="name">Name</label>
        <input className="form-control mt-2 mb-2" type="text" id="name" />
        <label htmlFor="username">User Name</label>
        <input className="form-control mt-2 mb-2" type="text" id="username" />
        <label htmlFor="email">Email</label>
        <input className="form-control mt-2 mb-2" type="text" id="email" />
        <label htmlFor="password">Password</label>
        <input className="form-control mt-2 mb-2" type="text" id="password" />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input className="form-control mt-2 mb-2" type="text" id="confirmPassword" />
        <label htmlFor="role">Role</label>
        <input className="form-control mt-2 mb-2" type="text" placeholder="TEACHER OR STUDENT" id="role" />
        <div className="text-center">
          <button className="btn btn-primary mt-2 mb-2 text-uppercase">
            <i className="bi bi-person-check pe-2"></i>
            create account
          </button>
        </div>
      </form>
      <p className="text-end h6 text-muted">Have an account? <Link href="/login"><a>LOG IN</a></Link></p>
    </section>
  </div>)
}

export default Signup;
