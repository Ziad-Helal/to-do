import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../store/tasks/tasks-actionCreators";
import { TaskList } from "../../layouts";

export default function WelcomePage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLogged = useSelector((state) => state.user.isLogged);
    const isErasing = useSelector((state) => state.tasks.isErasing);

    useEffect(() => {
        if (!isLogged) navigate("/login");
        else if (!isErasing) dispatch(getTasks());
    }, [isLogged, isErasing]);

    return (
        <main className="w-full max-w-5xl mx-auto">
            <TaskList />
        </main>
    );
}
