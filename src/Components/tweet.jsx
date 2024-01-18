import React, { useState } from 'react'
import './tweet.css';
import myimg from '../Assests/OIP-removebg-preview.png'
import { NavLink } from 'react-router-dom';

export default function Tweet() {
  const [tweet, setTweet] = useState('');
  const [charCount, setCharCount] = useState(0);

  // function submitTweet() {
  //   const textarea = document.querySelector('.tweet-textarea');
  //   const charCount = textarea.value.length;

  //   if (charCount > 0 && charCount <= 280) {
  //     alert(`Tweet Submitted:\n${textarea.value}`);
  //     // You can add additional logic here to handle the submission (e.g., send to server).
  //   } else {
  //     alert('Tweet must be between 1 and 280 characters.');
  //   }
  // }

  // const textarea = document.querySelector('.tweet-textarea');
  // const charCount = document.querySelector('.char-count');

  // document.addEventListener('DOMContentLoaded', function () {
  //   const textarea = document.querySelector('.tweet-textarea');
  //   textarea.addEventListener('input', () => {

  //     const currentCharCount = textarea.value.length;
  //     charCount.textContent = `${currentCharCount}/280`;

  //     // You can add additional logic here to change styles based on character count.
  //   });
  // })

  const updateCharCount = (event) => {
    const content = event.target.value;
    setTweet(content);
    setCharCount(content.length);
  };

  const addNewTweet = () => {
    if (tweet.trim() !== '') {
      const newTweetDiv = document.createElement('div');
      newTweetDiv.textContent = tweet;

      document.getElementById('output').appendChild(newTweetDiv);
     
      // Clear the textarea and reset character count
      setTweet('');
      setCharCount(0);
    }
  };

  return (
    <>
      <div className='w- full h-10/12 border-2 rounded-lg border-slate-800 m-8'>
        <textarea
          className="tweet-textarea"
          placeholder="What's happening?"
          value={tweet}
          onChange={updateCharCount}
        ></textarea>
        <div className="tweet-info">
          <span className="char-count">{`${charCount}/280`}</span>
          <button className="tweet-button" onClick={addNewTweet}>
            Tweet
          </button>
        </div>

      </div>


      <div className='grid grid-rows-5 tweet'>
        <div className='w- full h-10/12 border-2 rounded-lg border-slate-800 my-4 grid grid-rows-2 gap-2 m-8'>
          <div className='grid grid-cols-4 gap-4'>
            <img src={myimg}
              alt='no' className='w-8 h-8 bg-blue-500 rounded-full mt-4'></img>
            <h1 className='text-white mt-4'>@Aryanmishra <span className='opacity-20'>7hr.ago</span></h1>
            <div className='grid grid-cols-3 gap-10 '>
              <div className='w-16 h-8 m-2 border-2 rounded-lg border-slate-800 bg-red-500 text-center mx-4'>ML</div>
              <div className='w-16 h-8 m-2 border-2 rounded-lg border-slate-800 bg-blue-500 text-center mx-4'>Ar/Vr</div>
              <div className='w-16 h-8 m-2 border-2 rounded-lg border-slate-800 bg-violet-500 text-center mx-4'>Web3</div>
            </div>
          </div>
          <p className='text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Optio, quas voluptates? Ipsum quis eveniet culpa optio, quam repellat totam impedit.
          </p>
          <div className='grid grid-cols-4 gap-4'>
            <i class="fa fa-heart" style={{ color: "gray" }}>&nbsp;2</i>
            <i class="fa fa-signal" style={{ color: "gray" }}>&nbsp;4</i>
            <i class="fa fa-exchange" style={{ color: "gray" }} >&nbsp;0</i>
            <NavLink to="/form">
              <button>
                <div className='w-28 h-8 border-2 rounded-lg border-slate-800 bg-violet-500 text-center'><li style={{ listStyle: "disc" }}>Apply</li></div>
              </button>
            </NavLink>
          </div>
        </div>
        {/* second div */}
        <div className='w- full h-full border-2 rounded-lg border-slate-800 my-4 grid grid-rows-2 gap-2 m-8 tweetarea'>
          <div className='grid grid-cols-4 gap-4'>
            <img src={myimg}
              alt='no' className='w-8 h-8 bg-blue-500 rounded-full mt-4'></img>
            <h1 className='text-white mt-4'>@Aryanmishra <span className='opacity-20'>7hr.ago</span></h1>
            <div className='grid grid-cols-3 gap-10 '>
              <div className='w-16 h-8 m-2 border-2 rounded-lg border-slate-800 bg-red-500 text-center mx-4'>ML</div>
              <div className='w-16 h-8 m-2 border-2 rounded-lg border-slate-800 bg-blue-500 text-center mx-4'>Ar/Vr</div>
              <div className='w-16 h-8 m-2 border-2 rounded-lg border-slate-800 bg-violet-500 text-center mx-4'>Web3</div>
            </div>
          </div>
          <p className='text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Optio, quas voluptates? Ipsum quis eveniet culpa optio, quam repellat totam impedit.
          </p>
          <div className='grid grid-cols-4 gap-4'>
            <i class="fa fa-heart" style={{ color: "gray" }}>&nbsp;2</i>
            <i class="fa fa-signal" style={{ color: "gray" }}>&nbsp;4</i>
            <i class="fa fa-exchange" style={{ color: "gray" }} >&nbsp;0</i>
            <NavLink to="/form">
              <button>
                <div className='w-28 h-8 border-2 rounded-lg border-slate-800 bg-violet-500 text-center'><li style={{ listStyle: "disc" }}>Apply</li></div>
              </button>
            </NavLink>
          </div>
        </div>
        {/* 3rd */}
        <div className='w- full h-10/12 border-2 rounded-lg border-slate-800 my-4 grid grid-rows-2 gap-2 m-8'>
          <div className='grid grid-cols-4 gap-4'>
            <img src={myimg}
              alt='no' className='w-8 h-8 bg-blue-500 rounded-full mt-4'></img>
            <h1 className='text-white mt-4'>@Aryanmishra <span className='opacity-20'>7hr.ago</span></h1>
            <div className='grid grid-cols-3 gap-10 '>
              <div className='w-16 h-8 m-2 border-2 rounded-lg border-slate-800 bg-red-500 text-center mx-4'>ML</div>
              <div className='w-16 h-8 m-2 border-2 rounded-lg border-slate-800 bg-blue-500 text-center mx-4'>Ar/Vr</div>
              <div className='w-16 h-8 m-2 border-2 rounded-lg border-slate-800 bg-violet-500 text-center mx-4'>Web3</div>
            </div>
          </div>
          <p className='text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Optio, quas voluptates? Ipsum quis eveniet culpa optio, quam repellat totam impedit.
          </p>
          <div className='grid grid-cols-4 gap-4'>
            <i class="fa fa-heart" style={{ color: "gray" }}>&nbsp;2</i>
            <i class="fa fa-signal" style={{ color: "gray" }}>&nbsp;4</i>
            <i class="fa fa-exchange" style={{ color: "gray" }} >&nbsp;0</i>
            <NavLink to="/form">
              <button>
                <div className='w-28 h-8 border-2 rounded-lg border-slate-800 bg-violet-500 text-center'><li style={{ listStyle: "disc" }}>Apply</li></div>
              </button>
            </NavLink>
          </div>



        </div>
        <div id="output" className='w- full h-10/12 border-2 rounded-lg border-slate-800  grid grid-rows-2 gap-2 m-8'>
          <div className='grid grid-cols-4 gap-4'>
            <img src={myimg}
              alt='no' className='w-8 h-8 bg-blue-500 rounded-full mt-4'></img>
            <h1 className='text-white mt-4'>@Aryanmishra <span className='opacity-20'>7hr.ago</span></h1>
            <div className='grid grid-cols-3 gap-10 '>
              <div className='w-16 h-8 m-2 border-2 rounded-lg border-slate-800 bg-red-500 text-center mx-4'>ML</div>
              <div className='w-16 h-8 m-2 border-2 rounded-lg border-slate-800 bg-blue-500 text-center mx-4'>Ar/Vr</div>
              <div className='w-16 h-8 m-2 border-2 rounded-lg border-slate-800 bg-violet-500 text-center mx-4'>Web3</div>
            </div>
          </div>
        
        <p className='text-white tweetcontent'>
          {tweet}
        </p>
        <div className='grid grid-cols-4 gap-4'>
          <i class="fa fa-heart" style={{ color: "gray" }}>&nbsp;2</i>
          <i class="fa fa-signal" style={{ color: "gray" }}>&nbsp;4</i>
          <i class="fa fa-exchange" style={{ color: "gray" }} >&nbsp;0</i>
          <NavLink to="/form">
            <button>
              <div className='w-28 h-8 border-2 rounded-lg border-slate-800 bg-violet-500 text-center'><li style={{ listStyle: "disc" }}>Apply</li></div>
            </button>
          </NavLink>
        </div>
        </div>
      </div>
    </>
  )
}
