import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const DrinkSidebar = () => {
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
        value={"fine jewellery"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("fine jewellery")}
      ></input>Fine Jewellery
      <br></br>
      {" "}
      <input
        type="checkbox"
        value={"jewellery"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("jewellery")}
        style={{marginTop:"5px "}}
      ></input>Jewellery
      <br></br>
      <input
        type="checkbox"
        value={"fine jewellery"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("fine jewellery")}
      ></input>Fine Jewellery
      <br></br>
      {" "}
      <input
        type="checkbox"
        value={"jewellery"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("jewellery")}
        style={{marginTop:"5px "}}
      ></input>Jewellery
      <br></br>
      <input
        type="checkbox"
        value={"fine jewellery"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("fine jewellery")}
      ></input>Fine Jewellery
      <br></br>
      {" "}
      <input
        type="checkbox"
        value={"jewellery"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("jewellery")}
        style={{marginTop:"5px "}}
      ></input>Jewellery
      <br></br>
    
    </div>
  )
}

export default DrinkSidebar