import DashboardHeading from '@/components/DashboardHeading';
import PaymentsTable from '@/components/PaymentsTable';
import { fetchMyPayments } from '@/lib/api/payments/data';
import { getUser } from '@/lib/api/session';
import React from 'react';

const AttendeePaymentsPage = async () => {
    const user = await getUser();
    const payments = await fetchMyPayments(user?.email);

    return (
        <div>
            <DashboardHeading title="Attendee" description="Here is the Attendee Payments Dashboard"></DashboardHeading>
            <PaymentsTable payments={payments} />

        </div>
    );
};

export default AttendeePaymentsPage;