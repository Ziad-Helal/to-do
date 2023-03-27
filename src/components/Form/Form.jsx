export default function Form({ children, className = "", onSubmit = () => {} }) {
    return (
        <form
            className={`text-primary_800 bg-primary_400 rounded-xl text-center mx-auto w-11/12 py-5 max-w-sm ${className}`}
            onSubmit={onSubmit}
        >
            {children}
        </form>
    );
}
