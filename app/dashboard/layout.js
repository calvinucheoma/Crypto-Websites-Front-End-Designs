"use client";
import FooterNav from "../components/FooterNav";

const layout = ({ children }) => {
  return (
    <>
      {children}
      <FooterNav />
    </>
  );
};

export default layout;
