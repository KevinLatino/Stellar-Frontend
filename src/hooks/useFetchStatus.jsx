import { useState, useEffect } from 'react';

const useFetchStatus = (fetchFunction) => {
    
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStatus = async () => {
            try {
                setLoading(true);
                const response = await fetchFunction();
                setStatus(response);
            } catch (error) {
                setError(error);
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchStatus();
    }, [fetchFunction]);

    return { status, loading, error };
};

export default useFetchStatus;
