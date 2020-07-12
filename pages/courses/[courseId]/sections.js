import { useRouter } from 'next/router'
import { Fragment } from 'react'
import Query from '../../../components/query'
import SectionQuery from '../../../apollo/queries/course/Section'
import Sections from '../../../components/courses/Sections'
import Error from 'next/error'

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
                        return <Error statusCode={404} title={"Couldn't find that course."} />
                    return <Sections {...courses[0]} />
                }}
            </Query>

        </Fragment>
    )
}


export default SectionsPage