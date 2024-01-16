import { useEffect } from 'react';
import { useAnimationState } from 'moti';

// types
import type { AnimationType } from '../../components/modal/type';
import { animations } from '../../components/modal/animations';

const useModalAnimation = (visible: boolean, animationType: AnimationType) => {
    const currentAnimation = animations[animationType];

    const modalAnimationState = useAnimationState({
        from: currentAnimation.from,
        open: currentAnimation.open,
        closed: currentAnimation.closed
    });

    useEffect(() => {
        modalAnimationState.transitionTo(visible ? 'open' : 'closed');
    }, [visible, modalAnimationState]);

    return modalAnimationState;
};

export default useModalAnimation;
