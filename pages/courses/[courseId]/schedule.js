import { useRouter } from 'next/router'

const schedule = () => {
    const router = useRouter()
    // course is the course ID
    const { course } = router.query

    return (
        <div>Course {course}'s Schedule Page</div>
    )
}

export default schedule