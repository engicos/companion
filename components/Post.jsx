import React, { Component } from "react";
import styles from "./Post.module.scss";
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
            className={styles.attachmentImage}
            key={attachment.url}
            src={"http://localhost:1337" + attachment.url}
            alt={attachment.name}
          />
        );
      else
        return (
          <a
            target="_blank"
            className={styles.attachmentLink}
            key={attachment.url}
            href={"http://localhost:1337" + attachment.url}
          >
            {attachment.name}
          </a>
        );
    });

    return (
      <div
        className={
          this.state.singlePost === true ? styles.singlePost : styles.post
        }
      >
        <div className={styles.postHeader}>
          <div className={styles.postAuthor}>
            <img src="./profile.png" alt="DP" className={styles.profileImage} />

            <div className={styles.postAuthorTime}>
              <p>{this.state.author}</p>
              <p>{new Date(this.state.createdAt).toLocaleString()}</p>
            </div>
          </div>

          <div
            className={styles.postOption}
            onClick={() => console.log("Options button clicked!")}
          >
            <FontAwesomeIcon icon={faEllipsisH} size="2x" />
          </div>
        </div>

        <div className={styles.postBody}>
          <ReactMarkdown source={this.state.content} />

          {attachments}

          {this.state.singlePost === true ? (
            ""
          ) : (
            <div
              className={styles.viewDetails}
              onClick={() => Router.push(`/post/${this.state.id}`)}
            >
              View details
            </div>
          )}
        </div>

        <div className={styles.postFooter}>
          <div
            className={styles.comments}
            onClick={() => console.log("Comment button clicked!")}
          >
            <FontAwesomeIcon icon={faComment} size="lg" />
            <p>5 Comments</p>
          </div>

          <div
            className={styles.share}
            onClick={() => console.log("Share button clicked!")}
          >
            <FontAwesomeIcon icon={faShare} size="lg" />
            <p>Share</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
