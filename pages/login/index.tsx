import React from "react";
import Link from "next/link";

const Login = () => {
  return (<div className="container mt-3 mb-3 w-50">
    <div className="h3 text-center">
      LOG IN
    </div>
    <section className="form-group">
      <form onSubmit={ () => { } }>
        <label htmlFor="email">Email</label>
        <input className="form-control mt-2 mb-2" type="text" id="email" />
        <label htmlFor="password">Password</label>
        <input className="form-control mt-2 mb-2" type="text" id="password" />

        <div className="text-center">
          <input className="btn btn-success mt-2 mb-2 text-uppercase" type="submit" value="login" />
        </div>
      </form>
      <p className="text-end h5 text-muted">Don&apos;t have an account? <Link href="/signup"><a>CREATE ONE</a></Link></p>
    </section>
  </div>)
}

export default Login;
