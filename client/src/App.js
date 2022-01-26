import { useState } from 'react';
import axios from 'axios';

function App() {
  const [post, setPost] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://cheeri-15d7e-default-rtdb.firebaseio.com/posts.json', {
        body: 'This is a new post.',
      })
      .then((response) => {
        setPost(response.data);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Cheers</span>
          </label>
          <input
            type='text'
            name='post'
            value={post}
            placeholder='Enter you message'
            className='input input-bordered mx-10'
            onChange={(e) => setPost(e.target.value)}
          />
        </div>

        <div className='mx-24 py-10'>
          <button className='btn btn-primary w-full' onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
