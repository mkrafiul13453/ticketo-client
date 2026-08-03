import { serverFetch } from "../server";

 export const fetchMyBookings = async (email) => {
     const result = await serverFetch(`/api/events/booking/${email}`);
    return result;
};