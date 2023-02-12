import axios from "axios";
export const URL_SERVER = "http://api-qanda.n4jari.ir/";

//GET user
export const getUser = (userId) => {
  const url = `${URL_SERVER}/usersQuestions/${userId}`;
  return axios.get(url);
};

//GET  users questions
export const getAllUsersQuestions = () => {
  const url = `${URL_SERVER}/usersQuestions`;
  return axios.get(url);
};
//CREATE userQuestion
export const createUserQuestion = (question) => {
  const url = `${URL_SERVER}/usersQuestions`;
  return axios.post(url, question);
};

//GET  users awnsers
export const getAllUsersAwnsers = () => {
  const url = `${URL_SERVER}/usersAwnsers`;
  return axios.get(url);
};

//CREATE userAwnser
export const createUserAwnser = (awnser) => {
  const url = `${URL_SERVER}/usersAwnsers`;
  return axios.post(url, awnser);
};

//GET categorys
export const getAllCategorys = () => {
  const url = `${URL_SERVER}/categorys`;
  return axios.get(url);
};
