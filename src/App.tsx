import { Suspense,lazy } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Logout from "./components/Logout/Logout";
import AuthGuard from "./guards/AuthGuard";
import RoleGuard from "./guards/RoleGuard";
import { PrivateRoutes, PublicRoutes, Roles } from "./models";
import { store } from "./redux";
import RoutesWithNotFound from "./utilities/RoutesWithNotFound";

const Login = lazy(()=> import('./pages/Login/Login'))
const Dashboard = lazy(()=> import('./pages/Dashboard/Dashboard'))
function App() {
  return (
    <div className="App">
      <Suspense fallback={<>Loading</>}>
        <Provider store={store}>
          <BrowserRouter>
          <Logout/>
            <RoutesWithNotFound>
              <Route
                path="/"
                element={<Navigate to={PrivateRoutes.PRIVATE} />}
              />
              <Route path="*" element={<>NOT FOUND</>} />
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route element={<AuthGuard />}>
                <Route
                  path={`${PrivateRoutes.PRIVATE}/*`}
                  element={<Dashboard />}
                />
              </Route>
              <Route  element={<RoleGuard rol={Roles.ADMIN} />}>
                <Route
                  path={`${PrivateRoutes.PRIVATE}/*`}
                  element={<Dashboard />}
                />
              </Route>
            </RoutesWithNotFound>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  );
}

export default App;
