import React, { useState } from "react";
import "./TweetBox.css";
import {Avatar, Button } from "@material-ui/core";
import db from './firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
  
      const sendTweet = (e) => {
        e.preventDefault();
    
        db.collection("posts").add({
          displayName: "Luis Fernandez",
          username: "@Devo_Lu",
          text: tweetMessage,
          image: tweetImage,
          avatar:
          "https://i.imgur.com/5gwKNcM.jpg",
      });
  
      setTweetMessage("");
      setTweetImage("");
    };
  
    return (
        <div className="tweetBox">
          <form>
            <div className="tweetBox__input">
              <Avatar src="https://i.imgur.com/5gwKNcM.jpg"/>
              <input
                onChange={(e) => setTweetMessage(e.target.value)}
                value={tweetMessage}
                placeholder="What's happening?"
                type="text"
              />
            </div>
            <input
              value={tweetImage}
              onChange={(e) => setTweetImage(e.target.value)}
              className="tweetBox__imageInput"
              placeholder="Optional: Image URL"
              type="text"
            />
    
            <Button
              onClick={sendTweet}
              type="submit"
              className="tweetBox__tweetButton"
            >
              Tweedle
            </Button>
          </form>
        </div>
      );
    }
    
export default TweetBox;


