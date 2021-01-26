import React from "react";
import { Route, Switch } from "react-router-dom";

import LogIn from '../components/Auth/LogIn';
import SignUp from '../components/Auth/SignUp';
import Landing from '../components/Landing';
import SecureCar from "../components/SecureCar";
import CustomQuote from "../components/SecureCar/CustomQuote";
import Quote from "../components/SecureCar/Quote";
import CompareQuote from "../components/SecureCar/Quote/CompareQuote";
import Countries from "../components/Admin/Countries";
import MainActivities from "../components/Admin/MainActivities"
import MediumResponses from "../components/Admin/MediumResponses"
import LinkClasses from "../components/Admin/LinkClasses";
import PQRContacts from "../components/Admin/PQRContacts";
import TypeActivities from "../components/Admin/TypeActivities";
import StepsForm from "../components/Landing/StepsForm";

const ROUTES = [
  { path: "/", key: "SOAT", exact: true, component: Landing, show: true, auth: false },
  { path: "/log-in", key: "Iniciar sesión", exact: true, component: LogIn, show: true, auth: false },
  { path: "/sign-up", key: "Registrarse", exact: true, component: SignUp, show: true, auth: false },
  { path: "/secure-car", key: "Seguro para auto", exact: true, component: SecureCar, show: true, auth: false },
  { path: "/steps-form", key: "pasos SOAT", exact: true, component: StepsForm, show: false, auth: false },
  { path: "/custom-quote", key: "Cotización Personalizada", exact: true, component: CustomQuote, show: false },
  { path: "/quote-list", key: "Cotización", exact: true, component: Quote, show: false },
  { path: "/compare-quote", key: "Comparar lista seleccionada", exact: true, component: CompareQuote, show: false },
  { path: "/dashboard", key: "dashboard", exact: true, component: () => <h1>Dashboard</h1>, show: false, auth: true, },
  { path: "/countries", key: "Países", exact: true, component: Countries, show: false, auth: true },
  { path: "/main-activities", key: "Main Activities", exact: true, component: MainActivities, show: false, auth: true },
  { path: "/medium-responses", key: "Medium Responses", exact: true, component: MediumResponses, show: false, auth: true },
  { path: "/link-classes", key: "Link Classes", exact: true, component: LinkClasses, show: false, auth: true },
  { path: "/PQR-contacts", key: "PQR Contacts", exact: true, component: PQRContacts, show: false, auth: true },
  { path: "/type-activities", key: "Type Activities", exact: true, component: TypeActivities, show: false, auth: true },
];

export default ROUTES;

/**
 * Render a route with potential sub routes
 * https://reacttraining.com/react-router/web/example/route-config
 */
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
}

/**
* Use this component for any new section of routes (any config object that has a "routes" property
*/
export function RenderRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={() => <h1>¡UPS! Sitio web no encontrado.</h1>} />
    </Switch>
  );
}
