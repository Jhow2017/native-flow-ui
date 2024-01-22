import React, { ReactNode, memo, useEffect, useRef, useState } from 'react';
import { ScrollView, TouchableOpacity, Dimensions } from 'react-native';

//  internal
import Box from '../box';
import Icon from '../icon';

const { width } = Dimensions.get('window');

import { CarouselTypes } from './type';

type CarouselSlideProps = {
    child: ReactNode;
};

const CarouselSlide = memo<CarouselSlideProps>(({ child }) => (
    <Box width={width} flex={1} justifyContent={'center'} alignItems={'center'}>
        {child}
    </Box>
));

const Carousel: React.FC<CarouselTypes> = (props) => {
    const { children, showArrows, showDots, autoPlay = false, interval = 3000, ...attr } = props;

    const timerRef = useRef<any>(null);
    const scrollViewRef = useRef<ScrollView>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (autoPlay) {
            timerRef.current = setInterval(() => {
                setCurrentSlide((prevSlide) => (prevSlide + 1) % children.length);
            }, interval);
        }

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [autoPlay, interval, children.length]);

    useEffect(() => {
        scrollViewRef.current?.scrollTo({
            x: width * currentSlide,
            animated: true
        });
    }, [currentSlide]);

    const handleArrowClick = (direction: string) => {
        const newSlide =
            direction === 'left'
                ? (currentSlide - 1 + children.length) % children.length
                : (currentSlide + 1) % children.length;
        setCurrentSlide(newSlide);
    };

    const handleScroll = (event: { nativeEvent: { contentOffset: { x: any } } }) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const newCurrentSlide = Math.round(contentOffsetX / width);
        setCurrentSlide(newCurrentSlide);
    };

    return (
        <Box position={'relative'} {...attr}>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                ref={scrollViewRef}
                scrollEventThrottle={16}
                onMomentumScrollEnd={handleScroll}
            >
                {children.map((child, index) => (
                    <CarouselSlide child={child} key={index} />
                ))}
            </ScrollView>

            {showArrows && (
                <Box
                    flexDirection={'row'}
                    position={'absolute'}
                    top={'50%'}
                    width={'100%'}
                    justifyContent={'space-between'}
                    paddingHorizontal={10}
                >
                    {['left', 'right'].map((direction) => (
                        <Icon
                            icon={direction === 'left' ? 'close' : 'close'}
                            color="#fff"
                            key={direction}
                            backgroundColor={'rgba(0, 0, 0, 0.6)'}
                            padding={10}
                            style={{
                                borderRadius: 30
                            }}
                            onPress={() => handleArrowClick(direction)}
                        />
                    ))}
                </Box>
            )}

            {showDots && (
                <Box
                    flexDirection={'row'}
                    justifyContent={'center'}
                    position={'absolute'}
                    bottom={15}
                    width={'100%'}
                >
                    {children.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[
                                {
                                    height: 16,
                                    width: 16,
                                    borderRadius: 12,
                                    marginHorizontal: 6,
                                    borderColor: 'transparent',
                                    borderWidth: 1,
                                    backgroundColor: index === currentSlide ? 'blue' : 'grey'
                                }
                            ]}
                            onPress={() => setCurrentSlide(index)}
                        />
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default Carousel;
