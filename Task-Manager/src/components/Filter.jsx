function Filter({ setFilter }) {
  return (
    <div className="bottom-filter">
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("pending")}>Pending</button>
      <button onClick={() => setFilter("done")}>Completed</button>
    </div>
  );
}

export default Filter; 