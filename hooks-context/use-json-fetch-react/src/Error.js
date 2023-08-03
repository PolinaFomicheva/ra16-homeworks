import React from 'react';
import useJsonFetch from './hooks/useJsonFetch';
import classNames from 'classnames';

function Error() {
  const [data, loading, error] = useJsonFetch(
    process.env.REACT_APP_URL,
    'error'
  );

  const classAdd = classNames('list-group-item', {
    'text-bg-danger p-3': loading && error !== '',
    'text-bg-success p-3': !loading && data === 'ok',
    'text-bg-warning p-3': data === '' && !loading,
  });

  return (
    <div className={classAdd}>
      Error: {data === '' ? <span>Загрузка...</span> : data}
      {`, ${loading}, ${error}`}
    </div>
  );
}

export default Error;
