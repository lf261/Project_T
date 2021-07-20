import React from 'react'
import "./Widgets.css";
import { TwitterTimelineEmbed, TwitterShareButton,TwitterTweetEmbed } from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Tweedlr" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>Happenings</h2>

        <TwitterTweetEmbed tweetId={"1413537288869584896"} />
        <TwitterTweetEmbed tweetId={"1413541520268013573"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="@Devo_Lu"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"linkedin.com/in/luisfernandez2093/"}
          options={{ text: "let's rock", via: "devo_lu" }}
        />
      </div>
    </div>
  );
}


export default Widgets;