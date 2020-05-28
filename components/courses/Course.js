import { Fragment, useState } from 'react'
import Head from 'next/head'

const Course = props => {
    const [course, ] = useState(props)
    console.log("Course state:", course)

    return (
        <Fragment>

            <Head>
                <title>
                    {`${course.Title} | ${course.SubjectCode}`}
                </title>
            </Head>

            <div id="course-container">
                <nav className="course-nav">
                    <div>{course.Title}</div>
                    <div>
                        <input type="text" placeholder="🔍 Search.." />
                    </div>
                </nav>

                <main>
                    <header>
                        <h1>{course.Title}</h1>

                        <p>{course.Description}</p>
                    </header>

                    <section>
                        <h2>Subject Code: {course.SubjectCode}</h2>
                        <p>Instructor: Course Instructor</p>

                        <div className="link-grid">
                            <span onClick={() => router.push(`/courses/${course}/syllabus`)}>
                                <span className="link-grid-icon">📄</span> Syllabus
                            </span>
                            <span onClick={() => router.push(`/courses/${course}/assignments`)}>
                                <span className="link-grid-icon">📌</span> Assignments
                            </span>
                            <span onClick={() => router.push(`/courses/${course}/schedule`)}>
                                <span className="link-grid-icon">📅</span> Schedule
                            </span>
                            <span onClick={() => router.push(`/courses/${course}/sections`)}>
                                <span className="link-grid-icon">🎒</span> Sections
                            </span>
                            <span onClick={() => router.push(`/courses/${course}/resources`)}>
                                <span className="link-grid-icon">📚</span> Resources
                            </span>
                            <span onClick={() => router.push(`/courses/${course}/contact`)}>
                                <span className="link-grid-icon">☎</span> Contact and Office Hours
                            </span>
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
                  
                    .course-nav {
                      width: 100%;
                      display: flex;
                      justify-content: space-between;
                  
                      input {
                        border: none;
                        padding: 0.5rem 1rem;
                        border-radius: 0.25rem;
                      }
                    }
                  
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
                  
                        span {
                          padding: 0.5rem 0.25rem;
                          user-select: none;
                  
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
                  
            `}</style>
        </Fragment>
    )
}

export default Course