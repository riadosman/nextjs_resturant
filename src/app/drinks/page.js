import React from "react";
import Card from "./../../components/card/Card";

function page() {
  return (
    <>
      <hr className="bg-firstColor mt-1 h-2" />
      <div className="min-h-screen m-20 flex items-center flex-wrap justify-between gap-8">
        <Card type="drinks" />
        <Card type="drinks" />
        <Card type="drinks" />
        <Card type="drinks" />
        <Card type="drinks" />
        <Card type="drinks" />
        <Card type="drinks" />
        <Card type="drinks" />
      </div>
    </>
  );
}

export default page;
