import axios from 'axios';

const createNewPosts = async (array) => {
  try {
    for (const postData of array) {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        postData
      );
      console.log('New post created:', response.data);
    }
  } catch (error) {
    console.error('Error in creating new posts:', error);
  }
};

export default createNewPosts;