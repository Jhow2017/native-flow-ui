import React, { useState, useEffect, useRef } from 'react';
import { FlatList, Dimensions, TouchableOpacity } from 'react-native';
import Animated, { Layout, FadeInLeft, FadeOutRight } from 'react-native-reanimated';

import DsBox from '../box';

// types
import { DsCarouselTypes } from './type';

const DsCarousel: React.FC<DsCarouselTypes> = (props) => {
    const { children, showDots = false, time = 3000, ...attr } = props;
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const FlatlistRef = useRef<FlatList>(null);

    const handleDotPress = (index: number) => {
        setActiveIndex(index);
        FlatlistRef.current?.scrollToIndex({
            index: index,
            animated: true
        });
    };

    const onViewableItemsChanged = useRef(({ viewableItems }: { viewableItems: Array<{ index: number | null }> }) => {
        const firstItem = viewableItems.find((item) => item.index !== null);
        if (firstItem && firstItem.index !== null) {
            setActiveIndex(firstItem.index);
        }
    }).current;

    const viewabilityConfig = useRef({
        itemVisiblePercentThreshold: 50
    }).current;

    useEffect(() => {
        const timerId = setTimeout(() => {
            const nextIndex = activeIndex === children.length - 1 ? 0 : activeIndex + 1;
            FlatlistRef.current?.scrollToIndex({
                index: nextIndex,
                animated: true
            });
            setActiveIndex(nextIndex);
        }, time ?? 3000);

        return () => clearTimeout(timerId);
    }, [activeIndex, children.length]);

    return (
        <DsBox alignItems="center" gap={24} marginVertical={16} {...attr}>
            <FlatList
                ref={FlatlistRef}
                data={children}
                renderItem={({ item }) => (
                    <DsBox width={Dimensions.get('screen').width * 0.8} alignItems={'center'} height={'auto'} marginHorizontal={40}>
                        {item}
                    </DsBox>
                )}
                keyExtractor={(_, index) => String(index)}
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                viewabilityConfig={viewabilityConfig}
                onViewableItemsChanged={onViewableItemsChanged}
            />

            {showDots && (
                <FlatList
                    data={children}
                    renderItem={({ index }) => (
                        <TouchableOpacity onPress={() => handleDotPress(index)}>
                            <Animated.View
                                layout={Layout}
                                entering={FadeInLeft}
                                exiting={FadeOutRight}
                                style={{
                                    width: activeIndex === index ? 24 : 14,
                                    height: 14,
                                    borderRadius: 25,
                                    backgroundColor: activeIndex === index ? 'black' : 'gray',
                                    marginHorizontal: 4
                                }}
                            />
                        </TouchableOpacity>
                    )}
                    keyExtractor={(_, index) => String(index)}
                    horizontal
                    scrollEnabled={false}
                />
            )}
        </DsBox>
    );
};

export default DsCarousel;
