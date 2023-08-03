import "./styles.css";

export default function ManageCashiersProductsPagination({
  totalPage = 0,
  page = 1,
  onChangePagination = (page = "1") => {},
}) {
  const pagesArray = [];
  for (let i = 1; i <= totalPage; i++) {
    pagesArray.push(i);
  }

  const RenderButtonPage = () => {
    return pagesArray.map((page) => {
      return (
        <button
          key={page}
          className="button-page"
          id={page}
          onClick={() => onChangePagination(`${page}`)}
        >
          {page}
        </button>
      );
    });
  };

  return (
    <div className="pagination d-flex-row">
      <button
        className="previous"
        disabled={page === 1}
        onClick={() => onChangePagination(`previous`)}
      >
        Previous
      </button>

      <div className="button-page-container d-flex-row">
        <RenderButtonPage />
      </div>

      <button
        className="next"
        disabled={page === totalPage}
        onClick={() => onChangePagination(`next`)}
      >
        Next
      </button>
    </div>
  );
}
