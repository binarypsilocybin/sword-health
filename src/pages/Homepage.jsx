import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";
import MultiFilters from "../components/MultiFilter";
import NewsList from "../components/NewsList";

export function homepageLoader() {
  const news = fetchData("news");

  return { news };
}

const Homepage = () => {
  const { news } = useLoaderData();
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchDataNew = async () => {
      try {
        const response = await fetch("http://demo5125666.mockable.io/");
        const data = await response.json();
        if (!news) {
          setItems(data);
        }
        setItems([...news, ...data]);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    };

    fetchDataNew();
  }, []);

  const filterItem = (itemFiltered) => {
    const newItem = items.filter((newVal) => {
      return newVal.category === itemFiltered;
    });
    setItems(newItem);
  };

  return (
    <>
      <MultiFilters items={items} filterItem={filterItem} />
      <div className="news">
        <NewsList items={items} />
      </div>
    </>
  );
};

export default Homepage;
