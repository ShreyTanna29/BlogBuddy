import React from 'react';

export default function Loader() {
  return (
    <div className=' bg-gray-200 text-gray-500 flex justify-center h-[100svh] items-center'>
    <div
    className=" h-8 inline-block w-8 animate-spin rounded-full border-4 border-solid  border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
    role="status">
    <span
      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span>
  </div>
  </div>
  );
}