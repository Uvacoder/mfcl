import React from 'react'

interface Props {
  width?: string | number
  height?: string | number
  fillColor?: string
  [x: string]: unknown // for the rest property
}

const Plush: React.FunctionComponent<Props> = ({ width = '24', height = '15', fillColor = '#2D2926', ...rest }) => (
  <svg width="32" height="33" viewBox="0 0 32 33" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.38123 29.4856C4.83041 29.4856 5.91649 28.3262 5.91649 26.9503C5.91649 25.5011 4.83041 24.4119 3.45449 24.4119H0.629395V32.0941H1.86199V29.4856H3.38123ZM3.30798 25.6445C4.10741 25.6445 4.61383 26.1541 4.61383 26.9503C4.61383 27.6733 4.10741 28.253 3.31116 28.3262H1.78873V25.6445H3.30798Z"
      fill={fillColor}
    />
    <path d="M11.3564 30.8615V32.0208H7.00574V24.4119H8.23833V30.7882H11.3533V30.8615H11.3564Z" fill={fillColor} />
    <path
      d="M12.0795 29.4856V24.4119H13.3121V29.4123C13.3121 30.2818 13.8185 30.9347 14.9778 30.9347C16.1372 30.9347 16.6436 30.2818 16.6436 29.4123V24.4119H17.8762V29.4856C17.8762 31.1513 16.6436 32.1673 14.9778 32.1673C13.2356 32.1673 12.0795 31.1545 12.0795 29.4856Z"
      fill={fillColor}
    />
    <path
      d="M18.8922 30.2818L19.9783 29.6289C20.2681 30.4252 20.8478 30.9348 21.8638 30.9348C22.8798 30.9348 23.2397 30.4984 23.2397 29.9188C23.2397 29.2658 22.6601 29.0493 21.5007 28.6862C20.3414 28.3231 19.182 27.8899 19.182 26.4407C19.182 25.0648 20.3414 24.2654 21.6472 24.2654C22.8798 24.2654 23.8226 24.9183 24.329 25.9311L23.2429 26.5841C22.9531 26.0044 22.5167 25.498 21.6441 25.498C20.9179 25.498 20.4115 25.8611 20.4115 26.4407C20.4115 27.0204 20.8478 27.3102 21.9339 27.6001C23.1665 28.0364 24.4691 28.3963 24.4691 29.9188C24.4691 31.2947 23.3831 32.1642 21.7874 32.1642C20.2681 32.1674 19.2521 31.4412 18.8922 30.2818Z"
      fill={fillColor}
    />
    <path
      d="M31.285 24.4119V32.0208H30.0492V28.7594H26.7878V32.0208H25.5552V24.4119H26.7878V27.5268H30.0492V24.4119H31.285Z"
      fill={fillColor}
    />
    <path
      d="M27.6223 20.3764C27.0426 20.3764 26.7528 20.2299 26.3897 20.0133C25.8801 19.7235 25.3036 19.3604 24.071 19.3604C22.9117 19.3604 22.332 19.6503 21.8256 19.9401C21.3192 20.1567 20.8828 20.3764 20.0101 20.3764C19.1374 20.3764 18.7043 20.1599 18.1979 19.9401C17.6914 19.6534 17.0385 19.3604 15.9524 19.3604C14.7931 19.3604 14.2134 19.6503 13.707 19.9401C13.2006 20.1567 12.7642 20.3764 11.8979 20.3764C11.0316 20.3764 10.5921 20.1599 10.0857 19.9401C9.57924 19.6534 8.92632 19.3604 7.84023 19.3604C6.60764 19.3604 6.02797 19.7235 5.52155 20.0133C5.15528 20.2299 4.86544 20.3764 4.28577 20.3764C3.99594 20.3764 3.77936 20.593 3.77936 20.8829C3.77936 21.1727 3.99594 21.3893 4.28577 21.3893C5.15528 21.3893 5.59162 21.0994 6.02478 20.8829C6.46113 20.5962 6.89429 20.3764 7.83705 20.3764C8.70655 20.3764 9.1429 20.593 9.64931 20.8128C10.1557 21.0994 10.8087 21.3925 11.8947 21.3925C13.0541 21.3925 13.6337 21.1026 14.1402 20.8128C14.6466 20.5962 15.0829 20.3733 15.9524 20.3733C16.8219 20.3733 17.2583 20.5898 17.7647 20.8096C18.2743 21.0994 18.9272 21.3925 20.0133 21.3925C21.1726 21.3925 21.7523 21.1026 22.2587 20.8128C22.7651 20.5962 23.2015 20.3733 24.071 20.3733C25.0138 20.3733 25.4469 20.5898 25.8833 20.8797C26.3196 21.0962 26.826 21.3861 27.6223 21.3861C27.9121 21.3861 28.1287 21.1695 28.1287 20.8797C28.1319 20.6663 27.9089 20.3764 27.6223 20.3764Z"
      fill={fillColor}
    />
    <path
      d="M5.37188 16.8985C5.00879 17.1151 4.71896 17.2647 4.13929 17.2647C3.84945 17.2647 3.63287 17.4813 3.63287 17.7712C3.63287 18.061 3.84945 18.2776 4.13929 18.2776C5.00879 18.2776 5.44514 17.9877 5.8783 17.7712C6.31464 17.4781 6.7478 17.2647 7.69056 17.2647C8.56007 17.2647 8.99641 17.4813 9.50283 17.7011C10.0092 17.9877 10.6622 18.2808 11.7483 18.2808C12.9076 18.2808 13.4873 17.9909 13.9937 17.7011C14.5001 17.4845 14.9364 17.2647 15.8059 17.2647C16.6754 17.2647 17.1118 17.4813 17.6182 17.7011C18.1246 17.9877 18.7775 18.2808 19.8636 18.2808C21.023 18.2808 21.6026 17.9909 22.1091 17.7011C22.6155 17.4845 23.0518 17.2647 23.9213 17.2647C24.8641 17.2647 25.2972 17.4813 25.7336 17.7712C26.1699 17.9877 26.6763 18.2776 27.4726 18.2776C27.7624 18.2776 27.979 18.061 27.979 17.7712C27.979 17.4813 27.7656 17.2647 27.4758 17.2647C26.8961 17.2647 26.6063 17.1182 26.2432 16.9017C25.7368 16.6118 25.1571 16.2455 23.9245 16.2455C22.7652 16.2455 22.1855 16.5354 21.6791 16.8252C21.1727 17.0418 20.7363 17.2647 19.8668 17.2647C18.9973 17.2647 18.561 17.0482 18.0546 16.8284C17.5481 16.5386 16.8952 16.2455 15.8091 16.2455C14.6498 16.2455 14.0701 16.5354 13.5637 16.8252C13.0541 17.0418 12.6209 17.2647 11.7483 17.2647C10.8787 17.2647 10.4424 17.0482 9.93599 16.8284C9.42957 16.5386 8.77983 16.2455 7.69056 16.2455C6.53441 16.2487 5.88467 16.6086 5.37188 16.8985Z"
      fill={fillColor}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.8948 13.9301C11.8948 14.2199 11.6782 14.4365 11.3884 14.4365C11.1017 14.4365 10.8851 14.1434 10.882 13.9301V1.24738C10.882 0.957547 11.0985 0.740967 11.3884 0.740967H15.806C18.8508 0.740967 20.8797 2.2634 20.8797 4.87191V4.9388C20.8797 7.83715 18.4145 9.28632 15.5894 9.28632H11.8948V13.9301ZM15.7391 1.68054H11.9712V8.34993H15.6658C18.131 8.34993 19.87 7.04408 19.87 5.01524V4.94198C19.87 2.83988 18.2043 1.68054 15.7391 1.68054Z"
      fill={fillColor}
    />
  </svg>
)

export default Plush
