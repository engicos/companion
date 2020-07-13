import { Fragment } from "react"

const SectionsCard = props => {
    console.log("SEctions card props", props);

    // [P] === Placeholder
    return (
        <Fragment>
            <div className="section-card">
                <h2>Section {props.index + 1}</h2>
                <p>Instructor: {props.FirstName} {props.LastName}</p>
                <p>Email: {props.email}</p>
                <p>[P] Date & Time: M/W 9:00 - 11:00 AM</p>
                <p>[P] Location: Computer Dept Room #3</p>
                <p>[P] Section: 12345</p>
            </div>
            <style jsx >{`
                .section-card{
                    background: #404244;
                    padding: 0 1rem;
                    border-radius: 0.25rem;
                    box-shadow: 0 0.25rem 0.5rem #212121;
                }
            `}</style>
        </Fragment>
    )
}

export default SectionsCard