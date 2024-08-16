import {
  Pagination as UIPagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

interface NoticePaginationProps {
  currentPage: number;
  totalPages: number;
  handlePageChange: (pageNumber: number) => void;
}

const NoticePagination: React.FC<NoticePaginationProps> = ({
  currentPage,
  totalPages,
  handlePageChange,
}) => {
  return (
    <UIPagination>
      <PaginationContent className="flex space-x-2">
        <PaginationItem>
          <PaginationPrevious
            className="text-black-500 hover:text-white-50 bg-white-200 rounded hover:bg-primaryColor transition-colors duration-300 ease-in-out px-2 md:px-3 py-1"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) handlePageChange(currentPage - 1);
            }}
          />
        </PaginationItem>

        {Array.from({ length: totalPages }, (_, i) => (
          <PaginationItem key={i}>
            <PaginationLink
              className={`border size-6 md:size-10 rounded-full px-2 md:px-3 py-1 transition-colors duration-300 ease-in-out ${
                currentPage === i + 1
                  ? "border-primaryColor text-primaryColor"
                  : "border-white-500 text-black-500 hover:text-primaryColor hover:border-primaryColor"
              }`}
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(i + 1);
              }}
              isActive={currentPage === i + 1}
            >
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            className="text-black-500 hover:text-white-50 bg-white-200 rounded hover:bg-primaryColor transition-colors duration-300 ease-in-out px-2 md:px-3 py-1"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) handlePageChange(currentPage + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </UIPagination>
  );
};

export default NoticePagination;
