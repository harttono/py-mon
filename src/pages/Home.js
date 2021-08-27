import React, { useEffect } from "react";
import ListItem from "../components/ListItem";
import { useGlobalContext } from "../context/Context";
import Loader from "../utils/Loader";
import { useHistory } from "react-router-dom";

function Home() {
  const { handleLimit, loading, fetchData, limit } = useGlobalContext();
  const history = useHistory();

  useEffect(() => {
    fetchData();
  }, [limit]);

  return (
    <div className="container pt-2">
      {loading ? <Loader /> : <ListItem />}
      <div className="d-flex justify-content-end mt-2">
        {loading ? null : (
          <button type="submit" className="btn btn-primary text-left" onClick={handleLimit}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
}

export default Home;
