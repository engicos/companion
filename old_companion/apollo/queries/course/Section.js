import gql from "graphql-tag";

const SectionQuery = id => gql`
query Courses {
  courses(where: { id: "${id}" }) {
      id,
      Title,
      SubjectCode,
      Instructors {
        username,
        FirstName,
        LastName,
        email
      }
  }
}
`;

export default SectionQuery;