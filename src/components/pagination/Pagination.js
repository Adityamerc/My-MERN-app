import React from "react";
import { Link } from "react-router-dom";
import "./bootstrap.css";
import "./pag.css";

export default function Pagination({ paginate }) {
  const pageNos = [];

  for (let i = 1; i <= 10; i++) {
    pageNos.push(i);
  }

  return (
    <nav>
      <div className="list-container">
        <ul className="pagination">
          {pageNos.map((number) => (
            <li key={number} className="page-item">
              <Link onClick={() => paginate(number)} className="page-link">
                {number}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
