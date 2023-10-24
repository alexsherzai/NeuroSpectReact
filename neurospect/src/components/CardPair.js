import { click } from '@testing-library/user-event/dist/click';
import React, { useEffect, useState } from 'react';

const CardPair = (onTimeEnd) => {
    const shapes = [
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="2" fill="green" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="2" fill="green" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="2" fill="green" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="2" fill="green" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="2" fill="green" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="2" fill="green" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="2" fill="green" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="2" fill="green" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="0.75" fill="green" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="0.75" fill="green" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="0.75" fill="green" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="0.75" fill="green" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="0.75" fill="green" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="0.75" fill="green" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="2" fill="green" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="0.75" fill="green" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="0" fill="green" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="0" fill="green" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="0" fill="green" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="0" fill="green" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="0" fill="green" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="0" fill="green" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="0" fill="green" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="0" fill="green" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="3.5" fill="green" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="3.5" fill="green" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="3.5" fill="green" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="3.5" fill="green" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="3.5" fill="green" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="3.5" fill="green" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="3.5" fill="green" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="3.5" fill="green" />
        </svg>,


        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="2" fill="red" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="2" fill="red" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="2" fill="red" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="2" fill="red" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="2" fill="red" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="2" fill="red" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="2" fill="red" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="2" fill="red" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="0.75" fill="red" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="0.75" fill="red" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="0.75" fill="red" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="0.75" fill="red" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="0.75" fill="red" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="0.75" fill="red" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="2" fill="red" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="0.75" fill="red" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="0" fill="red" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="0" fill="red" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="0" fill="red" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="0" fill="red" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="0" fill="red" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="0" fill="red" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="0" fill="red" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="0" fill="red" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="3.5" fill="red" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="3.5" fill="red" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="3.5" fill="red" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="3.5" fill="red" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="3.5" fill="red" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="3.5" fill="red" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="3.5" fill="red" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="3.5" fill="red" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="2" fill="blue" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="2" fill="blue" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="2" fill="blue" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="2" fill="blue" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="2" fill="blue" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="2" fill="blue" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="2" fill="blue" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="2" fill="blue" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="0.75" fill="blue" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="0.75" fill="blue" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="0.75" fill="blue" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="0.75" fill="blue" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="0.75" fill="blue" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="0.75" fill="blue" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="2" fill="blue" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="0.75" fill="blue" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="0" fill="blue" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="0" fill="blue" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="0" fill="blue" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="0" fill="blue" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="0" fill="blue" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="0" fill="blue" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="0" fill="blue" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="0" fill="blue" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="3.5" fill="blue" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="3.5" fill="blue" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="3.5" fill="blue" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="3.5" fill="blue" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="3.5" fill="blue" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="3.5" fill="blue" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="3.5" fill="blue" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="3.5" fill="blue" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="2" fill="yellow" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="2" fill="yellow" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="2" fill="yellow" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="2" fill="yellow" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="2" fill="yellow" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="2" fill="yellow" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="2" fill="yellow" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="2" fill="yellow" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="0.75" fill="yellow" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="0.75" fill="yellow" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="0.75" fill="yellow" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="0.75" fill="yellow" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="0.75" fill="yellow" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="0.75" fill="yellow" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="2" fill="yellow" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="0.75" fill="yellow" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="0" fill="yellow" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="0" fill="yellow" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="0" fill="yellow" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="0" fill="yellow" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="0" fill="yellow" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="0" fill="yellow" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="0" fill="yellow" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="0" fill="yellow" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="3.5" fill="yellow" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="3.5" fill="yellow" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="3.5" fill="yellow" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="3.5" fill="yellow" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="3.5" fill="yellow" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="3.5" fill="yellow" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="3.5" fill="yellow" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="3.5" fill="yellow" />
        </svg>,
    ]; 

    const [shuffledShapes, setShuffledShapes] = useState([]);
    const [shuffledShapesIndeces, setShuffledShapesIndeces] = useState([]);
    const [clickedShapes, setClickedShapes] = useState([]);

    const sets = ["Shape", "Color", "Outline", "ShapeColor", "ShapeOutline","ColorOutline"];
    const [chosenSet, setChosenSet] = useState("");

    const [level, setLevel] = useState(1);
    const [solvedCards, setSolvedCards] = useState([]);
    const [warningText, setWarningText] = useState("");
    const [textColor, setTextColor] = useState("");
    const [spawn, setSpawn] = useState(true);

    const [showButton, setShowButton] = useState(false);
    const [numPairs, setNumPairs] = useState(0);

    useEffect(() => {
        setWarningText("");

        if(spawn) {
            let newChosenSet; 
            let numPairs;
        
            if (level === 1) {
                newChosenSet = "Shape";
                numPairs = 3;
            } else if (level === 2) {
                newChosenSet = "Color";
                numPairs = 3;
            } else if (level === 3) {
                newChosenSet = "Outline";
                numPairs = 3;
            } else if (level > 3 && level <= 6) {
                let temp = Math.floor(Math.random() * 3);
                while (chosenSet === sets[temp]) {
                    temp = Math.floor(Math.random() * 3);
                }
                newChosenSet = sets[temp];
                numPairs = 4;
            } else if (level > 6 && level <= 9) {
                let temp = Math.floor(Math.random() * (sets.length - 3)) + 3;
                while (chosenSet === sets[temp]) {
                    temp = Math.floor(Math.random() * (sets.length - 3)) + 3;
                }
                newChosenSet = sets[temp];
                numPairs = 6;
            } else if (level > 9) {
                let temp = Math.floor(Math.random() * (sets.length - 3)) + 3;
                while (chosenSet === sets[temp]) {
                    temp = Math.floor(Math.random() * (sets.length - 3)) + 3;
                }
                newChosenSet = sets[temp];
                numPairs = 8;
            } else if (level >= 12) {
                onTimeEnd();
            }
        
            setChosenSet(newChosenSet);
            setNumPairs(numPairs);

            let newArray = [];

            switch(newChosenSet) {
                case "Shape":
                    for(let i = 0; i < numPairs * 2; i++) {
                        if(i > 0) {
                            if(i % 2 === 1) {
                                let temp = Math.floor(Math.random() * shapes.length);
                                while(newArray[i - 1] % 8 !== temp % 8) {
                                    temp = Math.floor(Math.random() * shapes.length);
                                }
                                newArray.push(temp);
                            } else {
                                newArray.push(createUnique(newArray, (val) => val % 8));
                            }
                        } else {
                            newArray.push(Math.floor(Math.random() * shapes.length));
                        }
                    }
                    break;
                case "Color":
                    for(let j = 0; j < numPairs * 2; j++) {
                        if(j > 0) {
                            if(j % 2 === 1) {
                                let temp = Math.floor(Math.random() * shapes.length);
                                while(Math.floor(newArray[j - 1] / 32) !== Math.floor(temp / 32)) {
                                    temp = Math.floor(Math.random() * shapes.length);
                                }
                                newArray.push(temp);
                            } else {
                                newArray.push(createUnique(newArray, (val) => Math.floor(val / 32)));
                            }
                        } else {
                            newArray.push(Math.floor(Math.random() * shapes.length));
                        }
                    }
                    break;
                case "Outline":
                    for(let k = 0; k < numPairs * 2; k++) {
                        if(k > 0) {
                            if(k % 2 === 1) {
                                let temp = Math.floor(Math.random() * shapes.length);
                                while(Math.floor((newArray[k - 1] % 32) / 8) !== Math.floor((temp % 32) / 8)) {
                                    temp = Math.floor(Math.random() * shapes.length);
                                }
                                newArray.push(temp);
                            } else {
                                newArray.push(createUnique(newArray, (val) => Math.floor((val % 32) / 8)));
                            }
                        } else {
                            newArray.push(Math.floor(Math.random() * shapes.length));
                        }
                    }
                    break;
                case "ShapeColor":
                    for(let l = 0; l < numPairs * 2; l++) {
                        if(l > 0) {
                            if(l % 2 === 1) {
                                let temp = Math.floor(Math.random() * shapes.length);
                                while(newArray[l - 1] % 8 !== temp % 8 || Math.floor(newArray[l - 1] / 32) !== Math.floor(temp / 32)) {
                                    temp = Math.floor(Math.random() * shapes.length);
                                }
                                newArray.push(temp);
                            } else {
                                newArray.push(createUniqueMult(newArray, (val) => val % 8, (val) => Math.floor(val / 32)));
                            }
                        } else {
                            newArray.push(Math.floor(Math.random() * shapes.length));
                        }
                    }
                    break;
                case "ShapeOutline":
                    for(let m = 0; m < numPairs * 2; m++) {
                        if(m > 0) {
                            if(m % 2 === 1) {
                                let temp = Math.floor(Math.random() * shapes.length);
                                while(newArray[m - 1] % 8 !== temp % 8 || Math.floor((newArray[m - 1] % 32) / 8) !== Math.floor((temp % 32) / 8)) {
                                    temp = Math.floor(Math.random() * shapes.length);
                                }
                                newArray.push(temp);
                            } else {
                                newArray.push(createUniqueMult(newArray, (val) => val % 8, (val) => Math.floor((val % 32) / 8)));
                            }
                        } else {
                            newArray.push(Math.floor(Math.random() * shapes.length));
                        }
                    }
                    break;
                case "ColorOutline":
                    for(let n = 0; n < numPairs * 2; n++) {
                        if(n > 0) {
                            if(n % 2 === 1) {
                                let temp = Math.floor(Math.random() * shapes.length);
                                while(Math.floor(newArray[n - 1] / 32) !== Math.floor(temp / 32) || Math.floor((newArray[n - 1] % 32) / 8) !== Math.floor((temp % 32) / 8)) {
                                    temp = Math.floor(Math.random() * shapes.length);
                                }
                                newArray.push(temp);
                            } else {
                                newArray.push(createUniqueMult(newArray, (val) => Math.floor(val / 32), (val) => Math.floor((val % 32) / 8)));
                            }
                        } else {
                            newArray.push(Math.floor(Math.random() * shapes.length));
                        }
                    }
                    break;
            }

            setSpawn(false);

            newArray.sort(() => Math.random() - 0.5);
            setShuffledShapesIndeces(newArray);
            setShuffledShapes(newArray.map((index) => shapes[index]));
        }

        if(clickedShapes.length === 2) {
            if(checkMatch()) {
                solvedCards.push.apply(solvedCards, clickedShapes);
                setWarningText("Nice!");
                setTextColor("#2E8970");
            } else {
                setWarningText("Not a pair!");
                setTextColor("#CD3843");
            }
            clickedShapes.length = 0;
        }

        if(solvedCards.length === numPairs * 2 && solvedCards.length > 0) {
            setShowButton(true);
            setWarningText("Good job!");
            setTextColor("#FF9417");
        }
    }, [level, clickedShapes, onTimeEnd]);

    const createUnique = (curr, rule) => {
        let tempCurr = curr.map((val) => rule(val));

        let temp = Math.floor(Math.random() * shapes.length);
        while(tempCurr.includes(rule(temp))) {
            temp = Math.floor(Math.random() * shapes.length);
        }

        return temp;
    }

    const createUniqueMult = (curr, rule1, rule2) => {
        let tempCurr = curr.map((val) => rule1(val));
        let tempCurr2 = curr.map((val) => rule2(val));

        let temp = Math.floor(Math.random() * shapes.length);
        while(tempCurr.includes(rule1(temp)) || tempCurr2.includes(rule2.temp)) {
            temp = Math.floor(Math.random() * shapes.length);
        }

        return temp;
    }

    const cardClicked = (index) => {
        if(clickedShapes.length < 2) {
            if(clickedShapes.includes(index)) {
                const newClicked = clickedShapes.filter((clickedIndex) => clickedIndex !== index);
                setClickedShapes(newClicked);
            } else {
                setClickedShapes([...clickedShapes, index]);
            }
        } else {
            if(clickedShapes.includes(index)) {
                const newClicked = clickedShapes.filter((clickedIndex) => clickedIndex !== index);
                setClickedShapes(newClicked);
            }
        }

    };

    const checkMatch = () => {
        let val1 = shuffledShapesIndeces[clickedShapes[0]];
        let val2 = shuffledShapesIndeces[clickedShapes[1]];

        let decision = false;

        switch(chosenSet) {
            case "Shape":
                if(val1 % 8 === val2 % 8) {
                    decision = true;
                }
                break;
            case "Color":
                if(Math.floor(val1 / 32) === Math.floor(val2 / 32)) {
                    decision = true;
                }
                break;
            case "Outline":
                if(Math.floor((val1 % 32) / 8) === Math.floor((val2 % 32) / 8)) {
                    decision = true;
                }
                break;
            case "ShapeColor":
                if(val1 % 8 === val2 % 8 && Math.floor(val1 / 32) === Math.floor(val2 / 32)) {
                    decision = true;
                }
                break;
            case "ShapeOutline":
                if(val1 % 8 === val2 % 8 && Math.floor((val1 % 32) / 8) === Math.floor((val2 % 32) / 8)) {
                    decision = true;
                }
                break;
            case "ColorOutline":
                if(Math.floor(val1 / 32) === Math.floor(val2 / 32) && Math.floor((val1 % 32) / 8) === Math.floor((val2 % 32) / 8)) {
                    decision = true;
                }
                break;
        }

        return decision;
    };

    const nextLevel = () => {
        setLevel(level + 1);
        setShowButton(false);
        setWarningText("");
        setSpawn(true);
        clickedShapes.length = 0;
        solvedCards.length = 0;
    };

    return (
        <div>
            <div className="card-grid">
            
            {shuffledShapes.map((shape, index) => (
                solvedCards.includes(index) ?
                (<div key={index} className="cardSolved">
                <div>{shape}</div>
                </div>)
                :
                (clickedShapes.includes(index) ?
                (<div key={index} className="cardClicked" onClick={() => cardClicked(index)}>
                <div>{shape}</div>
                </div>)
                :
                (<div key={index} className="card" onClick={() => cardClicked(index)}>
                <div>{shape}</div>
                </div>))
            ))}
            </div>
            <div className='buttonCont'>
                <h3 style={{color: {textColor}}}>{warningText}</h3>
                {showButton ?
                <button className="buttonNext" onClick={nextLevel}>Next!</button>
                :
                <div></div>
                }
            </div>
        </div>
    );
};

export default CardPair;
