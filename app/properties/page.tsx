import ClientOnly from "../components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import getListings from "@/app/actions/getListings";
import getCurrentUser from "@/app/actions/getCurrentUser";
import PropertiesClient from "@/app/properties/PropertiesClient";

export const metadata = {
    title: 'Airbnb | Properties',
}

const PropertiesPage = async () => {
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

    const listings = await getListings({
        userId: currentUser?.id
    });

    if (listings.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                    title="No properties found"
                    subtitle="Looks like you have no properties."
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <PropertiesClient
                listings={listings}
                currentUser={currentUser}
            />
        </ClientOnly>
    )

}

export default PropertiesPage;