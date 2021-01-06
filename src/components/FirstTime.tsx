import React from 'react';

type FirstTimeProps = {
  callback: () => any;
}

const FirstTime: React.FC<FirstTimeProps> = ({
  callback
}) => (
  <div>
    <input type="text" />
    <button className='start' onClick={callback}>New Game</button>
  </div>
)

export default FirstTime