import React from 'react';
import { useInterval } from '../hooks/use-interval';
import { Button } from './button';

interface Props {
  defaultPomodoTime: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.defaultPomodoTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <div className="pomodoro">
      <h2>Você está: working</h2>
      <Button text="teste"></Button>
    </div>
  );
}
