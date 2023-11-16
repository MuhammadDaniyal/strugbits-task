import React, { useState, useEffect } from "react";
import "./CardSection.css";
import Card from "./Card";
import { useSelector } from "react-redux";

const CardSection = () => {
  let [data, setData] = useState([]);
  const [error, setError] = useState([]);

  const customerData = useSelector((state) => state.customers.customers);
  console.log(customerData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://reqres.in/api/users");

        if (!res.ok) {
          throw new Error("NetWork Error");
        }

        const result = await res.json();
        // console.log(result.data);
        setData(result?.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   if (customerData) {
  //     console.log('da');
  //     data = [...data, ...customerData];
  //   }
  //   console.log("Main ",data);
  // }, [customerData, data]);

  return (
    <main className={"CardSection"}>
      <div className="CardSectionNav">
        <p>Customer ID</p>
        <p>Customer Name</p>
        <p>Email</p>
      </div>
      <div className="scroll-container scrollbar-hide">
        {
          customerData?.map((info) => (
          <Card {...info} />
        ))}
        {
          data?.map((info) => (
          <Card {...info} />
        ))}
      </div>
    </main>
  );
};

export default CardSection;
