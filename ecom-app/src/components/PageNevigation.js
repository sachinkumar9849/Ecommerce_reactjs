import React from "react";
import {Link} from 'react-router-dom';

const PageNevigation = ({title}) => {
  return (
    <div>
      <ul className="d-flex align-items-center">
        <Link to="/">
Home 
        </Link>/{title}
      </ul>
    </div>
  );
};

export default PageNevigation;
