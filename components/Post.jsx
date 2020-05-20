import React, { Component } from 'react'
import styles from './Post.module.scss'

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postData: {}
        }
    }

    render() {
        return (
            <div className={styles.post}>
                <div className={styles.postHeader}>
                    <img src="./profile.png" alt="Profile Image" className={styles.profileImage}/>
                    
                        <p>Vipul Chodankar</p>
                        
                    
                    <button className={styles.postOptionButton}>
                        <img src="./options.svg" alt="Options"/>
                    </button>
                </div>

                <div className={styles.postBody}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. At commodi alias non? Ipsam fugit iure eius laborum ipsa eum, placeat nulla temporibus eaque quibusdam excepturi blanditiis ea, odio, illo ullam.
                </div>

                <div className={styles.postFooter}>
                    <div className={styles.comments}>
                        <button className={styles.postCommentButton}>
                            <img src="./comments.svg" alt="Comments"/>
                        </button>
                        <p >5</p>
                    </div>
                
                    <button className={styles.postShareButton}>
                            <img src="./share.svg" alt="Share"/>
                    </button>
                </div>
            </div>
        )
    }
}

export default Post;