import ImagesResults from '@/components/ImagesResults'
import { Schema$Search } from '@/types/SearchType'

type Props = {
    searchParams: { q: string; page?: string }
}

async function page({ searchParams: { q } }: Props) {
    const data = (await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_SEARCH_KEY}&cx=${process.env.CX}&q=${q}&searchType=image`,
        {
            next: {
                revalidate: 3600,
            },
        }
    ).then((res) => res.json())) as Schema$Search

    return <ImagesResults data={data} q={q} />
}

export default page
