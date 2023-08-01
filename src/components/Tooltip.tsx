'use client'
import { useState } from 'react'

type ToolTipProps = {
    text: string
    userName?: string | null
    email?: string | null
    className?: string
    children: JSX.Element
}

export default function Tooltip({
    text,
    className,
    children,
    email,
    userName,
}: ToolTipProps) {
    const [showTooltip, setShowTooltip] = useState(false)

    return (
        <div className='relative'>
            <div
                className='inline-block'
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
            >
                {children}
            </div>
            {showTooltip && (
                <div
                    className={`absolute top-9 left-1/2 transform -translate-x-1/2 bg-[#202124] font-bold text-[#bdc1c6] py-1 px-[10px] border border-[#3c4043] text-[11px] shadow-clear-button ${className} ${
                        email != null && '-left-[200%]'
                    }`}
                >
                    <p className='whitespace-nowrap'>{text}</p>
                    {userName && <p>{userName}</p>}
                    {email && <p>{email}</p>}
                </div>
            )}
        </div>
    )
}
