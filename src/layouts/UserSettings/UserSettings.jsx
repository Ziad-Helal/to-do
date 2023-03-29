import { useDispatch } from "react-redux";
import { removeTask } from "../../store/tasks/tasks-actionCreators";
import { UserSetting } from "../../layouts";
import { useNavigate } from "react-router-dom";

export default function UserSettings() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const eraseTasks = () => {
        dispatch(removeTask({ type: "all" }));
        navigate("/welcome");
    };

    const changePassword = () => {
        navigate("/change_password");
    };

    return (
        <ul>
            <UserSetting onClick={eraseTasks}>Erase All Tasks</UserSetting>
            <UserSetting onClick={changePassword}>Change Password</UserSetting>
        </ul>
    );
}
