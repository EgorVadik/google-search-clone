import { Skeleton } from '@/components/ui/skeleton'

function loading() {
    return (
        <div className='grid grid-cols-auto-fit gap-4 p-5'>
            {new Array(6).fill('-').map((item) => {
                return (
                    <div
                        className='max-h-72'
                        key={item.link ?? item.image?.thumbnailLink}
                    >
                        <Skeleton className='w-full object-cover aspect-video rounded-t rounded-b-none dark:bg-[#bdc1c6]/30' />
                        <div className='py-1 flex flex-col gap-1'>
                            <Skeleton className='w-16 h-2 dark:bg-[#bdc1c6]/50' />
                            <Skeleton className='w-4/5 h-3 dark:bg-[#bdc1c6]/50' />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default loading
