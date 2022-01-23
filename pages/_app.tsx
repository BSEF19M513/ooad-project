import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {NextUIProvider} from '@nextui-org/react';
import {TeacherLayout} from '../src/Layouts/TeacherLayout';
import {StudentLayout} from '../src/Layouts/StudentLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {DefaultLayout} from '../src/Layouts/DefaultLayout';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <NextUIProvider>
      {
        // @ts-ignore
        Component.person === 'teacher' ? (
          <TeacherLayout>
            <Component {...pageProps} />
          </TeacherLayout>
        ) : // @ts-ignore
        Component.person === 'student' ? (
          <StudentLayout>
            <Component {...pageProps} />
          </StudentLayout>
        ) : (
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        )
      }
    </NextUIProvider>
  );
}

export default MyApp;
