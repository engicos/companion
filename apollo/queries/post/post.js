import gql from "graphql-tag";

const POST_QUERY = (postId) => gql`
    query Posts {
        posts(where: { id: "${postId}" }) {
            id,
            content,
            author {
                username
            }
            created_at,
            attachments {
                name,
                url,
                ext
            }
        }
      }
`;

export default POST_QUERY;
