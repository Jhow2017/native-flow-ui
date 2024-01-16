export const animations = {
    right: {
        from: { opacity: 0, translateX: 100 },
        open: { opacity: 1, translateX: 0 },
        closed: { opacity: 0, translateX: 100 }
    },
    left: {
        from: { opacity: 0, translateX: -100 },
        open: { opacity: 1, translateX: 0 },
        closed: { opacity: 0, translateX: -100 }
    },
    top: {
        from: { opacity: 0, translateY: -100 },
        open: { opacity: 1, translateY: 0 },
        closed: { opacity: 0, translateY: -100 }
    },
    bottom: {
        from: { opacity: 0, translateY: 100 },
        open: { opacity: 1, translateY: 0 },
        closed: { opacity: 0, translateY: 100 }
    },

    fade: {
        from: { opacity: 0 },
        open: { opacity: 1 },
        closed: { opacity: 0 }
    }
};
