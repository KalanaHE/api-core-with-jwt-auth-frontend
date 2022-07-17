import { Suspense, lazy } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";
import DashboardLayout from "../layouts/dashboard";
import LogoOnlyLayout from "../layouts/LogoOnlyLayout";
import LoadingScreen from "../components/LoadingScreen";
import AuthGuard from "../guards/AuthGuard";

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<LoadingScreen isDashboard={pathname.includes("/dashboard")} />}>
      <Component {...props} />
    </Suspense>
  );
};

// Authentication
const Login = Loadable(lazy(() => import("../pages/auth/Login")));
const Register = Loadable(lazy(() => import("../pages/auth/Register")));

// Pages
const Home = Loadable(lazy(() => import("../pages/Home")));
const PageOne = Loadable(lazy(() => import("../pages/PageOne")));
const PageTwo = Loadable(lazy(() => import("../pages/PageTwo")));


const NotFound = Loadable(lazy(() => import("../pages/Page404")));
const NoPermission = Loadable(lazy(() => import("../pages/Page403")));
const ServerError = Loadable(lazy(() => import("../pages/Page500")));
const Maintenance = Loadable(lazy(() => import("../pages/Maintenance")));
const ComingSoon = Loadable(lazy(() => import("../pages/ComingSoon")));

export default function Router() {
  return useRoutes([
    {
      path: "/",
      children: [
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
      ],
    },
    {
      path: "/",
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { element: <Navigate to="/home" replace />, index: true }, //initially navigate to this page
        // { path: "/dashboard", element: <Navigate to="/dashboard/one" replace />, index: true },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/page-one",
          element: <PageOne />,
        },
        {
          path: "/page-two",
          element: <PageTwo />,
        },
      ],
    },
    {
      path: "*",
      element: <LogoOnlyLayout />,
      children: [
        { path: "coming-soon", element: <ComingSoon /> },
        { path: "maintenance", element: <Maintenance /> },
        { path: "500", element: <ServerError /> },
        { path: "404", element: <NotFound /> },
        { path: "403", element: <NoPermission /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
