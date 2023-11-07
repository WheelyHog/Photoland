import axios from "axios";

const REACT_APP_API_TOKEN =
  "502d3d2bb44a4420105486065d961c1beeaa368baeef0d279ed7ed045948a83faf1eaa6634e54280b2186f4571fb673ffec11c79db904e201f1514335b7de2c07e520a0be515e7e61602a9e25387afe4011c03447f8d39ca3c99f002d78da511f6f5c4f2c25f41a3c5bd884db6d021b1645997865d4a0c02bec6319b4a0b4604";

const REACT_APP_API_URL = "http://localhost:1337/api";

export const request = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    Authorization: "bearer " + REACT_APP_API_TOKEN,
  },
});
