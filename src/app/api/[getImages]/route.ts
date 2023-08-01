import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const q = searchParams.get('q')
    const startIndex = searchParams.get('startIndex')

    const data = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_SEARCH_KEY}&cx=${process.env.CX}&q=${q}&searchType=image&start=${startIndex}`,
        {
            next: {
                revalidate: 3600,
            },
        }
    ).then((res) => res.json())

    return new NextResponse(JSON.stringify(data), {
        status: 200,
    })
}
