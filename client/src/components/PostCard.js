import React from 'react';

const PostCard = ({ name, content, date }) => {
  return (
    <div className=''>
      <div className='relative grid grid-cols-1 gap-4 p-4 mb-8 mx-2 md:mx-48 rounded-xl border-2  bg-white shadow-md'>
        <div className='relative flex gap-4'>
          <div className='flex flex-col w-full'>
            <div className='flex flex-row justify-between'>
              <p className='relative text-xl whitespace-nowrap truncate overflow-hidden'>
                {name}
              </p>
              <a className='text-gray-500 text-xl'>
                <i className='fa-solid fa-trash'></i>
              </a>
            </div>
            <p className='text-gray-400 text-sm'>
              {new Date(date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <p className='-mt-4 text-gray-500'>{content}</p>
      </div>
    </div>
  );
};

export default PostCard;
