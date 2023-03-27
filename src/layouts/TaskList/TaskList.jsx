import { useSelector } from "react-redux";
import { Task, AddTaskForm } from "../../layouts";
import { Loader } from "../../components";

export default function TaskList() {
    const tasks = useSelector((state) => state.tasks);
    const isLoading = tasks.isLoading;

    return (
        <section className="bg-primary_500 w-11/12 mx-auto my-4 py-0.5 rounded-3xl text-primary_900">
            <AddTaskForm />
            {isLoading ? (
                <Loader />
            ) : (
                tasks.tasks.map(({ id, task, time, date, done }) => (
                    <Task key={id} id={id} task={task} time={time} date={date} done={done} />
                ))
            )}
        </section>
    );
}
