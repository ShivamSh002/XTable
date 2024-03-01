import React, { useState } from "react";

const App = () => {
  const [originalValues, setOriginalValues] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]);

  const handleSort = (type) => {
    if (type === "date") {
      setOriginalValues(
        [...originalValues].sort((a, b) => {
          if (a.date === b.date) {
            return b.views - a.views;
          } else {
            return b.date.localeCompare(a.date);
          }
        })
      );
    } else if (type === "views") {
      setOriginalValues([...originalValues].sort((a, b) => a.views - b.views));
    }
  };
  return (
    <div>
      {" "}
      <h1> Date and Views Table </h1>{" "}
      <button onClick={() => handleSort("date")}> Sort by Date </button>{" "}
      <button onClick={() => handleSort("views")}> Sort by Views </button>{" "}
      <table>
        <thead>
          <th> Date </th> <th> Views </th> <th> Article </th>{" "}
          {originalValues.map((data) => (
            <tr>
              {" "}
              <td> {data.date} </td> <td>{data.views} </td>{" "}
              <td> {data.article} </td>{" "}
            </tr>
          ))}{" "}
        </thead>{" "}
      </table>{" "}
    </div>
  );
};

export default App;
