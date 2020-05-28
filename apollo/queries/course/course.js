import gql from "graphql-tag";

const COURSE_ID_QUERY = (id) => gql`
  query Courses {
    courses(where: { id: "${id}" }) {
	    id,
        Title,
        Acronym,
        Description,
        SubjectCode,
        created_at,
        updated_at
    }
  }
`;

export default COURSE_ID_QUERY;