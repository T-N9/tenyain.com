import Link from "next/link";

type PaginationProps = {
  totalPages: number;
  tag: string;
  locale: string;
  currentPage: number;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  tag,
  locale,
  totalPages,
}) => {
  if (totalPages <= 1) {
    return null;
  }

  const previousPage = Math.max(1, currentPage - 1);
  const nextPage = Math.min(totalPages, currentPage + 1);
  const basePath = tag
    ? `/${locale}/writing/tag/${tag}`
    : `/${locale}/writing`;

  return (
    <nav className="my-10 flex justify-center" aria-label="Page navigation">
      <ul className="inline-flex -space-x-px text-sm">
        <li>
          <Link href={`${basePath}?page=${previousPage}`}>
            <button
              disabled={currentPage === 1}
              className={`ms-0 flex h-8 items-center justify-center rounded-s-lg border border-e-0 border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              Previous
            </button>
          </Link>
        </li>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <li key={page}>
            <Link href={`${basePath}?page=${page}`}>
              <button
                className={`flex h-8 items-center justify-center border px-3 leading-tight ${
                  currentPage === page
                    ? "border-gray-300 bg-primary-50 text-primary-600 dark:border-gray-700 dark:bg-gray-700 dark:text-accent-600"
                    : "border-gray-300 bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                }`}
              >
                {page}
              </button>
            </Link>
          </li>
        ))}

        <li>
          <Link href={`${basePath}?page=${nextPage}`}>
            <button
              disabled={currentPage === totalPages}
              className={`flex h-8 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""
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

