import React from "react";
import { jsx, css, keyframes, useTheme } from "@emotion/react"; /** @jsx jsx */
import { Link } from "react-router-dom";

export function Logo({ position, active }) {
  return (
    <Link to="/" css={[logoStyles(active), position]}>
      <Icon />
    </Link>
  );
}

//////////Styles

function logoStyles(active) {
  const { open, close } = logoAnimation();
  return css`
    z-index: 50;
    cursor: pointer;
    width: 100%;
    max-height: 90px;

    display: flex;
    align-items: center;
    padding: 0.5em;

    svg {
      width: 100%;
      .word {
        stroke: var(--darkGreen);
      }
      stroke: var(--black);
    }
  `;
}

function logoAnimation() {
  const closeAnimations = keyframes`
	  	0% {
        color: white;
        box-shadow: 3px -1px 8px var(--pink);
			
		}
	
		50% {
      color: #88CAC6;
			
		}
	
		100% {
      color: #009E8F;
      box-shadow: 3px -1px 8px var(--dark);
			
		}
	`;

  const openAnimation = keyframes`
	  	0% {
        color: #009E8F;
        box-shadow: 3px -1px 8px var(--dark);
        
		
		}
	
		50% {
      color: #88CAC6;
      
		}
	
		100% {
      color: white;
      box-shadow: 3px -1px 8px var(--pink);
		}
	`;

  return {
    open: css`
      animation: ${openAnimation} 0.2s ease forwards;
    `,
    close: css`
      animation: ${closeAnimations} 0.2s ease forwards;
    `,
  };
}

function Icon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1404 450">
      <g id="Frame 4">
        <path
          className="word"
          strokeWidth="20"
          d="M14 284.5c.165-1.695.407-3.513.734-5.428M27.5 284.5c44.928.702 112.5-36.5 97.024-55m-109.79 49.572C19.03 253.865 37.929 211.731 87 209.5c19.668-.894 31.832 7.625 37.524 20m-109.79 49.572L27.5 60m97.024 169.5c8.659 21.381 30.376 61.229 47.976 49.572 17.6-11.658 33.833-57.905 36-69.572l-92 226.5M232 271.5c-7.333-75-17.6-224.3 0-221.5m-48 147c27.833-17.667 84.4-49 88-33m35-146l-30 253.5c7.167-17 31.7-54.7 38.5-47.5 6.8 7.2 19.5 27.333 25 36.5 9.667-.333 30.2 0 39-8 22.8-13.2 27.833-22.5 27.5-25.5-6.667-8.5-23.3-20.4-36.5 0-10 33.723-15.5 42 16.5 42s73.5-16.5 79-16.5m104 8c-3.5 9-114 11-92-25.5 17.6-29.2 63-39.5 83.5-41 4 19.167 11.3 59.3 8.5 66.5zm0 0l8 11m38.5-2.5V161c34.667-6.167 99-10.4 79 22s-52.333 40.5-66 40.5M641 6c-25 86.667-69 261.1-45 265.5M749 17l-41.5 254.5c16.5-43.667 51.2-107 58-11l23-12.5c-5.167-14-4.9-44.4 37.5-54l12 54m0 0c-17.833 3.667-52.4 9.9-48 5.5 4.4-4.4 33.833-5.5 48-5.5zm0 0l18 5.5m92-198L914.933 215l-.153.737M905.5 260.5l9.28-44.763M926 258c22 19 81.5-10 101.5-33 22.8-58.4-65.647-30.509-112.72-9.263m85.22 30.661L1076 225c26.4-16.4 6.67-27.5-6.5-31-7.67-4.5-25.7 4.2-28.5 15-3.5 13.5-24.5 44.5 2 44.5s54-13.5 67-26.5c5.77-5.773 25.86-32.972 50.23-89M1219 6c-17.57 37.151-39.23 87.09-58.77 132m0 0c8.29 76.833 21.73 208.9 9.27 122.5-15.58-108-59.5-108-53-108h16.5l260-14.5"
        ></path>
        <path d="M0.5 0.5H1403.5V449.5H0.5z"></path>
      </g>
    </svg>
  );
}
