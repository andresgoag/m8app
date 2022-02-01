import React from "react";
import { ReactComponent as CheckSVG } from "./check-lg.svg";
import { ReactComponent as DenySVG } from "./x-lg.svg";
import { ReactComponent as DeleteSVG } from "./trash-fill.svg";
import "./Icon.css";

const iconTypes = {
    check: (color) => <CheckSVG className="icon" fill={color} />,
    decline: (color) => <DenySVG className="icon" fill={color} />,
    delete: (color) => <DeleteSVG className="icon" fill={color} />,
};

export const Icon = ({ type, color, onClick }) => {
    return (
        <span className="icon__container" onClick={onClick}>
            {iconTypes[type](color)}
        </span>
    );
};
