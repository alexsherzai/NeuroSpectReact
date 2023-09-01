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

			console.log(canvas.width);


			const numLines = Math.floor(canvas.width / 4);

			const leftMost = 20;

			const draw = () => {
				analyser.getByteFrequencyData(dataArray);

				context.clearRect(leftMost, 0, canvas.width, canvas.height);

				const sliceWidth = Math.ceil(bufferLength / numLines);
				let x = leftMost;

				for (let i = 0; i < numLines; i++) {
					let sum = 0;
					for (let j = i * sliceWidth; j < (i + 1) * sliceWidth; j++) {
						sum += dataArray[j];
					}
					const average = sum / sliceWidth;
					const barHeight = (average / 300) * canvas.height;

					context.fillStyle = '#959DA5';
					context.fillRect(x, canvas.height - barHeight / 2 - 75, 1, barHeight + 7);

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
		<canvas ref={canvasRef} width={600} height={150}></canvas>
		</div>
	);
};

export default MicrophoneWaveform;
