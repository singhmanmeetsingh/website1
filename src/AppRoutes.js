import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";

const Homepage = React.lazy(() => {
  return import("./components/homepage/index");
});
const Explore =React.lazy(() => {
  return import("./components/explore/index")
})

const routeList = [
  {
    path: "/",
    renderComponent: (compProps) => <Homepage {...compProps} />,
    element: <Homepage />,
    key: "homepage",
  },
  {
    path: '/explore',
    renderComponent: (compProps) => <Explore {...compProps} />,
    element: <Explore />,
    key: "explore",
  }
];

const AppRoutes = (props) => {
  return (
    <Layout>
      <Routes>
        {routeList.map(({ key, path, renderComponent, element }) => {
          console.log("render", renderComponent)
          return (
            <Route
              exact
              key={key}
              path={path}
              render={renderComponent}
              element={element}
              {...props}
            />
          );
        })}
      </Routes>
    </Layout>
  );
};


export default AppRoutes;