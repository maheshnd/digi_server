import { put, select, call } from "redux-saga/effects";
import api from "../../services";
import {
  handleCreateChequeRequest,
  resetCreateChequeFormData,
  saveCurrentTransactionDetails,
  setCreateChequeIsInProgress,
  setShouldShowRedirectionPopUp,
  shouldShowCreateChequePopup,
} from "../CreateCheque";
import { RootState } from "../reducers";
import { SagaIterator } from "redux-saga";
import { ICreateChequeRequest } from "../../interfaces/Cheque/CreateChequeRequest";
import { getLoggedInUserEmailSelector } from "../../selectors/getLoggedInUserEmailSelector";

export function* handleCreateCheque(
  action: ReturnType<typeof handleCreateChequeRequest>
): SagaIterator {
  try {
    yield put(setCreateChequeIsInProgress(true));
    const state: RootState = yield select();
    const { amount, name, chequeClearanceDate, bankId, mobileNumber, email } =
      state.createCheque.createChequeForm;
    const userId = yield select(getLoggedInUserEmailSelector);
    const request: ICreateChequeRequest = {
      userid: userId,
      amount,
      name,
      chequeClearanceDate,
      bankName: bankId,
      mobileNo: mobileNumber,
      email,
    };
    const response = yield call(api.chequeRequest.createCheque, request);
    if (response?.data && response.status === 200) {
      yield put(saveCurrentTransactionDetails(response.data.data));
      yield put(shouldShowCreateChequePopup(false));
      yield put(setShouldShowRedirectionPopUp(false));
      yield put(resetCreateChequeFormData());
      action.payload.navigate("/redirect");
    }
  } catch (error) {
  } finally {
    yield put(setCreateChequeIsInProgress(false));
  }
}
