import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { userActions } from "../../../store/user/user-slice";
import { NavigationItem } from "../../../layouts";

const menu = ["Welcome", "Profile"];

export default function NavigationList({
    screenWidth = innerWidth,
    menuIsOpen = false,
    closeMenu = () => {},
}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispatch(userActions.logout());
        navigate("/login");
    };

    if (screenWidth <= 400)
        return (
            <ul
                className={`fixed top-0 left-0 h-screen bg-primary_600 z-20 transition-all ${
                    menuIsOpen ? "w-3/4" : "w-0"
                }`}
            >
                {menu.map((item, index) => (
                    <NavigationItem
                        key={index + 1}
                        item={item}
                        className={`transition ${menuIsOpen ? "delay-75 scale-100" : "scale-0"}`}
                        onLinkClick={closeMenu}
                    />
                ))}
                <li
                    className={`bg-primary_700 font-medium p-4 cursor-pointer border-l-4 border-l-primary_700 hover:border-l-primary_400 hover:text-primary_800 hover:bg-primary_400 ${
                        menuIsOpen ? "transition delay-75 scale-100" : "scale-0"
                    }`}
                    onClick={logout}
                >
                    Logout
                </li>
            </ul>
        );
    else
        return (
            <ul className="flex items-center text-xl text-primary_800">
                <li>
                    <NavLink
                        to="/Profile"
                        className={({ isActive }) =>
                            `flex gap-1 items-center p-4 cursor-pointer hover:bg-primary_400 border-y-4 border-t-primary_500 hover:border-t-primary_400 ${
                                isActive
                                    ? "border-b-primary_700"
                                    : "border-b-primary_500 hover:border-b-primary_400"
                            }`
                        }
                    >
                        <FontAwesomeIcon icon={faUserCircle} />
                        <span>Profile</span>
                    </NavLink>
                </li>
                <li
                    className="flex gap-1 items-center p-4 cursor-pointer hover:bg-primary_400 border-y-4 border-y-primary_500 hover:border-y-primary_400"
                    onClick={logout}
                >
                    <FontAwesomeIcon icon={faSignOut} />
                    <span>Logout</span>
                </li>
            </ul>
        );
}
