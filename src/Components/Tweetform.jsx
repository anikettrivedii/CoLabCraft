import React, { useState } from 'react';

const TweetForm = ({ addTweet }) => {
  const [tweetText, setTweetText] = useState('');

  const handleTweetSubmit = (e) => {
    e.preventDefault();
    addTweet(tweetText);
    setTweetText('');
  };

  return (
    <div>
      <h2>Compose Tweet</h2>
      <form onSubmit={handleTweetSubmit}>
        <textarea
          value={tweetText}
          onChange={(e) => setTweetText(e.target.value)}
          placeholder="What's happening?"
        />
        <button type="submit">Tweet</button>
      </form>
    </div>
  );
};

export default TweetForm;
