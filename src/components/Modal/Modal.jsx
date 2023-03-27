import { createPortal } from "react-dom";

export default function Modal({ children }) {
    return createPortal(
        <div className="fixed w-full h-screen flex items-center justify-center z-10">
            <div className="absolute w-full h-screen bg-black bg-opacity-40" />
            {children}
        </div>,
        document.getElementById("modals")
    );
}
