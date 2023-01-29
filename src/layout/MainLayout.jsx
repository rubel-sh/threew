import React from "react";
import { Outlet } from "react-router-dom";
import { BodyWrapper } from "../components/StyledComponents";
import Footer from "../pages/shared/Footer";
import Header from "../pages/shared/Header";

const MainLayout = () => {
  return (
    <BodyWrapper>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </BodyWrapper>
  );
};

export default MainLayout;
