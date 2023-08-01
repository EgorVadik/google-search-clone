import SearchResults from '@/components/SearchResults'
import { Schema$Search } from '@/types/SearchType'

type Props = {
    searchParams: { q: string; page?: string }
}

async function page({ searchParams: { q, page } }: Props) {
    const startIndex =
        page !== undefined
            ? parseInt(page) === 1
                ? 1
                : (parseInt(page) - 1) * 10 + 1
            : 1
    const data = (await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_SEARCH_KEY}&cx=${process.env.CX}&q=${q}&start=${startIndex}`,
        {
            next: {
                revalidate: 3600,
            },
        }
    ).then((res) => res.json())) as Schema$Search

    return <SearchResults data={data} />
}

export default page
