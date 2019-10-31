import axios from 'axios';

const KEY = 'AIzaSyAAUwzLzTtFz9e7vrQH04ge06lZaiqjHQQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
