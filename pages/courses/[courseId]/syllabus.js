import { useRouter } from 'next/router'

const syllabus = () => {
    const router = useRouter()
    // course is the course ID
    const { course } = router.query

    return (
        <div>Course {course}'s Syllabus Page</div>
    )
}

export default syllabus