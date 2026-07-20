import { serverFetch } from "../server";

 export const myEvents = async (email) => {
    const result = await serverFetch(`/api/events/${email}`);
    return result;
};


export const fetchEvents = async () => {
    const result = await serverFetch(`/api/events`);
    return result;
};