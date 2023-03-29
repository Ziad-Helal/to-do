import { UserData, UserSettings } from "../../layouts";

export default function ProfilePage() {
    return (
        <main className="w-full max-w-5xl mx-auto">
            <div className="bg-primary_500 w-11/12 mx-auto my-4 py-0.5 rounded-3xl text-primary_900">
                <UserData />
                <UserSettings />
            </div>
        </main>
    );
}
