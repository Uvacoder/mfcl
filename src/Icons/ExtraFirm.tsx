import React from 'react'

interface Props {
  width?: string | number
  height?: string | number
  fillColor?: string
  [x: string]: unknown // for the rest property
}

const ExtraFirm: React.FunctionComponent<Props> = ({ width = '24', height = '15', fillColor = '#2D2926', ...rest }) => (
  <svg width="28" height="38" viewBox="0 0 28 38" fill="none">
    <path
      d="M24.5163 17.4417H4.24328C3.99303 17.4417 3.80603 17.6287 3.80603 17.8789C3.80603 18.1292 3.99303 18.3162 4.24328 18.3162H24.5163C24.7665 18.3162 24.9535 18.1292 24.9535 17.8789C24.9563 17.6919 24.7665 17.4417 24.5163 17.4417Z"
      fill={fillColor}
    />
    <path
      d="M4.24603 15.5029H24.519C24.7693 15.5029 24.9563 15.3159 24.9563 15.0657C24.9563 14.8154 24.7693 14.6284 24.519 14.6284H4.24603C3.99578 14.6284 3.80878 14.8154 3.80878 15.0657C3.80878 15.3159 3.99578 15.5029 4.24603 15.5029Z"
      fill={fillColor}
    />
    <path
      d="M16.5083 12.0625C16.7585 12.0625 16.9455 11.8755 16.9455 11.6253V6.86778H22.9515C23.2018 6.86778 23.3888 6.68078 23.3888 6.43053C23.3888 6.18028 23.2018 5.99328 22.9515 5.99328H16.9455V1.42553H23.7023C23.9525 1.42553 24.1395 1.23853 24.1395 0.988275C24.1395 0.738025 23.9525 0.551025 23.7023 0.551025H16.5083C16.258 0.551025 16.071 0.738025 16.071 0.988275V11.6253C16.071 11.8123 16.258 12.0625 16.5083 12.0625Z"
      fill={fillColor}
    />
    <path
      d="M13.882 11.2486L9.94129 6.11711L13.7583 1.23586C13.8215 1.17261 13.8848 1.04886 13.8848 0.922357C13.8848 0.672107 13.6978 0.485107 13.4475 0.485107C13.2605 0.485107 13.134 0.611607 13.0103 0.735357L9.38029 5.49011L5.62654 0.735357C5.56329 0.608857 5.43954 0.485107 5.24979 0.485107C4.99954 0.485107 4.81254 0.672107 4.81254 0.922357C4.81254 1.04886 4.87579 1.17261 4.99954 1.29911L8.81653 6.18036L4.81254 11.3119C4.74929 11.3751 4.68604 11.4989 4.68604 11.6254C4.68604 11.8756 4.87304 12.0626 5.12329 12.0626C5.31029 12.0626 5.43679 11.9361 5.56054 11.8124L9.37754 6.87061L13.2578 11.8756C13.321 12.0021 13.4448 12.1259 13.6345 12.1259C13.8848 12.1259 14.0718 11.9389 14.0718 11.6886C14.0058 11.4989 14.0058 11.3724 13.882 11.2486Z"
      fill={fillColor}
    />
    <path
      d="M4.93076 26.6569V27.6579H0.926758V21.1514H4.86751V22.1524H1.98826V23.8409H4.61726V24.8419H1.98826V26.5936H4.92801L4.93076 26.6569Z"
      fill={fillColor}
    />
    <path
      d="M9.49848 27.7184L8.06023 25.3397L6.62198 27.7184H5.36798L7.43323 24.3387L5.49448 21.1487H6.74573L8.06023 23.3377L9.37473 21.1487H10.626L8.68723 24.3387L10.7525 27.7184H9.49848Z"
      fill={fillColor}
    />
    <path d="M15.818 22.1524H13.9398V27.6579H12.8755V22.1524H10.9973V21.1514H15.752V22.1524H15.818Z" fill={fillColor} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.6935 25.2791H18.9448L20.3225 27.7239H21.5738L20.0723 25.1581C20.823 24.8446 21.3868 24.0939 21.3868 23.2799C21.3868 22.0891 20.4463 21.1514 19.2583 21.1514H16.6293V27.6579H17.6935V25.2791ZM19.2583 24.3414H17.6935V22.0864H19.2583C19.822 22.0864 20.2593 22.5869 20.2593 23.2139C20.2593 23.8409 19.822 24.3414 19.2583 24.3414Z"
      fill={fillColor}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.386 26.3434H26.202L26.6447 27.7211H27.8327L25.454 21.0881H24.1395L21.7607 27.6579H22.9487L23.386 26.3434ZM24.7637 22.4026L25.828 25.3424H23.6995L24.7637 22.4026Z"
      fill={fillColor}
    />
    <path
      d="M5.77775 31.5354V33.3504H8.47V34.3514H5.7805V37.0409H4.71625V30.4712H8.53325V31.4722H5.7805L5.77775 31.5354Z"
      fill={fillColor}
    />
    <path d="M10.659 30.4739V37.0436H9.59477V30.4739H10.659Z" fill={fillColor} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.0378 34.6649H14.289L15.6668 37.0464H16.8548L15.4165 34.4806C16.1673 34.1671 16.731 33.4164 16.731 32.6024C16.731 31.4116 15.7905 30.4739 14.6025 30.4739H11.9735V37.0436H13.0378V34.6649ZM14.6025 33.6639H13.0378V31.4089H14.6025C15.1663 31.4089 15.6035 31.9094 15.6035 32.5364C15.6035 33.1634 15.1663 33.6639 14.6025 33.6639Z"
      fill={fillColor}
    />
    <path
      d="M23.9855 37.0409H22.9213V32.3494L20.9193 35.6659H20.7928L18.7908 32.3494V37.0409H17.7265V30.4712H18.9145L20.9165 33.7244L22.9185 30.4712H24.046V37.0409H23.9855Z"
      fill={fillColor}
    />
  </svg>
)

export default ExtraFirm
