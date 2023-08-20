import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ListPage from "./components/ListPage/ListPage";
import DetailsPage from "./components/DetailsPage/DetailsPage";
import { Provider } from "react-redux";
import store from "./app/store";
import Layout from "./Layout";

export default function App() {
    return (
        <Provider store={store}>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<ListPage />} />
                        <Route path="/details/:id" element={<DetailsPage />} />
                    </Routes>
                </Layout>
            </Router>
        </Provider>
    );
}
