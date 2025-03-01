import { createColumnHelper } from '@tanstack/react-table';
import { Button } from '@ui/Button';
import { WordLimit } from '@ui/WordLimit';
import { MdOutlineFileDownload } from 'react-icons/md';

interface GuestDashboardPayload {
  date: string;
  description: string;
  total: string;
}

const columnHelper = createColumnHelper<GuestDashboardPayload>();

export const columns = [
  columnHelper.accessor('date', {
    header: 'Date',
    cell: (info) => <span>{WordLimit(15, info.getValue())}</span>,
    enableGlobalFilter: true,
  }),
  columnHelper.accessor('description', {
    header: 'Description',
    cell: (info) => <span>{WordLimit(100, info.getValue())}</span>,
    enableGlobalFilter: true,
  }),
  columnHelper.accessor('total', {
    header: 'Total',
    cell: (info) => <span>{WordLimit(15, info.getValue())}</span>,
    enableGlobalFilter: true,
  }),
  columnHelper.display({
    header: 'Receipt',
    id: 'actions',
    cell: () => {
      return (
        <div className="flex items-center">
          <Button kinds="tertiary" className="hidden md:block">
            Download
          </Button>
          <MdOutlineFileDownload className="block md:hidden text-xl" />
        </div>
      );
    },
  }),
];
