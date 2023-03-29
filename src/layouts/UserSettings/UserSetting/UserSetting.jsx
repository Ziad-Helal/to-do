export default function UserSetting({ children = "UserSetting", onClick = () => {} }) {
    return (
        <li
            className="font-medium bg-primary_400 rounded-xl p-4 m-4 hover:bg-primary_300 cursor-pointer"
            onClick={onClick}
        >
            {children}
        </li>
    );
}
