import { Appwrite } from 'appwrite';

export const api = new Appwrite();
api.setEndpoint('http://localhost/v1')
api.setProject('Chat_App_ReactJS');
