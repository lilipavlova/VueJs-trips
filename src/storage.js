export const appKey = "kid_BJugXGYDL";
export const appSecret = "1e1dd244b9dd4646b16f77ada24a5afe";

function saveData(key, value) {
  localStorage.setItem(key+appKey, JSON.stringify(value));
}

export function getData(key){
  return localStorage.getItem(key+appKey);
}

export function saveUser(data){
  saveData("userInfo", data);
  saveData("authToken", data._kmd.authtoken);
}
