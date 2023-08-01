import { Skeleton } from '@/components/ui/skeleton'

function loading() {
    return (
        <div className='px-5 py-2'>
            <Skeleton className='dark:bg-[#9aa0a6]/50 w-72 h-4' />
            <div className='mt-5 max-w-[640px] space-y-7'>
                {new Array(5).fill(0).map((_, i) => (
                    <div key={i} className='space-y-2'>
                        <Skeleton className='dark:bg-[#9aa0a6]/50 w-48 h-2' />
                        <Skeleton className='dark:bg-[#8ab4f8]/50 w-96 h-6' />
                        <Skeleton className='dark:bg-[#9aa0a6]/50 w-full h-3' />
                        <Skeleton className='dark:bg-[#9aa0a6]/50 w-full h-3' />
                        <Skeleton className='dark:bg-[#9aa0a6]/50 w-3/4 h-3' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default loading
