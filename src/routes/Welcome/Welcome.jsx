import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

export const Welcome = ({ showHomework }) => {
    return (
        <React.Fragment>
            <div className="welcome__banner">
                <p>Welcome to your next step in your career</p>
                <Link className="welcome__action" to="/homework">
                    Start your application here
                </Link>
            </div>

            <div className="welcome__container">
                <Link className="welcome__home" to="/">
                    <figure>
                        <img
                            src="https://images.squarespace-cdn.com/content/v1/5f7c74b3ebc1ba132269c5a7/1611678115046-8C180XU5WIJ07PA60ADA/mach_8_logo_highlight_full.jpg?format=1500w"
                            alt=""
                        />
                    </figure>
                </Link>
                <p className="welcome__text">
                    We are looking for Software Engineers at all levels to join
                    our team. Our company works with a variety of technologies
                    including Artificial Intelligence, Machine Learning, Natural
                    Language Processing and Computer Vision, and in a variety of
                    markets including AdTech, FinTech, and Biotech. If you are a
                    passionate engineer looking for your next challenge...
                </p>

                <Link className="welcome__action" to="/homework">
                    Start your application here
                </Link>
            </div>
        </React.Fragment>
    );
};
