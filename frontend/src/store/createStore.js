import { createStore, compose, applyMiddleware } from 'redux';

export default (reducers, middlawares) => {
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? compose(console.tron.createEnhancer(), applyMiddleware(...middlawares))
      : applyMiddleware(...middlawares);
  return createStore(reducers, enhancer);
};
