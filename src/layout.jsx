import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Welcome } from "./routes/Welcome/Welcome.jsx";
import { Homework } from "./routes/Homework/Homework.jsx";
import { Review } from "./routes/Review/Review.jsx";
import { Thanks } from "./routes/Thanks/Thanks.jsx";

export const Layout = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/homework" element={<Homework />} />
                <Route path="/review" element={<Review />} />
                <Route path="/thanks" element={<Thanks />} />
            </Routes>
        </BrowserRouter>
    );
};
