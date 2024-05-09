import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import getReservations from "@/app/actions/getReservations";
import getCurrentUser from "@/app/actions/getCurrentUser";
import TripsClient from "@/app/trips/TripsClient";

export const metadata = {
    title: 'Airbnb | Trips',
}

const TripsPage = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return (
            <ClientOnly>
                <EmptyState
                    title="Unauthorized"
                    subtitle="Please login"
                />
            </ClientOnly>
        )

    }

    const reservations = await getReservations({
        userId: currentUser?.id
    });

    if (reservations.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                    title="No trip found"
                    subtitle="Looks like you haven't reserved any trips."
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <TripsClient
                reservations={reservations}
                currentUser={currentUser}
            />
        </ClientOnly>
    )

}

export default TripsPage;