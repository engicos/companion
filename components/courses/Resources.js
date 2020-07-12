import { useRouter } from 'next/router'
import { Fragment, useState } from 'react'
import Head from 'next/head'
import CourseNav from './CourseNav'

const Resources = props => {
  const router = useRouter()
  // course is the course ID
  // const { courseId } = router.query
  const [course,] = useState(props)
  console.log("Contact state:", course)

  return (
    <Fragment>

      <Head>
        <title>
          {`Resources: ${course.Title} | ${course.SubjectCode}`}
        </title>
      </Head>

      <CourseNav
        title={course.Title}
        page="📚 Resources"
        courseId={course.id}
      />

      <div id="resources-container">
        <main>
          <header>
            <h1>📚 Resources</h1>
            <p>[P] Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </header>

          <section>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, nobis? Iure sapiente corporis atque iste facere, totam sint natus?</p>
          </section>
        </main>
      </div>



      <style jsx >{`
                #resources-container {
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
                    #resources-container {
                        main {
                            width: 90%;
                        }
                    }
                }
            `}</style>
    </Fragment>
  )
}

export default Resources