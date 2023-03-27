import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getTasks } from "../../store/tasks/tasks-actionCreators";
import { TaskList } from "../../layouts";

export default function WelcomePage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!localStorage.getItem("token")) navigate("/login");
        else dispatch(getTasks());
    }, []);

    return (
        <main className="w-full max-w-5xl mx-auto">
            <TaskList />
        </main>
    );
}
