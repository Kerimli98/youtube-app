import axios from "axios";

const KEY = "AIzaSyCf3i9VriQ1PSiCo5YL55MJycXoOyw52JM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
