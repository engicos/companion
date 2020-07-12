import { useRouter } from 'next/router'
import { Fragment, useState } from 'react'
import Head from 'next/head'
import CourseNav from './CourseNav'

const Assignments = props => {
    const router = useRouter()
    // course is the course ID
    // const { courseId } = router.query
    const [course,] = useState(props)
    console.log("Contact state:", course)

    return (
        <Fragment>

            <Head>
                <title>
                    {`Assignments: ${course.Title} | ${course.SubjectCode}`}
                </title>
            </Head>

            <CourseNav
                title={course.Title}
                page="📌 Assignments"
                courseId={course.id}
            />

            <div id="assignments-container">
                <main>
                    <header>
                        <h1>📌 Assignments</h1>
                        <p>[P] Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, ipsam?</p>
                    </header>

                    <section>
                        <div className="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>🔤 Name</th>
                                        <th>📆 Dates</th>
                                        <th>📔 Topic</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>LoremName</td>
                                        <td>LoremDate </td>
                                        <td>LoremTopic</td>
                                    </tr>
                                    <tr>
                                        <td>LoremName</td>
                                        <td>June 9, 2020</td>
                                        <td>LoremTopic</td>
                                    </tr>
                                    <tr>
                                        <td>LoremName</td>
                                        <td>LoremDate</td>
                                        <td>LoremTopic lorem</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </main>
            </div>



            <style jsx >{`
                #assignments-container {
                    margin: 0;
                    padding: 1rem;
                    background: #2f3437;
                    color: #eee;
                  
                    main {
                        width: 60%;
                        margin: 0 auto;
                        margin-top: 3rem;
                        
                        section {
                            margin: 3rem auto;
                            
                            .table-wrapper{
                                overflow-x: auto;
                            }

                            table {                                
                                border-collapse: collapse;
                                min-width: 100%;
                                th {
                                    text-align: left;
                                    white-space: nowrap;
                                }

                                td {
                                    font-size: 0.8rem;
                                }

                                th, td {
                                    padding: 0.5rem;
                                    border: 1px solid #555;
                                }

                                tr {
                                    td,th {
                                        &:nth-child(1){
                                            border-left: none;
                                        }
                                        &:nth-child(3){
                                            border-right: none;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                @media only screen and (max-width: 650px) {
                    #assignments-container {
                        main {
                            width: 90%;
                        }
                    }
                }
            `}</style>
        </Fragment>
    )
}

export default Assignments