'use client';

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CongratulationsIcon,
  EmptyErrorIcon,
  TotalEarningIcon,
  TotalTicketsIcon,
  TrendingDownIcon,
} from '@asset/icons';
import Card from '@components/Card';
import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Button } from '@ui/Button';
import { Table } from '@ui/Table';
import { BodyText, Title } from '@ui/Text';
import { Wrapper } from '@ui/Wrapper';

import FilterDropDown from '@components/FilterDropDown';
import { useWindowSize } from '@hook/useWindowSize';
import classNames from 'classnames';
import { useMemo, useState } from 'react';
import ResponsivePagination from 'react-responsive-pagination';
import Motion from 'src/layout/motion';
import '../../(guest)/guest.css';
import { Modal } from '@ui/Modal';
import { Input } from '@ui/Input';
import dummyData from '../../../../../dummyWallet.json';
import { columns } from './columns';

function Page() {
  const [activeTab, setActiveTab] = useState('Claimed Fund');
  const [currentPage, setCurrentPage] = useState(8);
  const { width } = useWindowSize();
  const totalPages = 10;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const open2Modal = () => setIsModal2Open(true);
  const close2Modal = () => setIsModal2Open(false);

  const memoizedData = useMemo(() => dummyData, []);
  const memoizedColumns = useMemo(() => columns, []);
  const table = useReactTable({
    columns: memoizedColumns,
    data: memoizedData,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: { pageSize: 10 },
    },
  });

  return (
    <Motion>
      <Wrapper dashboard>
        <div className="w-full xl:w-[75%] gap-4 text-gray-600 grid sm:grid-cols-2 lg:grid-cols-3 py-4 xl:py-10">
          <Card className="min-h-40">
            <div>
              <BodyText>Avalaible Funds</BodyText>
              <Title dashboard>40,689</Title>
            </div>
          </Card>
          <Card className="min-h-40">
            <div className="flex justify-between">
              <div>
                <BodyText>Pending Funds</BodyText>
                <Title dashboard>0</Title>
              </div>
              <TotalTicketsIcon className="text-6xl" />
            </div>
            <div className="flex justify-end">
              <Button size="xsm" kinds="tertiary">
                Claim Funds
              </Button>
            </div>
          </Card>
          <Card className="min-h-40">
            <div className="flex justify-between">
              <div>
                <BodyText>Total Earnings</BodyText>
                <Title dashboard>40,689</Title>
              </div>
              <TotalEarningIcon className="text-6xl" />
            </div>
            <div className="flex items-center gap-1">
              <TrendingDownIcon />
              <div className="flex gap-1">
                <BodyText className="text-red-500">8.5%</BodyText>
                <BodyText>Down from yesterday</BodyText>
              </div>
            </div>
          </Card>
        </div>

        <div className="flex gap-4 border-b my-4">
          <BodyText
            className={classNames(
              'cursor-pointer pb-2 border-b-2 transition-colors text-p3',
              activeTab === 'Claimed Fund'
                ? 'border-orange-500 text-orange-500'
                : 'border-transparent text-gray-500'
            )}
            onClick={() => setActiveTab('Claimed Fund')}
          >
            Claimed Funds
          </BodyText>
          <BodyText
            className={classNames(
              'cursor-pointer pb-2 border-b-2 transition-colors text-p3',
              activeTab === 'Bank Account'
                ? 'border-orange-500 text-orange-500'
                : 'border-transparent text-gray-500'
            )}
            onClick={() => setActiveTab('Bank Account')}
          >
            Bank Account
          </BodyText>
        </div>
        {activeTab === 'Claimed Fund' && (
          <Motion>
            <div className="flex items-center justify-between">
              <BodyText className="text-p3 font-bold">Claimed Funds</BodyText>
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
          </Motion>
        )}
        {activeTab === 'Bank Account' && (
          <Motion>
            <Modal
              className="h-fit !max-w-6xl bg-white"
              isOpen={isModalOpen}
              onClose={closeModal}
            >
              <div className="space-y-8 p-4">
                <div className="space-y-2">
                  <BodyText className="text-p3">
                    In which country and currency will you be paid
                  </BodyText>
                  <BodyText className="text-gray-500 text-sm">
                    Fill in the details carefully
                  </BodyText>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <Input label="Country" />
                  <Input label="Currency" />
                </div>
                <div className="space-y-4">
                  <BodyText className="text-p3">
                    Account holder information
                  </BodyText>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <Input label="First name" />
                    <Input label="Last name" />
                    <Input label="Address 1" />
                    <Input label="Address 2" />
                    <Input label="City" />
                    <Input label="State" />
                  </div>
                </div>
                <div className="space-y-4">
                  <BodyText className="text-p3">Bank information</BodyText>
                  <Input label="Bank Name" />
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <Input label="Account Number" />
                    <Input label="Re-Enter Account Number" />
                  </div>
                </div>
                <Button onClick={open2Modal} size="lg">
                  Submit
                </Button>
              </div>
            </Modal>
            <Modal onClose={close2Modal} isOpen={isModal2Open}>
              <div className="flex flex-col items-center text-center gap-8 p-4">
                <div className="bg-gray-300 rounded-full overflow-hidden">
                  <CongratulationsIcon className="text-9xl" />
                </div>
                <div className="space-y-2">
                  <BodyText className="text-p3">Congratulations! </BodyText>
                  <BodyText className="text-gray-400">
                    Your occasion has now been published
                    <br /> and it is now available for bookings{' '}
                  </BodyText>
                </div>
                <Button onClick={open2Modal} size="lg" className="!w-full">
                  Continue
                </Button>
              </div>
            </Modal>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <EmptyErrorIcon className="text-6xl" />
                <div>
                  <BodyText className="text-p3">
                    You haven’t added a bank account yet
                  </BodyText>
                  <BodyText className="text-gray-500 text-sm">
                    To receive funds from your event, add a bank account.
                  </BodyText>
                </div>
              </div>
              <Button onClick={openModal} size="lg">
                Add Bank Account
              </Button>
            </div>
          </Motion>
        )}
      </Wrapper>
    </Motion>
  );
}

export default Page;
