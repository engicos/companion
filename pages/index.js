// import Head from 'next/head'
import Post from '../components/Post.jsx';
import Query from "../components/query";
import LATEST_POSTS_QUERY from "../apollo/queries/post/posts";

export default function Home() {
  return (
    <div className="container">

      <Query query={LATEST_POSTS_QUERY()}>
        {({ data: { posts } }) => {
          if (posts.length == 0)
            return <div>No posts found</div>
          return posts.map(post => {
            console.log(post);
            return <Post author={post.author.username} content={post.content} created={post.createdAt}/>
          })
        }}
      </Query>

      <style jsx>{`
        .container{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  )
}
