import React from "react";
import { useRef, useEffect } from "react";
import { styled } from "styled-components";


const AudioVisualizerContainer = styled.div`
    width: 100%;
    height: 100px;
    background-color: #f2f2f2;
    position: relative;
`;

const Bar = styled.div`
    width: 4px;
    height: 0;
    background-color: #ff5500;
    position: absolute;
    bottom: 0;
    left: ${props => props.position}px
    transition: height 0.2s ease;
`;

const AudioVisualizer = ({audioData}) => {
    const barsRef = useRef([]);

    useEffect(() => {
        const updateBars = () => {
            requestAnimationFrame(updateBars);
            const dataArray = new Uint8Array(audioData.current?.frequencyBinCount);
            audioData.current?.getByteFrequencyData(dataArray);
            const step = Math.round(dataArray.length / barsRef.current.length);


            barsRef.current.forEach((bar, index) => {
                const value = dataArray[index * step] || 0;
                const height = value / 2;
                bar.style.height = `${height}px`;
            });
        };
        updateBars();
    }, [audioData]);

    const createBars = () => {
        const bars = []
        const barCount = 64; // Numero total de barras

        for(let i = 0; i < barCount; i++){
            bars.push(<Bar key={i} ref={ref => (barsRef.current[i] = ref)} position={(i * 10) + 2} />)
        }
        return bars;
    };

    return <AudioVisualizerContainer>{createBars()}</AudioVisualizerContainer>
}

export default AudioVisualizer