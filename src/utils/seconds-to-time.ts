import { leftZero } from './left-zero';

export function secondsToMinutes(seconds: number): string {
  const min = leftZero((seconds / 60) % 60);
  const sec = leftZero((seconds % 60) % 60);
  return `${min}:${sec}`;
}
