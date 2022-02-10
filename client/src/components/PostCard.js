import React from 'react';

const PostCard = ({ name, content }) => {
  return (
    <div className=''>
      <div className='relative grid grid-cols-1 gap-4 p-4 mb-8 border-rounded-lg bg-white shadow-lg'>
        <div className='relative flex gap-4'>
          <div className='flex flex-col w-full'>
            <div className='flex flex-row justify-between'>
              <p className='relative text-xl whitespace-nowrap truncate overflow-hidden'>
                {name}
              </p>
              <a className='text-gray-500 text-xl' href='#'>
                <i className='fa-solid fa-trash'></i>
              </a>
            </div>
            <p className='text-gray-400 text-sm'>Feb 9, 2021</p>
          </div>
        </div>
        <p className='-mt-4 text-gray-500'>{content}</p>
      </div>
    </div>
  );
};

export default PostCard;
