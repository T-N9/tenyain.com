'use client'
import { useEffect } from "react";

const CharacterHead: React.FC = () => {
    useEffect(() => {
        const pupils = document.querySelectorAll<HTMLElement>(".eye");
        const eyebrows = document.querySelectorAll<HTMLElement>(".eyebrow");

        // Center position for the eyes
        const eyeCenterY = 93.54;

        const handleMouseMove = (e: MouseEvent) => {
            pupils.forEach((pupil) => {
                const rect = pupil.getBoundingClientRect();
                const x = (e.pageX - rect.left) / 150 + "px";
                const actual_y = (e.pageY - rect.top) / 150 + "px";
                const y = (parseInt(actual_y) > 5) ? '5' : actual_y; 
                pupil.style.transform = `translate3d(${x}, ${y}, 0px)`;
                console.log()
            });

            eyebrows.forEach((eyebrow, index) => {
                if (e.pageY < eyeCenterY) {
                    if (index === 0) {
                        eyebrow.style.transform =
                            "translateY(-2px) translateX(-5px) rotate(-6deg)";
                    } else {
                        eyebrow.style.transform =
                            "translateY(-30px) translateX(15px) rotate(10deg)";
                    }
                } else {
                    eyebrow.style.transform = "translateY(0px) translateX(0px) rotate(0deg)";
                }
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="relative flex justify-center items-center">
            <div className="p-16 z-0 absolute bg-primary-200 dark:bg-accent-800 rounded-full">
                <div className="w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] rounded-full bg-primary-600 dark:bg-accent-600">

                </div>
            </div>
            <div
                className="relative z-30"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <svg
                    className="w-[200px] lg:w-[350px]"
                    width="250"
                    id="Layer_2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 160.25 168.21"
                >
                    <defs>
                        <style>
                            {`
                  .eye {
                    fill: #404040;
                  }
    
                  .eyebrow {
                    fill: #404040;
                    transition: all 200ms linear;
                  }
    
                  .cls-1 {
                    fill: #1e1e1e;
                  }
    
                  .cls-2 {
                    fill: #fff;
                  }
    
                  .cls-3 {
                    fill: #ffeddc;
                  }
    
                  .cls-4 {
                    fill: none;
                    stroke: #ff9292;
                    strokeLinecap: round;
                    stroke-miterlimit: 10;
                    strokeWidth: 7px;
                  }
    
                  .cls-5 {
                    fill: #d3a475;
                  }
                `}
                        </style>
                    </defs>
                    <g id="Layer_1-2" data-name="Layer_1">
                        <path
                            className="cls-3"
                            d="M144.56,41.8v83.47c0,23.72-19.22,42.94-42.94,42.94h-39.58c-23.71,0-42.94-19.22-42.94-42.94V41.8c0-11.11,9.01-20.12,20.13-20.12h85.21c1.28,0,2.52.12,3.73.35,9.33,1.75,16.39,9.94,16.39,19.77Z"
                        />
                        <path
                            className="cls-5"
                            d="M90.52,83.62h18.08c6.31,0,11.44,5.13,11.44,11.44v19.96c0,6.31-5.13,11.44-11.44,11.44h-6.64c-6.31,0-11.44-5.13-11.44-11.44v-31.4h0Z"
                        />
                        <path
                            className="cls-3"
                            d="M14.76,83.62h4.34v29.53h-4.34C6.61,113.14,0,106.53,0,98.38H0C0,90.23,6.61,83.62,14.76,83.62Z"
                        />
                        <path
                            className="cls-5"
                            d="M13.69,92.13h5.42v12.51h-5.42c-3.45,0-6.25-2.8-6.25-6.25h0c0-3.45,2.8-6.25,6.25-6.25Z"
                        />
                        <path
                            className="cls-3"
                            d="M159.33,83.62h.92v29.53h-.92c-8.15,0-14.76-6.61-14.76-14.76h0c0-8.15,6.61-14.76,14.76-14.76Z"
                            transform="translate(304.81 196.76) rotate(-180)"
                        />
                        <rect
                            className="eyebrow"
                            x="48.6"
                            y="72.07"
                            width="35.9"
                            height="11.55"
                            rx="5.77"
                            ry="5.77"
                        />
                        <rect
                            className="eyebrow"
                            x="110.62"
                            y="72.07"
                            width="35.9"
                            height="11.55"
                            rx="5.77"
                            ry="5.77"
                        />
                        <path
                            className="cls-5"
                            d="M150.82,92.13h1.54v12.51h-1.54c-3.45,0-6.25-2.8-6.25-6.25h0c0-3.45,2.8-6.25,6.25-6.25Z"
                            transform="translate(296.92 196.76) rotate(180)"
                        />
                        <circle className="cls-2" cx="71.23" cy="93.54" r="10.61" />
                        <circle className="eye" cx="69.67" cy="93.54" r="6.61" />
                        <circle className="cls-2" cx="130.65" cy="93.54" r="10.61" />
                        <circle className="eye" cx="129.1" cy="93.54" r="6.61" />
                        <path
                            className="cls-1"
                            d="M52.42,0h92.14v16.78c0,11.87-9.63,21.5-21.5,21.5H30.93v-16.78C30.93,9.63,40.56,0,52.42,0Z"
                        />
                        <path
                            className="cls-1"
                            d="M30.14,16.57h9.09v53.57h-10.98c-10.32,0-18.7-8.38-18.7-18.7v-14.29c0-11.36,9.22-20.58,20.58-20.58Z"
                        />
                        <path
                            className="cls-1"
                            d="M157.85,37.15v14.29c0,8.44-5.6,15.57-13.29,17.89v-27.53c0-9.83-7.06-18.02-16.39-19.77v-5.47h9.1c11.37,0,20.58,9.22,20.58,20.59Z"
                        />
                        <path className="cls-4" d="M61.68,131.64s8.48,16.53,43.59,11.16" />
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default CharacterHead;
