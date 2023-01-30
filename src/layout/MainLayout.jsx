import React from "react";
import { Outlet } from "react-router-dom";
import ModalPopup from "../components/ModalPopup";
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
      <ModalPopup />
      <Footer />
    </BodyWrapper>
  );
};

export default MainLayout;
