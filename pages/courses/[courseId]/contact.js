import { useRouter } from 'next/router'
import { Fragment } from 'react'
import Query from '../../../components/query'
import COURSE_ID_QUERY from '../../../apollo/queries/course/course'
import Contact from '../../../components/courses/Contact'


const ContactPage = () => {
    const router = useRouter()
    // course is the course ID
    const { courseId } = router.query

    return (
        <Fragment>

            {/* Need to use a different query later, data not in place yets */}
            <Query query={COURSE_ID_QUERY(courseId)}>
                {({ data: { courses } }) => {
                    if (courses.length == 0)
                        return <div>Course not found</div>
                    return <Contact {...courses[0]}/>
                }}
            </Query>

        </Fragment>
    )
}


export default ContactPage