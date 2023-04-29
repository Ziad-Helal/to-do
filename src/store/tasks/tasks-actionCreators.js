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
                if (response.error) alert(response.error);
                else dispatch(tasksActions.addTask({ ...body, id: response.name }));
            })
            .catch((error) => alert(error));
    };
};

export const removeTask = ({ type, id }) => {
    return (dispatch) => {
        const userId = localStorage.getItem("userId");
        let url;

        if (type === "all") {
            dispatch(tasksActions.loading(true));
            dispatch(tasksActions.erasing(true));
            url = `${database}/users/${userId}/tasks.json`;
            dispatch(tasksActions.clearAllTasks());
        } else {
            url = `${database}/users/${userId}/tasks/${id}.json`;
            dispatch(tasksActions.removeTask(id));
        }

        const request = new Request(url, { method: "DELETE" });

        fetch(request)
            .then((response) => {
                if (response.status) {
                    console.log("Done");
                    if (type === "all") {
                        dispatch(tasksActions.loading(false));
                        dispatch(tasksActions.erasing(false));
                    }
                } else alert(response);
            })
            .catch((error) => alert(error));
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

        fetch(request).catch((error) => alert(error));
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
                else if (response.error) alert(response.error);
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
            .catch((error) => alert(error));
    };
};
