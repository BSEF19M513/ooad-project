import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {Card} from '@nextui-org/react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter();

  const verifyStudent = (email: string): boolean => {
    const reg = /^bsef\d{2}[me]\d{3}@pucit.edu.pk/;
    return reg.test(email);
  };

  const verifyTeacher = (email: string): boolean => {
    const reg = /^abdullahbutt@pucit.edu.pk$/;
    return reg.test(email);
  };

  const verifyPassword = (password: string): boolean => {
    const reg = /^pucit$/;
    return reg.test(password);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (verifyStudent(email) && verifyPassword(password)) {
      console.log('student');
      router.push('/student/checkattendence');
    } else if (verifyTeacher(email) && verifyPassword(password)) {
      router.push('/teacher/addattendence');
    } else {
      setError(true);
    }
  };

  return (
    <div className="container mt-3 mb-3 w-50">
      <div className="h3 text-center">LOG IN</div>
      <section className="form-group">
        {error && <Card color="error">Email or password incorrect</Card>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            className="form-control mt-2 mb-2"
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            className="form-control mt-2 mb-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
          />

          <div className="text-center">
            
            {/* <input
              className="btn btn-success mt-2 mb-2 text-uppercase"
              type="submit"
            /> */}
            <button className="btn btn-primary mt-2 mb-2 text-uppercase">
              <i className="bi bi-box-arrow-left text-light pe-2"></i>
              Log In
            </button>
          </div>
        </form>
        <p className="text-end h6 text-muted">
          Don&apos;t have an account?{' '}
          <Link href="/signup">
            <a>CREATE ONE</a>
          </Link>
        </p>
      </section>
    </div>
  );
};

export default Login;
