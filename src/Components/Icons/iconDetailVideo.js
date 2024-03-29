export const Sound = ({ className, width = '4.0rem', height = '4.0rem' }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="24" cy="24" r="24"></circle>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21 16.9118C21 15.2513 20.8942 15.0909 20.709 15.0221C20.5238 14.9763 20.3122 14.9992 20.1799 15.1138L15.0741 19.5258H11.4762C11.2116 19.5258 11 19.7092 11 19.9384V28.084C11 28.3132 11.2116 28.4965 11.4762 28.4965H15.0741L20.1799 32.8862C20.3122 33.0008 20.5238 33.0237 20.709 32.9779C20.8942 32.9091 21 32.7487 21 32.5882V16.9118Z"
            fill="white"
        ></path>
        <path
            d="M30.6653 15C32.7348 17.2304 34.0001 20.2174 34.0001 23.5C34.0001 26.7826 32.7348 29.7696 30.6653 32"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
        ></path>
        <path
            d="M26.8799 17.8833C28.1994 19.381 28.9999 21.347 28.9999 23.5C28.9999 25.653 28.1994 27.6191 26.8799 29.1168"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
        ></path>
    </svg>
);
export const SoundMute = ({
    className,
    width = '4.0rem',
    height = '4.0rem',
}) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="24" cy="24" r="24" fill="000" fill-opacity="1"></circle>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21 16.9118C21 15.2513 20.8942 15.0909 20.709 15.0221C20.5238 14.9763 20.3122 14.9992 20.1799 15.1138L15.0741 19.5258H11.4762C11.2116 19.5258 11 19.7092 11 19.9384V28.084C11 28.3132 11.2116 28.4965 11.4762 28.4965H15.0741L20.1799 32.8862C20.3122 33.0008 20.5238 33.0237 20.709 32.9779C20.8942 32.9091 21 32.7487 21 32.5882V16.9118Z"
            fill="white"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M35.098 18.9489C34.5998 18.4508 33.7921 18.4508 33.2939 18.949L30.1368 22.1061L26.9797 18.949C26.4815 18.4508 25.6738 18.4508 25.1756 18.9489C24.6775 19.4471 24.6775 20.2548 25.1756 20.753L28.3327 23.9101L25.1757 27.0672C24.6775 27.5654 24.6775 28.3731 25.1757 28.8713C25.6738 29.3694 26.4815 29.3694 26.9797 28.8713L30.1368 25.7142L33.2939 28.8713C33.7921 29.3694 34.5998 29.3694 35.0979 28.8713C35.5961 28.3731 35.5961 27.5654 35.0979 27.0672L31.9409 23.9101L35.098 20.753C35.5962 20.2548 35.5962 19.4471 35.098 18.9489Z"
            fill="white"
        ></path>
    </svg>
);

export const HeartNone = ({ className, width, height }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 48 48"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 9.01703C19.0025 3.74266 11.4674 3.736 6.67302 8.56049C1.77566 13.4886 1.77566 21.4735 6.67302 26.4016L22.5814 42.4098C22.9568 42.7876 23.4674 43 24 43C24.5326 43 25.0432 42.7876 25.4186 42.4098L41.327 26.4016C46.2243 21.4735 46.2243 13.4886 41.327 8.56049C36.5326 3.736 28.9975 3.74266 24 9.01703ZM21.4938 12.2118C17.9849 8.07195 12.7825 8.08727 9.51028 11.3801C6.16324 14.7481 6.16324 20.214 9.51028 23.582L24 38.1627L38.4897 23.582C41.8368 20.214 41.8368 14.7481 38.4897 11.3801C35.2175 8.08727 30.0151 8.07195 26.5062 12.2118L26.455 12.2722L25.4186 13.3151C25.0432 13.6929 24.5326 13.9053 24 13.9053C23.4674 13.9053 22.9568 13.6929 22.5814 13.3151L21.545 12.2722L21.4938 12.2118Z"
        ></path>
    </svg>
);
export const EmotionDetail = ({ className, width, height }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 48 48"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6ZM2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24Z"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 23C18.6569 23 20 21.2091 20 19C20 16.7909 18.6569 15 17 15C15.3431 15 14 16.7909 14 19C14 21.2091 15.3431 23 17 23Z"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M31 23C32.6569 23 34 21.2091 34 19C34 16.7909 32.6569 15 31 15C29.3431 15 28 16.7909 28 19C28 21.2091 29.3431 23 31 23Z"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 28.3431C16 31.4673 19.5817 36 24 36C28.4183 36 32 31.4673 32 28.3431C32 25.219 16 25.219 16 28.3431Z"
        ></path>
    </svg>
);

export const Trash = ({ className, width, height }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 48 48"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.5 7.50006V9.50006H28.5V7.50006H19.5ZM32.5 9.50006V6.00006C32.5 4.61935 31.3807 3.50006 30 3.50006H18C16.6193 3.50006 15.5 4.61935 15.5 6.00006V9.50006H7C6.44772 9.50006 6 9.94778 6 10.5001V12.5001C6 13.0523 6.44772 13.5001 7 13.5001H9.5V39.5001C9.5 41.7092 11.2909 43.5001 13.5 43.5001H34.5C36.7091 43.5001 38.5 41.7092 38.5 39.5001V13.5001H41C41.5523 13.5001 42 13.0523 42 12.5001V10.5001C42 9.94778 41.5523 9.50006 41 9.50006H32.5ZM34.5 13.5001H13.5V39.5001H34.5V13.5001ZM18.5 34.0001C17.9477 34.0001 17.5 33.5523 17.5 33.0001V20.0001C17.5 19.4478 17.9477 19.0001 18.5 19.0001H20.5C21.0523 19.0001 21.5 19.4478 21.5 20.0001V33.0001C21.5 33.5523 21.0523 34.0001 20.5 34.0001H18.5ZM27.5 34.0001C26.9477 34.0001 26.5 33.5523 26.5 33.0001V20.0001C26.5 19.4478 26.9477 19.0001 27.5 19.0001H29.5C30.0523 19.0001 30.5 19.4478 30.5 20.0001V33.0001C30.5 33.5523 30.0523 34.0001 29.5 34.0001H27.5Z"
        ></path>
    </svg>
);

export const HeartNoneClick = ({ className, width, height }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="rgba(254, 44, 85, 1)"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clip-path="url(#HeartFill_clip0)">
            <g filter="url(#HeartFill_filter0_d)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.5 2.25C10.5 2.25 12 4.25 12 4.25C12 4.25 13.5 2.25 16.5 2.25C20 2.25 22.5 4.99999 22.5 8.5C22.5 12.5 19.2311 16.0657 16.25 18.75C14.4095 20.4072 13 21.5 12 21.5C11 21.5 9.55051 20.3989 7.75 18.75C4.81949 16.0662 1.5 12.5 1.5 8.5C1.5 4.99999 4 2.25 7.5 2.25Z"
                ></path>
            </g>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.40179 12.1998C3.58902 14.6966 5.7592 16.9269 7.74989 18.75C9.5504 20.3989 10.9999 21.5 11.9999 21.5C12.9999 21.5 14.4094 20.4072 16.2499 18.75C19.231 16.0657 22.4999 12.5 22.4999 8.49997C22.4999 8.41258 22.4983 8.32566 22.4952 8.23923C20.5671 13.6619 13.6787 18.5 11.75 18.5C10.3127 18.5 5.61087 15.8131 2.40179 12.1998Z"
                fill-opacity="0.03"
            ></path>
        </g>
        <defs>
            <filter
                id="HeartFill_filter0_d"
                x="-0.9"
                y="1.05"
                width="25.8"
                height="24.05"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
            >
                <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                ></feFlood>
                <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                ></feColorMatrix>
                <feOffset dy="1.2"></feOffset>
                <feGaussianBlur stdDeviation="1.2"></feGaussianBlur>
                <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                ></feColorMatrix>
                <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                ></feBlend>
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                ></feBlend>
            </filter>
            <clipPath id="HeartFill_clip0">
                <rect width="24" height="24" fill="white"></rect>
            </clipPath>
        </defs>
    </svg>
);
