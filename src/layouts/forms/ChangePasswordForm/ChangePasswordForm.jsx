import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, InputField, Button } from "../../../components";
import { auth } from "../../../store/user/user-actionCreators";

export default function ChangePasswordForm() {
    const passwordRef = useRef();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitHandler = (event) => {
        event.preventDefault();

        const idToken = localStorage.getItem("token");
        const password = passwordRef.current.value;

        dispatch(auth({ type: "changePassword", idToken, password }, navigate));
    };

    return (
        <Form onSubmit={submitHandler}>
            <fieldset>
                <legend>
                    <h2 className="text-3xl font-bold my-5">CHANGE PASSWORD</h2>
                </legend>
                <InputField
                    type="password"
                    label="Password"
                    id="password"
                    name="password"
                    ref={passwordRef}
                    placeholder="Enter Your Password here"
                    minLength={6}
                    autoFocus
                    required
                />
                <Button type="submit" className="my-4">
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
