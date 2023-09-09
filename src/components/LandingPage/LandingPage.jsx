import React from "react";
import "./wrapper.scss";
import { Header } from "../Header/Header";
import { Content } from "../Content/Content";
import { Info } from "../Info/Info";
import { Stocks } from "../Stocks/Stocks";
import { FeedBack } from "../feedback/FeedBack";
import { Faq } from "../FAQ/Faq";
import { Cooperation } from "../Cooperation/Cooperation";
import { Invitation } from "../Invitation/Invitation";
import { Footer } from "../Footer/Footer";

export const LandingPage = () => {
  return (
    <div className="wrapper-main">
      <Header />
      <Content />
      <Info />
      <Stocks title="Успей купить!" subtitle="Акции" />
      <FeedBack />
      <Faq />
      <Cooperation />
      <Invitation />
      <Footer />
    </div>
  );
};
