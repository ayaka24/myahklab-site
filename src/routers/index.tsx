import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Page } from "./types";
import ScrollToTop from "./ScrollToTop";
import HeaderContainer from "containers/HeaderContainer/HeaderContainer";
import Footer from "components/Footer/Footer";
import Page404 from "containers/Page404/Page404";
import PageHome from "containers/PageHome/PageHome";
import MediaRunningContainer from "containers/MediaRunningContainer/MediaRunningContainer";

export const pages: Page[] = [
  { path: "/", exact: true, component: PageHome },
  { path: "/#", exact: true, component: PageHome },
  //
  { path: "/home-header-style2", exact: true, component: PageHome },
  { path: "/home-header-style2-logedin", exact: true, component: PageHome },
  { path: "/page404", component: Page404 },
  //
];

const Routes = () => {
  return (
    <BrowserRouter
    // basename={
    //   import.meta.env.VITE_LRT_OR_RTL === "rtl" ? "/ncmaz-rtl" : "/ncmaz"
    // }
    >
      <MediaRunningContainer />

      <ScrollToTop />
      <HeaderContainer />
      <Switch>
        {pages.map(({ component, path, exact }) => {
          return (
            <Route
              key={path}
              component={component}
              exact={!!exact}
              path={path}
            />
          );
        })}
        <Route component={Page404} />
      </Switch>
      <Footer />
      {/* MEDIA */}
    </BrowserRouter>
  );
};

export default Routes;
