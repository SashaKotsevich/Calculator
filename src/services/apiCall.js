import fetch from "isomorphic-fetch";

export function fetchMyData(token) {
	return fetch(`http://localhost:3001/users/me`, {
		method: "GET",
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
	return fetch(`http://localhost:3001/users/login`, {
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
	return fetch(`http://localhost:3001/users/signup`, {
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
	return fetch(`http://localhost:3001/operations/calculate`, {
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
	return fetch(`http://localhost:3001/operations/convert`, {
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
	console.log(token);
	return fetch(`http://localhost:3001/history`, {
		method: "GET",
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
