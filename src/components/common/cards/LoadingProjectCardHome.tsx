import React from 'react'

const LoadingProjectCardHome = () => {
    return (
        <div className="flex flex-col gap-2 mb-5 animate-pulse">
            {/* Logo skeleton */}
            <div className="w-[200px] h-[100px] bg-gray-300 dark:bg-secondary rounded-lg mb-6" />

            <div>
                {/* Title skeleton */}
                <div className="h-8 bg-gray-300 dark:bg-secondary w-3/4 rounded mb-2" />

                {/* Live preview link skeleton */}
                <div className="flex gap-4 items-center">
                    <div className="h-6 w-32 bg-gray-300 dark:bg-secondary rounded" />
                    <div className="w-6 h-6 bg-gray-300 dark:bg-secondary rounded-full" />
                </div>
            </div>

            {/* Description skeleton */}
            <div className='mt-4 flex flex-col gap-2'>
                <div className="h-6 bg-gray-300 dark:bg-secondary w-full rounded" />
                <div className="h-6 bg-gray-300 dark:bg-secondary w-5/6 rounded" />
                <div className="h-6 bg-gray-300 dark:bg-secondary w-4/6 rounded" />
            </div>

            {/* Technologies skeleton */}
            <div className="flex gap-4 mt-4">
                <div className="w-12 h-12 bg-gray-300 dark:bg-secondary rounded-full" />
                <div className="w-12 h-12 bg-gray-300 dark:bg-secondary rounded-full" />
                <div className="w-12 h-12 bg-gray-300 dark:bg-secondary rounded-full" />
            </div>

            {/* Button skeleton */}
            <div className="mt-2 w-36 h-10 bg-gray-300 dark:bg-secondary rounded-lg" />
        </div>

    )
}

export default LoadingProjectCardHome