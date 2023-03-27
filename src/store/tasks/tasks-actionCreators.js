import { tasksActions } from "../../store/tasks/tasks-slice";

const database = "https://ziad-to-do-default-rtdb.europe-west1.firebasedatabase.app";

export const uploadTask = ({ task, time, date }) => {
    return (dispatch) => {
        const userId = localStorage.getItem("userId");
        const url = `${database}/users/${userId}/tasks.json`;

        const body = {
            task,
            time,
            date,
            done: false,
        };

        const request = new Request(url, { method: "POST", body: JSON.stringify(body) });

        fetch(request)
            .then((response) => response.json())
            .then((response) => {
                if (response.error) console.log(response.error);
                else dispatch(tasksActions.addTask({ ...body, id: response.name }));
            })
            .catch((error) => console.log(error));
    };
};

export const removeTask = (id) => {
    return (dispatch) => {
        dispatch(tasksActions.removeTask(id));

        const userId = localStorage.getItem("userId");
        const url = `${database}/users/${userId}/tasks/${id}.json`;

        const request = new Request(url, { method: "DELETE" });

        fetch(request)
            .then((response) => {
                if (response.status) console.log("Task Deleted");
                else console.log(response);
            })
            .catch((error) => console.log(error));
    };
};

export const updateTask = ({ id, task, time, date, done }) => {
    return (dispatch) => {
        const userId = localStorage.getItem("userId");

        let url, body;
        if (done === undefined) {
            dispatch(tasksActions.replaceTask({ id, task, time, date }));
            url = `${database}/users/${userId}/tasks/${id}.json`;
            body = JSON.stringify({
                task,
                time,
                date,
                done: false,
            });
        } else {
            if (done) dispatch(tasksActions.uncheckTask(id));
            else {
                dispatch(tasksActions.checkTask(id));
            }
            url = `${database}/users/${userId}/tasks/${id}/done.json`;
            body = !done;
        }

        const request = new Request(url, { method: "PUT", body });

        fetch(request).catch((error) => console.log(error));
    };
};

export const getTasks = () => {
    return (dispatch) => {
        dispatch(tasksActions.loading(true));

        const userId = localStorage.getItem("userId");
        const url = `${database}/users/${userId}/tasks.json`;

        fetch(url)
            .then((response) => response.json())
            .then((response) => {
                if (response === null) console.log("No tasks available!");
                else if (response.error) console.log(response.error);
                else {
                    dispatch(tasksActions.clearAllTasks());
                    for (let key in response) {
                        dispatch(
                            tasksActions.addTask({
                                id: key,
                                task: response[key].task,
                                time: response[key].time,
                                date: response[key].date,
                                done: response[key].done,
                            })
                        );
                    }
                }
            })
            .then(() => dispatch(tasksActions.loading(false)))
            .catch((error) => console.log(error));
    };
};
