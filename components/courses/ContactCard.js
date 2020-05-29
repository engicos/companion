import { Fragment } from "react"

const ContactCard = props => {
    let ProfileImage = "https://via.placeholder.com/200";
    
    if(props.ProfileImage)
        ProfileImage = `http://localhost:1337${props.ProfileImage.url}`

    return (
        <Fragment>
            <div className="contact-card" onClick={() => props.handleClick(`${props.FirstName} ${props.LastName}`)}>
                <div className="contact-card-img"><img src={ProfileImage} alt={`${props.FirstName} ${props.LastName}`} /></div>
                <div className="contact-card-title"><p>{`${props.FirstName} ${props.LastName}`}</p></div>
            </div>

            <style jsx >{`
                .contact-card {
                    border-radius: 0.25rem;
                    background: #404244;
                    margin-bottom: 2rem;
                    margin-right: 1rem;
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