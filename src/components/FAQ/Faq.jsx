/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import "./faq.scss";
import { Accordion } from "./Accordion";
import { accordionData } from "../../utils/accordionData";

export const Faq = () => {
  return (
    <div className="faq">
      <h1 className="heading">Часто задаваемые вопросы</h1>
      <p className="caligraphy">FAQ</p>

      {accordionData.map(({ title, content }, index) => (
        <Accordion key={index} title={title} content={content} />
      ))}
    </div>
  );
};
