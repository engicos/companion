import { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <ul>
          <li>
            <a href="http://www.gec.ac.in/">Goa College of Engineering</a>
          </li>
          <li>
            <a href="http://github.com/engicos">GitHub</a>
          </li>
        </ul>
      </footer>

      <style jsx>{`
        footer {
          background: #2f3437;
          color: #eee;
          padding: 1rem;

          ul {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            li {
              padding: 0.5rem 1 rem;

              a {
                color: #ddd;
                text-decoration: none;

                &:hover {
                  color: #fff;
                  transition: all 0.3s ease-in-out;
                }
              }
            }
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Footer;
