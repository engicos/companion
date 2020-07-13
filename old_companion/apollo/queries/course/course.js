import gql from "graphql-tag";

const COURSE_ID_QUERY = (id) => gql`
  query Courses {
    courses(where: { id: "${id}" }) {
	    id,
        Title,
        Description,
        SubjectCode,
        Instructors {
          FirstName,
          LastName
        }
    }
  }
`;

export default COURSE_ID_QUERY;