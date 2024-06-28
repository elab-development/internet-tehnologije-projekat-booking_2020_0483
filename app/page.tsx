import ClientOnly from "@/app/components/ClientOnly";
import Container from "@/app/components/Container";
import getListings, {IListingsParams} from "@/app/actions/getListings";
import ListingCard from "@/app/components/listings/ListingCard";
import EmptyState from "@/app/components/EmptyState";
import getCurrentUser from "@/app/actions/getCurrentUser";

export const dynamic = 'force-dynamic';

interface PageProps {
    searchParams: IListingsParams
}

const Page = async ({ searchParams }: PageProps) => {


    const listings = await getListings(searchParams);
    const currentUser = await getCurrentUser();

    if (listings.length === 0) {
        return (
            <ClientOnly>
                <EmptyState showReset />
            </ClientOnly>
        )
    }


    return (
        <ClientOnly>
            <Container>
                <div data-test={'listings'} className='pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
                    {listings.map((listing) => {
                        return (
                            <ListingCard
                                currentUser={currentUser}
                                key={listing.id}
                                data={listing}
                            />
                        )
                    })}
                </div>
            </Container>
        </ClientOnly>
    )
}

export default Page