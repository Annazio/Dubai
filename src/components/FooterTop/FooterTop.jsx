
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import ButtonUI from "../UI/ButtonUI/ButtonUI";
import { useContext } from "react";
import { data_de } from "../../data/data_de";
import { data_en } from "../../data/data_en";
import { LangContext } from "../../context/LangContext";
import s from "./FooterTop.module.css";

export default function FooterTop() {
    const { activeLang } = useContext(LangContext);

    const footer_links =
        activeLang === "en" ? data_en.footer_links : data_de.footer_links;
    return (
        <div className={s.footer_top}>
            <div className="container">
                <div className={s.footer_wrapper}>
                    <Logo />

                    <ul className={s.options_wrapper}>
                        {footer_links.map((elem) => (
                            <li key={elem.id} className={s.column}>
                                <span>{elem.title}</span>
                                <ul className={s.links_list}>
                                    {elem.links.map((link) => (
                                        <li key={link.id}>
                                            <NavLink to={link.link}>{link.title}</NavLink>
                                        </li>
                                    ))}
                                </ul>
                                {elem.footer_btn ? (
                                    <div className={s.footer_btn}>
                                        <ButtonUI text={elem.footer_btn} />{" "}
                                    </div>
                                ) : (
                                    ""
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}