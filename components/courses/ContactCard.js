import { Fragment } from "react"

const ContactCard = props => {

    return (
        <Fragment>
            <div className="contact-card" onClick={() => props.handleClick(props.name)}>
                <div className="contact-card-img"><img src={props.image} alt={props.name} /></div>
                <div className="contact-card-title"><p>{props.name}</p></div>
            </div>

            <style jsx >{`
                .contact-card {
                    border-radius: 0.25rem;
                    background: #404244;
                    margin: 1rem;
                    box-shadow: 0 0.25rem 0.5rem #212121;

                    &-img {
                        width: 200px;
                        height: 200px;
                        display: flex;
                        align-items: center;
                        img {
                            width: 100%;
                            height: auto;
                            border-top-left-radius: 0.25rem;
                            border-top-right-radius: 0.25rem;
                        }
                    }

                    &-title {
                        padding: 0rem 0.5rem;
                        width: 150px;
                        display: flex;
                        align-items: center;
                    }

                    &:hover {
                        cursor: pointer;
                        box-shadow: 0.1rem 0.35rem 0.75rem #111;
                        transition: all 0.3s ease-in-out;

                        .contact-card-title {
                            color: #fff;
                        }
                    }
                }
            `}</style>
        </Fragment>
    )
}

export default ContactCard