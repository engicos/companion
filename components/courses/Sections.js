import { useRouter } from 'next/router'
import { Fragment, useState } from 'react'
import Head from 'next/head'
import CourseNav from './CourseNav'
import SectionsCard from './SectionsCard'

const Sections = props => {
    const router = useRouter()
    // course is the course ID
    // const { courseId } = router.query
    const [course,] = useState(props)

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
                        {course.Instructors.map((Instructor, index) => <SectionsCard key={Instructor.username} index={index} {...Instructor} />)}
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