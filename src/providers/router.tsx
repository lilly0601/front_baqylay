import { createBrowserRouter } from "react-router-dom";
import { MainPage } from '../components/MainPage/MainPage';
import { Main } from '../component/Main/Main';

export const router = createBrowserRouter([
  { path: '/', element: <MainPage /> },
  { path: '/main', element: <Main /> },
]);