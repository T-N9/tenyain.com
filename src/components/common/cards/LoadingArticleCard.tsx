const LoadingArticleCard: React.FC = () => {
    return (
        <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-secondary animate-pulse">
            <div className="h-60 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
            <div className="p-5">
                <div className="h-8 bg-gray-200 rounded dark:bg-gray-700 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 mb-2"></div>
                <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                        <span className="w-16 h-5 bg-gray-200 rounded-full dark:bg-gray-700"></span>
                        <span className="w-16 h-5 bg-gray-200 rounded-full dark:bg-gray-700"></span>
                    </div>
                    <div className="w-20 h-4 bg-gray-200 rounded dark:bg-gray-700"></div>
                </div>
                <div className="mt-4 w-32 h-8 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
        </div>
    );
};

export default LoadingArticleCard;
