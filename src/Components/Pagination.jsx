import React from 'react'

const Pagination = () => {
    const [page, setPage] = useState(1)
    

    async function handleNext(){}
    async function handlePrev(){}
  return (
    <div>
      {data && data.length !== 0 && (
        <footer className="pageBtn">
          {page > 1 && (
            <button
              onClick={handlePrev}
            >
              Prev
            </button>
          )}
          {totalPage > 1 && page < totalPage && (
            <button
              onClick={handleNext}
            >
              Next
            </button>
          )}
        </footer>
      )}
    </div>
  );
}

export default Pagination
