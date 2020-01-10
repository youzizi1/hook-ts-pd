import axios from "./http";

export const loginApi = (username: string, password: string) => {
  return axios.post("account/login", {
    username,
    password
  });
};

export const sendCodeApi = (email: string) => {
  return axios.get(`account/register/${email}/code`);
};

export const registerApi = (
  username: string,
  password: string,
  email: string,
  code: string
) => {
  return axios.post("account/register", {
    username,
    password,
    email,
    code
  });
};

export const findCodesApi = (
  search: string,
  category: string,
  page: string,
  sort: string
) => {
  let url = "codes?limit=10";
  if (search) {
    url += `&search=${search}`;
  }
  if (category && category !== "all") {
    url += `&category=${category}`;
  }
  if (page) {
    url += `&page=${page}`;
  }
  if (sort) {
    url += `&sort=${sort}`;
  }
  return axios.get(url);
};
