import gql from "graphql-tag";

const ContactQuery = id => gql`
query Courses {
  courses(where: { id: "${id}" }) {
      id,
      Title,
      SubjectCode,
      Instructors {
        username,
        FirstName,
        LastName,
        ProfileImage {
          url
        }
      }
  }
}
`;

export default ContactQuery;