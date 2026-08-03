import DashboardHeading from '@/components/DashboardHeading';
import TicketsTable from '@/components/TicketsTable';
import { fetchMyBookings } from '@/lib/api/bookings/data';
import { getUser } from '@/lib/api/session';
import { Card, Chip, Table, TableBody, TableCell, TableColumn, TableContent, TableHeader, TableRow } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const AttendeeTicketsPage = async () => {
    const user = await getUser();
    const bookings = await fetchMyBookings(user?.email);
    
    console.log("bookings data", bookings);
    // console.log(user);
    // const bookings = await fetchMyBookings(user?.email);
    // console.log("bookings data", bookings);


    // const tickets = await fetchMyBookings(user?.email);
    // console.log(tickets);
    
    return (
       <div>
           <DashboardHeading title="Attendee" description="Here is the Attendee Tickets Dashboard"></DashboardHeading>
           <TicketsTable tickets={bookings} />
       </div>
    );
};

export default AttendeeTicketsPage;