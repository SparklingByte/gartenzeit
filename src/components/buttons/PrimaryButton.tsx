import React from 'react';

export default function PrimaryButton(props) {
  return (
    <button
      {...props}
      className='bg-lime-900 text-white rounded-xl p-3'
    >
      {props.children}
    </button>
  );
}
