import "./styles.css";
import { useState } from "react";
import { useEffect } from "react";

const Card = (props) => {
  return (
    <div className="card">
      {/* <h4>Namste JS</h4> */}
      <h4>{props.data.brand}</h4>
      <img src={props.data.images[0]} alt="" />
      <h4>{props.data.description}</h4>
      <h4>{props.data.title}</h4>
      <h4>{props.data.price}</h4>
      <h4>{props.data.rating}</h4>
      <h4>{props.data.weight}</h4>
    </div>
  );
};

const arry = [
  {
    imgId:
      "https://images.pexels.com/photos/3082851/pexels-photo-3082851.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    name: "Hello",
    info: "Nmastee Raect",
    data: "today react class",
  },
  {
    imgId:
      "https://images.pexels.com/photos/14994091/pexels-photo-14994091/free-photo-of-magenta-beautiful-woman.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    name: "Hii to all",
    info: "Nmastee JS",
    data: "today javascipt class",
  },
  {
    imgId:
      "https://images.pexels.com/photos/18540205/pexels-photo-18540205/free-photo-of-traditional-textile-decoration-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    name: "Guru",
    info: "Moring to all",
    data: "every one by eto all",
  },
];
const App = () => {
  const [single, setSingle] = useState([]);
  async function Info() {
    const data = await fetch("https://dummyjson.com/products");
    const OriginalData = await data.json();
    console.log(OriginalData.products);
    setSingle(OriginalData.products);
  }
  Info();

  return (
    <div className="App">
      {single.map((x) => {
        return <Card data={x} />;
      })}
    </div>
  );
};
export default App;
