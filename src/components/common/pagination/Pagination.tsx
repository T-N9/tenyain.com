'use client'
import Link from "next/link";

type PaginationProps = {
    totalPages: number;
    tag : string;
    currentPage: number;
};

const Pagination: React.FC<PaginationProps> = ({ currentPage,tag,totalPages }) => {
    return (
        <nav className='flex justify-center my-10' aria-label="Page navigation">
            <ul className="inline-flex -space-x-px text-sm">

                    <li>
                        <Link href={tag ? `/writing/tag/${tag}?page=${currentPage -1}` : `/writing?page=${currentPage -1}`}>
                            <button
                                disabled={currentPage === 1}
                                className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                                    currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''
                                }`}
                            >
                                Previous
                            </button>
                        </Link>

                    </li>


                {Array.from({length: totalPages}, (_, i) => i + 1).map(page => (
                    <li key={page}>
                        <Link href={tag ? `/writing/tag/${tag}?page=${page}` : `/writing?page=${page}`}>
                            <button
                                className={`flex items-center justify-center px-3 h-8 leading-tight border ${
                                    currentPage === page
                                        ? 'text-primary-600 bg-primary-50 border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-accent-600'
                                        : 'text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                                }`}
                            >
                                {page}
                            </button>
                        </Link>

                    </li>
                ))}

                    <li>
                        <Link
                            href={tag ? `/writing/tag/${tag}?page=${currentPage + 1}` : `/writing?page=${currentPage + 1}`}>
                            <button
                                disabled={currentPage === totalPages}
                                className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                                    currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''
                                }`}
                            >
                                Next
                            </button>
                        </Link>

                    </li>

            </ul>
        </nav>
    );
};

export default Pagination;
