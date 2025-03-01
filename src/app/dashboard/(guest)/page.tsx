'use client';

import { ChevronLeftIcon, ChevronRightIcon, WalletIcon } from '@asset/icons';
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
import React, { useMemo, useState } from 'react';
import Layout from 'src/layout';
import ResponsivePagination from 'react-responsive-pagination';
import { useWindowSize } from '@hook/useWindowSize';
import { columns } from './columns';
import userHistory from '../../../../dummyUserHistory.json';
import 'react-responsive-pagination/themes/classic.css';
import './guest.css';

function Guest() {
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
    <Layout>
      <Wrapper className="!px-8">
        <div className="mt-10 space-y-6">
          <div className="flex flex-col sm:flex-row items-center gap-12">
            <div className="shadow-md rounded-xl p-4 space-y-4 w-full sm:w-96">
              <div className="flex items-center justify-between">
                <BodyText>Wallet Balance</BodyText>
                <WalletIcon className="text-6xl" />
              </div>
              <Title>$89,000</Title>
            </div>
            <Button size="lg">Top Up Wallet</Button>
          </div>
          <div className="pt-8 space-y-6">
            <HeaderText header="Purchase History" />
            <Table table={table} />
            <div className="flex justify-center sm:justify-end px-4">
              <div
                style={{
                  maxWidth: width < 650 ? '100px' : '356px', // Adjust the width dynamically
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
    </Layout>
  );
}

export default Guest;
