'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@asset/icons';
import { landingPage } from '@asset/images';
import Card from '@components/Card';
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
import '../../(guest)/guest.css';
import FilterDropDown from '@components/FilterDropDown';
import Link from 'next/link';
import Pages from 'src/routes/page.routes';
import userHistory from '../../../../../dummyUserHistory.json';
import { columns } from './columns';

const pendingBookings = [
  { id: 1, name: 'Catherine Sandra', tickets: '2x Platinum tickets' },
  { id: 2, name: 'Michael Doe', tickets: '1x Gold ticket' },
  { id: 3, name: 'Emily Johnson', tickets: '3x Silver tickets' },
  { id: 4, name: 'John Smith', tickets: '2x Bronze tickets' },
  { id: 5, name: 'Sophia Williams', tickets: '4x Platinum tickets' },
  { id: 6, name: 'Liam Brown', tickets: '2x Gold tickets' },
];

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
        <div className="space-y-4">
          <Card>
            <div className="space-y-4">
              <Title dashboard>Pending Booking</Title>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {pendingBookings.map((booking) => (
                  <Card key={booking.id} className="!bg-gray-300">
                    <div className="flex justify-center items-center gap-4">
                      <Image
                        className="w-16 h-24 rounded-lg object-cover"
                        src={landingPage}
                        alt="eventImage"
                      />
                      <div className="space-y-2">
                        <div>
                          <BodyText>{booking.name}</BodyText>
                          <BodyText>{booking.tickets}</BodyText>
                        </div>
                        <div className="flex items-center gap-2">
                          <Link
                            href={`${Pages.hostDashboardBuyerProfie}/${booking.id}`}
                          >
                            <Button
                              kinds="tertiary"
                              size="sm"
                              className="!bg-transparent !text-gray-600 border !border-gray-600"
                            >
                              View Profile
                            </Button>
                          </Link>
                          <Button size="sm" kinds="tertiary">
                            Approve
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </Card>
          <div className="pt-8 space-y-6">
            <div className="flex justify-between items-center">
              <HeaderText header="Sales History" />
              <FilterDropDown />
            </div>

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
        </div>
      </Wrapper>
    </Motion>
  );
}

export default Page;
