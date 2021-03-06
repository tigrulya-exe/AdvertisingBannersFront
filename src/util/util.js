import {useEffect, useRef} from 'react';

export const useIsMount = () => {
    const isMountRef = useRef(true);
    useEffect(() => {
        isMountRef.current = false;
    }, []);
    return isMountRef.current;
};

export const getError = (err) => err.response?.data?.message ?? "Network error";

export const flushFields = (obj) => {
    if (!obj) {
        return null
    }

    const newObj = {};
    Object.getOwnPropertyNames(obj).forEach(v => {
        if (v !== "id") {
            newObj[v] = ""
        }
    });
    return newObj;
};