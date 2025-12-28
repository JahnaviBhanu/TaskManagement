import Item from "./Item";

function List({ tasks, toggleTask, deleteTask, editTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <Item
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}

export default List;