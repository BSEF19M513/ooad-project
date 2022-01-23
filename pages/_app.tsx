import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {NextUIProvider} from '@nextui-org/react';
import {TeacherLayout} from '../src/Layouts/TeacherLayout';
import {StudentLayout} from '../src/Layouts/StudentLayout';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <NextUIProvider>
      {Component.person === 'teacher' ? (
        <TeacherLayout>
          <div className="container heightContainer">
            <Component {...pageProps} />
          </div>
        </TeacherLayout>
      ) : (
        <StudentLayout>
          <div className="container heightContainer">
            <Component {...pageProps} />
          </div>
        </StudentLayout>
      )}
    </NextUIProvider>
  );
}

export default MyApp;
