import { useRef } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../../components";
import { uploadTask } from "../../../store/tasks/tasks-actionCreators";
import { isMobile } from "../../../helper";

export default function AddTaskForm() {
    const dispatch = useDispatch();

    const dateObj = new Date();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const year = dateObj.getFullYear();
    const day = String(dateObj.getDate()).padStart(2, "0");
    const hour = String(dateObj.getHours()).padStart(2, "0");
    const minute = String(dateObj.getMinutes()).padStart(2, "0");

    const currentDate = year + "-" + month + "-" + day;
    const currentTime = hour + ":" + minute;

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
            className="bg-primary_400 m-3.5 p-3.5 rounded-2xl flex flex-wrap gap-5 items-center justify-center hover:text-primary_200 hover:bg-primary_700 [&:hover>fieldset>div>input]:placeholder-black dark:[&:hover>fieldset>div>input]:placeholder-white [&:hover>fieldset>div>input]:placeholder-opacity-60 dark:[&:hover>fieldset>div>input]:placeholder-opacity-60 [&:hover>fieldset>div:last-child>div>input]:text-primary_300 [&:hover>fieldset>div:last-child>div>input]:border-primary_400 [&:hover>fieldset>div:last-child>div]:after:bg-inherit"
            onSubmit={submitHandler}
        >
            <fieldset className="ml-7 flex-1 min-w-fit relative before:absolute before:-left-7 before:top-1.5 before:w-4 before:aspect-square before:bg-primary_500 before:border before:border-primary_900 before:rounded-md">
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
                        className="text-xl font-semibold outline-none bg-inherit w-full rounded-md placeholder-white dark:placeholder-black placeholder-opacity-60 dark:placeholder-opacity-60"
                        placeholder="Type your new Task here"
                        required
                    />
                </div>
                <div className="text-primary_800 flex flex-wrap gap-2 mt-2">
                    <div className="relative after:w-3.5 after:h-5/6 after:rounded-r-full after:bg-primary_400 after:absolute after:right-0.5 after:top-0.5 after:z-10">
                        <label htmlFor="time" className="hidden">
                            Due Time:
                        </label>
                        <input
                            type="time"
                            name="time"
                            id="time"
                            ref={timeRef}
                            className={`bg-inherit outline-none border border-primary_700 rounded-full px-4 py-0.5 cursor-pointer ${
                                isMobile === true && "w-28"
                            }`}
                            defaultValue={currentTime}
                        />
                    </div>
                    <div className="relative after:w-4 after:h-5/6 after:rounded-r-full after:bg-primary_400 after:absolute after:right-0.5 after:top-0.5 after:z-10">
                        <label htmlFor="date" className="hidden">
                            Due Date:
                        </label>
                        <input
                            type="date"
                            name="date"
                            id="date"
                            ref={dateRef}
                            className="bg-inherit outline-none border border-primary_700 rounded-full px-4 py-0.5 cursor-pointer w-40"
                            defaultValue={currentDate}
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
