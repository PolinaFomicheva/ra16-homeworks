import classNames from 'classnames';
import React from 'react';
import useJsonFetch from './useJsonFetch';

function Loading() {
  const [data, loading, error] = useJsonFetch(
    process.env.REACT_APP_URL,
    'loading'
  );

  const classAdd = classNames('list-group-item', {
    'text-bg-danger p-3': loading && error !== '',
    'text-bg-success p-3': !loading && data === 'ok',
    'text-bg-warning p-3': data === '' && !loading,
  });

  return (
    <div className={classAdd}>
      Loading: {data === '' ? <span>Загрузка...</span> : data}
      {`, ${loading}, ${error}`}
    </div>
  );
}

export default Loading;

