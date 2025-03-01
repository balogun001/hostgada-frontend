'use client';

import { ChevronLeftIcon, ChevronRightIcon, ShareIcon } from '@asset/icons';
import { landingPage } from '@asset/images';
import { useWindowSize } from '@hook/useWindowSize';
import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Button } from '@ui/Button';
import { HeaderText } from '@ui/HeaderText';
import { Table } from '@ui/Table';
import { BodyText, Title } from '@ui/Text';
import { Wrapper } from '@ui/Wrapper';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import ResponsivePagination from 'react-responsive-pagination';
import Motion from 'src/layout/motion';
import '../../../../(guest)/guest.css';
import Link from 'next/link';
import Pages from 'src/routes/page.routes';
import userHistory from '../../../../../../../dummyUserHistory.json';
import { columns } from './columns';

function Page() {
  const data = useMemo(() => (!userHistory ? [] : [...userHistory]), []);
  const [currentPage, setCurrentPage] = useState(8);
  const { width } = useWindowSize();
  const totalPages = 10;

  const table = useReactTable({
    columns,
    data,
    enableRowSelection: true,
    getCoreRowModel: getCoreRowModel(),
    // getFilteredRowModel: getFilteredRowModel(),
    // getRowId: ({ id }) => id.toString(),
    // onRowSelectionChange: setRowSelection,
    // state: {
    //   rowSelection,
    // },
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  });

  return (
    <Motion>
      <Wrapper dashboard>
        <div className="flex items-center text-gray-400 gap-2 py-4">
          <ChevronLeftIcon />
          <Link href={Pages.hostDashboardEventListing}>
            <BodyText>Back</BodyText>
          </Link>
        </div>
        <Title dashboard>My Events</Title>
        <div className="py-10 flex flex-col xl:flex-row items-center gap-8">
          <div className="h-48 w-72 flex items-center border border-gray-300 rounded-md p-4">
            <Image src={landingPage} alt="image" className="rounded-md" />
          </div>
          <div className="space-y-4">
            <div className="max-w-lg flex flex-col xl:flex-row items-center gap-2">
              <BodyText className="font-bold !text-p3">
                Full Moon Ceremony ~ Native Flute Meditation and Shamanic
              </BodyText>

              <Button
                kinds="tertiary"
                className="!bg-transparent !text-gray-600 border !border-gray-600"
              >
                <span className="h-2 w-2 rounded-full bg-green-500" /> On site
              </Button>
            </div>
            <BodyText>House Party | Nov 24,2024 | 9:00AM GMT+1</BodyText>
            <div className="flex gap-4">
              <Button
                kinds="tertiary"
                className="!bg-transparent !text-gray-600 border !border-gray-600"
              >
                <ShareIcon /> share
              </Button>
              <Button
                kinds="tertiary"
                className="!bg-transparent !text-gray-600 border !border-gray-600"
              >
                copy link
              </Button>
            </div>
          </div>
        </div>
        <div className="pt-8 space-y-6">
          <HeaderText header="Current Sales" />
          <Table table={table} />
          <div className="flex justify-center sm:justify-end px-4">
            <div
              style={{
                maxWidth: width < 650 ? '100px' : '356px',
              }}
              className="w-full"
            >
              <ResponsivePagination
                current={currentPage}
                total={totalPages}
                onPageChange={setCurrentPage}
                previousLabel={
                  <div className="flex items-center gap-2">
                    <ChevronLeftIcon />
                    <BodyText>Prev</BodyText>
                  </div>
                }
                nextLabel={
                  <div className="flex items-center gap-2">
                    <BodyText>Next</BodyText>
                    <ChevronRightIcon />
                  </div>
                }
                className="pagination"
                pageItemClassName="pagination-item"
                pageLinkClassName="pagination-link"
                previousClassName="nav-link"
                nextClassName="nav-link"
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </Motion>
  );
}

export default Page;
