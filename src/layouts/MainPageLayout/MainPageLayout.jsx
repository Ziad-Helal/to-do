import { MainPageLayout_Header, MainPageLayout_Footer } from "../../layouts";

export default function MainPageLayout({ children }) {
    return (
        <>
            <MainPageLayout_Header />
            {children}
            {/* <MainPageLayout_Footer /> */}
        </>
    );
}
