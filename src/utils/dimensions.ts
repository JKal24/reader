import { useState, useEffect, useCallback } from "react";
import { PixelRatio, Dimensions } from "react-native";

const calculateWidth = (width: number, widthPercent: string) => {
    const elemWidth = typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
    return PixelRatio.roundToNearestPixel((width * elemWidth) / 100);
};

const calculateHeight = (height: number, heightPercent: string) => {
    const elemHeight =
        typeof heightPercent === 'number' ? heightPercent : parseFloat(heightPercent);
    return PixelRatio.roundToNearestPixel((height * elemHeight) / 100);
};

export function getWidth() {
    const [width, setWidth] = useState(Dimensions.get('window').width);
    useEffect(() => {
        Dimensions.addEventListener('change', (newDimensions) => {
            const screenWidth = newDimensions.window.width;
            setWidth(screenWidth);
        });
    }, []);
    const wp = useCallback((value: string) => calculateWidth(width, value), [width]);

    return wp;
}
export function getHeight() {
    const [height, setHeight] = useState(Dimensions.get('window').height);
    
    useEffect(() => {
        Dimensions.addEventListener('change', (newDimensions) => {
            const screenHeight = newDimensions.window.height;
            setHeight(screenHeight);
        });
    }, []);
    const hp = useCallback((value: string) => calculateHeight(height, value), [height]);

    return hp;
}