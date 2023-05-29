import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "./Container/Container.module";

export const Router = () => {
    return (
        <BrowserRouter>
        
        <Routes>
            <Route path="/" element={
                <Container>
                    <h1>Home</h1>
                </Container>
            } />
            {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
            <Route path="*" element={<>Not found</>} />
        </Routes>
        </BrowserRouter>
    );
    }