import axios from 'axios';

var instance = axios.create({
  baseURL: 'https://api.hnpwa.com/v0/',
});

function fetchNews() {
  return instance.get('news/1.json');
}

function fetchJobs() {
  return instance.get('jobs/1.json');
}

export { fetchNews, fetchJobs };
