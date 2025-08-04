// import MainLayout from "../components/layouts/MainLayout";
import CountryDetailPage from "../pages/CountryDetail";
import Home from "../pages/Home";

const routes = [
  {
    path: '/',
    // element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/country/:alpha3Code',
        element: <CountryDetailPage />,
      },

   
    ]
  },
];

export default routes;
