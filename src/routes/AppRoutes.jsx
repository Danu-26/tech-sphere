import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/mainLayout.jsx";
import Home from "../pages/home/index.jsx";
import AddNewQuestion from "../pages/question/AddNewQuestion.jsx"
import AddNewStory from "../pages/story/AddNewStory.jsx"
import PageNotFound from "../pages/notFound/PageNotFound.jsx"

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />

                {/* Home sub routes */}
                <Route path="/add-new-question" element={<AddNewQuestion />} />
                <Route path="/add-new-story" element={<AddNewStory />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
};

export default AppRoutes;
