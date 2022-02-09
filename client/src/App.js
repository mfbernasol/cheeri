import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [post, setPost] = useState([]);

  // 'http://localhost:4000/posts'

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:4000/posts');

      setPost(result.data);
      console.log(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        <form>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Name</span>
            </label>
            <input
              type='text'
              name='name'
              placeholder='Enter your name'
              className='input input-bordered mx-10 w-1/2'
            />
            <label className='label'>
              <span className='label-text'>Share Something</span>
            </label>
            <input
              type='text'
              name='content'
              placeholder='Enter you message'
              className='input input-bordered mx-10  w-1/2'
            />
          </div>
          <div className='mx-24 py-10'>
            <button className='btn btn-primary w-1/2'>Submit</button>
          </div>
        </form>
      </div>

      <div>
        <ul>
          {post.map((data) => (
            <li key={data._id}>
              {data.content}
            </li>
          
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
