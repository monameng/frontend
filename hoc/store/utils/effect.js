export default effects => store => next => async (action) => {
  next(action);
  const key = Object.keys(effects).find((i) => {
    return i === action.type;
  });
  if (key) {
    await store.dispatch({ type: 'loading/save', payload: { [key]: true } });
    console.log(`start：${key}`);
    await effects[key](action, store);
    console.log(`end：${key}`);
    await store.dispatch({ type: 'loading/save', payload: { [key]: false } });
  }
};
