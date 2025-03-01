import {
  BookingsNavIcon,
  EventsNavIcon,
  EyeIcon,
  SpecialIcon,
} from '@asset/icons';
import { BodyText } from '@ui/Text';
import classNames from 'classnames';

type Props = {
  step: number;
};

function EventsSteps({ step }: Props) {
  return (
    <div className="w-full flex items-center gap-2 py-6">
      {/* Event Details */}
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-center gap-2">
          <div
            className={classNames(
              'flex items-center justify-center border border-gray-400 text-gray-400 rounded-full w-14 h-14',
              {
                'border-orange-600 text-orange-600': step === 1,
              }
            )}
          >
            <EventsNavIcon />
          </div>
          <BodyText
            className={classNames('text-gray-400 text-nowrap', {
              'text-orange-600': step === 1,
            })}
          >
            Event Details
          </BodyText>
        </div>
      </div>
      <hr className="h-[2px] flex-1 bg-gray-400 self-center mb-6" />

      {/* Ticketing */}
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-center gap-2">
          <div
            className={classNames(
              'flex items-center justify-center border border-gray-400 text-gray-400 rounded-full w-14 h-14',
              {
                'border-orange-600 text-orange-600': step === 2,
              }
            )}
          >
            <BookingsNavIcon />
          </div>
          <BodyText
            className={classNames('text-gray-400', {
              'text-orange-600': step === 2,
            })}
          >
            Ticketing
          </BodyText>
        </div>
      </div>
      <hr className="h-[2px] flex-1 bg-gray-400 self-center mb-6" />

      {/* Special */}
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-center gap-2">
          <div
            className={classNames(
              'flex items-center justify-center border border-gray-400 text-gray-400 text-2xl rounded-full w-14 h-14',
              {
                'border-orange-600 text-orange-600': step === 3,
              }
            )}
          >
            <SpecialIcon />
          </div>
          <BodyText
            className={classNames('text-gray-400', {
              'text-orange-600': step === 3,
            })}
          >
            Special
          </BodyText>
        </div>
      </div>
      <hr className="h-[2px] flex-1 bg-gray-400 self-center mb-6" />

      {/* Review */}
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-center gap-2">
          <div
            className={classNames(
              'flex items-center justify-center border border-gray-400 text-gray-400  text-2xl rounded-full w-14 h-14',
              {
                'border-orange-600 text-orange-600': step === 4,
              }
            )}
          >
            <EyeIcon />
          </div>
          <BodyText
            className={classNames('text-gray-400', {
              'text-orange-600': step === 4,
            })}
          >
            Review
          </BodyText>
        </div>
      </div>
    </div>
  );
}

export default EventsSteps;
