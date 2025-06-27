import React from 'react'

const LoadingProjectCardHome = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:gap-5 xl:px-0 mb-5 lg:mb-0 animate-pulse">
            {/* Image skeleton */}
            <div className="flex-[3]">
                <div className="w-2/3 lg:w-full h-[130px] lg:h-[172px] bg-gray-200 dark:bg-gray-700 rounded-lg" />
            </div>

            {/* Text and content skeleton */}
            <div className="flex flex-[7] flex-col gap-4 xl:px-0 mt-4 lg:mt-0">
                {/* Title and Live preview link */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-2">
                    <div className="h-10 w-3/4 lg:w-1/2 bg-gray-200 dark:bg-gray-700 rounded-md" />
                    <div className="h-5 w-28 bg-gray-200 dark:bg-gray-700 rounded" />
                </div>

                {/* Description */}
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded" />

                {/* Technology logos */}
                <div className="flex gap-4">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full" />
                    ))}
                </div>

                {/* Button */}
                <div className="h-10 w-32 bg-gray-200 dark:bg-gray-700 rounded-full mt-2" />
            </div>
        </div>

    )
}

export default LoadingProjectCardHome