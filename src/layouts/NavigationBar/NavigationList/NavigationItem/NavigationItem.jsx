import { NavLink } from "react-router-dom";

export default function NavigationItem({ item = "NavigationItem", className = "" }) {
    return (
        <li
            className={`bg-primary_700 font-medium border-b border-primary_600
             ${className}`}
        >
            <NavLink
                to={`/${item}`}
                className={({ isActive }) =>
                    `block p-4 border-l-4 hover:text-primary_800 hover:bg-primary_400 transition ${
                        isActive ? "" : "border-l-primary_700 hover:border-l-primary_400"
                    }`
                }
            >
                {item}
            </NavLink>
        </li>
    );
}
