import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <div className="footer bg-dark">
      <div className="d-flex justify-content-around align-items-center pt-4 pb-4">
        <div className="text-light">
          <p className="h6">
            <Link href="https://pucit.edu.pk/programs/">
              <a className="btn btn-dark text-light h6"><i className="bi bi-book me-2"></i>Admissions</a>
            </Link>{' '}
          </p>
          <p className="h6">
            <Link href="https://pucit.edu.pk/alumnus/">
              <a className="btn btn-dark text-light h6"><i className="bi bi-lightbulb me-2"></i>Alumnus</a>
            </Link>{' '}
          </p>
        </div>
        <div className="text-light">
          <p className="h6">
            <Link href="https://pucit.edu.pk/academic-regulations/">
              <a className="btn btn-dark text-light h6"><i className="bi bi-clipboard-check me-2"></i>Academics</a>
            </Link>{' '}
          </p>
          <p className="h6">
            <Link href="https://pucit.edu.pk/notice-board/">
              <a className="btn btn-dark text-light h6"> <i className="bi bi-card-heading me-2  "></i>Notice Board</a>
            </Link>{' '}
          </p>
        </div>
        <div className="text-light">
          <p className="h6">
            <Link href="https://pucit.edu.pk/348223-2/">
              <a className="btn btn-dark text-light h6"><i className="bi bi-save-fill me-2"></i>Faculty</a>
            </Link>{' '}
          </p>
          <p className="h6">
            <Link href="https://pucit.edu.pk/contact-us/">
              <a className="btn btn-dark text-light h6"><i className="bi bi-person-rolodex me-2"></i>Contact Us</a>
            </Link>{' '}
          </p>
        </div>
      </div>
      <div className="text-center text-muted h6 mb-0 pb-4">
        &copy; Copyright all rights reserved 2022
      </div>
    </div>
  );
};
