export interface PaginationProps {
  page?: number;
  pageCount: number;
  onChangePage: (selectedItem: number) => void;
  className?: string;
}
