import { useRouter } from 'next/router'
import { Fragment, useState } from 'react'
import Head from 'next/head'
import CourseNav from './CourseNav'

const Schedule = props => {
  const router = useRouter()
  // course is the course ID
  // const { courseId } = router.query
  const [course,] = useState(props)
  console.log("Contact state:", course)

  const scheduleTypes = ['Assignment', 'Lesson', 'Exam']

  const scheduleData = [
    {
      name: 'lorem',
      date: '2020-06-09',
      type: 'Assignment',
      topic: 'ipsum',
    },
    {
      name: 'lorem2',
      date: '2020-07-06',
      type: 'Lesson',
      topic: 'ipsum2',
    },
    {
      name: 'lorem3',
      date: '2020-08-03',
      type: 'Exam',
      topic: 'ipsum3',
    },
  ]

  return (
    <Fragment>

      <Head>
        <title>
          {`Schedule: ${course.Title} | ${course.SubjectCode}`}
        </title>
      </Head>

      <CourseNav
        title={course.Title}
        page="📅 Schedule"
        courseId={course.id}
      />

      <div id="schedule-container">
        <main>
          <header>
            <h1>📅 Schedule</h1>
            <p>[P] Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </header>

          <section>
            <p>This course schedule provides a thorough list of weekly topics, readings, assignments, and exams.
You can create your own categories and topics for whatever you're teaching. </p>

            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>🔤 Name</th>
                    <th>📆 Dates</th>
                    <th>📆 Type</th>
                    <th>📔 Topic</th>
                  </tr>
                </thead>

                <tbody>
                  {scheduleData.map((row, index) => (
                    <tr key={index}>
                      <td>{row.name}</td>
                      <td>{row.date} </td>
                      <td>{row.type} </td>
                      <td>{row.topic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>



      <style jsx >{`
                #schedule-container {
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
                                        &:nth-child(4){
                                            border-right: none;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                @media only screen and (max-width: 650px) {
                    #schedule-container {
                        main {
                            width: 90%;
                        }
                    }
                }
            `}</style>
    </Fragment>
  )
}

export default Schedule