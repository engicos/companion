import gql from "graphql-tag";

const TODAYS_LECTURES_QUERY = (day) => gql`
  query Lectures {
    lectures(where: { Weekday: "${day}" }) {
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
