import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavigationBar } from "../../../layouts";

export default function MainPageLayout_Header() {
    const isLogged = useSelector((state) => state.user.isLogged);

    return (
        <header className="bg-primary_500">
            <div
                className={`max-w-5xl mx-auto text-primary_200 flex items-center ${
                    isLogged ? "justify-between" : "justify-center"
                }`}
            >
                <h1 className="text-primary_900 text-3xl font-bold p-4">
                    <Link to={"/welcome"} className="hover:text-primary_200 transition">
                        To Do
                    </Link>
                </h1>
                {isLogged && <NavigationBar />}
            </div>
        </header>
    );
}
