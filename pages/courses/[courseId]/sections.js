import { useRouter } from 'next/router'
import { Fragment } from 'react'
import Query from '../../../components/query'
import SectionQuery from '../../../apollo/queries/course/Section'
import Sections from '../../../components/courses/Sections'


const SectionsPage = () => {
    const router = useRouter()
    // course is the course ID
    const { courseId } = router.query

    return (
        <Fragment>

            {/* Need to use a different query later, data not in place yets */}
            <Query query={SectionQuery(courseId)}>
                {({ data: { courses } }) => {
                    if (courses.length == 0)
                        return <div>Course not found</div>
                    return <Sections {...courses[0]} />
                }}
            </Query>

        </Fragment>
    )
}


export default SectionsPage