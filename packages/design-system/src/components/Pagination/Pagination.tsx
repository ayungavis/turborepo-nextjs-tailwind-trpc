import { useCallback, useEffect, useState } from "react";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@shui/utils";

import { ArrowLeftIcon, ArrowRightIcon } from "~/components/CustomIcon";
import { paginationTheme } from "./Pagination.theme";

export interface PaginationProps extends ComponentPropsWithoutRef<"div"> {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  className,
  totalPages,
  currentPage,
  onPageChange,
  ...props
}: PaginationProps) => {
  const { wrapper, item, arrow } = paginationTheme({ className });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 640);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const handlePrevious = useCallback(() => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  }, [currentPage, onPageChange]);

  const handleNext = useCallback(() => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  }, [currentPage, onPageChange, totalPages]);

  const renderPageNumbers = useCallback(() => {
    const items = [];
    const ellipsis = "...";
    const maxSideItems = isMobile ? 0 : 1; // 0 for mobile, 1 for other sizes

    // Calculate the range of page numbers to display
    const startRange = Math.max(1, currentPage - maxSideItems);
    const endRange = Math.min(totalPages, currentPage + maxSideItems);

    // Left ellipsis
    if (startRange > 1) {
      items.push(
        <span className={item()} key="ellipsis-left">
          {ellipsis}
        </span>,
      );
    }

    // Page numbers
    for (let i = startRange; i <= endRange; i++) {
      items.push(
        <button
          className={cn(item())}
          data-active={currentPage === i ? "true" : undefined}
          key={i}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>,
      );
    }

    // Right ellipsis
    if (endRange < totalPages) {
      items.push(
        <span className={item()} key="ellipsis-right">
          {ellipsis}
        </span>,
      );
    }

    return items;
  }, [currentPage, item, onPageChange, totalPages, isMobile])();

  return (
    <div {...props} className={wrapper({ className })}>
      {/* Left arrow */}
      <button className={cn(item(), arrow())} onClick={handlePrevious}>
        <ArrowLeftIcon size={20} />
      </button>
      {renderPageNumbers}
      {/* Right arrow */}
      <button className={cn(item(), arrow())} onClick={handleNext}>
        <ArrowRightIcon size={20} />
      </button>
    </div>
  );
};
