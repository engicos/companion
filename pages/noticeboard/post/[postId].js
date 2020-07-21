import { useRouter } from "next/router";
import Query from "../../../components/query";
import POST_QUERY from "../../../apollo/queries/post/post";
import Post from "../../../components/Post";

const SinglePost = () => {
  const router = useRouter();
  const { postId } = router.query;

  return (
    <Query query={POST_QUERY(postId)} id={postId}>
      {({ data: { posts } }) => {
        if (posts.length == 0) return <div>Post not found</div>;
        return <Post post={posts[0]} singlePost="true" />;
      }}
    </Query>
  );
};

export default SinglePost;
