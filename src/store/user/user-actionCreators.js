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

        fetch(request)
            .then((response) => response.json())
            .then((response) => {
                if (response.error) console.log(response.error.message);
                else {
                    dispatch(
                        userActions.login({
                            id: response.localId,
                            token: response.idToken,
                            email: response.email,
                        })
                    );
                    navigate("/Welcome", { replace: true });
                }
            })
            .catch((error) => console.log(error));
    };
};
