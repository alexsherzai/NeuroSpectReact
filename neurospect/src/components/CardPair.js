import { click } from '@testing-library/user-event/dist/click';
import React, { useEffect, useState } from 'react';

const CardPair = ({onTimeEnd, storeExec, execData}) => {
    const shapes = [
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="green" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="green" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="green" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="green" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="green" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="green" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="green" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="green" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-green" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "green" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "green" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-green)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-green" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "green" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "green" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-green)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-green" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "green" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "green" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-green)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-green" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "green" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "green" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-green)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-green" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "green" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "green" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-green)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-green" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "green" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "green" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-green)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-green" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "green" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "green" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-green)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-green" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "green" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "green" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-green)" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-green" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "green" cx="5" cy="5" r="4"></circle>
                <circle fill = "green" cx="15" cy="15" r="4"></circle>
                <circle fill = "green" cx="5" cy="15" r="4"></circle>
                <circle fill = "green" cx="15" cy="5" r="4"></circle>
            </pattern>
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-green)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-green" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "green" cx="5" cy="5" r="4"></circle>
                <circle fill = "green" cx="15" cy="15" r="4"></circle>
                <circle fill = "green" cx="5" cy="15" r="4"></circle>
                <circle fill = "green" cx="15" cy="5" r="4"></circle>
            </pattern>
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-green)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-green" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "green" cx="5" cy="5" r="4"></circle>
                <circle fill = "green" cx="15" cy="15" r="4"></circle>
                <circle fill = "green" cx="5" cy="15" r="4"></circle>
                <circle fill = "green" cx="15" cy="5" r="4"></circle>
            </pattern>
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-green)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-green" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "green" cx="5" cy="5" r="4"></circle>
                <circle fill = "green" cx="15" cy="15" r="4"></circle>
                <circle fill = "green" cx="5" cy="15" r="4"></circle>
                <circle fill = "green" cx="15" cy="5" r="4"></circle>
            </pattern>
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-green)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-green" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "green" cx="5" cy="5" r="4"></circle>
                <circle fill = "green" cx="15" cy="15" r="4"></circle>
                <circle fill = "green" cx="5" cy="15" r="4"></circle>
                <circle fill = "green" cx="15" cy="5" r="4"></circle>
            </pattern>
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-green)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-green" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "green" cx="5" cy="5" r="4"></circle>
                <circle fill = "green" cx="15" cy="15" r="4"></circle>
                <circle fill = "green" cx="5" cy="15" r="4"></circle>
                <circle fill = "green" cx="15" cy="5" r="4"></circle>
            </pattern>
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-green)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-green" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "green" cx="5" cy="5" r="4"></circle>
                <circle fill = "green" cx="15" cy="15" r="4"></circle>
                <circle fill = "green" cx="5" cy="15" r="4"></circle>
                <circle fill = "green" cx="15" cy="5" r="4"></circle>
            </pattern>
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-green)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-green" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "green" cx="5" cy="5" r="4"></circle>
                <circle fill = "green" cx="15" cy="15" r="4"></circle>
                <circle fill = "green" cx="5" cy="15" r="4"></circle>
                <circle fill = "green" cx="15" cy="5" r="4"></circle>
            </pattern>
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-green)" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-green)" opacity="1"/>
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-green)" opacity="1"/>
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-green)" opacity="1"/>
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-green)" opacity="1" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-green)" opacity="1" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-green)" opacity="1" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-green)" opacity="1" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-green)" opacity="1" />
        </svg>,


        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="red" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="red" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="red" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="red" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="red" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="red" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="red" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="red" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-red" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "red" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "red" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-red)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-red" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "red" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "red" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-red)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-red" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "red" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "red" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-red)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-red" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "red" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "red" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-red)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-red" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "red" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "red" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-red)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-red" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "red" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "red" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-red)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-red" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "red" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "red" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-red)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-red" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "red" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "red" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-red)" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-red" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "red" cx="5" cy="5" r="4"></circle>
                <circle fill = "red" cx="15" cy="15" r="4"></circle>
                <circle fill = "red" cx="5" cy="15" r="4"></circle>
                <circle fill = "red" cx="15" cy="5" r="4"></circle>
            </pattern>
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-red)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-red" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "red" cx="5" cy="5" r="4"></circle>
                <circle fill = "red" cx="15" cy="15" r="4"></circle>
                <circle fill = "red" cx="5" cy="15" r="4"></circle>
                <circle fill = "red" cx="15" cy="5" r="4"></circle>
            </pattern>
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-red)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-red" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "red" cx="5" cy="5" r="4"></circle>
                <circle fill = "red" cx="15" cy="15" r="4"></circle>
                <circle fill = "red" cx="5" cy="15" r="4"></circle>
                <circle fill = "red" cx="15" cy="5" r="4"></circle>
            </pattern>
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-red)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-red" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "red" cx="5" cy="5" r="4"></circle>
                <circle fill = "red" cx="15" cy="15" r="4"></circle>
                <circle fill = "red" cx="5" cy="15" r="4"></circle>
                <circle fill = "red" cx="15" cy="5" r="4"></circle>
            </pattern>
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-red)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-red" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "red" cx="5" cy="5" r="4"></circle>
                <circle fill = "red" cx="15" cy="15" r="4"></circle>
                <circle fill = "red" cx="5" cy="15" r="4"></circle>
                <circle fill = "red" cx="15" cy="5" r="4"></circle>
            </pattern>
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-red)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-red" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "red" cx="5" cy="5" r="4"></circle>
                <circle fill = "red" cx="15" cy="15" r="4"></circle>
                <circle fill = "red" cx="5" cy="15" r="4"></circle>
                <circle fill = "red" cx="15" cy="5" r="4"></circle>
            </pattern>
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-red)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-red" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "red" cx="5" cy="5" r="4"></circle>
                <circle fill = "red" cx="15" cy="15" r="4"></circle>
                <circle fill = "red" cx="5" cy="15" r="4"></circle>
                <circle fill = "red" cx="15" cy="5" r="4"></circle>
            </pattern>
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-red)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-red" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "red" cx="5" cy="5" r="4"></circle>
                <circle fill = "red" cx="15" cy="15" r="4"></circle>
                <circle fill = "red" cx="5" cy="15" r="4"></circle>
                <circle fill = "red" cx="15" cy="5" r="4"></circle>
            </pattern>
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-red)" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-red)" opacity="1"/>
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-red)" opacity="1"/>
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-red)" opacity="1"/>
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-red)" opacity="1" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-red)" opacity="1" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-red)" opacity="1" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-red)" opacity="1" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-red)" opacity="1" />
        </svg>,


        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="blue" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="blue" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="blue" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="blue" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="blue" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="blue" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="blue" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="blue" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-blue" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "blue" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "blue" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-blue)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-blue" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "blue" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "blue" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-blue)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-blue" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "blue" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "blue" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-blue)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-blue" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "blue" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "blue" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-blue)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-blue" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "blue" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "blue" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-blue)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-blue" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "blue" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "blue" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-blue)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-blue" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "blue" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "blue" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-blue)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-blue" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "blue" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "blue" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-blue)" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-blue" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "blue" cx="5" cy="5" r="4"></circle>
                <circle fill = "blue" cx="15" cy="15" r="4"></circle>
                <circle fill = "blue" cx="5" cy="15" r="4"></circle>
                <circle fill = "blue" cx="15" cy="5" r="4"></circle>
            </pattern>
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-blue)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-blue" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "blue" cx="5" cy="5" r="4"></circle>
                <circle fill = "blue" cx="15" cy="15" r="4"></circle>
                <circle fill = "blue" cx="5" cy="15" r="4"></circle>
                <circle fill = "blue" cx="15" cy="5" r="4"></circle>
            </pattern>
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-blue)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-blue" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "blue" cx="5" cy="5" r="4"></circle>
                <circle fill = "blue" cx="15" cy="15" r="4"></circle>
                <circle fill = "blue" cx="5" cy="15" r="4"></circle>
                <circle fill = "blue" cx="15" cy="5" r="4"></circle>
            </pattern>
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-blue)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-blue" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "blue" cx="5" cy="5" r="4"></circle>
                <circle fill = "blue" cx="15" cy="15" r="4"></circle>
                <circle fill = "blue" cx="5" cy="15" r="4"></circle>
                <circle fill = "blue" cx="15" cy="5" r="4"></circle>
            </pattern>
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-blue)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-blue" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "blue" cx="5" cy="5" r="4"></circle>
                <circle fill = "blue" cx="15" cy="15" r="4"></circle>
                <circle fill = "blue" cx="5" cy="15" r="4"></circle>
                <circle fill = "blue" cx="15" cy="5" r="4"></circle>
            </pattern>
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-blue)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-blue" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "blue" cx="5" cy="5" r="4"></circle>
                <circle fill = "blue" cx="15" cy="15" r="4"></circle>
                <circle fill = "blue" cx="5" cy="15" r="4"></circle>
                <circle fill = "blue" cx="15" cy="5" r="4"></circle>
            </pattern>
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-blue)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-blue" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "blue" cx="5" cy="5" r="4"></circle>
                <circle fill = "blue" cx="15" cy="15" r="4"></circle>
                <circle fill = "blue" cx="5" cy="15" r="4"></circle>
                <circle fill = "blue" cx="15" cy="5" r="4"></circle>
            </pattern>
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-blue)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-blue" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "blue" cx="5" cy="5" r="4"></circle>
                <circle fill = "blue" cx="15" cy="15" r="4"></circle>
                <circle fill = "blue" cx="5" cy="15" r="4"></circle>
                <circle fill = "blue" cx="15" cy="5" r="4"></circle>
            </pattern>
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-blue)" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-blue)" opacity="1"/>
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-blue)" opacity="1"/>
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-blue)" opacity="1"/>
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-blue)" opacity="1" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-blue)" opacity="1" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-blue)" opacity="1" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-blue)" opacity="1" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-blue)" opacity="1" />
        </svg>,


        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="orange" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="orange" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="orange" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="orange" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="orange" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="orange" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="orange" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="orange" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-orange" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "orange" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "orange" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-orange)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-orange" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "orange" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "orange" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-orange)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-orange" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "orange" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "orange" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-orange)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-orange" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "orange" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "orange" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-orange)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-orange" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "orange" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "orange" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-orange)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-orange" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "orange" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "orange" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-orange)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-orange" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "orange" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "orange" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-orange)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-orange" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "orange" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "orange" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-orange)" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-orange" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "orange" cx="5" cy="5" r="4"></circle>
                <circle fill = "orange" cx="15" cy="15" r="4"></circle>
                <circle fill = "orange" cx="5" cy="15" r="4"></circle>
                <circle fill = "orange" cx="15" cy="5" r="4"></circle>
            </pattern>
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-orange)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-orange" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "orange" cx="5" cy="5" r="4"></circle>
                <circle fill = "orange" cx="15" cy="15" r="4"></circle>
                <circle fill = "orange" cx="5" cy="15" r="4"></circle>
                <circle fill = "orange" cx="15" cy="5" r="4"></circle>
            </pattern>
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-orange)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-orange" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "orange" cx="5" cy="5" r="4"></circle>
                <circle fill = "orange" cx="15" cy="15" r="4"></circle>
                <circle fill = "orange" cx="5" cy="15" r="4"></circle>
                <circle fill = "orange" cx="15" cy="5" r="4"></circle>
            </pattern>
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-orange)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-orange" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "orange" cx="5" cy="5" r="4"></circle>
                <circle fill = "orange" cx="15" cy="15" r="4"></circle>
                <circle fill = "orange" cx="5" cy="15" r="4"></circle>
                <circle fill = "orange" cx="15" cy="5" r="4"></circle>
            </pattern>
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-orange)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-orange" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "orange" cx="5" cy="5" r="4"></circle>
                <circle fill = "orange" cx="15" cy="15" r="4"></circle>
                <circle fill = "orange" cx="5" cy="15" r="4"></circle>
                <circle fill = "orange" cx="15" cy="5" r="4"></circle>
            </pattern>
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-orange)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-orange" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "orange" cx="5" cy="5" r="4"></circle>
                <circle fill = "orange" cx="15" cy="15" r="4"></circle>
                <circle fill = "orange" cx="5" cy="15" r="4"></circle>
                <circle fill = "orange" cx="15" cy="5" r="4"></circle>
            </pattern>
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-orange)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-orange" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "orange" cx="5" cy="5" r="4"></circle>
                <circle fill = "orange" cx="15" cy="15" r="4"></circle>
                <circle fill = "orange" cx="5" cy="15" r="4"></circle>
                <circle fill = "orange" cx="15" cy="5" r="4"></circle>
            </pattern>
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-orange)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-orange" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "orange" cx="5" cy="5" r="4"></circle>
                <circle fill = "orange" cx="15" cy="15" r="4"></circle>
                <circle fill = "orange" cx="5" cy="15" r="4"></circle>
                <circle fill = "orange" cx="15" cy="5" r="4"></circle>
            </pattern>
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-orange)" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-orange)" opacity="1"/>
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-orange)" opacity="1"/>
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-orange)" opacity="1"/>
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-orange)" opacity="1" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-orange)" opacity="1" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-orange)" opacity="1" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-orange)" opacity="1" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-orange)" opacity="1" />
        </svg>
    ]; 

    

    const [shuffledShapes, setShuffledShapes] = useState([]);
    const [shuffledShapesIndeces, setShuffledShapesIndeces] = useState([]);
    const [clickedShapes, setClickedShapes] = useState([]);

    const sets = ["Shape", "Color", "Pattern", "ShapeColor", "ShapePattern","ColorPattern"];
    const [chosenSet, setChosenSet] = useState("");

    const [level, setLevel] = useState(1);
    const [solvedCards, setSolvedCards] = useState([]);
    const [warningText, setWarningText] = useState("");
    const [textColor, setTextColor] = useState("");
    const [spawn, setSpawn] = useState(true);

    const [showButton, setShowButton] = useState(false);
    const [numPairs, setNumPairs] = useState(0);

    const [pairsPreFirst, setPairsPreFirst] = useState(0);
    const [firstPair, setFirstPair] = useState(true);
    const [pairsAfterFirst, setPairsAfterFirst] = useState(0);

    const [scores, setScores] = useState([]);
    const [chosenSetList, setChosenSetList] = useState([]);
    const [shapesListList, setShapesListList] = useState({});

    const queryParams = new URLSearchParams(window.location.search)
    const prolificID = queryParams.get("PROLIFIC_PID");
    const userID = queryParams.get("userID");

    let docName = userID;
    if(prolificID !== null) {
        docName = prolificID;
    } else if(userID === null && prolificID === null) {
        docName = "noID";
    }

    const AddData = () => {
        let sc = Math.round(scores.reduce((sum, a) => sum + a, 0) * 100) / 100;
        storeExec(sc);

        execData(
            {
                execData: scores,
                execScore: sc,
                chosenSetList: chosenSetList,
                shapesListList: shapesListList
            }
        );
    }

    useEffect(() => {
        setWarningText("");

        if(spawn) {
            let newChosenSet; 
            let numPairs;
        
            if (level === 1) {
                newChosenSet = "Shape";
                numPairs = 2;
            } else if (level === 2) {
                newChosenSet = "Color";
                numPairs = 2;
            } else if (level === 3) {
                newChosenSet = "Pattern";
                numPairs = 2;
            } else if (level > 3 && level <= 6) {
                let temp = Math.floor(Math.random() * 3);
                while (chosenSet === sets[temp]) {
                    temp = Math.floor(Math.random() * 3);
                }
                newChosenSet = sets[temp];
                numPairs = 3;
            } else if (level > 6 && level <= 9) {
                let temp = Math.floor(Math.random() * (sets.length - 3)) + 3;
                while (chosenSet === sets[temp]) {
                    temp = Math.floor(Math.random() * (sets.length - 3)) + 3;
                }
                newChosenSet = sets[temp];
                numPairs = 4;
            } else if (level > 9) {
                /*let temp = Math.floor(Math.random() * (sets.length - 3)) + 3;
                while (chosenSet === sets[temp]) {
                    temp = Math.floor(Math.random() * (sets.length - 3)) + 3;
                }
                newChosenSet = sets[temp];
                numPairs = 4;
                */
                AddData();
                onTimeEnd();
            } else if (level >= 12) {
                AddData();
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
                case "Pattern":
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
                case "ShapePattern":
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
                case "ColorPattern":
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

            newArray = newArray.sort(() => Math.random() - 0.5);

            setShuffledShapesIndeces(newArray);
            setShuffledShapes(newArray.map((index) => shapes[index]));

            chosenSetList.push(newChosenSet);
            shapesListList[level] = newArray;
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

        console.log(rule1);
        console.log(rule2);

        let temp = Math.floor(Math.random() * shapes.length);

        console.log(curr);
        console.log(tempCurr);
        console.log(tempCurr2);

        let count = 0;
        while(tempCurr.includes(rule1(temp)) || tempCurr2.includes(rule2.temp)) {
            console.log(temp +  ", " + rule1(temp) + ", " + rule2(temp));
            temp = Math.floor(Math.random() * shapes.length);

            count++;

            if(count > 3000) {
                console.log("Cut off");
                break;
            }
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
            case "Pattern":
                if(Math.floor((val1 % 32) / 8) === Math.floor((val2 % 32) / 8)) {
                    decision = true;
                }
                break;
            case "ShapeColor":
                if(val1 % 8 === val2 % 8 && Math.floor(val1 / 32) === Math.floor(val2 / 32)) {
                    decision = true;
                }
                break;
            case "ShapePattern":
                if(val1 % 8 === val2 % 8 && Math.floor((val1 % 32) / 8) === Math.floor((val2 % 32) / 8)) {
                    decision = true;
                }
                break;
            case "ColorPattern":
                if(Math.floor(val1 / 32) === Math.floor(val2 / 32) && Math.floor((val1 % 32) / 8) === Math.floor((val2 % 32) / 8)) {
                    decision = true;
                }
                break;
        }

        if(decision && !firstPair) {
            setFirstPair(true);
        } else if(!decision && !firstPair) {
            setPairsPreFirst(pairsPreFirst + 1);
        } else if(firstPair) {
            setPairsAfterFirst(pairsAfterFirst + 1);
        }

        

        return decision;
    };

    const nextLevel = () => {
        let score = 0;
        let temp = 0;

        temp += (0.1 * Math.max((pairsPreFirst - 1), 0))
        temp += (0.3 * (pairsAfterFirst - (numPairs - 1)));

        score = Math.round(Math.exp(-1 * temp) * 1000) / 1000;
        scores.push(score);
        setFirstPair(false);
        setPairsPreFirst(0);
        setPairsAfterFirst(0);

        console.log(scores);

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
            <div>
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox='0 0 50 50'>
                    <defs>
                        <pattern id="pattern-stripes-green" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
                            <line x1="0" y="0" x2="0" y2="6" stroke="green" stroke-width="6" />
                        </pattern>
                    </defs>
                    <defs>
                        <pattern id="pattern-stripes-red" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
                            <line x1="0" y="0" x2="0" y2="6" stroke="red" stroke-width="6" />
                        </pattern>
                    </defs>
                    <defs>
                        <pattern id="pattern-stripes-blue" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
                            <line x1="0" y="0" x2="0" y2="6" stroke="blue" stroke-width="6" />
                        </pattern>
                    </defs>
                    <defs>
                        <pattern id="pattern-stripes-orange" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
                            <line x1="0" y="0" x2="0" y2="6" stroke="orange" stroke-width="6" />
                        </pattern>
                    </defs>
                </svg>
            </div>
        </div>
    );
};

export default CardPair;
