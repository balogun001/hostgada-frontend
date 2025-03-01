import { Button } from '@ui/Button';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import React from 'react';

interface ScrollsButtonProps {
  onLeftClick?: () => void;
  onRightClick?: () => void;
}

function ScrollsButton({ onLeftClick, onRightClick }: ScrollsButtonProps) {
  return (
    <div>
      <div className="flex gap-4">
        <Button size="xl" kinds="tertiary" onClick={onLeftClick}>
          <FaArrowLeft className="text-orange-500" />
        </Button>
        <Button size="xl" kinds="tertiary" onClick={onRightClick}>
          <FaArrowRight className="text-orange-500" />
        </Button>
      </div>
    </div>
  );
}

export default ScrollsButton;
