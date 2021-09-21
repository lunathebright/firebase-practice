import React, { useState } from "react";
import { dbService } from "../firebase";

const Home = () => {
  const [tweet, setTweet] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    dbService.collection("tweets").add({
      tweet,
      createdAt: Date.now(),
    });
    setTweet("");
  };

  const onChange = (e) => {
    const value = e.target;
    setTweet(value);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={tweet}
          onChange={onChange}
          placeholder="what's on your mind?"
          maxLength={140}
        />
        <input type="submit" onSubmit={onSubmit} value="Tweet" />
      </form>
    </div>
  );
};

export default Home;
