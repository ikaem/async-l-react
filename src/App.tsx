import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Layout from "./components/layout/layout.component";
import ContactPage from "./pages/contact.page";
import ServicesPage from "./pages/services.page";
import ServicePage from "./pages/service.page";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <ContactPage />
        </Route>
        <Route path="/services">
          <ServicesPage />
        </Route>

        <Route path="/service/:id">
          <ServicePage />
        </Route>

        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
