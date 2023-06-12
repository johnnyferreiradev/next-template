import ReactPaginate from 'react-paginate';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

import Button from '@/components/atom/Button';

import { PaginationProps } from './types';

import './styles.css';

export default function Pagination({
  page,
  pageCount,
  onChangePage,
  className = '',
}: PaginationProps) {
  return (
    <div className={`pagination ${className}`.trim()}>
      <ReactPaginate
        onPageChange={(newPage) => onChangePage(newPage.selected)}
        forcePage={page}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        pageClassName="link-page-button"
        previousLabel={
          <Button className="previous" theme="link-dark" roundButton size="sm">
            <CaretLeft size={16} weight="bold" />
          </Button>
        }
        breakLabel={
          <Button
            className="page-number more"
            theme="link-dark"
            roundButton
            size="sm"
          >
            ...
          </Button>
        }
        nextLabel={
          <Button className="next" theme="link-dark" roundButton size="sm">
            <CaretRight size={16} weight="bold" />
          </Button>
        }
      />
    </div>
  );
}
