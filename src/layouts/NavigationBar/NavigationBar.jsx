import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { NavigationList } from "../../layouts";
import { Button } from "../../components";

export default function NavigationBar() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [screenWidth, setScreenWidth] = useState(innerWidth);

    const ToggleMenu = () => {
        setMenuIsOpen((prevState) => !prevState);
    };

    const screenWidthHandler = () => {
        setScreenWidth(innerWidth);
    };

    const mediaHandler = (event) => {
        if (event.matches) setMenuIsOpen(false);
    };

    useEffect(() => {
        window.addEventListener("resize", screenWidthHandler);
        window.matchMedia("(max-width: 400px)").addEventListener("change", mediaHandler);

        return () => {
            document.removeEventListener("resize", screenWidthHandler);
            window.matchMedia("(max-width: 400px)").removeEventListener("change", mediaHandler);
        };
    }, []);

    return (
        <nav>
            {screenWidth <= 400 && (
                <Button
                    title="Toggle Menu"
                    className="m-4 text-2xl text-primary_800 hover:text-primary_900"
                    onClick={ToggleMenu}
                >
                    {menuIsOpen ? (
                        <FontAwesomeIcon icon={faX} />
                    ) : (
                        <FontAwesomeIcon icon={faBars} />
                    )}
                </Button>
            )}
            <NavigationList screenWidth={screenWidth} menuIsOpen={menuIsOpen} />
        </nav>
    );
}
