import { useRouter } from 'next/router'
import { Fragment } from 'react'
import Query from '../../../components/query'
import ContactQuery from '../../../apollo/queries/course/Contact'
import Contact from '../../../components/courses/Contact'


const ContactPage = () => {
    const router = useRouter()
    // course is the course ID
    const { courseId } = router.query

    return (
        <Fragment>

            <Query query={ContactQuery(courseId)}>
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