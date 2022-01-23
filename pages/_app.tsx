import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {NextUIProvider} from '@nextui-org/react';
import {TeacherLayout} from '../src/Layouts/TeacherLayout';
import {StudentLayout} from '../src/Layouts/StudentLayout';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <NextUIProvider>
      {
        // @ts-ignore
        Component.person === 'teacher' ? (
          <TeacherLayout>
            <Component {...pageProps} />
          </TeacherLayout>
        ) : (
          <StudentLayout>
            <Component {...pageProps} />
          </StudentLayout>
        )
      }
    </NextUIProvider>
  );
}

export default MyApp;
