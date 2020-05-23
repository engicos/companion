import React, { Component } from "react";
import styles from "./Post.module.scss";
import ReactMarkdown from "react-markdown";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: props.author,
      content: props.content,
    };
  }

  render() {
    return (
      <div className={styles.post}>
        <div className={styles.postHeader}>
          <img
            src="./profile.png"
            alt="Profile Image"
            className={styles.profileImage}
          />

          <p>{this.state.author}</p>

          <button className={styles.postOptionButton}>
            <img src="./options.svg" alt="Options" />
          </button>
        </div>

        <div className={styles.postBody}>
          <ReactMarkdown source={this.state.content} />
        </div>

        <div className={styles.postFooter}>
          <div className={styles.comments}>
            <button className={styles.postCommentButton}>
              <img src="./comments.svg" alt="Comments" />
            </button>
            <p>5</p>
          </div>

          <button className={styles.postShareButton}>
            <img src="./share.svg" alt="Share" />
          </button>
        </div>
      </div>
    );
  }
}

export default Post;
