import React from 'react';

const useFormattedTime = (dateString) => {
  const formatTime = React.useCallback((dateString) => {
    const date = new Date(dateString);
    const options = {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    };
    return date.toLocaleString('en-US', options);
  }, []);

  return formatTime(dateString);
}

export default useFormattedTime; 