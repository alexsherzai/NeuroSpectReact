import React, { useRef, useEffect } from 'react';

const MicrophoneWaveform = () => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');

		if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
		navigator.mediaDevices
			.getUserMedia({ audio: true })
			.then((stream) => {
			const audioContext = new (window.AudioContext || window.webkitAudioContext)();
			const analyser = audioContext.createAnalyser();
			const source = audioContext.createMediaStreamSource(stream);
			source.connect(analyser);

			analyser.fftSize = 256;
			const bufferLength = analyser.frequencyBinCount;
			const dataArray = new Uint8Array(bufferLength);


			const numLines = Math.floor(canvas.width / 4);

			const draw = () => {
				analyser.getByteFrequencyData(dataArray);

				context.clearRect(10, 0, canvas.width, canvas.height);

				const sliceWidth = Math.ceil(bufferLength / numLines);
				let x = 10;

				for (let i = 0; i < numLines; i++) {
					let sum = 0;
					for (let j = i * sliceWidth; j < (i + 1) * sliceWidth; j++) {
						sum += dataArray[j];
					}
					const average = sum / sliceWidth;
					let barHeight = ((average / 200) * canvas.height);

					if(i < 10) {
						barHeight /= 2;
					} else if (i > 10 && i < 20) {
						barHeight /= 1.5;
					} else if (i > 20 && i < 30) {
						
					} else if (i > 30) {
						barHeight *= 2
					}

					barHeight += 7;

					context.fillStyle = '#959DA5';
					context.fillRect(x, (canvas.height - barHeight) / 2, 1, barHeight);

					x += 4;
				}

				requestAnimationFrame(draw);
			};

			draw();
			})
			.catch((error) => {
			console.error('Error accessing microphone:', error);
			});
		} else {
		console.error('getUserMedia is not supported in this browser');
		}
	}, []);

	return (
		<div>
		<canvas ref={canvasRef} width={300} height={65}></canvas>
		</div>
	);
};

export default MicrophoneWaveform;