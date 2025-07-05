import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const actionModalSlice = createSlice({
  name: 'actionModal',
  initialState: {
    actionModals: {},
  },
  reducers: {
    addModal: (state, action) => {
      const newModalData = action.payload;
      state.actionModals[newModalData.id] = newModalData;
    },
    removeModal: (state, action) => {
      const id = action.payload;
      if (state.actionModals[id]) {
        delete state.actionModals[id];
      }
      if (timeouts[id]) {
        clearTimeout(timeouts[id]);
        delete timeouts[id];
      }
    },
  },
});

const timeouts = {};

export const { addModal, removeModal } = actionModalSlice.actions;

export const getIsActionModalVisible = (state) => {
  return Object.keys(state.actionModal.actionModals).length > 0;
};

const getActionModals = (state) => state.actionModal.actionModals;
export const getActionModalsData = createSelector(
  [getActionModals],
  (actionModals) => Object.values(actionModals)
);

export const removeActionModal = (id, delay = 5000) => (dispatch) => {
  const timeoutId = setTimeout(() => {
    dispatch(removeModal(id));
  }, delay);
  timeouts[id] = timeoutId;
};

export const addActionModal = (data) => (dispatch, getState) => {
  const actionModals = getState().actionModal.actionModals;
  if (!actionModals[data.id]) {
    dispatch(addModal(data));
    dispatch(removeActionModal(data.id, data.appearanceTime * 1000));
  }
};

export default actionModalSlice.reducer;