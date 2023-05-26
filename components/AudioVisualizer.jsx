/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

export const AudioVisualizer = (props) => {
  const {
    src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/shoptalk-clip.mp3",
  } = props;
  const [audioContext, setAudioContext] = useState(null);

  useEffect(() => {
    const context = new AudioContext();
    setAudioContext(context);
  }, []);

  useEffect(() => {
    if (audioContext) {
      drawAudio(src);
    }
  }, [audioContext]);

  const drawAudio = (url) => {
    fetch(url)
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer))
      .then((AudioBuffer) => draw(normalizeData(filterData(AudioBuffer))));
  };

  const filterData = (audioBuffer) => {
    const rawData = audioBuffer.getChannelData(0);
    const samples = 70;
    const blockSize = Math.floor(rawData.length / samples);
    const filteredData = [];
    for (let i = 0; i < samples; i++) {
      let blockStart = blockSize * i;
      let sum = 0;
      for (let j = 0; j < blockSize; j++) {
        sum = sum + Math.abs(rawData[blockStart + j]);
      }
      filteredData.push(sum / blockSize);
    }
    return filteredData;
  };

  const normalizeData = (filteredData) => {
    const multiplier = Math.pow(Math.max(...filteredData), -1);
    return filteredData.map((data) => data * multiplier);
  };

  const draw = (normalizeData) => {
    const canvas = document.querySelector("canvas");
    const devicePixelRatio = window.devicePixelRatio || 1;
    const padding = 0;
    canvas.width = canvas.offsetWidth * devicePixelRatio;
    canvas.height = (canvas.offsetHeight + padding * 2) * devicePixelRatio;
    const context = canvas.getContext("2d");
    context.scale(devicePixelRatio, devicePixelRatio);
    context.translate(0, canvas.offsetHeight / 2 + padding);

    const width = canvas.offsetWidth / normalizeData.length;
    for (let i = 0; i < normalizeData.length; i++) {
      const x = width * 1;
      let height = normalizeData[i] * canvas.offsetHeight - padding;
      if (height < 0) {
        height = 0;
      } else if (height > canvas.offsetHeight / 2) {
        height = height > canvas.offsetHeight / 2;
      }
      drawLineSegment(context, x, height, width, (i + 1) % 2);
    }
  };

  const drawLineSegment = (context, x, y, w, isEven) => {
    context.lineWidth = 1;
    context.strokeStyle = "#fff";
    context.beginPath();
    y = isEven ? y : -y;
    context.moveTo(x, 0);
    context.lineTo(x, y);
    context.arc(x + w / 2, y, w / 2, Math.PI, 0, isEven);
    context.lineTo(x + w, 0);
    context.stroke();
  };

  return (
    <div>
      <canvas id="wave" />
      {/*language=CSS*/}
      <style jsx>{`
        canvas {
          width: 800px;
          height: 130px;
          margin: 2rem auto;
        }
      `}</style>
    </div>
  );
};
