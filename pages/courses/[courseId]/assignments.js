import { useRouter } from 'next/router'

const assignments = () => {
    const router = useRouter()
    // course is the course ID
    const { course } = router.query

    return (
        <div>Course {course}'s Assignments Page</div>
    )
}

export default assignments