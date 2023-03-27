import { userActions } from "../../store/user/user-slice";

const apiKey = "AIzaSyDXkbooe830ttR9lZrR6iIY2qYB0ZAZq2s";

const headers = new Headers({
    "Content-Type": "application/json",
});

export const auth = ({ type, email, password, idToken }, navigate) => {
    return (dispatch) => {
        const body = {
            email,
            password,
            returnSecureToken: true,
        };

        let endPoint;
        switch (type) {
            case "login":
                endPoint = "signInWithPassword";
                break;
            case "registration":
                endPoint = "signUp";
                break;
            case "changePassword":
                endPoint = "update";
                delete body.email;
                body.idToken = idToken;
                break;
            default:
                break;
        }

        const url = `https://identitytoolkit.googleapis.com/v1/accounts:${endPoint}?key=${apiKey}`;

        const request = new Request(url, {
            method: "POST",
            headers,
            body: JSON.stringify(body),
        });

        console.log(JSON.stringify(body));

        fetch(request)
            .then((response) => response.json())
            .then((response) => {
                if (response.error) console.log(response.error.message);
                else {
                    console.log(response);
                    dispatch(
                        userActions.login({
                            email: response.email,
                            token: response.idToken,
                            userId: response.localId,
                        })
                    );
                    navigate("/welcome", { replace: true });
                }
            })
            .catch((error) => console.log(error));
    };
};
