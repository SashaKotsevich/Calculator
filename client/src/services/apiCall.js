import fetch from "isomorphic-fetch";

export function fetchMyData(token) {
  return fetch(`/users/me`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: token,
    },
  })
    .then(response => {
      if (response.status !== 200) throw new Error(response.statusText);
      return response.json();
    })
    .then(response => {
      if (!response.success) throw new Error(response.json().message);
      return response;
    });
}
export function loginRequest(email, password) {
  return fetch(`/users/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then(response => {
      if (response.status !== 200) throw new Error(response.statusText);
      return response.json();
    })
    .then(response => {
      if (!response.success) throw new Error(response.json().message);
      return response;
    });
}

export function signupRequest(name, email, password) {
  return fetch(`/users/signup`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  })
    .then(response => {
      if (response.status !== 200) throw new Error(response.statusText);
      return response.json();
    })
    .then(response => {
      if (!response.success) throw new Error(response.json().message);
      return response;
    });
}

export function calculateRequest(expression, token) {
  return fetch(`/operations/calculate`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: token,
    },
    body: JSON.stringify({ expression }),
  })
    .then(response => {
      if (response.status !== 200) throw new Error(response.statusText);
      return response.json();
    })
    .then(response => {
      if (!response.success) throw new Error(response.json().message);

      return response;
    });
}

export function convertRequest(initialSys, targetSys, value, token) {
  return fetch(`/operations/convert`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: token,
    },
    body: JSON.stringify({ initialSys, targetSys, value }),
  })
    .then(response => {
      if (response.status !== 200) throw new Error(response.statusText);
      return response.json();
    })
    .then(response => {
      if (!response.success) throw new Error(response.json().message);
      return response;
    });
}

export function fetchHistory(token) {
  return fetch(`/history`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: token,
    },
  })
    .then(response => {
      if (response.status !== 200) throw new Error(response.statusText);
      return response.json();
    })
    .then(response => {
      if (!response.success) throw new Error(response.json().message);
      return response;
    });
}
