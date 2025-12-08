import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import ProjectDetails from "../Pages/ProjectDetails";
import Container from "../components/Container";


export function AppRoutes() {
  return (
    <Container>

      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/Project/:id" element={<ProjectDetails />} />
      </Routes>
   
    </Container>
  );
  
}