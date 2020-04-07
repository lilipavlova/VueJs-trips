import { appKey, appSecret, getData } from "./storage.js";

const baseUrl = `https://baas.kinvey.com`;

function createAuthorization(type){
    return type === "Basic"
    ? `Basic ${btoa(`${appKey}:${appSecret}`)}`
    : `Kinvey ${JSON.parse(getData("authToken"))}`
}

function createHeader(type, httpMethod, data) {
	const headers = {
		method: httpMethod,
		headers: {
			"Authorization": createAuthorization(type),
			'Content-Type': 'application/json'
		}
	};

	if (httpMethod === 'POST' || httpMethod === 'PUT') {
		headers.body = JSON.stringify(data);
	}
	return headers;
}

function handlerError(e) {
	if (!e.ok && (e.status !== 401)) {
		throw new Error(e.statusText);
	}
	return e;
}

function serializeData(x) {
    if(x.status === 204){
        return x;
    }
	return x.json();
}

function fetchData(kinveyModule, endpoint, headers) {
	const url = `${baseUrl}/${kinveyModule}/${appKey}/${endpoint}`;

	return fetch(url, headers).then(handlerError).then(serializeData);
}

export function get(kinveyModule, endpoint, type) {
	const headers = createHeader(type, 'GET');

	return fetchData(kinveyModule, endpoint, headers);
}

export function post(kinveyModule, endpoint, data, type) {
	const headers = createHeader(type, 'POST', data);

	return fetchData(kinveyModule, endpoint, headers);
}

export function put(kinveyModule, endpoint, data, type) {
	const headers = createHeader(type, 'PUT', data);

	return fetchData(kinveyModule, endpoint, headers);
}

export function del(kinveyModule, endpoint, type) {
	const headers = createHeader(type, 'DELETE');

	return fetchData(kinveyModule, endpoint, headers);
}
