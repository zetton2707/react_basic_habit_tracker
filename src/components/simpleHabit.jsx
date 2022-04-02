import React, { useEffect, useState } from 'react';

const SimpleHabit = props => {
  // 리액트 훅에서는 useState를 이용해서 state를 사용 할 수 있다.
  // state = {
  //   count: 0
  // };  
  const [count, setCount] = useState(0);
  // setCount를 이용해서 state를 변경 할 수 있다.
  const handleIncrement = () => {
    setCount(count + 1);
  };
  // Similar to componentDidMount and componentDidUpdate
  // 두번째 파라미터를 넘기지 않으면 state 가 변경될 때 마다 실행되고
  // 두번째 파라미터를 [count] 이런식으로 넘기면 count가 변경될 때 마다 실행되고
  // 두번째 파라미터로 [] 빈 배열을 넣으면 최초 한번만 실행된다.
  useEffect(() => {
    console.log(`mounted & updated!: ${count}`);
  });

  return (
    <li className='habit'>
      <span className='habit-name'>Reading</span>
      <span className='habit-count'>{count}</span>
      <button className='habit-button habit-increse' onClick={handleIncrement}>
        <i className='fas fa-plus-square'></i>
      </button>
    </li>
  );
};

export default SimpleHabit;