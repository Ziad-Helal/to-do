import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCalendarDays, faTrashCan, faEdit } from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import { updateTask, removeTask } from "../../../store/tasks/tasks-actionCreators";
import { EditTaskForm } from "../../../layouts";

export default function Task({
    id = "t0",
    task = "Somthing to do",
    time = "12:00",
    date = "31/12/2023",
    done = false,
}) {
    const [edit, setEdit] = useState(false);
    const dispatch = useDispatch();

    let m;
    if (!edit && time.length > 0) {
        time = time.split(":");
        if (Number(time[0]) < 12) m = "AM";
        else {
            m = "PM";
            time[0] = `0${(time[0] -= 12)}`;
        }
        time = time.join(":");
    }

    if (!edit && date.length > 0) date = date.split("-").reverse().join("/");

    const checkTask = () => {
        dispatch(updateTask({ id, done }));
    };

    const editTask = () => {
        setEdit((prevState) => !prevState);
    };

    const deleteTask = () => {
        dispatch(removeTask(id));
    };

    if (edit)
        return <EditTaskForm id={id} task={task} time={time} date={date} onSubmit={editTask} />;
    else
        return (
            <article
                className={`flex flex-wrap gap-3 items-center justify-center bg-primary_400 m-3.5 p-3.5 rounded-2xl hover:text-primary_200 hover:bg-primary_700 [&:hover>div>div>div]:text-primary_300 ${
                    done && "[&:hover>div>div>p]:text-primary_400"
                } transition`}
            >
                <div className="flex gap-3 flex-1 min-w-fit">
                    <div className="relative top-0.5 w-2 ml-2">
                        <label htmlFor={id} className="absolute invisible">
                            Done with this task?
                        </label>
                        <input
                            type="checkbox"
                            name="done"
                            id={id}
                            className="w-0 aspect-square relative right-2 after:absolute after:w-4 after:aspect-square after:bg-primary_500 outline-none after:border after:border-primary_900 after:rounded-md checked:after:bg-primary_900"
                            defaultChecked={done}
                            onClick={checkTask}
                        />
                    </div>
                    <div>
                        <p
                            className={`text-xl font-semibold${
                                done && " line-through text-primary_700 font-extralight"
                            }`}
                        >
                            {task}
                        </p>
                        {(time || date) && (
                            <div className="text-primary_800 flex flex-wrap gap-x-3 transition">
                                {time && (
                                    <span>
                                        <FontAwesomeIcon icon={faClock} className="mr-1" />
                                        {time} {m}
                                    </span>
                                )}
                                {date && (
                                    <span>
                                        <FontAwesomeIcon icon={faCalendarDays} className="mr-1" />
                                        {date}
                                    </span>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <div className="text-xl">
                    <FontAwesomeIcon
                        icon={faEdit}
                        title="Edit Task"
                        className="hover:cursor-pointer hover:text-primary_400"
                        onClick={editTask}
                    />
                    <FontAwesomeIcon
                        icon={faTrashCan}
                        title="Delete Task"
                        className="ml-2 hover:cursor-pointer hover:text-primary_400"
                        onClick={deleteTask}
                    />
                </div>
            </article>
        );
}
