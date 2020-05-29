import { useRouter } from 'next/router'
import { Fragment, useState } from 'react'
import Head from 'next/head'
import CourseNav from './CourseNav'

const Course = props => {
    const router = useRouter()
    // course is the course ID
    // const { courseId } = router.query
    const [course, ] = useState(props)
    console.log("Course State:", course)

    return (
        <Fragment>

            <Head>
                <title>
                    {`${course.Title} | ${course.SubjectCode}`}
                </title>
            </Head>

            <CourseNav 
                title={course.Title} 
                courseId={course.id}
            />  

            <div id="course-container">  

                <main>
                    <header>
                        <h1>{course.Title}</h1>

                        <p>{course.Description}</p>
                    </header>

                    <section>
                        <h2>Subject Code: {course.SubjectCode}</h2>
                        <p>Instructor{course.Instructors && course.Instructors.length > 1 ? "s":""}: 
                            {course.Instructors.map(Instructor => <span> {Instructor.username}</span> )}
                        </p>

                        <div className="link-grid">
                            <div onClick={() => router.push(`/courses/${course.id}/syllabus`)}>
                                <div className="link-grid-icon">📄</div> Syllabus
                            </div>
                            <div onClick={() => router.push(`/courses/${course.id}/assignments`)}>
                                <div className="link-grid-icon">📌</div> Assignments
                            </div>
                            <div onClick={() => router.push(`/courses/${course.id}/schedule`)}>
                                <div className="link-grid-icon">📅</div> Schedule
                            </div>
                            <div onClick={() => router.push(`/courses/${course.id}/sections`)}>
                                <div className="link-grid-icon">🎒</div> Sections
                            </div>
                            <div onClick={() => router.push(`/courses/${course.id}/resources`)}>
                                <div className="link-grid-icon">📚</div> Resources
                            </div>
                            <div onClick={() => router.push(`/courses/${course.id}/contact`)}>
                                <div className="link-grid-icon">☎</div> Contact and Office Hours
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2>Weekly Schedule</h2>

                        <div className="schedule-grid">
                            <div className="schedule-grid-weekday">
                                <h3>Mon</h3>
                                <div><p>9-11 AM</p><p>Lecture</p></div>
                                <div><p>2-3 PM</p><p>Tutorial</p></div>
                            </div>
                            <div className="schedule-grid-weekday">
                                <h3>Tue</h3>
                                <div><p>9-11 AM</p><p>Lecture</p></div>
                                <div><p>2-3 PM</p><p>Tutorial</p></div>
                            </div>
                            <div className="schedule-grid-weekday">
                                <h3>Wed</h3>
                                <div><p>9-11 AM</p><p>Lecture</p></div>
                                <div><p>2-3 PM</p><p>Tutorial</p></div>
                            </div>
                            <div className="schedule-grid-weekday">
                                <h3>Thu</h3>
                                <div><p>9-11 AM</p><p>Lecture</p></div>
                                <div><p>2-3 PM</p><p>Tutorial</p></div>
                            </div>
                            <div className="schedule-grid-weekday">
                                <h3>Fri</h3>
                                <div><p>9-11 AM</p><p>Lecture</p></div>
                                <div><p>2-3 PM</p><p>Tutorial</p></div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2>Announcements</h2>
                        <div className="announcement">When things pop up, add them here. Just type `/callout` and press `enter` to add one of these handy callout boxes with an emoji and color of your choice. Example below.</div>
                        <div className="announcement">**Reading change:** Let's also read Chapter 4 this week in addition to Chapter 3!</div>
                    </section>
                </main>
            </div>
            <style jsx >{`
                #course-container {
                    margin: 0;
                    padding: 1rem;
                    background: #2f3437;
                    color: #eee;
                  
                    main {
                      width: 60%;
                      margin: 0 auto;
                      margin-top: 5rem;
                  
                      section {
                        margin: 3rem 0;
                      }
                  
                      .link-grid {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        column-gap: 2rem;
                  
                        div {
                          padding: 0.5rem 0.25rem;
                          user-select: none;
                          display: flex;
                          align-items:center;
                  
                          &:hover {
                            background: #404244;
                            cursor: pointer;
                            transition: all 0.3s ease-in-out;
                          }
                        }
                  
                        &-icon {
                        }
                      }
                  
                      .schedule-grid {
                        display: grid;
                        column-gap: 5rem;
                        grid-template-columns: repeat(5, 1fr);
                  
                        &-weekday {
                          h3 {
                            padding-bottom: 0.5rem;
                            border-bottom: #aaa 1px solid;
                          }
                  
                          div {
                            margin-bottom: 1rem;
                            p {
                              margin: 0;
                              &:nth-child(1) {
                                color: #fff;
                                font-weight: bold;
                              }
                            }
                          }
                        }
                      }
                  
                      .announcement {
                        background: #404244;
                        border-radius: 0.25rem;
                        padding: 1rem 2rem;
                        margin: 0.5rem 0;
                      }
                    }
                  }

                  @media only screen and (max-width: 650px) {
                    #course-container {
                        main {
                            width: 90%;
                            section {
                                .link-grid{
                                    column-gap: 0.5rem;
                                }

                                .schedule-grid {
                                    grid-template-columns: 1fr 1fr;
                                }
                            }
                        }
                    }
                  }
                  
            `}</style>
        </Fragment>
    )
}

export default Course