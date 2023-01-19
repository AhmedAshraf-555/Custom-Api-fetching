import React, { useState, useEffect } from "react";
import "./style.css";

const ApiFetch = () => {
  const [news, setNews] = useState([]);
  const removeNature = (title) => {
    const singleNews = news.filter(
      (meriApi) => meriApi.title !== title
    );
    setNews(singleNews);
  };
  // const [readMore, setReadMore] = useState(true);
  useEffect(() => {
    async function fetchNews() {
      const response = await fetch("http://localhost:4000/");
      const data = await response.json();
      setNews(data.nature);
      console.log(data.nature);
    }
    fetchNews();
  }, []);
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
          margin: "auto",
        }}
      >
        <h1>Nature : {news.length}</h1>
      </div>
      <main className="nature">
        {news.map((meriApi) => {
          return (
            <div className="head" key={meriApi.id}>
             <img
                src={meriApi.urlImages}
                alt="image"
        
              />
              <h4>{meriApi.title.substring(0, 30)}...</h4>
              <p>{ meriApi.data.substring(0,250)}</p>
              {/* <h6>{readMore? meriApi.data.substrings(0, 250): meriApi.data}</h6>
            <button onClick={()=> setReadMore(!readMore)} >{readMore? "Read More": "Show Less"}</button> */}
              <footer
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <h5>{meriApi.title}</h5>
              </footer>
              <button
                onClick={() => removeNature(meriApi.title)}
                className="removeBtn"
              >
                Remove
              </button>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default ApiFetch;
