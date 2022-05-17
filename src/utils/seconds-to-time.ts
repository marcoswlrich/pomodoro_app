import { leftZero } from './left-zero';

export function secondsToTime(seconds: number): string {
  const hours = leftZero(seconds / 3600);
  const min = leftZero((seconds / 60) % 60);
  const sec = leftZero((seconds % 60) % 60);
  return `${hours}h${min}m${sec}s`;
}
