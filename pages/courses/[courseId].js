import { useRouter } from 'next/router'
import { Fragment, useState } from 'react'
import Query from '../../components/query'
import COURSE_ID_QUERY from '../../apollo/queries/course/course'
import Course from '../../components/courses/Course'

const CoursePage = (props) => {
    const router = useRouter()
    // course is the course ID
    const { courseId } = router.query

    return (
        <Fragment>

            <Query query={COURSE_ID_QUERY(courseId)}>
                {({ data: { courses } }) => {
                    if (courses.length == 0)
                        return <div>Post not found</div>
                    return <Course {...courses[0]}/>
                }}
            </Query>

        </Fragment>
    )
}


export default CoursePage