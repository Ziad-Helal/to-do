import { useRef } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../../components";
import { uploadTask } from "../../../store/tasks/tasks-actionCreators";

export default function AddTaskForm() {
    const dispatch = useDispatch();

    const taskRef = useRef();
    const timeRef = useRef();
    const dateRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const task = taskRef.current.value;
        const time = timeRef.current.value;
        const date = dateRef.current.value;

        dispatch(uploadTask({ task, time, date }));

        taskRef.current.value = "Create a new Task here";
        timeRef.current.value = "";
        dateRef.current.value = "";
    };

    return (
        <form
            className="bg-primary_400 m-3.5 p-3.5 pl-11 rounded-2xl flex flex-wrap gap-5 items-center justify-center hover:text-primary_200 hover:bg-primary_800 [&:hover>fieldset>div:last-child]:text-primary_400 transition"
            onSubmit={submitHandler}
        >
            <fieldset className="flex-1 min-w-fit relative before:absolute before:-left-7 before:top-1.5 before:w-4 before:aspect-square before:bg-primary_500 before:border before:border-primary_900 before:rounded-md">
                <legend className="hidden">Create a Task</legend>
                <div>
                    <label htmlFor="task" className="hidden">
                        What do you want to do?
                    </label>
                    <input
                        type="text"
                        name="task"
                        id="task"
                        ref={taskRef}
                        className="text-xl font-semibold outline-none bg-inherit w-full"
                        defaultValue="Create a new Task here"
                        required
                    />
                </div>
                <div className="text-primary_800 flex flex-wrap gap-x-5">
                    <div>
                        <label htmlFor="time" className="hidden">
                            Due Time:
                        </label>
                        <input
                            type="time"
                            name="time"
                            id="time"
                            ref={timeRef}
                            className="bg-inherit outline-none"
                            defaultValue="00:00"
                        />
                    </div>
                    <div>
                        <label htmlFor="date" className="hidden">
                            Due Date:
                        </label>
                        <input
                            type="date"
                            name="date"
                            id="date"
                            ref={dateRef}
                            className="bg-inherit outline-none w-32"
                            defaultValue="2023-12-31"
                        />
                    </div>
                </div>
            </fieldset>
            <Button type="submit" kind="secondary" className="rounded-xl">
                Add
            </Button>
        </form>
    );
}
