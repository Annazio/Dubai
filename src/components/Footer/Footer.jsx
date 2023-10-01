import s from "./Footer.module.css";

import FooterBottom from "../FooterBottom/FooterBottom";
import FooterTop from "../FooterTop/FooterTop";

export default function Footer() {
    return (
        <footer className={s.footer}>
            <FooterTop />
            <FooterBottom />
        </footer>
    );
}