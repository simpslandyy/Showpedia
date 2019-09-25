import axios from 'axios';
const base_url = 'https://api.tvmaze.com';
async function postSearch(search_value) {
  //https://api.tvmaze.com/search/shows?q=batman
  console.log(`SEARCH VALUE ${search_value}`)
  const endpoint = `${base_url}/search/shows?q=${search_value}`;
  const response = await axios.get(endpoint);

  return response.data || [];
}

export {
  postSearch
}