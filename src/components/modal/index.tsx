import React from 'react';
import { MotiView } from 'moti';
import { Text, TouchableOpacity } from 'react-native';

// type
import type { ModalTypes } from './type';
import type { BoxType } from '../box/type';

// hook
import { useModalAnimation } from '../../hooks';

// @Ds
import { Box } from '../../components';

const DsModal: React.FC<ModalTypes> = (props) => {
    const { visible, onClose, children, animation = 'fade', transition, ...attr } = props;

    const modalAnimationState = useModalAnimation(visible, animation);

    const handleAnimationComplete = () => {
        if (modalAnimationState.current === 'closed') {
            onClose();
        }
    };

    return (
        <>
            {visible && (
                <MotiView
                    state={modalAnimationState}
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(22, 11, 11, 0.5)',
                        zIndex: 9999,
                        position: 'absolute',
                        width: '100%',
                        height: '100%'
                    }}
                    transition={{
                        type: transition?.type ?? 'timing',
                        duration: transition?.duration ?? 500
                    }}
                    onDidAnimate={(property, finished) => {
                        if (property === 'opacity' && finished) {
                            handleAnimationComplete();
                        }
                    }}
                >
                    <Box
                        justifyContent="space-between"
                        position="absolute"
                        backgroundColor="#fff"
                        height="auto"
                        borderRadius={24}
                        padding={24}
                        marginHorizontal={12}
                        {...(attr as BoxType)}
                    >
                        <Box flex={1}>{children}</Box>

                        {onClose && (
                            <TouchableOpacity
                                style={{
                                    width: '100%',
                                    height: 50,
                                    borderRadius: 10,
                                    backgroundColor: '#9b59b6',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 30
                                }}
                                onPress={() => {
                                    modalAnimationState.transitionTo('closed');
                                    onClose();
                                }}
                            >
                                <Text style={{ color: '#fff' }}>Close</Text>
                            </TouchableOpacity>
                        )}
                    </Box>
                </MotiView>
            )}
        </>
    );
};

export default DsModal;
