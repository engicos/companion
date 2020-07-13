import { useRouter } from "next/router";
import { Fragment } from "react";
import Head from "next/head";

// 404 Page for any unhandled routes.
const Custom404Page = (props) => {
  const router = useRouter();

  return (
    <Fragment>
      <Head>
        <title>{`404: Page Not Found`}</title>
      </Head>

      <div id="error-container">
        <main>
          <header>
            <h1>404!</h1>
            <h2>Couldn't find the page you were looking for.</h2>
          </header>

          <section>
            <button onClick={() => router.back()}>Take me back</button>
          </section>
        </main>
      </div>
      <style jsx>{`
        #error-container {
          margin: 0;
          padding: 1rem;
          background: #2f3437;
          color: #eee;
          min-height: 100vh;

          main {
            width: 60%;
            margin: 0 auto;
            margin-top: 5rem;

            section {
              margin: 3rem 0;

              button {
                outline: none;
                border: none;
                user-select: none;
                padding: 0.5rem 1rem;
                background: #404244;
                color: #eee;
                border-radius: 0.2rem;

                &:hover {
                  background: #eee;
                  color: #404244;
                  cursor: pointer;
                  transition: all 0.3s ease-in-out;
                }
              }
            }
          }
        }

        @media only screen and (max-width: 650px) {
          #error-container {
            main {
              width: 90%;
            }
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Custom404Page;
