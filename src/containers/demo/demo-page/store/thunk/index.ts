import { ThunkActionTypes } from '@src/core/store/thunk/types';
import DemoService from '@src/core/services/demo.service';
import { YearItem } from '@src/core/models/demo/demo.model';
import { catchHandle } from '@src/core/libs/catch-helper';
import { onGetDemoListsSuccess } from '@src/containers/demo/demo-page/store/reducer/actions';

export const onThunkFetchDemoLists = (): ThunkActionTypes => async (
  dispatch,
) => {
  const demoService = new DemoService();

  try {
    const res: YearItem[] = demoService.getDemoLists();

    dispatch(onGetDemoListsSuccess(res));
  } catch (e) {
    catchHandle(e);
  }
};
