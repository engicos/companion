import { Fragment } from "react";
import { useRouter } from "next/router";
import { route } from "next/dist/next-server/server/router";

const Header = () => {
  const router = useRouter();
  const links = ["articles", "courses", "lectures", "posts"];

  return (
    <Fragment>
      <nav>
        <ul>
          <li onClick={() => router.push(`/`)}>COMPANION</li>
          {links.map((link) => (
            <li onClick={() => router.push(`/${link}`)}>
              {link.toUpperCase()}
            </li>
          ))}
        </ul>
      </nav>
      <style jsx>{`
        nav {
          padding: 1rem;
          background: #2f3437;
          color: #eee;

          ul {
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
            list-style: none;

            li {
              padding: 0.5rem 1rem;
              border-radius: 0.2rem;

              &:hover {
                cursor: pointer;
                user-select: none;
                background: #404244;
                transition: all 0.3s ease-in-out;
              }
            }
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Header;
