import { NotificationIcon } from '@asset/icons';
import SearchIcon from '@asset/icons/SearchIcon';
import { NigeriaImage, ProfileImage } from '@asset/images';
import { Button } from '@ui/Button';
import { DropMenu, Option } from '@ui/DropMenu';
import { Input } from '@ui/Input';
import Image from 'next/image';
import { HiMenuAlt4 } from 'react-icons/hi';

function DashboardHeader() {
  const handleOptionClick = (option: Option) => {
    if (option.id === 'edit') {
      console.log('Edit option clicked');
    } else if (option.id === 'delete') {
      console.log('Deactivate option clicked');
    } else {
      console.log(`Option ${option.label} clicked`);
    }
  };

  const customOptions: Option[] = [
    { id: 'view', label: 'View Details' },
    { id: 'edit', label: 'Edit' },
    { id: 'delete', label: 'Deactivate', disabled: true },
    { id: 'archive', label: 'Archive' },
  ];

  return (
    <div className="w-full h-20 flex items-center gap-3 justify-between px-2 lg:px-6">
      <span className="lg:hidden">
        <HiMenuAlt4 className="text-orange-700 text-3xl" />
      </span>
      <Input
        rounded
        className="w-[200px] lg:w-[400px] 2xl:w-[700px]"
        intent="fill"
        placeholder="Search..."
        leftIcon={<SearchIcon className="text-gray-400" />}
      />
      <div className="hidden md:flex items-center gap-2 lg:gap-6">
        <Button size="sm" kinds="tertiary">
          Host People
        </Button>
        <NotificationIcon className="text-3xl" />
        <div className="lg:flex">
          <DropMenu
            options={customOptions}
            handleClick={handleOptionClick}
            disabled
            menuButton={
              <Image
                src={NigeriaImage}
                alt="country"
                height={32}
                width={32}
                className="w-8 h-8 rounded-full"
              />
            }
          />
        </div>
        <DropMenu
          options={customOptions}
          handleClick={handleOptionClick}
          menuButton={
            <>
              <Image
                src={ProfileImage}
                alt="profile photo"
                height={32}
                width={32}
                className="w-8 h-8 rounded-full"
              />
              <p className="hidden lg:flex text-sm text-gray-400">
                Hi <span className="text-gray-700">Yemi</span>
              </p>
            </>
          }
          className="bg-gray-300 pr-2 rounded-full"
        />
      </div>
    </div>
  );
}

export default DashboardHeader;
