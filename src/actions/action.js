export const actionTypes= {
  INC_NUM: 'INC_NUM',
  DEC_NUM: 'DEC_NUM',
  RESET_NUM: 'RESET_NUM'
};

export const incNumber = (step = 1) => ({
  type: actionTypes.INC_NUM,
  step
});

export const decNumber = (step = 1) => ({
  type: actionTypes.DEC_NUM,
  step
});

export const resetNumber = () => ({
  type: actionTypes.RESET_NUM
});
