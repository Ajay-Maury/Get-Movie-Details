import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPage } from '../redux/API-Params/action';

const Pagination = () => {
    const dispatch = useDispatch()
     const {page, totalPages } = useSelector((state) => state.apiParams);

  async function handleNext() {
      dispatch(getPage(page+1));
    }
  async function handlePrev() {
      dispatch(getPage(page-1));
    }
  return (
    <div>
      <footer className="pageBtn">
        {page > 1 && <button onClick={handlePrev}>Prev</button>}
        {totalPages > 0 && (
          <span
            style={{
              textAlign: "center",
              margin: "1% auto",
              // fontWeight: "bold",
              fontSize: "1.3rem",
            }}
          >
           Page {page} out of {totalPages}
          </span>
        )}

        {totalPages > 1 && page < totalPages && (
          <button onClick={handleNext}>Next</button>
        )}
      </footer>
    </div>
  );
}

export default Pagination
