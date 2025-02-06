import React from 'react';
import CircularProgressBar from '../CircularProgressBar';

interface NetworkProgressBarProps {
  progress?: number;
  radius?: number;
  strokeWidth?: number;
}

export default function NetworkProgressBar({
  progress = 0,
  radius = 48,
  strokeWidth = 10,
}: NetworkProgressBarProps) {
  const progressBarType = progress >= 50 ? 'success' : 'danger';

  return (
    <CircularProgressBar
      progress={progress}
      radius={radius}
      strokeWidth={strokeWidth}
      progressBarType={progressBarType}
    />
  );
}
