import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Sidebar = () => {
  // multilevel filtering
  const [searchparams, setsearchparams] = useSearchParams();

  const [cateData, setcateData] = useState(searchparams.getAll("category") || []);
  console.log(cateData);

  const handlechange = (e) => {
    const { value } = e.target;

    let newarray = [...cateData];

    if (cateData.includes(value)) {
      newarray = cateData.filter((el) => el != value);
    } else {
      newarray.push(value);
    }
    setcateData(newarray);
  };
  useEffect(() => {
    setsearchparams({ category: cateData });
  }, [cateData]);

  return (
    <div style={{border:"1px solid black",padding:"20px",borderRadius:"15px"}}>
      <h3>Filter Products Here..</h3>
      
      <input
        type="checkbox"
        value={"cooking"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("cooking")}
      ></input>Cooking Essential
      <br></br>
      {" "}
      <input
        type="checkbox"
        value={"vegetable"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("vegetable")}
        style={{marginTop:"5px "}}
      ></input>Fruits & vegetables
      <br></br>
    {" "}
      <input
        type="checkbox"
        value={"drink"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("drink")}
        style={{marginTop:"5px "}}
      ></input>  Biscuits,drinks & package
      <br></br>
     {" "}
      <input
        type="checkbox"
        value={"bakery"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("bakery")}
        style={{marginTop:"5px "}}
      ></input> Dairy & Bakery
      <br></br>
      {" "}
      <input
        type="checkbox"
        value={"care"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("care")}
        style={{marginTop:"5px "}}
      ></input>Personal Care
      <br></br>
      {" "}
      <input
        type="checkbox"
        value={"beauty"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("beauty")}
        style={{marginTop:"5px "}}
      ></input>Beauty
       <br></br>
     {" "}
      <input
        type="checkbox"
        value={"babyproduct"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("babyproduct")}
        style={{marginTop:"5px "}}
      ></input>  Mom & Baby Product
       <br></br>
       {" "}
      <input
        type="checkbox"
        value={"home"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("home")}
        style={{marginTop:"5px "}}
      ></input>Home
      <br></br>
      {" "}
      <input
        type="checkbox"
        value={"Tableware"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("Tableware")}
        style={{marginTop:"5px "}}
      ></input>Tableware
      <br></br>
      {" "}
      <input
        type="checkbox"
        value={"kitchenware"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("kitchenware")}
        style={{marginTop:"5px "}}
      ></input>Kitchenware
      <br></br>
      {" "}
      <input
        type="checkbox"
        value={"Stationery"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("Stationery")}
        style={{marginTop:"5px "}}
      ></input>School,Office & Staionery
      <br></br>
      {" "}
      <input
        type="checkbox"
        value={"Disposable"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("Disposable")}
        style={{marginTop:"5px "}}
      ></input>Disposable
       <br></br>
      {" "}
      <input
        type="checkbox"
        value={"Craft"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("Craft")}
        style={{marginTop:"5px "}}
      ></input> Craft of India
       <br></br>
       {" "}
      <input
        type="checkbox"
        value={"FashionJewelaary"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("FashionJewelaary")}
        style={{marginTop:"5px "}}
      ></input>Fashion Jewellery
    </div>
  );
};

export default Sidebar;
