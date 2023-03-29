import { useSelector } from "react-redux";

export default function UserData() {
    const user = useSelector((state) => state.user.userData);

    return (
        <section className="p-3.5 mx-3.5 border-b border-b-primary_900">
            <p className="flex gap-x-4 flex-wrap mb-4">
                <label htmlFor="userId" className="text-lg font-medium w-16 whitespace-nowrap">
                    User ID
                </label>
                <textarea id="userId" defaultValue={user.id} className="bg-inherit" disabled />
            </p>
            <p className="flex gap-x-4 flex-wrap">
                <label htmlFor="email" className="text-lg font-medium w-16 whitespace-nowrap">
                    E-Mail
                </label>
                <input
                    type="text"
                    id="email"
                    defaultValue={user.email}
                    className="bg-inherit"
                    disabled
                />
            </p>
        </section>
    );
}
