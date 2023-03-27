import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle, faCheckCircle, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { updateTask } from "../../../store/tasks/tasks-actionCreators";

export default function EditTaskForm({
    id = "t0",
    task = "Create a new Task here",
    time = "",
    date = "",
    onSubmit = () => {},
}) {
    const dispatch = useDispatch();

    const taskRef = useRef();
    const timeRef = useRef();
    const dateRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const task = taskRef.current.value;
        const time = timeRef.current.value;
        const date = dateRef.current.value;

        dispatch(updateTask({ id, task, time, date }));

        onSubmit();
    };

    return (
        <form
            className="bg-primary_400 m-3.5 p-3.5 pl-11 rounded-2xl flex flex-wrap gap-5 items-center justify-center hover:text-primary_200 hover:bg-primary_800 [&:hover>fieldset>div:last-child]:text-primary_400"
            onSubmit={submitHandler}
        >
            <fieldset className="flex-1 min-w-fit relative before:absolute before:-left-7 before:top-1.5 before:w-4 before:aspect-square before:bg-primary_500 before:border before:border-primary_900 before:rounded-md">
                <legend className="hidden">Create a Task</legend>
                <div>
                    <label htmlFor={`editTask${id}`} className="hidden">
                        What do you want to do?
                    </label>
                    <input
                        type="text"
                        name="task"
                        id={`editTask${id}`}
                        ref={taskRef}
                        className="text-xl font-semibold outline-none bg-inherit w-full"
                        defaultValue={task}
                        required
                    />
                </div>
                <div className="text-primary_800 flex flex-wrap gap-x-5">
                    <div>
                        <label htmlFor={`editTime${id}`} className="hidden">
                            Due Time:
                        </label>
                        <input
                            type="time"
                            name="time"
                            id={`editTime${id}`}
                            ref={timeRef}
                            className="bg-inherit outline-none"
                            defaultValue={time}
                        />
                    </div>
                    <div>
                        <label htmlFor={`editdate${id}`} className="hidden">
                            Due Date:
                        </label>
                        <input
                            type="date"
                            name="date"
                            id={`editdate${id}`}
                            ref={dateRef}
                            className="bg-inherit outline-none w-32"
                            defaultValue={date}
                        />
                    </div>
                </div>
            </fieldset>
            <div className="text-xl">
                <button type="submit" className="leading-3">
                    <FontAwesomeIcon
                        icon={faCheckCircle}
                        title="Confirm Changes"
                        className="hover:cursor-pointer hover:text-primary_400"
                        onClick={submitHandler}
                    />
                </button>
                <FontAwesomeIcon
                    icon={faXmarkCircle}
                    title="Go Back"
                    className="ml-2 hover:cursor-pointer hover:text-primary_400"
                    onClick={onSubmit}
                />
            </div>
        </form>
    );
}
