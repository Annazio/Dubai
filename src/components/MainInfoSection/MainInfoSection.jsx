import React, { useContext } from "react";
import { LangContext } from "../../context/LangContext";
import { data_de } from "../../data/data_de";
import { data_en } from "../../data/data_en";
import s from "./MainInfoSection.module.css";

export default function MainInfoSection() {
    const { activeLang } = useContext(LangContext);

    const statement =
        activeLang === "en"
            ? data_en.main_section_statement
            : data_de.main_section_statement;

    const main_info_list =
        activeLang === "en"
            ? data_en.main_section_items
            : data_de.main_section_items;

    return (
        <div className={s.info_section}>
            <div className="container">
                <p>
                    {statement.text} <span>{statement.author}</span>
                </p>
                <ul className={s.images}>
                    {main_info_list.map((elem) => (
                        <li key={elem.id}>
                            <img src={elem.img} alt={elem.alt} />
                            <p>{elem.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}