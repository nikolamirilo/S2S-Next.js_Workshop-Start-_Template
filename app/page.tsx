import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import React from "react";

const Home = () => {
  return (
    <div>
      <Sidebar />
      <div className="cards-container p-20 flex flex-row">
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
