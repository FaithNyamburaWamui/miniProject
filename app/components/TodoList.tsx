import { ITask } from "@/types/task";
import Task from "./Task";

interface TodoListProps {
  task: ITask[];
}

const TodoList: React.FC<TodoListProps> = ({ task }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {task.map((tasks) => (
            <Task key={tasks.id} tasks={tasks} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
