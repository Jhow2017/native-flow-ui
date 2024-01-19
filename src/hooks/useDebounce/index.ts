export default function useDebounce<F extends (...args: any[]) => void>(
    func: F,
    wait: number,
    immediate: boolean = false
): ((...args: Parameters<F>) => void) & { cancel: () => void } {
    let timeout: NodeJS.Timeout | null = null;

    const debouncedFunction = (...args: Parameters<F>) => {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };

        const callNow = immediate && !timeout;
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(later, wait);

        if (callNow) func(...args);
    };

    debouncedFunction.cancel = () => {
        if (timeout) {
            clearTimeout(timeout);
            timeout = null;
        }
    };

    return debouncedFunction;
}
