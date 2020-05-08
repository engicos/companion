import gql from "graphql-tag";

const TODAYS_LECTURES_QUERY = gql`
  query Lectures {
    lectures(where: { Weekday: "Fri" }) {
			id,
      subject {
        Title
      }
      Start
      End
    }
  }
`;

export default TODAYS_LECTURES_QUERY;
