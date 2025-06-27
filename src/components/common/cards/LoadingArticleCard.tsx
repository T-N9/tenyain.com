const LoadingArticleCard: React.FC = () => {
    return (
<div className="">
      <div className="p-5 flex-col lg:flex-row transition-all duration-300 border-gray-200 rounded-lg dark:border-secondary flex gap-3 animate-pulse">
        {/* Image Skeleton */}
        <div className="flex-[3]">
          <div className="rounded-lg bg-gray-200 dark:bg-gray-700 w-[150px] lg:w-full h-[88px] lg:h-[170px]" />
        </div>

        {/* Content Skeleton */}
        <div className="flex-[7] flex flex-col justify-between">
          {/* Title */}
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-3" />
          {/* Description lines */}
          <div className="space-y-2 mb-4">
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded" />
          </div>

          {/* Tags & Date */}
          <div className="flex justify-between items-center">
            <div className="flex gap-2 flex-wrap">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-6 w-14 bg-gray-200 dark:bg-gray-700 rounded-full"
                />
              ))}
            </div>
            <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
          </div>
        </div>
      </div>
    </div>
    );
};

export default LoadingArticleCard;
