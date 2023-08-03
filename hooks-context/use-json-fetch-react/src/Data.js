import React from 'react';
import useJsonFetch from './hooks/useJsonFetch';
import classNames from 'classnames';

function Data() {
  const [data, loading, error] = useJsonFetch(
    process.env.REACT_APP_URL,
    'data'
  );

  const classAdd = classNames('list-group-item', {
    'text-bg-danger p-3': loading && error !== '',
    'text-bg-success p-3': !loading && data === 'ok',
    'text-bg-warning p-3': data === '' && !loading,
  });

  return (
    <div className={classAdd}>
      Data: {data === '' ? <span>Загрузка...</span> : data}
      {`, ${loading}, ${error}`}
    </div>
  );
}

export default Data;
