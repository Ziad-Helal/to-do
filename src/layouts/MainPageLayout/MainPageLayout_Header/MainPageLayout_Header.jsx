import { Link } from "react-router-dom";

export default function MainPageLayout_Header() {
    return (
        <header className="w-full max-w-5xl mx-auto">
            <div className="relative bg-primary_500 w-11/12 mx-auto my-4 p-4 rounded-3xl text-primary_200">
                <h1 className="text-center text-primary_900 text-3xl font-bold">
                    <Link to={"/welcome"} className="hover:text-primary_100 transition">
                        To Do
                    </Link>
                </h1>
            </div>
        </header>
    );
}
