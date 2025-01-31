import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/Home";
import Filmes from "./pages/Filmes";
import Header from "./components/Header";
import Erro from "./pages/Erro";

function RouteApp(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/filmes/:id" element={<Filmes />} />
                <Route path="*" element={<Erro />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteApp;
