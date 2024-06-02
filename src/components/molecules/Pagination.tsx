import { clsx } from 'clsx';
import ReactPaginate from 'react-paginate';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  containerClassName?: string;
  onPageChange: (page: number) => void;
}
export const Pagination = ({
  currentPage,
  totalPages,
  containerClassName,
  onPageChange
}: PaginationProps) => {
  return (
    <ReactPaginate
      pageCount={Math.ceil(totalPages)}
      forcePage={currentPage - 1}
      pageRangeDisplayed={2}
      marginPagesDisplayed={1}
      onPageChange={({ selected }) => onPageChange(selected)}
      containerClassName={clsx('join', containerClassName)}
      pageLinkClassName="join-item btn"
      activeClassName="btn-primary btn-active"
      activeLinkClassName="text-white"
      breakClassName="join-item btn disabled"
      previousLinkClassName="join-item btn"
      nextLinkClassName="join-item btn"
      previousLabel="<"
      nextLabel=">"
    />
  );
};
