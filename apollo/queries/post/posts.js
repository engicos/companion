import gql from "graphql-tag";

const LATEST_POSTS_QUERY = () => gql`
  query Posts {
    posts {
        id,
        content,
        author {
            username
        }
        created_at
    }
  }
`;

export default LATEST_POSTS_QUERY;
