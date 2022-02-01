import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Homework.css";

export const Homework = () => {
    const navigate = useNavigate();
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [github, setGithub] = React.useState("");

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const data = {
            name,
            email,
            github,
        };

        fetch(`https://m8appapi.herokuapp.com/add_application`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        navigate("/thanks");
    };
    return (
        <div className="homework__container">
            <Link className="homework__home" to="/">
                <figure>
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/5f7c74b3ebc1ba132269c5a7/1611678115046-8C180XU5WIJ07PA60ADA/mach_8_logo_highlight_full.jpg?format=1500w"
                        alt=""
                    />
                </figure>
            </Link>
            <main>
                <section>
                    <h1>Mach Eight Sample Project</h1>
                    <p>
                        Thank you for taking the time to complete this sample
                        project.
                    </p>
                    <p>
                        We're a tech first company and we value our engineers
                        tremendously. We're are looking for hard working, smart
                        engineers with either excellent experience or lots of
                        potential.
                    </p>
                    <h2>Project</h2>
                    <ul>
                        <li>
                            The project is to write a function that searches
                            through NBA player heights based on user input. The
                            raw data is taken from{" "}
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://www.openintro.org/data/index.php?data=nba_heights"
                            >
                                here
                            </a>
                        </li>
                        <li>
                            The data is served in json format by the endpoint{" "}
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://mach-eight.uc.r.appspot.com/"
                            >
                                here
                            </a>
                        </li>
                        <li>
                            The task is to create an application that takes a
                            single integer input. The application will download
                            the raw data from the endpoint and print a list of
                            all pairs of players whose height in inches adds up
                            to the integer input to the application. If no
                            matches are found, the application will print "No
                            matches found"
                        </li>
                        <li>
                            <p>Sample output is as follows:</p>
                            <code>
                                &gt;&gt;&gt; app 139 - Brevin Knight Nate
                                Robinson - Nate Robinson Mike Wilks
                            </code>
                        </li>
                        <li>
                            The algorithm to find the pairs must be faster than
                            O(n^2). All edge cases should be handled
                            appropriately.
                        </li>
                        <li>
                            Though not strictly required, demonstrating comfort
                            in writing unit tests will make your submission
                            stand out.
                        </li>
                        <li>
                            This is _not_ a closed book test. You are encouraged
                            to reach out with any questions that you come
                            across.
                        </li>
                    </ul>

                    <h2>Submission</h2>
                    <p>
                        The preferred form of submission is by publishing a
                        public repo on github with your code and a README file
                        explaining how to run the code.
                    </p>
                </section>
                <form className="homework__form" onSubmit={handleSubmit}>
                    <input
                        required
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(ev) => {
                            setName(ev.target.value);
                        }}
                    />
                    <input
                        required
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(ev) => {
                            setEmail(ev.target.value);
                        }}
                    />
                    <input
                        required
                        type="url"
                        placeholder="Github repository url"
                        value={github}
                        onChange={(ev) => {
                            setGithub(ev.target.value);
                        }}
                    />
                    <input type="submit" />
                </form>
            </main>
        </div>
    );
};
