import { useRouter } from 'next/router'
import { Fragment } from 'react'
import Query from '../../../components/query'
import ContactQuery from '../../../apollo/queries/course/Contact'
import Contact from '../../../components/courses/Contact'
import Error from 'next/error'

const ContactPage = () => {
    const router = useRouter()
    // course is the course ID
    const { courseId } = router.query

    return (
        <Fragment>

            <Query query={ContactQuery(courseId)}>
                {({ data: { courses } }) => {
                    if (courses.length == 0)
                        return <Error statusCode={404} title={"Couldn't find that course."} />
                    return <Contact {...courses[0]} />
                }}
            </Query>

        </Fragment>
    )
}


export default ContactPage