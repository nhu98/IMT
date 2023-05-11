import React, { useEffect } from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { Demo } from '@src/containers/demo/demo-page/demo-page.component';
import { useDispatch, useSelector } from 'react-redux';
import { onThunkFetchDemoLists } from '@src/containers/demo/demo-page/store/thunk';
import { AppState } from '@src/core/store';

export const DemoPageContainer: React.FunctionComponent<NavigationInjectedProps> = () => {
  const dispatch = useDispatch();

  const { demolish, error } = useSelector((state: AppState) => state.demo);

  useEffect(() => {
    onGetDemoLists();
  }, []);

  const onGetDemoLists = (): void => {
    dispatch(onThunkFetchDemoLists());
  };

  return <Demo dataSource={demolish} err={error} />;
};
