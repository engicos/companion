import { useRouter } from 'next/router'

const contact = () => {
    const router = useRouter()
    // course is the course ID
    const { course } = router.query

    return (
        <div>
            Course {course}'s Contact Page
        </div>
    )
}

export default contact
