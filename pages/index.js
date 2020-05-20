import Head from 'next/head'
import Post from '../components/Post.jsx';

export default function Home() {
  return (
    <div className="container">
      <Post />
      <Post />
      <Post />

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
