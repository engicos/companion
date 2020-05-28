import { useRouter } from 'next/router'

const resources = () => {
    const router = useRouter()
    // course is the course ID
    const { course } = router.query

    return (
        <div>
            Course {course}'s Resources Page
        </div>
    )
}

export default resources
