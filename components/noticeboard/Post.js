import React, { Component, Fragment } from "react";
import ReactMarkdown from "react-markdown";
import Router from "next/router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faShare,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.post.id,
      author: props.post.author.username,
      content: props.post.content,
      attachments: [...props.post.attachments],
      createdAt: props.post.created_at,
      singlePost: props.singlePost === "true" ? true : false,
    };
  }

  render() {
    const attachments = this.state.attachments.map((attachment) => {
      if (
        attachment.ext === ".png" ||
        attachment.ext === ".jpg" ||
        attachment.ext === ".jpeg"
      )
        return (
          <img
            className="attachmentImage"
            key={attachment.url}
            src={"http://localhost:1337" + attachment.url}
            alt={attachment.name}
          />
        );
      else
        return (
          <a
            target="_blank"
            className="attachmentLink"
            key={attachment.url}
            href={process.env.NEXT_PUBLIC_API_URL + attachment.url}
          >
            {attachment.name}
          </a>
        );
    });

    return (
      <Fragment>
        <div className={this.state.singlePost === true ? "singlePost" : "post"}>
          <div className="postHeader">
            <div className="postAuthor">
              <img src="./profile.png" alt="DP" className="profileImage" />

              <div className="postAuthorTime">
                <p>{this.state.author}</p>
                <p>{new Date(this.state.createdAt).toLocaleString()}</p>
              </div>
            </div>

            <div
              className="postOption"
              onClick={() => console.log("Options button clicked!")}
            >
              <FontAwesomeIcon icon={faEllipsisH} size="2x" />
            </div>
          </div>

          <div className="postBody">
            <ReactMarkdown source={this.state.content} />

            {attachments}

            {this.state.singlePost === true ? (
              ""
            ) : (
              <div
                className="viewDetails"
                onClick={() => Router.push(`/noticeboard/${this.state.id}`)}
              >
                View details
              </div>
            )}
          </div>

          <div className="postFooter">
            <div
              className="comments"
              onClick={() => console.log("Comment button clicked!")}
            >
              <FontAwesomeIcon icon={faComment} size="lg" />
              <p>5 Comments</p>
            </div>

            <div
              className="share"
              onClick={() => console.log("Share button clicked!")}
            >
              <FontAwesomeIcon icon={faShare} size="lg" />
              <p>Share</p>
            </div>
          </div>
        </div>

        <style jsx>{`
          .post,
          .singlePost {
            border-radius: 10px;
            box-shadow: 0px 2px 5px #212121;
            padding: 20px;

            background: #303030; /* fallback for old browsers */
            background: -webkit-linear-gradient(
              0deg,
              #303030,
              #424242
            ); /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(0deg, #303030, #424242);
            color: #fff;
          }

          .singlePost {
            margin: 60px auto;
            width: 50vw;
          }

          .postHeader {
            display: flex;
            justify-content: space-between;
            align-self: center;

            .postAuthor {
              display: flex;
              align-items: center;

              .profileImage {
                height: 40px;
                border-radius: 50%;
              }

              .postAuthorTime {
                padding-left: 15px;
                font-size: 1.5rem;
                display: flex;
                flex-direction: column;

                :nth-child(2) {
                  font-size: 1rem;
                  color: #ccc;
                }
              }
            }

            .postOption {
              display: flex;
              align-items: center;
              user-select: none;

              :hover {
                cursor: pointer;
                color: #aaa;
                transition: all 0.4s ease-in-out;
              }
            }
          }

          .postBody {
            padding-top: 20px;
            padding-bottom: 20px;

            li {
              margin-left: 20px;
            }

            .attachmentImage {
              width: 30%;
              height: auto;
              padding: 3.33%;
            }

            .attachmentLink:visited {
              color: #aaa;
            }

            .viewDetails {
              padding-top: 10px;
              color: #aaa;
              user-select: none;
            }

            .viewDetails:hover {
              cursor: pointer;
              color: #eee;
              transition: all 0.4s ease-in-out;
            }
          }

          .postFooter {
            display: flex;
            justify-content: space-between;

            .comments,
            .share {
              display: flex;
              flex-wrap: wrap;
              align-self: center;
              user-select: none;

              p {
                // line-height: 32px;
                font-size: 1.25rem;
                padding-left: 5px;
              }

              :hover {
                cursor: pointer;
                color: #aaa;
                transition: all 0.4s ease-in-out;
              }
            }
          }

          @media only screen and (max-width: 550px) {
            .singlePost {
              width: 90vw;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

export default Post;
