import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';

const useFetchStatus = (fetchFunction) => {
    const [status, setStatus] = useState(null);

    const { data, error, isLoading, refetch } = useQuery(
        ['status'],
        fetchFunction,
        {
            enabled: false, 
            onSuccess: (data) => setStatus(data),
            onError: (error) => console.error(error),
        }
    );

    useEffect(() => {
        refetch();
    }, [refetch]);

    return { status, isLoading, error, refetch };
};

export default useFetchStatus;
