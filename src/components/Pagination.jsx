import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  },
  button: {
    padding: "10px 20px",
    margin: "0 10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    outline: "none",
    transition: "background-color 0.3s",
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
    cursor: "not-allowed",
  },
  pageInfo: {
    margin: "0 10px",
  },
};

function Pagination() {
  const { page, setPage, handlePageChange, totalPage } = useContext(AppContext);

  return (
    <div style={styles.container}>
      <button
        style={{ ...styles.button, ...(page === 1 && styles.buttonDisabled) }}
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
      >
        Prev
      </button>

      <p style={styles.pageInfo}>
        Page {page} of {totalPage}
      </p>

      <button
        style={{
          ...styles.button,
          ...(page === totalPage && styles.buttonDisabled),
        }}
        onClick={() => {
          setPage(page + 1);
          handlePageChange(page);
        }}
        disabled={page === totalPage}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
