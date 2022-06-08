import React from 'react'
import {createRoot} from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";
import store from "./store";
import { BookstoreService } from "./services/bookstore-service";
import { BookstoreServiceProvider } from "./components/bookstore-service-context";

const bookstorieService = new BookstoreService();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <Provider store={store}>
      <ErrorBoundry>
        <BookstoreServiceProvider value={bookstorieService}>
          <Router>
            <App />
          </Router>
        </BookstoreServiceProvider>
      </ErrorBoundry>
    </Provider>
);
