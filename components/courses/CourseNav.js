import { Fragment } from "react"
import router from 'next/router'

const CourseNav = props => {
    return (
        <Fragment>
            <nav className="course-nav">
                <div>
                    <span className="course-nav-link" onClick={() => router.push(`/courses/${props.courseId}`)}>{props.title}</span> 
                    <span>{props.page ? `/ ${props.page}` : ``}</span>
                </div>
                <div>
                    <input type="text" placeholder="🔍 Search.." />
                </div>
            </nav>

            <style jsx >{`
            .course-nav {
                background: #2f3437;
                padding: 1rem;
                color: #eee;
                width: 100%;
                display: flex;
                font-size: 0.75rem;
                justify-content: space-between;

                span {
                    padding: 0.5rem;
                }

                &-link {
                    border-radius: 0.25rem;
                    &:hover {
                        cursor: pointer;
                        background: #404244;
                        transition: all 0.3s ease-in-out;
                    }
                }
            
                input {
                    border: none;
                    padding: 0.5rem 1rem;
                    border-radius: 0.25rem;
                }
            }

            @media only screen and (max-width: 650px) {
                .course-nav {
                    display: block;

                    span {
                        display: block;
                    }
                    
                    div {
                        padding: 1rem;
                    }
                }
            }

            `}</style>
        </Fragment>
    )
}

export default CourseNav