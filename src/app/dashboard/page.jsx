"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      return res.json();
    };
  }, []);

  return <div className={styles.container}></div>;
};

export default Dashboard;
