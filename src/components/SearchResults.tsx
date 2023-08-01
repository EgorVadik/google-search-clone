import { Schema$Search } from '@/types/SearchType'
import ResultCard from './ResultCard'
import Pagination from './Pagination'

type Props = {
    data: Schema$Search
}

function SearchResults({ data }: Props) {
    return (
        <div className='lg:px-40 px-5 py-2'>
            <p className='dark:text-[#9aa0a6] text-[#70757a]'>
                About {data.searchInformation?.formattedTotalResults} results (
                {data.searchInformation?.formattedSearchTime} seconds)
            </p>
            <div className='mt-5 max-w-[640px] space-y-7'>
                {data.items ? (
                    data.items.map((item, i) => (
                        <ResultCard key={i} item={item} />
                    ))
                ) : (
                    <p className='text-center dark:text-white text-black'>
                        Google API daily qouta exceeded
                    </p>
                )}
                <Pagination />
            </div>
        </div>
    )
}

export default SearchResults
