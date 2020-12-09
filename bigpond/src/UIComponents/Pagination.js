import React from 'react';

import "../styles/pagination.css";

const Pagination = (props) => {
    const getPageNumber = () => {
        if(props.nextKey){
            props.addPageNumber();
        }
    }
        return (
            <div className="page-numbers" id="pages">
                <div className="page-number">
                    <p>{props.currentPage > 1 ? "<<<" : ""}</p>
                </div>
                <div className="page-number">
                    {getPageNumber}
                    <p>{props.currentPage === 0 ? 1 : props.currentPage}</p>
                </div>
                <div className="page-number">
                    <p>{props.nextKey !==null ? ">>>" : ""}</p>
                </div>
            </div>
          );
   }

 
export default Pagination;