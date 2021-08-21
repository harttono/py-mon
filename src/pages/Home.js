import React from "react";
import ListItem from "../components/ListItem";
import { useGlobalContext } from "../context/Context";

function Home() {
  const { handleLimit, data } = useGlobalContext();
  return (
    <div className="container">
      <ListItem />
      <div className="d-flex justify-content-end mt-3">
        {data && data.length > 0 && (
          <button type="submit" className="btn btn-primary text-left" onClick={handleLimit}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
}

export default Home;
