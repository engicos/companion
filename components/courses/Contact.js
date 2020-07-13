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

    const handleClick = name => {
        alert(`You clicked on ${name} \nLater want this to redirect to the ${name}'s profile page`)
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
                        {course.Instructors.map(Instructor =>
                            <ContactCard
                                key={Instructor.username}
                                handleClick={handleClick}
                                {...Instructor}
                            />)}
                    </section>
                </main>
            </div>



            <style jsx >{`
                #contact-container {
                    margin: 0;
                    padding: 1rem;
                    background: #2f3437;
                    color: #eee;
                    min-height: 100vh;
                  
                    main {
                        width: 60%;
                        margin: 0 auto;
                        margin-top: 3rem;
                        
                        section {
                            margin: 3rem 0;

                            &.contact-grid {
                                display: flex;
                                flex-wrap: wrap;
                                justify-content: start;
                            }
                        }
                    }
                }

                @media only screen and (max-width: 650px) {
                    #contact-container {
                        main {
                            width: 90%;  

                            section.contact-grid {
                                justify-content: center;
                            }
                        }
                    }
                  }
            `}</style>
        </Fragment>
    )
}

export default Contact