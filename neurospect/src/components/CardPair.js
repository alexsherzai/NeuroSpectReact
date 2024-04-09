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
            <pattern id="pattern-diamond-green" fill="green" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-green)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-green" fill="green" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-green)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-green" fill="green" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-green)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-green" fill="green" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-green)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-green" fill="green" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-green)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-green" fill="green" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-green)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-green" fill="green" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-green)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-green" fill="green" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-green)" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-green" fill="green" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "green" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-green)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-green" fill="green" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "green" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-green)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-green" fill="green" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "green" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-green)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-green" fill="green" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "green" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-green)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-green" fill="green" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "green" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-green)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-green" fill="green" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "green" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-green)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-green" fill="green" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "green" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-green)" />
        </svg>, 
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-green" fill="green" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "green" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-green)" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" stroke="green" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <rect x="5" y="5" width="40" height="40" stroke="green" stroke-width="4.7" fill="transparent" />
        </svg>, 
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,45 5,45" stroke="green" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="green" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="green" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="green" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="green" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="green" stroke-width="4.7" fill="transparent" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-green">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="green" />
                        </radialGradient>
                    </defs>
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-green)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-green">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="green" />
                        </radialGradient>
                    </defs>
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-green)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-green">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="green" />
                        </radialGradient>
                    </defs>
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-green)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-green">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="green" />
                        </radialGradient>
                    </defs>
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-green)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-green">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="green" />
                        </radialGradient>
                    </defs>
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-green)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-green">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="green" />
                        </radialGradient>
                    </defs>
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-green)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-green">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="green" />
                        </radialGradient>
                    </defs>
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-green)" />
        </svg>, 

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-green">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="green" />
                        </radialGradient>
                    </defs>
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-green)" />
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
            <pattern id="pattern-diamond-red" fill="red" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-red)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-red" fill="red" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-red)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-red" fill="red" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-red)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-red" fill="red" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-red)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-red" fill="red" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-red)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-red" fill="red" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-red)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-red" fill="red" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-red)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-red" fill="red" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-red)" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-red" fill="red" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "red" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-red)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-red" fill="red" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "red" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-red)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-red" fill="red" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "red" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-red)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-red" fill="red" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "red" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-red)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-red" fill="red" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "red" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-red)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-red" fill="red" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "red" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-red)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-red" fill="red" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "red" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-red)" />
        </svg>, 
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-red" fill="red" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "red" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-red)" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" stroke="red" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <rect x="5" y="5" width="40" height="40" stroke="red" stroke-width="4.7" fill="transparent" />
        </svg>, 
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,45 5,45" stroke="red" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="red" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="red" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="red" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="red" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="red" stroke-width="4.7" fill="transparent" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-red">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="red" />
                        </radialGradient>
                    </defs>
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-red)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-red">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="red" />
                        </radialGradient>
                    </defs>
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-red)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-red">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="red" />
                        </radialGradient>
                    </defs>
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-red)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-red">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="red" />
                        </radialGradient>
                    </defs>
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-red)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-red">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="red" />
                        </radialGradient>
                    </defs>
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-red)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-red">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="red" />
                        </radialGradient>
                    </defs>
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-red)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-red">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="red" />
                        </radialGradient>
                    </defs>
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-red)" />
        </svg>, 
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-red">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="red" />
                        </radialGradient>
                    </defs>
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-red)" />
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
            <pattern id="pattern-diamond-blue" fill="blue" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-blue)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-blue" fill="blue" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-blue)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-blue" fill="blue" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-blue)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-blue" fill="blue" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-blue)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-blue" fill="blue" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-blue)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-blue" fill="blue" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-blue)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-blue" fill="blue" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-blue)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-blue" fill="blue" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-blue)" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-blue" fill="blue" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "blue" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-blue)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-blue" fill="blue" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "blue" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-blue)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-blue" fill="blue" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "blue" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-blue)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-blue" fill="blue" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "blue" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-blue)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-blue" fill="blue" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "blue" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-blue)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-blue" fill="blue" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "blue" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-blue)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-blue" fill="blue" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "blue" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-blue)" />
        </svg>, 
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-blue" fill="blue" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "blue" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-blue)" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" stroke="blue" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <rect x="5" y="5" width="40" height="40" stroke="blue" stroke-width="4.7" fill="transparent" />
        </svg>, 
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,45 5,45" stroke="blue" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="blue" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="blue" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="blue" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="blue" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="blue" stroke-width="4.7" fill="transparent" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-blue">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="blue" />
                        </radialGradient>
                    </defs>
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-blue)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-blue">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="blue" />
                        </radialGradient>
                    </defs>
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-blue)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-blue">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="blue" />
                        </radialGradient>
                    </defs>
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-blue)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-blue">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="blue" />
                        </radialGradient>
                    </defs>
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-blue)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-blue">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="blue" />
                        </radialGradient>
                    </defs>
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-blue)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-blue">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="blue" />
                        </radialGradient>
                    </defs>
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-blue)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-blue">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="blue" />
                        </radialGradient>
                    </defs>
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-blue)" />
        </svg>, 
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-blue">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="blue" />
                        </radialGradient>
                    </defs>
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-blue)" />
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
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-orange" fill="orange" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-orange)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-orange" fill="orange" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-orange)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-orange" fill="orange" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-orange)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-orange" fill="orange" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-orange)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-orange" fill="orange" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-orange)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-orange" fill="orange" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-orange)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-orange" fill="orange" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-orange)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-orange" fill="orange" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-orange)" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-orange" fill="orange" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "orange" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-orange)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-orange" fill="orange" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "orange" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-orange)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-orange" fill="orange" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "orange" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-orange)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-orange" fill="orange" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "orange" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-orange)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-orange" fill="orange" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "orange" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-orange)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-orange" fill="orange" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "orange" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-orange)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-orange" fill="orange" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "orange" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-orange)" />
        </svg>, 
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-orange" fill="orange" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "orange" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-orange)" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" stroke="orange" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <rect x="5" y="5" width="40" height="40" stroke="orange" stroke-width="4.7" fill="transparent" />
        </svg>, 
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,45 5,45" stroke="orange" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="orange" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="orange" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="orange" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="orange" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="orange" stroke-width="4.7" fill="transparent" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-orange">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="orange" />
                        </radialGradient>
                    </defs>
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-orange)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-orange">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="orange" />
                        </radialGradient>
                    </defs>
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-orange)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-orange">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="orange" />
                        </radialGradient>
                    </defs>
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-orange)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-orange">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="orange" />
                        </radialGradient>
                    </defs>
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-orange)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-orange">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="orange" />
                        </radialGradient>
                    </defs>
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-orange)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-orange">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="orange" />
                        </radialGradient>
                    </defs>
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-orange)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-orange">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="orange" />
                        </radialGradient>
                    </defs>
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-orange)" />
        </svg>, 
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-orange">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="orange" />
                        </radialGradient>
                    </defs>
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-orange)" />
        </svg>,


        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="purple" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="purple" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="purple" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="purple" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="purple" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="purple" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="purple" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="purple" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-purple" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "purple" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "purple" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-purple)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-purple" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "purple" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "purple" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-purple)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-purple" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "purple" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "purple" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-purple)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-purple" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "purple" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "purple" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-purple)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-purple" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "purple" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "purple" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-purple)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-purple" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "purple" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "purple" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-purple)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-purple" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "purple" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "purple" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-purple)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-purple" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "purple" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "purple" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-purple)" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-purple" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "purple" cx="5" cy="5" r="4"></circle>
                <circle fill = "purple" cx="15" cy="15" r="4"></circle>
                <circle fill = "purple" cx="5" cy="15" r="4"></circle>
                <circle fill = "purple" cx="15" cy="5" r="4"></circle>
            </pattern>
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-purple)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-purple" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "purple" cx="5" cy="5" r="4"></circle>
                <circle fill = "purple" cx="15" cy="15" r="4"></circle>
                <circle fill = "purple" cx="5" cy="15" r="4"></circle>
                <circle fill = "purple" cx="15" cy="5" r="4"></circle>
            </pattern>
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-purple)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-purple" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "purple" cx="5" cy="5" r="4"></circle>
                <circle fill = "purple" cx="15" cy="15" r="4"></circle>
                <circle fill = "purple" cx="5" cy="15" r="4"></circle>
                <circle fill = "purple" cx="15" cy="5" r="4"></circle>
            </pattern>
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-purple)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-purple" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "purple" cx="5" cy="5" r="4"></circle>
                <circle fill = "purple" cx="15" cy="15" r="4"></circle>
                <circle fill = "purple" cx="5" cy="15" r="4"></circle>
                <circle fill = "purple" cx="15" cy="5" r="4"></circle>
            </pattern>
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-purple)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-purple" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "purple" cx="5" cy="5" r="4"></circle>
                <circle fill = "purple" cx="15" cy="15" r="4"></circle>
                <circle fill = "purple" cx="5" cy="15" r="4"></circle>
                <circle fill = "purple" cx="15" cy="5" r="4"></circle>
            </pattern>
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-purple)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-purple" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "purple" cx="5" cy="5" r="4"></circle>
                <circle fill = "purple" cx="15" cy="15" r="4"></circle>
                <circle fill = "purple" cx="5" cy="15" r="4"></circle>
                <circle fill = "purple" cx="15" cy="5" r="4"></circle>
            </pattern>
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-purple)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-purple" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "purple" cx="5" cy="5" r="4"></circle>
                <circle fill = "purple" cx="15" cy="15" r="4"></circle>
                <circle fill = "purple" cx="5" cy="15" r="4"></circle>
                <circle fill = "purple" cx="15" cy="5" r="4"></circle>
            </pattern>
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-purple)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-purple" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "purple" cx="5" cy="5" r="4"></circle>
                <circle fill = "purple" cx="15" cy="15" r="4"></circle>
                <circle fill = "purple" cx="5" cy="15" r="4"></circle>
                <circle fill = "purple" cx="15" cy="5" r="4"></circle>
            </pattern>
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-purple)" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-purple)" opacity="1"/>
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-purple)" opacity="1"/>
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-purple)" opacity="1"/>
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-purple)" opacity="1" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-purple)" opacity="1" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-purple)" opacity="1" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-purple)" opacity="1" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-purple)" opacity="1" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-purple" fill="purple" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-purple)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-purple" fill="purple" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-purple)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-purple" fill="purple" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-purple)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-purple" fill="purple" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-purple)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-purple" fill="purple" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-purple)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-purple" fill="purple" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-purple)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-purple" fill="purple" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-purple)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-purple" fill="purple" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-purple)" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-purple" fill="purple" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "purple" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-purple)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-purple" fill="purple" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "purple" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-purple)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-purple" fill="purple" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "purple" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-purple)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-purple" fill="purple" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "purple" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-purple)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-purple" fill="purple" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "purple" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-purple)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-purple" fill="purple" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "purple" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-purple)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-purple" fill="purple" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "purple" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-purple)" />
        </svg>, 
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-purple" fill="purple" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "purple" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-purple)" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" stroke="purple" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <rect x="5" y="5" width="40" height="40" stroke="purple" stroke-width="4.7" fill="transparent" />
        </svg>, 
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,45 5,45" stroke="purple" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="purple" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="purple" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="purple" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="purple" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="purple" stroke-width="4.7" fill="transparent" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-purple">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="purple" />
                        </radialGradient>
                    </defs>
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-purple)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-purple">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="purple" />
                        </radialGradient>
                    </defs>
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-purple)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-purple">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="purple" />
                        </radialGradient>
                    </defs>
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-purple)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-purple">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="purple" />
                        </radialGradient>
                    </defs>
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-purple)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-purple">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="purple" />
                        </radialGradient>
                    </defs>
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-purple)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-purple">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="purple" />
                        </radialGradient>
                    </defs>
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-purple)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-purple">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="purple" />
                        </radialGradient>
                    </defs>
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-purple)" />
        </svg>, 
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-purple">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="purple" />
                        </radialGradient>
                    </defs>
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-purple)" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="teal" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="teal" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="teal" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="teal" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="teal" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="teal" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="teal" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="teal" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-teal" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "teal" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "teal" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-teal)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-teal" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "teal" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "teal" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-teal)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-teal" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "teal" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "teal" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-teal)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-teal" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "teal" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "teal" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-teal)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-teal" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "teal" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "teal" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-teal)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-teal" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "teal" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "teal" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-teal)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-teal" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "teal" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "teal" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-teal)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-teal" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "teal" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "teal" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-teal)" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-teal" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "teal" cx="5" cy="5" r="4"></circle>
                <circle fill = "teal" cx="15" cy="15" r="4"></circle>
                <circle fill = "teal" cx="5" cy="15" r="4"></circle>
                <circle fill = "teal" cx="15" cy="5" r="4"></circle>
            </pattern>
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-teal)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-teal" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "teal" cx="5" cy="5" r="4"></circle>
                <circle fill = "teal" cx="15" cy="15" r="4"></circle>
                <circle fill = "teal" cx="5" cy="15" r="4"></circle>
                <circle fill = "teal" cx="15" cy="5" r="4"></circle>
            </pattern>
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-teal)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-teal" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "teal" cx="5" cy="5" r="4"></circle>
                <circle fill = "teal" cx="15" cy="15" r="4"></circle>
                <circle fill = "teal" cx="5" cy="15" r="4"></circle>
                <circle fill = "teal" cx="15" cy="5" r="4"></circle>
            </pattern>
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-teal)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-teal" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "teal" cx="5" cy="5" r="4"></circle>
                <circle fill = "teal" cx="15" cy="15" r="4"></circle>
                <circle fill = "teal" cx="5" cy="15" r="4"></circle>
                <circle fill = "teal" cx="15" cy="5" r="4"></circle>
            </pattern>
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-teal)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-teal" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "teal" cx="5" cy="5" r="4"></circle>
                <circle fill = "teal" cx="15" cy="15" r="4"></circle>
                <circle fill = "teal" cx="5" cy="15" r="4"></circle>
                <circle fill = "teal" cx="15" cy="5" r="4"></circle>
            </pattern>
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-teal)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-teal" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "teal" cx="5" cy="5" r="4"></circle>
                <circle fill = "teal" cx="15" cy="15" r="4"></circle>
                <circle fill = "teal" cx="5" cy="15" r="4"></circle>
                <circle fill = "teal" cx="15" cy="5" r="4"></circle>
            </pattern>
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-teal)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-teal" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "teal" cx="5" cy="5" r="4"></circle>
                <circle fill = "teal" cx="15" cy="15" r="4"></circle>
                <circle fill = "teal" cx="5" cy="15" r="4"></circle>
                <circle fill = "teal" cx="15" cy="5" r="4"></circle>
            </pattern>
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-teal)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-teal" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "teal" cx="5" cy="5" r="4"></circle>
                <circle fill = "teal" cx="15" cy="15" r="4"></circle>
                <circle fill = "teal" cx="5" cy="15" r="4"></circle>
                <circle fill = "teal" cx="15" cy="5" r="4"></circle>
            </pattern>
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-teal)" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-teal)" opacity="1"/>
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-teal)" opacity="1"/>
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-teal)" opacity="1"/>
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-teal)" opacity="1" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-teal)" opacity="1" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-teal)" opacity="1" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-teal)" opacity="1" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-teal)" opacity="1" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-teal" fill="teal" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-teal)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-teal" fill="teal" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-teal)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-teal" fill="teal" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-teal)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-teal" fill="teal" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-teal)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-teal" fill="teal" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-teal)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-teal" fill="teal" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-teal)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-teal" fill="teal" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-teal)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-teal" fill="teal" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-teal)" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-teal" fill="teal" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "teal" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-teal)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-teal" fill="teal" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "teal" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-teal)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-teal" fill="teal" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "teal" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-teal)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-teal" fill="teal" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "teal" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-teal)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-teal" fill="teal" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "teal" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-teal)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-teal" fill="teal" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "teal" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-teal)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-teal" fill="teal" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "teal" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-teal)" />
        </svg>, 
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-teal" fill="teal" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "teal" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-teal)" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" stroke="teal" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <rect x="5" y="5" width="40" height="40" stroke="teal" stroke-width="4.7" fill="transparent" />
        </svg>, 
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,45 5,45" stroke="teal" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="teal" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="teal" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="teal" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="teal" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="teal" stroke-width="4.7" fill="transparent" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-teal">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="teal" />
                        </radialGradient>
                    </defs>
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-teal)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-teal">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="teal" />
                        </radialGradient>
                    </defs>
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-teal)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-teal">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="teal" />
                        </radialGradient>
                    </defs>
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-teal)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-teal">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="teal" />
                        </radialGradient>
                    </defs>
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-teal)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-teal">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="teal" />
                        </radialGradient>
                    </defs>
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-teal)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-teal">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="teal" />
                        </radialGradient>
                    </defs>
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-teal)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-teal">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="teal" />
                        </radialGradient>
                    </defs>
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-teal)" />
        </svg>, 
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-teal">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="teal" />
                        </radialGradient>
                    </defs>
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-teal)" />
        </svg>,


        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="gray" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="gray" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="gray" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="gray" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="gray" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="gray" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="gray" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="gray" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-gray" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "gray" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "gray" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-gray)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-gray" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "gray" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "gray" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-gray)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-gray" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "gray" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "gray" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-gray)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-gray" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "gray" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "gray" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-gray)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-gray" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "gray" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "gray" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-gray)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-gray" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "gray" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "gray" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-gray)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-gray" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "gray" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "gray" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-gray)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-gray" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "gray" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "gray" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-gray)" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-gray" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "gray" cx="5" cy="5" r="4"></circle>
                <circle fill = "gray" cx="15" cy="15" r="4"></circle>
                <circle fill = "gray" cx="5" cy="15" r="4"></circle>
                <circle fill = "gray" cx="15" cy="5" r="4"></circle>
            </pattern>
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-gray)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-gray" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "gray" cx="5" cy="5" r="4"></circle>
                <circle fill = "gray" cx="15" cy="15" r="4"></circle>
                <circle fill = "gray" cx="5" cy="15" r="4"></circle>
                <circle fill = "gray" cx="15" cy="5" r="4"></circle>
            </pattern>
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-gray)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-gray" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "gray" cx="5" cy="5" r="4"></circle>
                <circle fill = "gray" cx="15" cy="15" r="4"></circle>
                <circle fill = "gray" cx="5" cy="15" r="4"></circle>
                <circle fill = "gray" cx="15" cy="5" r="4"></circle>
            </pattern>
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-gray)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-gray" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "gray" cx="5" cy="5" r="4"></circle>
                <circle fill = "gray" cx="15" cy="15" r="4"></circle>
                <circle fill = "gray" cx="5" cy="15" r="4"></circle>
                <circle fill = "gray" cx="15" cy="5" r="4"></circle>
            </pattern>
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-gray)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-gray" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "gray" cx="5" cy="5" r="4"></circle>
                <circle fill = "gray" cx="15" cy="15" r="4"></circle>
                <circle fill = "gray" cx="5" cy="15" r="4"></circle>
                <circle fill = "gray" cx="15" cy="5" r="4"></circle>
            </pattern>
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-gray)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-gray" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "gray" cx="5" cy="5" r="4"></circle>
                <circle fill = "gray" cx="15" cy="15" r="4"></circle>
                <circle fill = "gray" cx="5" cy="15" r="4"></circle>
                <circle fill = "gray" cx="15" cy="5" r="4"></circle>
            </pattern>
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-gray)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-gray" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "gray" cx="5" cy="5" r="4"></circle>
                <circle fill = "gray" cx="15" cy="15" r="4"></circle>
                <circle fill = "gray" cx="5" cy="15" r="4"></circle>
                <circle fill = "gray" cx="15" cy="5" r="4"></circle>
            </pattern>
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-gray)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-gray" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "gray" cx="5" cy="5" r="4"></circle>
                <circle fill = "gray" cx="15" cy="15" r="4"></circle>
                <circle fill = "gray" cx="5" cy="15" r="4"></circle>
                <circle fill = "gray" cx="15" cy="5" r="4"></circle>
            </pattern>
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-gray)" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-gray)" opacity="1"/>
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-gray)" opacity="1"/>
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-gray)" opacity="1"/>
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-gray)" opacity="1" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-gray)" opacity="1" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-gray)" opacity="1" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-gray)" opacity="1" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-gray)" opacity="1" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-gray" fill="gray" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-gray)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-gray" fill="gray" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-gray)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-gray" fill="gray" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-gray)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-gray" fill="gray" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-gray)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-gray" fill="gray" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-gray)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-gray" fill="gray" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-gray)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-gray" fill="gray" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-gray)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-gray" fill="gray" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-gray)" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-gray" fill="gray" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "gray" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-gray)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-gray" fill="gray" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "gray" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-gray)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-gray" fill="gray" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "gray" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-gray)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-gray" fill="gray" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "gray" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-gray)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-gray" fill="gray" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "gray" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-gray)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-gray" fill="gray" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "gray" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-gray)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-gray" fill="gray" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "gray" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-gray)" />
        </svg>, 
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-gray" fill="gray" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "gray" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-gray)" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" stroke="gray" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <rect x="5" y="5" width="40" height="40" stroke="gray" stroke-width="4.7" fill="transparent" />
        </svg>, 
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,45 5,45" stroke="gray" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="gray" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="gray" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="gray" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="gray" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="gray" stroke-width="4.7" fill="transparent" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-gray">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="gray" />
                        </radialGradient>
                    </defs>
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-gray)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-gray">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="gray" />
                        </radialGradient>
                    </defs>
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-gray)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-gray">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="gray" />
                        </radialGradient>
                    </defs>
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-gray)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-gray">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="gray" />
                        </radialGradient>
                    </defs>
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-gray)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-gray">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="gray" />
                        </radialGradient>
                    </defs>
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-gray)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-gray">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="gray" />
                        </radialGradient>
                    </defs>
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-gray)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-gray">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="gray" />
                        </radialGradient>
                    </defs>
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-gray)" />
        </svg>, 
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-gray">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="gray" />
                        </radialGradient>
                    </defs>
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-gray)" />
        </svg>,


        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="black" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="black" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="black" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="black" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="black" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="black" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="black" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="black" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-black" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "black" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "black" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-black)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-black" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "black" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "black" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-black)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-black" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "black" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "black" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-black)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-black" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "black" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "black" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-black)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-black" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "black" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "black" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-black)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-black" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "black" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "black" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-black)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-black" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "black" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "black" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-black)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-checkers-black" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect fill = "black" x="0" width="10" height="10" y="0"></rect>
                <rect fill = "black" x="10" width="10" height="10" y="10"></rect>
            </pattern>
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-checkers-black)" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-black" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "black" cx="5" cy="5" r="4"></circle>
                <circle fill = "black" cx="15" cy="15" r="4"></circle>
                <circle fill = "black" cx="5" cy="15" r="4"></circle>
                <circle fill = "black" cx="15" cy="5" r="4"></circle>
            </pattern>
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-black)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-black" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "black" cx="5" cy="5" r="4"></circle>
                <circle fill = "black" cx="15" cy="15" r="4"></circle>
                <circle fill = "black" cx="5" cy="15" r="4"></circle>
                <circle fill = "black" cx="15" cy="5" r="4"></circle>
            </pattern>
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-black)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-black" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "black" cx="5" cy="5" r="4"></circle>
                <circle fill = "black" cx="15" cy="15" r="4"></circle>
                <circle fill = "black" cx="5" cy="15" r="4"></circle>
                <circle fill = "black" cx="15" cy="5" r="4"></circle>
            </pattern>
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-black)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-black" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "black" cx="5" cy="5" r="4"></circle>
                <circle fill = "black" cx="15" cy="15" r="4"></circle>
                <circle fill = "black" cx="5" cy="15" r="4"></circle>
                <circle fill = "black" cx="15" cy="5" r="4"></circle>
            </pattern>
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-black)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-black" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "black" cx="5" cy="5" r="4"></circle>
                <circle fill = "black" cx="15" cy="15" r="4"></circle>
                <circle fill = "black" cx="5" cy="15" r="4"></circle>
                <circle fill = "black" cx="15" cy="5" r="4"></circle>
            </pattern>
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-black)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-black" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "black" cx="5" cy="5" r="4"></circle>
                <circle fill = "black" cx="15" cy="15" r="4"></circle>
                <circle fill = "black" cx="5" cy="15" r="4"></circle>
                <circle fill = "black" cx="15" cy="5" r="4"></circle>
            </pattern>
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-black)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-black" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "black" cx="5" cy="5" r="4"></circle>
                <circle fill = "black" cx="15" cy="15" r="4"></circle>
                <circle fill = "black" cx="5" cy="15" r="4"></circle>
                <circle fill = "black" cx="15" cy="5" r="4"></circle>
            </pattern>
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-black)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-dots-black" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle fill = "black" cx="5" cy="5" r="4"></circle>
                <circle fill = "black" cx="15" cy="15" r="4"></circle>
                <circle fill = "black" cx="5" cy="15" r="4"></circle>
                <circle fill = "black" cx="15" cy="5" r="4"></circle>
            </pattern>
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-dots-black)" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-black)" opacity="1"/>
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-black)" opacity="1"/>
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-black)" opacity="1"/>
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-black)" opacity="1" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-black)" opacity="1" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-black)" opacity="1" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-black)" opacity="1" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-stripes-black)" opacity="1" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-black" fill="black" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-black)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-black" fill="black" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-black)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-black" fill="black" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-black)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-black" fill="black" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-black)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-black" fill="black" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-black)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-black" fill="black" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-black)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-black" fill="black" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-black)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-diamond-black" fill="black" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d='M0 8 
          C5 11 5 11 8 16 
          C11 11 11 11 16 8 
          C11 5 11 5 8 0 
          C5 5 5 5 0 8 Z' />
                    </pattern>
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-diamond-black)" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-black" fill="black" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "black" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-black)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-black" fill="black" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "black" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-black)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-black" fill="black" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "black" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-black)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-black" fill="black" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "black" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-black)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-black" fill="black" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "black" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-black)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-black" fill="black" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "black" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-black)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-black" fill="black" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "black" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-black)" />
        </svg>, 
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <pattern id="pattern-lines-black" fill="black" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                        <rect fill = "black" x="0" width="20" height="5" y="0"></rect>
                    </pattern>
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-lines-black)" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="4.7" fill="transparent" />
        </svg>, 
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="4.7" fill="transparent" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="4.7" fill="transparent" />
        </svg>,

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-black">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="black" />
                        </radialGradient>
                    </defs>
            <circle cx="25" cy="25" r="20" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-black)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-black">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="black" />
                        </radialGradient>
                    </defs>
            <rect x="5" y="5" width="40" height="40" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-black)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-black">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="black" />
                        </radialGradient>
                    </defs>
            <polygon points="25,5 45,45 5,45" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-black)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-black">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="black" />
                        </radialGradient>
                    </defs>
            <polygon points="25,5 45,20 40,45 10,45 5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-black)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-black">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="black" />
                        </radialGradient>
                    </defs>
            <polygon points="25,5 32,18 47.5,21 35.5,31.5 38,47.5 25,39.5 12,47.5 14.5,31.5 2.5,21 18,18" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-black)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-black">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="black" />
                        </radialGradient>
                    </defs>
            <path d="M25 5 Q40 10, 45 25 Q40 40, 25 45 Q10 40, 5 25 Q10 10, 25 5" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-black)" />
        </svg>,
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-black">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="black" />
                        </radialGradient>
                    </defs>
            <polygon points="25,5 42.5,20 25,45 7.5,20" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-black)" />
        </svg>, 
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <defs>
                        <radialGradient id="pattern-gradient-black">
                        <stop offset="3%" stop-color="white" />
                        <stop offset="95%" stop-color="black" />
                        </radialGradient>
                    </defs>
            <polygon points="25,5 42.5,17.5 32.5,45 17.5,45 7.5,17.5" stroke="black" stroke-width="1.5" fill="url(#pattern-gradient-black)" />
        </svg>,
    ]; 

    

    const [shuffledShapes, setShuffledShapes] = useState([]);
    const [shuffledShapesIndeces, setShuffledShapesIndeces] = useState([]);
    const [clickedShapes, setClickedShapes] = useState([]);

    const sets = ["Shape", "Color", "Pattern", "ShapeColor", "ShapePattern","ColorPattern"];
    const [chosenSet, setChosenSet] = useState("");

    const [level, setLevel] = useState(1);
    const [solvedCards, setSolvedCards] = useState([]);
    const [correctCards, setCorrectCards] = useState([]);
    const [wrongCards, setWrongCards] = useState([]);
    const [warningText, setWarningText] = useState("");
    const [textColor, setTextColor] = useState("");
    const [spawn, setSpawn] = useState(true);

    const [showButton, setShowButton] = useState(false);
    const [numPairs, setNumPairs] = useState(0);

    const [pairsPreFirst, setPairsPreFirst] = useState(0);
    const [firstPair, setFirstPair] = useState(false);
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
                numPairs = 4;
            } else if (level > 6 && level <= 9) {
                let temp = Math.floor(Math.random() * (sets.length - 3)) + 3;
                while (chosenSet === sets[temp]) {
                    temp = Math.floor(Math.random() * (sets.length - 3)) + 3;
                }
                newChosenSet = sets[temp];
                numPairs = 6;
            } else if (level > 9 && level <= 12) {
                let temp = Math.floor(Math.random() * (sets.length - 3)) + 3;
                while (chosenSet === sets[temp]) {
                    temp = Math.floor(Math.random() * (sets.length - 3)) + 3;
                }
                newChosenSet = sets[temp];
                numPairs = 8;
            } else if (level > 12) {
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
                                while(Math.floor(newArray[j - 1] / 64) !== Math.floor(temp / 64)) {
                                    
                                    temp = Math.floor(Math.random() * shapes.length);
                                }
                                newArray.push(temp);
                            } else {
                                newArray.push(createUnique(newArray, (val) => Math.floor(val / 64)));
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
                                while(Math.floor((newArray[k - 1] % 64) / 8) !== Math.floor((temp % 64) / 8)) {
                                    
                                    temp = Math.floor(Math.random() * shapes.length);
                                }
                                newArray.push(temp);
                            } else {
                                newArray.push(createUnique(newArray, (val) => Math.floor((val % 64) / 8)));
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
                                while(newArray[l - 1] % 8 !== temp % 8 || Math.floor(newArray[l - 1] / 64) !== Math.floor(temp / 64)) {
                                    
                                    temp = Math.floor(Math.random() * shapes.length);
                                }
                                newArray.push(temp);
                            } else {
                                newArray.push(createUniqueMult(newArray, (val) => val % 8, (val) => Math.floor(val / 64)));
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
                                while(newArray[m - 1] % 8 !== temp % 8 || Math.floor((newArray[m - 1] % 64) / 8) !== Math.floor((temp % 64) / 8)) {
                                    
                                    temp = Math.floor(Math.random() * shapes.length);
                                }
                                newArray.push(temp);
                            } else {
                                newArray.push(createUniqueMult(newArray, (val) => val % 8, (val) => Math.floor((val % 64) / 8)));
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
                                while(Math.floor(newArray[n - 1] / 64) !== Math.floor(temp / 64) || Math.floor((newArray[n - 1] % 64) / 8) !== Math.floor((temp % 64) / 8)) {
                                    
                                    temp = Math.floor(Math.random() * shapes.length);
                                }
                                newArray.push(temp);
                            } else {
                                newArray.push(createUniqueMult(newArray, (val) => Math.floor(val / 64), (val) => Math.floor((val % 64) / 8)));
                            }
                        } else {
                            newArray.push(Math.floor(Math.random() * shapes.length));
                        }
                    }
                    break;
            }

            setSpawn(false);
            
            console.log(level);

            newArray = newArray.sort(() => Math.random() - 0.5);

            setShuffledShapesIndeces(newArray);
            setShuffledShapes(newArray.map((index) => shapes[index]));

            if(level < 12) {
                chosenSetList.push(newChosenSet);
            }
            shapesListList[level] = newArray;
        }

        if(clickedShapes.length === 2) {
            if(checkMatch()) {
                correctCards.push.apply(correctCards, clickedShapes);
                setWarningText("Nice!");
                setTextColor("#2E8970");
            } else {
                wrongCards.push.apply(wrongCards, clickedShapes);
                setWarningText("Not a pair!");
                setTextColor("#CD3843");
            }
            clickedShapes.length = 0;
        }

        if(correctCards.length === 2) {
            //setTimeout(() => {
                solvedCards.push.apply(solvedCards, correctCards);
                correctCards.splice(0, correctCards.length);
            //}, 750);
        } else if(wrongCards.length === 2) {
            setTimeout(() => {
                wrongCards.splice(0, wrongCards.length);
            }, 750);
        }

        if(solvedCards.length === numPairs * 2 && solvedCards.length > 0) {
            setShowButton(true);
            setWarningText("Good job!");
            setTextColor("#FF9417");
        }
    }, [level, clickedShapes, correctCards, wrongCards, onTimeEnd]);

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

        let count = 0;
        while(tempCurr.includes(rule1(temp)) || tempCurr2.includes(rule2.temp)) {
            temp = Math.floor(Math.random() * shapes.length);

            count++;

            if(count > 3000) {
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
                if(Math.floor(val1 / 64) === Math.floor(val2 / 64)) {
                    decision = true;
                }
                break;
            case "Pattern":
                if(Math.floor((val1 % 64) / 8) === Math.floor((val2 % 64) / 8)) {
                    decision = true;
                }
                break;
            case "ShapeColor":
                if(val1 % 8 === val2 % 8 && Math.floor(val1 / 64) === Math.floor(val2 / 64)) {
                    decision = true;
                }
                break;
            case "ShapePattern":
                if(val1 % 8 === val2 % 8 && Math.floor((val1 % 64) / 8) === Math.floor((val2 % 64) / 8)) {
                    decision = true;
                }
                break;
            case "ColorPattern":
                if(Math.floor(val1 / 64) === Math.floor(val2 / 64) && Math.floor((val1 % 64) / 8) === Math.floor((val2 % 64) / 8)) {
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
        score *= (100/12);
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
            <div style={{"height": "5vh"}}>

            </div>
            <div style={{"height": "10vh"}}>
                <div style={{textAlign: 'center'}}>
                    <h3>Pair up the matching cards</h3>
                </div>
            </div>
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
                (correctCards.includes(index) ? 
                (<div key={index} className="cardCorrect" onClick={() => cardClicked(index)}>
                <div>{shape}</div>
                </div>)
                :
                (wrongCards.includes(index) ? 
                (<div key={index} className="cardWrong" onClick={() => cardClicked(index)}>
                <div>{shape}</div>
                </div>)
                :
                (<div key={index} className="card" onClick={() => cardClicked(index)}>
                <div>{shape}</div>
                </div>))))
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
                    <defs>
                        <pattern id="pattern-stripes-gray" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
                            <line x1="0" y="0" x2="0" y2="6" stroke="gray" stroke-width="6" />
                        </pattern>
                    </defs>
                    <defs>
                        <pattern id="pattern-stripes-black" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
                            <line x1="0" y="0" x2="0" y2="6" stroke="black" stroke-width="6" />
                        </pattern>
                    </defs>
                    <defs>
                        <pattern id="pattern-stripes-purple" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
                            <line x1="0" y="0" x2="0" y2="6" stroke="purple" stroke-width="6" />
                        </pattern>
                    </defs>
                    <defs>
                        <pattern id="pattern-stripes-teal" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
                            <line x1="0" y="0" x2="0" y2="6" stroke="teal" stroke-width="6" />
                        </pattern>
                    </defs>
                    <defs>
                        <pattern id="pattern-lines-green" fill="green" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                            <rect fill = "green" x="0" width="20" height="5" y="0"></rect>
                        </pattern>
                    </defs>
                    <defs>
                        <pattern id="pattern-lines-red" fill="red" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                            <rect fill = "red" x="0" width="20" height="5" y="0"></rect>
                        </pattern>
                    </defs>
                    <defs>
                        <pattern id="pattern-lines-blue" fill="blue" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                            <rect fill = "blue" x="0" width="20" height="5" y="0"></rect>
                        </pattern>
                    </defs>
                    <defs>
                        <pattern id="pattern-lines-orange" fill="orange" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                            <rect fill = "orange" x="0" width="20" height="5" y="0"></rect>
                        </pattern>
                    </defs>
                    <defs>
                        <pattern id="pattern-lines-black" fill="black" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                            <rect fill = "black" x="0" width="20" height="5" y="0"></rect>
                        </pattern>
                    </defs>
                    <defs>
                        <pattern id="pattern-lines-gray" fill="gray" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                            <rect fill = "gray" x="0" width="20" height="5" y="0"></rect>
                        </pattern>
                    </defs>
                    <defs>
                        <pattern id="pattern-lines-teal" fill="teal" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                            <rect fill = "teal" x="0" width="20" height="5" y="0"></rect>
                        </pattern>
                    </defs>
                    <defs>
                        <pattern id="pattern-lines-purple" fill="purple" x="9" y="9" width="16" height="16" patternUnits="userSpaceOnUse">
                            <rect fill = "purple" x="0" width="20" height="5" y="0"></rect>
                        </pattern>
                    </defs>
                </svg>
            </div>

            <button className="buttonNext" onClick={onTimeEnd}>Skip</button>
        </div>
    );
};

export default CardPair;
