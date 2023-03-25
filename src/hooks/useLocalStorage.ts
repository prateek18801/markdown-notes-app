import { useState, useEffect } from 'react';

const useLocalStorage = <T>(key: string, init: T | (() => T)) => {
    const [value, setValue] = useState<T>(() => {
        const localData = localStorage.getItem(key);
        if (localData) return JSON.parse(localData);
        if (typeof init === 'function') return (init as () => T)();
        return init;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue] as [T, typeof setValue];
}

export default useLocalStorage;
