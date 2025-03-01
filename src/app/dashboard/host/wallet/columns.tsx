import { createColumnHelper } from '@tanstack/react-table';
import { Button } from '@ui/Button';
import { WordLimit } from '@ui/WordLimit';
import classNames from 'classnames';

interface GuestDashboardPayload {
  claimId: string;
  purpose: string;
  dateClaimed: string;
  amount: string;
  status: string;
}

const columnHelper = createColumnHelper<GuestDashboardPayload>();

export const columns = [
  columnHelper.accessor('claimId', {
    header: 'Claimed ID',
    cell: (info) => <span>{WordLimit(15, info.getValue())}</span>,
    enableGlobalFilter: true,
  }),
  columnHelper.accessor('purpose', {
    header: 'Purpose',
    cell: (info) => <span>{WordLimit(100, info.getValue())}</span>,
    enableGlobalFilter: true,
  }),
  columnHelper.accessor('dateClaimed', {
    header: 'Date Claimed',
    cell: (info) => <span>{WordLimit(15, info.getValue())}</span>,
    enableGlobalFilter: true,
  }),
  columnHelper.accessor('amount', {
    header: 'Amount',
    cell: (info) => <span>{WordLimit(15, info.getValue())}</span>,
    enableGlobalFilter: true,
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: (info) => {
      const status = info.getValue();

      return (
        <Button
          kinds="tertiary"
          className={classNames('hover:opacity-70 !w-28 !text-sm', {
            '!bg-green-100 !border-green-500 !text-green-500':
              status === 'successful',
            '!bg-red-100 !border-red-500 !text-red-500': status === 'declined',
          })}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Button>
      );
    },
  }),
];
