import React from "react";
import DashboardHeading from "@/components/DashboardHeading";
import { myEvents } from "@/lib/api/events/data";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Suspense } from "react";
import ManageEventClient from "./ManageEventClient";
import { Spinner } from "@heroui/react";


const MangeEvent = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const events = await myEvents(session?.user?.email)

    return (
        <div>
            <DashboardHeading
                title="Manage Event"
                description="Manage event"
            />
            <Suspense fallback={<Spinner />}>
                <ManageEventClient events={events} />
            </Suspense>

        </div>
    );
};

export default MangeEvent;