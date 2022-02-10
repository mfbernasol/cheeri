import { useEffect, useState } from 'react';
import axios from 'axios';
import PostCard from './components/PostCard';
function App() {
  const [post, setPost] = useState([]);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  //fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:4000/posts');
      const sortedResults = result.data;
      sortedResults.sort((a, b) => {
       
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      setPost(sortedResults);

    };

    fetchData();
  }, []);

  //ADD data to API
  let handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { name: name, content: message };
    try {
      await axios.post('http://localhost:4000/posts', newPost);

      setPost([newPost,...post ]);
      setName('');
      setMessage('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 className='text-center text-3xl'>Cheeri</h1>
      <form>
        <div className=' bg-transparent flex items-center'>
          <div className='container mx-auto max-w-md hover:shadow-lg transition duration-300'>
            <div className='py-12 p-10 bg-white rounded-xl'>
              <div className='mb-6'>
                <label
                  className='mr-4 text-gray-700 font-bold inline-block mb-2'
                  htmlFor='name'
                >
                  Name (be annonymous!)
                </label>
                <input
                  type='text'
                  className='border bg-gray-100 py-2 px-4 w-full md:w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded'
                  placeholder='Your name'
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <label className='label'>
                <span className='label-text'>Your Message!</span>
              </label>
              <textarea
                className='textarea textarea-bordered w-full md:w-96'
                type='text'
                name='message'
                value={message}
                placeholder='Enter you message'
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button
                className='w-full mt-6 text-black font-bold bg-yellow-400 py-3 rounded-md hover:bg-yellow-500 transition duration-300'
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Display Posts */}
      <div>
        <ul>
          {post.map((data) => (
            <li key={data._id} className='mb-5'>
              <PostCard
                name={data.name}
                content={data.content}
                date={data.createdAt}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
