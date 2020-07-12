import { useRouter } from 'next/router'
import { Fragment, useState } from 'react'
import Head from 'next/head'
import CourseNav from './CourseNav'

const Syllabus = props => {
  const router = useRouter()
  // course is the course ID
  // const { courseId } = router.query
  const [course,] = useState(props)
  console.log("Contact state:", course)

  return (
    <Fragment>

      <Head>
        <title>
          {`Syllabus: ${course.Title} | ${course.SubjectCode}`}
        </title>
      </Head>

      <CourseNav
        title={course.Title}
        page="📄 Syllabus"
        courseId={course.id}
      />

      <div id="syllabus-container">
        <main>
          <header>
            <h1>📄 Syllabus</h1>
            <p>[P] Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, ipsam?</p>
          </header>

          <section>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam quidem voluptas odio, perferendis dolorum delectus sit, ad corrupti quae atque quibusdam? Atque doloremque labore maxime expedita quisquam inventore obcaecati! Provident.</p>
          </section>
        </main>
      </div>



      <style jsx >{`
                #syllabus-container {
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
                            margin: 3rem auto;
                            
                            table {                                
                                border-collapse: collapse;
                                th {
                                    text-align: left;
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
                    #syllabus-container {
                        main {
                            width: 90%;
                        }
                    }
                }
            `}</style>
    </Fragment>
  )
}

export default Syllabus