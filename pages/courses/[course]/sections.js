import { useRouter } from 'next/router'

const  sections = () => {
    const router = useRouter()
    // course is the course ID
    const { course } = router.query

    return (
        <div>
            Course {course}'s Sections Page
        </div>
    )
}

export default sections
