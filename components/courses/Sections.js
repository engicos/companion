import { useRouter } from 'next/router'
import { Fragment, useState } from 'react'
import Head from 'next/head'
import CourseNav from './CourseNav'

const Sections = props => {
    const router = useRouter()
    // course is the course ID
    // const { courseId } = router.query
    const [course,] = useState(props)
    // console.log("Contact state:", course)

    return (
        <Fragment>

            <Head>
                <title>
                    {`Sections: ${course.Title} | ${course.SubjectCode}`}
                </title>
            </Head>

            <CourseNav 
                title={course.Title} 
                page="🎒 Sections" 
                courseId={course.id}
            />

            <div id="sections-container">
                <main>
                    <header>
                        <h1>🎒 Sections</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, non.</p>
                    </header>

                    <section className="sections-grid">
                        <div className="section-card">
                            <h2>Section 1</h2>
                            <p>Teaching Assistant: Swight Dchrute</p>
                            <p>Contact: ds@scranton.dm</p>
                            <p>Date & Time: M/W 9:00 - 11:00 AM</p>
                            <p>Location: Computer Dept Room #3</p>
                            <p>Section: 12345</p>
                        </div>
                        <div className="section-card">
                            <h2>Section 2</h2>
                            <p>Teaching Assistant: Swight Dchrute</p>
                            <p>Contact: ds@scranton.dm</p>
                            <p>Date & Time: M/W 2:00 - 4:00 PM</p>
                            <p>Location: Computer Dept SS Lab</p>
                            <p>Section: 12345</p>
                        </div>
                    </section>
                </main>
            </div>



            <style jsx >{`
                #sections-container {
                    margin: 0;
                    height: 100vh;
                    padding: 1rem;
                    background: #2f3437;
                    color: #eee;
                  
                    main {
                        width: 60%;
                        margin: 0 auto;
                        margin-top: 3rem;
                        
                        section {
                            margin: 3rem 0;
                        }

                        .sections-grid {
                            display: grid;
                            grid-template-columns: 1fr 1fr;
                            gap: 4rem;
                            
                            .section-card{
                                background: #404244;
                                padding: 0 1rem;
                                border-radius: 0.25rem;
                                box-shadow: 0 0.25rem 0.5rem #212121;
                            }
                        }
                    }
                }

                @media only screen and (max-width: 1200px) {
                    #sections-container {
                        main {
                            width: 75%;
                        }
                    }
                }

                @media only screen and (max-width: 650px) {
                    #sections-container {
                        main {
                            width: 90%;  

                            .sections-grid {
                                grid-template-columns: 1fr;
                            }
                        }
                    }
                }

                @media only screen and (min-width: 1600px) {
                    #sections-container {
                        main {
                            .sections-grid {
                                grid-template-columns: repeat(3, 1fr);
                            }
                        }
                    }
                }
            `}</style>
        </Fragment>
    )
}

export default Sections