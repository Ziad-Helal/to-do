import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, InputField, Button } from "../../../components";
import { auth } from "../../../store/user/user-actionCreators";

export default function LoginForm() {
    const emailRef = useRef();
    const passwordRef = useRef();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitHandler = (event) => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        dispatch(auth({ type: "login", email, password }, navigate));
    };

    return (
        <Form onSubmit={submitHandler}>
            <fieldset>
                <legend>
                    <h2 className="text-3xl font-bold my-5">LOGIN</h2>
                </legend>
                <InputField
                    type="email"
                    label="Email"
                    id="email"
                    name="email"
                    ref={emailRef}
                    placeholder="Enter Your Email here"
                    autoFocus
                    required
                />
                <InputField
                    type="password"
                    label="Password"
                    id="password"
                    name="password"
                    ref={passwordRef}
                    placeholder="Enter Your Password here"
                    minLength={6}
                    required
                />
                <Button kind="primary" type="submit" className="my-4">
                    Login
                </Button>
                <p className="text-sm font-light px-4">
                    You didn't create an account yet?{" "}
                    <Link to={"/register"} className="underline whitespace-nowrap">
                        Register Now
                    </Link>
                </p>
            </fieldset>
        </Form>
    );
}
