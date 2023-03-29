const types = {
    primary: "text-primary_800 bg-primary_300 hover:text-primary_200",
    secondary: "text-primary_200 bg-primary_700",
};

export default function Button({
    children = "Button",
    type = "button",
    kind = "",
    title = "",
    className = "",
    onClick = () => {},
}) {
    return (
        <button
            type={type}
            title={title}
            className={`${
                kind &&
                `font-medium py-2 px-5 rounded-3xl border-2 border-primary_700 ${types[kind]} hover:bg-primary_900 hover:border-primary_900 transition`
            } ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
