import { useRouter } from 'next/router'

const course = () => {
    const router = useRouter()
    // course is the course ID
    const { course } = router.query

    return (
        <div>
            Course {course} Page
        </div>
    )
}


export default course