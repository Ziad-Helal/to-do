import { forwardRef } from "react";

function InputField(
    {
        id = "i1",
        type = "text",
        label = "Label",
        name = "input-field",
        placeholder = "",
        minLength = 0,
        required = false,
        autoFocus = false,
        autoComplete = "on",
        className = "",
        onChange = () => {},
    },
    ref
) {
    return (
        <div className={`relative w-10/12 mx-auto my-5 ${className}`}>
            <label
                htmlFor={id}
                className="bg-primary_400 text-sm font-semibold rounded-full absolute left-1 -top-2.5 px-4"
            >
                {label}
            </label>
            {type === "textarea" ? (
                <textarea
                    id={id}
                    name={name}
                    ref={ref}
                    placeholder={placeholder}
                    minLength={minLength}
                    className="bg-primary_200 text-primary_900 font-medium rounded-xl w-full px-5 py-3 outline-none outline-offset-0 focus:outline-2 focus:outline-primary_700"
                    autoComplete={autoComplete}
                    required={required}
                    autoFocus={autoFocus}
                    onChange={onChange}
                />
            ) : (
                <input
                    type={type}
                    id={id}
                    name={name}
                    ref={ref}
                    placeholder={placeholder}
                    minLength={minLength}
                    className="bg-primary_200 text-primary_900 font-medium rounded-xl w-full px-5 py-3 outline-none outline-offset-0 focus:outline-2 focus:outline-primary_700"
                    autoComplete={autoComplete}
                    required={required}
                    autoFocus={autoFocus}
                    onChange={onChange}
                />
            )}
        </div>
    );
}

export default forwardRef(InputField);
