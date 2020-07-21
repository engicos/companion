// import Head from 'next/head'
import Post from "../../components/Post";
import Query from "../../components/query";
import LATEST_POSTS_QUERY from "../../apollo/queries/post/posts";

export default function Home() {
  return (
    <div className="container">
      <Query query={LATEST_POSTS_QUERY()}>
        {({ data: { posts } }) => {
          if (posts.length == 0) return <div>No posts found</div>;
          return posts.map((post) => {
            return <Post key={post.id} post={post} />;
          });
        }}
      </Query>

      <style jsx>{``}</style>
    </div>
  );
}
