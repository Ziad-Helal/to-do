import { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Form, InputField, Button } from "../../../components";
import { auth } from "../../../store/user/user-actionCreators";

export default function RegisterationForm() {
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitHandler = (event) => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        dispatch(auth({ type: "registration", email, password }, navigate));
    };

    return (
        <Form onSubmit={submitHandler}>
            <fieldset>
                <legend>
                    <h2 className="text-3xl font-bold my-5">SIGN-UP</h2>
                </legend>
                <InputField
                    type="text"
                    label="First Name"
                    id="first_name"
                    name="first_name"
                    ref={firstNameRef}
                    placeholder="Enter Your First Name"
                    autoFocus
                    required
                />
                <InputField
                    type="text"
                    label="Last Name"
                    id="last_name"
                    name="last_name"
                    ref={lastNameRef}
                    placeholder="Enter Your Last Name"
                    required
                />
                <InputField
                    type="email"
                    label="Email"
                    id="email"
                    name="email"
                    ref={emailRef}
                    placeholder="Enter Your Email"
                    required
                />
                <InputField
                    type="password"
                    label="Password"
                    id="password"
                    name="password"
                    ref={passwordRef}
                    placeholder="Enter Your Password"
                    minLength={6}
                    required
                />
                <Button kind="primary" type="submit" className="my-4">
                    Sign-up
                </Button>
                <p className="text-sm font-light px-4">
                    You already havn an account?{" "}
                    <Link to={"/login"} className="underline whitespace-nowrap">
                        Login Now
                    </Link>
                </p>
            </fieldset>
        </Form>
    );
}
