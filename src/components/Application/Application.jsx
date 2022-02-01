import React from "react";
import { Icon } from "../../components/Icon/Icon.jsx";
import "./Application.css";

export const Application = ({
    id,
    date,
    name,
    email,
    github,
    status,
    updateStatus,
    deleteAction,
}) => {
    return (
        <li className="application__container">
            <div className="application__info">
                <p className="application__info-date">{date}</p>
                <p className="application__info-name">{name}</p>
                <a
                    className="application__info-email"
                    href={`mailto:${email}?Subject=Mach%20Eight%20Application`}
                >
                    {email}
                </a>
                <a
                    className="application__info-github"
                    href={github}
                    rel="noreferrer"
                    target="_blank"
                >
                    Github
                </a>
            </div>
            <div className="application__icons">
                {(status === "new" || status === "declined") && (
                    <Icon
                        type="check"
                        color="#409c16"
                        onClick={() => {
                            updateStatus("approved", id);
                        }}
                    />
                )}
                {(status === "new" || status === "approved") && (
                    <Icon
                        type="decline"
                        color="red"
                        onClick={() => {
                            updateStatus("declined", id);
                        }}
                    />
                )}
                {(status === "approved" || status === "declined") && (
                    <Icon
                        type="delete"
                        color="#d49012"
                        onClick={() => {
                            deleteAction(id);
                        }}
                    />
                )}
            </div>
        </li>
    );
};
