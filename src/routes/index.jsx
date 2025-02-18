/* eslint-disable react/display-name */
import { Suspense, lazy } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";
// components
import LoadingScreen from "../components/LoadingScreen";
import Mainlayout from "../layout/Main";

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense
      fallback={<LoadingScreen isDashboard={pathname.includes("/dashboard")} />}
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: (
        <div>
          <Mainlayout />
        </div>
      ),
      children: [{ element: <HomePage />, index: true }],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

// IMPORT COMPONENTS

const HomePage = Loadable(lazy(() => import("../pages/Home")));
