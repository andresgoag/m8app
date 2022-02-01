import React from "react";
import { Link } from "react-router-dom";
import { Application } from "../../components/Application/Application.jsx";
import "./Review.css";

export const Review = () => {
    const [applications, setApplications] = React.useState([]);

    React.useEffect(() => {
        const fetchApplications = async () => {
            const res = await fetch(`${process.env.API}/get_applications`);
            if (res.status !== 200) return new Error("error");
            const applications = await res.json();
            setApplications(applications);
        };

        fetchApplications().catch((error) => console.error(error));
    }, []);

    const updateStatus = (action, id) => {
        const data = {
            action,
            id,
        };

        fetch(`${process.env.API}/update_application`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const applicationIndex = applications.findIndex(
            (application) => application._id.$oid === id
        );
        let newApplications = [...applications];
        newApplications[applicationIndex].status = action;
        setApplications(newApplications);
    };

    const deleteApplication = (id) => {
        fetch(`${process.env.API}/delete_application`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }),
        });

        const applicationIndex = applications.findIndex(
            (application) => application._id.$oid === id
        );
        let newApplications = [...applications];
        newApplications.splice(applicationIndex, 1);
        setApplications(newApplications);
    };

    return (
        <div className="review__container">
            <Link className="review__home" to="/">
                <figure>
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/5f7c74b3ebc1ba132269c5a7/1611678115046-8C180XU5WIJ07PA60ADA/mach_8_logo_highlight_full.jpg?format=1500w"
                        alt=""
                    />
                </figure>
            </Link>
            <div className="review__new">
                <h2>New Applications</h2>
                <ul>
                    {applications
                        .filter((application) => application.status === "new")
                        .map((application) => (
                            <Application
                                key={application._id.$oid}
                                id={application._id.$oid}
                                date={application.date}
                                name={application.name}
                                email={application.email}
                                github={application.github}
                                status={application.status}
                                updateStatus={updateStatus}
                                deleteAction={deleteApplication}
                            />
                        ))}
                </ul>
            </div>
            <div className="review__approved">
                <h2>Approved Applications</h2>
                <ul>
                    {applications
                        .filter(
                            (application) => application.status === "approved"
                        )
                        .map((application) => (
                            <Application
                                key={application._id.$oid}
                                id={application._id.$oid}
                                date={application.date}
                                name={application.name}
                                email={application.email}
                                github={application.github}
                                status={application.status}
                                updateStatus={updateStatus}
                                deleteAction={deleteApplication}
                            />
                        ))}
                </ul>
            </div>

            <div className="review__declined">
                <h2>Declined Applications</h2>
                <ul>
                    {applications
                        .filter(
                            (application) => application.status === "declined"
                        )
                        .map((application) => (
                            <Application
                                key={application._id.$oid}
                                id={application._id.$oid}
                                date={application.date}
                                name={application.name}
                                email={application.email}
                                github={application.github}
                                status={application.status}
                                updateStatus={updateStatus}
                                deleteAction={deleteApplication}
                            />
                        ))}
                </ul>
            </div>
        </div>
    );
};
