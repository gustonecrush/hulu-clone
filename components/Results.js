import React from "react";
import Thumbnail from "./Thumbnail";

function Results({ requests }) {
  return (
    <div>
      {requests.map((result, index) => (
        <Thumbnail key={index} data={result} />
      ))}
    </div>
  );
}

export default Results;
