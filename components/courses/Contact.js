import { useRouter } from 'next/router'
import { Fragment, useState } from 'react'
import Head from 'next/head'
import CourseNav from './CourseNav'
import ContactCard from './ContactCard'

const Contact = props => {
    const router = useRouter()
    // course is the course ID
    // const { courseId } = router.query
    const [course,] = useState(props)
    // console.log("Contact state:", course)

    const dummyContacts = [
        { image: "https://via.placeholder.com/200", name: "Prof. Schrute" },
        { image: "https://via.placeholder.com/150", name: "Dr. Mike" },
        { image: "https://via.placeholder.com/300x200", name: "Mrs. Pam" },
        { image: "https://via.placeholder.com/300", name: "Jim James Jimmy Halpert" },
        { image: "https://via.placeholder.com/200x150", name: "A really really really long name" },
        { image: "https://via.placeholder.com/400", name: "Mr. Deangelo Vickers" }
    ]

    const [contacts,] = useState(dummyContacts)

    const handleClick = name => {
        alert(`You clicked on ${name}`)
    }

    return (
        <Fragment>

            <Head>
                <title>
                    {`Contacts: ${course.Title} | ${course.SubjectCode}`}
                </title>
            </Head>

            <CourseNav 
                title={course.Title} 
                page="☎️ Contact & Office Hours" 
                courseId={course.id}
            />

            <div id="contact-container">
                <main>
                    <header>
                        <h1>☎️ Contact & Office Hours</h1>
                        <p>Remember Faculty Want to Help. Faculty are people who also happen to be teachers, and it's their objective to communicate with you and help you succeed. </p>
                        <p>Be clear and polite.</p>
                    </header>

                    <section className="contact-grid">
                        {contacts.map((contact) =>
                            <ContactCard
                                key={contact.name}
                                handleClick={handleClick}
                                image={contact.image}
                                name={contact.name}
                            />
                        )}

                    </section>
                </main>
            </div>



            <style jsx >{`
                #contact-container {
                    margin: 0;
                    padding: 1rem;
                    background: #2f3437;
                    color: #eee;
                  
                    main {
                        width: 60%;
                        margin: 0 auto;
                        margin-top: 3rem;
                        
                        section {
                            margin: 3rem 0;

                            &.contact-grid {
                                display: flex;
                                flex-wrap: wrap;
                                justify-content: center;

                            }
                        }
                    }
                }

                @media only screen and (max-width: 650px) {
                    #contact-container {
                        main {
                            width: 90%;  
                        }
                    }
                  }
            `}</style>
        </Fragment>
    )
}

export default Contact