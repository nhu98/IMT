import { AppState } from '@src/core/store';
import React from 'react';
import { useEffect } from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { useDispatch, useSelector } from 'react-redux';
import { Example } from './example.component';
import { onThunkGetExamples } from './store/thunk';

export const ExampleContainer: React.FunctionComponent<NavigationInjectedProps> = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigationKey = 'ExampleContainer';
  const dispatch = useDispatch();

  const { examples } = useSelector((state: AppState) => state.example);

  useEffect(() => {
    onGetExamples();
  }, []);

  const onGetExamples = (): void => {
    dispatch(onThunkGetExamples());
  };

  return <Example examples={examples} />;
};
