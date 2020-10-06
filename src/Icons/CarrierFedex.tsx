import React from 'react'

interface Props {
  width?: string | number
  height?: string | number
  transform?: string
  fillColor?: string
  [x: string]: unknown // for the rest property
}

const FedEx: React.FunctionComponent<Props> = ({
  width = '55',
  height = '16',
  fillColor = '#2D2926',
  transform = '',
  ...rest
}) => (
  <svg width={width} height={height} viewBox="0 0 55 16" transform={transform} fill="none">
    <path
      d="M0.00663164 0.0106432C3.0016 -0.00965339 5.99656 0.00577202 8.99234 0.00333643C9.00452 1.13832 9.00533 2.27331 8.99153 3.40829C7.35319 3.41804 5.71403 3.41804 4.07488 3.40829C4.06351 4.11543 4.06757 4.82256 4.07245 5.52969C5.58089 5.51914 7.08852 5.52726 8.59696 5.52401C8.60346 6.14915 8.5994 6.77428 8.59615 7.39942C8.94038 6.88632 9.36417 6.43086 9.83993 6.03792C10.6266 5.44364 11.5846 5.08398 12.5621 4.97763C13.5372 4.92161 14.5455 4.90618 15.471 5.26421C16.6531 5.64904 17.6354 6.54128 18.2046 7.6381C18.3669 7.94012 18.4863 8.26243 18.6145 8.58068C19.0124 7.2752 19.9168 6.11261 21.1362 5.4826C22.2379 4.93703 23.5499 4.80957 24.7254 5.17816C25.3149 5.36407 25.8198 5.7351 26.2412 6.18C26.2469 4.1203 26.2436 2.06141 26.242 0.0017127C27.4363 0.00658389 28.6297 -0.00884152 29.8231 0.0114551C29.7963 2.94878 29.8199 5.88691 29.8118 8.82424C29.8166 10.9229 29.8037 13.0224 29.8183 15.1211C28.6427 15.1584 27.4671 15.1365 26.2915 15.1357C26.285 14.8069 26.2826 14.4789 26.2858 14.1509L26.2558 14.1955C25.7159 14.9043 24.9568 15.4685 24.0703 15.6406C22.9613 15.8355 21.7857 15.5927 20.8342 14.9936C19.4759 14.1411 18.5723 12.6335 18.3986 11.0471C16.1781 11.0406 13.9577 11.0487 11.7373 11.0422C11.613 11.0504 11.4783 11.0284 11.3646 11.0885C11.4125 11.7348 11.7632 12.368 12.3064 12.7269C12.9218 13.1531 13.7539 13.1718 14.431 12.8868C14.7273 12.7293 14.9368 12.4549 15.1487 12.2024C16.3032 12.2178 17.4585 12.1959 18.6129 12.2097C18.1534 13.4308 17.2766 14.5308 16.0848 15.0991C14.979 15.6398 13.6995 15.7551 12.4898 15.6033C11.0658 15.4149 9.71327 14.6526 8.86894 13.4819C8.20402 12.5621 7.83787 11.4222 7.87278 10.2856C7.85167 9.78629 7.94747 9.29431 8.00593 8.80069C6.69477 8.79663 5.38361 8.79988 4.07245 8.79907C4.06757 10.9205 4.06839 13.0427 4.07163 15.1641C2.71663 15.1852 1.36082 15.1641 0.00500791 15.1746C0.000136729 10.12 -0.00392259 5.06531 0.00663164 0.0106432ZM12.3007 7.5967C11.8818 7.87517 11.6455 8.33793 11.4921 8.80232C12.7634 8.81043 14.0332 8.83723 15.3038 8.80232C15.1787 8.43129 15.0456 8.03754 14.7452 7.768C14.0957 7.17047 13.0249 7.07954 12.3007 7.5967ZM23.6457 7.7542C22.7526 7.96934 22.1811 8.84372 22.0633 9.71404C21.8612 10.6574 22.1242 11.7396 22.8752 12.3786C23.5913 12.9997 24.7701 12.9656 25.4569 12.3153C26.1016 11.6398 26.225 10.6347 26.1072 9.74489C25.9968 9.14005 25.7866 8.49868 25.2889 8.10087C24.8334 7.72903 24.2107 7.6381 23.6457 7.7542Z"
      fill={fillColor}
    />
    <path
      d="M29.8231 0.0115356C32.6346 0.021278 35.4453 0.0196543 38.2559 0.0123475C38.2576 1.14084 38.26 2.26852 38.2543 3.39701C36.6387 3.43679 35.0207 3.40594 33.4034 3.41243C33.3945 4.12038 33.3409 4.83644 33.4424 5.53952C35.0523 5.52815 36.6614 5.53546 38.2714 5.53546C38.2381 6.61848 38.2722 7.70313 38.2519 8.78697C36.6493 8.79347 35.0475 8.79022 33.4448 8.7886C33.3417 9.3634 33.4059 9.94875 33.3888 10.5292C33.3904 10.9465 33.3637 11.3679 33.44 11.7819C35.0304 11.7714 36.6217 11.76 38.2121 11.7844C38.3193 12.1034 38.2308 12.4663 38.2568 12.8025C38.2884 13.5299 38.1821 14.2703 38.3396 14.9872C38.9152 14.4181 39.4153 13.7775 39.982 13.1995C40.4561 12.5946 41.0033 12.0547 41.5002 11.4694C41.8265 11.0983 42.2089 10.7712 42.4809 10.3555C42.4427 10.2751 42.3916 10.2029 42.3364 10.1347C41.5318 9.23269 40.7273 8.33152 39.9203 7.43278C39.3893 6.79222 38.7731 6.22311 38.2835 5.55007C39.339 5.51516 40.3968 5.54276 41.4531 5.53383C41.885 5.54358 42.3185 5.51029 42.7496 5.55007C43.5217 6.25558 44.1225 7.13645 44.923 7.81598C45.4832 7.16162 46.0734 6.53567 46.6181 5.86832C46.7562 5.71975 46.8917 5.49405 47.128 5.53302C48.5009 5.54358 49.8745 5.51516 51.2474 5.54845C51.0728 5.8261 50.8609 6.07535 50.6328 6.30916C49.4507 7.64143 48.2427 8.95097 47.085 10.3035C47.5047 10.9555 48.125 11.4539 48.608 12.0604C49.2819 12.7675 49.9208 13.5063 50.5784 14.2289C50.8415 14.5382 51.1362 14.8232 51.3497 15.1715C49.9711 15.1926 48.591 15.1707 47.2116 15.1804C47.0501 15.1715 46.8568 15.208 46.7367 15.0716C46.0644 14.3166 45.4052 13.5461 44.707 12.8138C44.103 13.5039 43.4673 14.1656 42.8868 14.8768C42.7626 15.0148 42.64 15.2121 42.4249 15.178C37.0333 15.182 31.6409 15.178 26.2485 15.1698C26.2428 14.8451 26.2331 14.5195 26.2558 14.1956L26.2858 14.151C26.2826 14.4789 26.285 14.8069 26.2915 15.1357C27.4671 15.1366 28.6427 15.1585 29.8182 15.1211C29.8036 13.0225 29.8166 10.923 29.8117 8.82432C29.8199 5.88699 29.7963 2.94886 29.8231 0.0115356Z"
      fill={fillColor}
    />
    <path
      d="M53.0871 13.2148C53.6546 13.0451 54.3512 13.568 54.2611 14.1817C54.3674 14.9295 53.3843 15.3841 52.8038 15.0058C52.052 14.6526 52.259 13.3382 53.0871 13.2148ZM53.0969 13.4137C52.781 13.5087 52.4847 13.8326 52.5294 14.1817C52.4863 14.7468 53.2 15.1438 53.6773 14.8751C54.1807 14.6478 54.2408 13.8473 53.7918 13.5355C53.588 13.3991 53.3331 13.3894 53.0969 13.4137Z"
      fill={fillColor}
    />
    <path
      d="M52.9165 13.5737C53.169 13.5818 53.4459 13.5225 53.6781 13.6492C53.6854 13.9894 53.6797 14.3287 53.7235 14.6665C53.7032 14.7119 53.6634 14.802 53.6431 14.8475C53.51 14.6121 53.4564 14.3198 53.2177 14.1615C53.1601 14.3726 53.1106 14.5869 53.0545 14.7988C52.8077 14.4432 52.9758 13.978 52.9165 13.5737ZM53.1609 13.7953C53.1641 13.8879 53.1682 13.9804 53.1723 14.0738C53.2559 14.0665 53.3403 14.06 53.4248 14.0543C53.4353 13.9691 53.4459 13.8846 53.4572 13.8002C53.3574 13.7986 53.2591 13.797 53.1609 13.7953Z"
      fill={fillColor}
    />
  </svg>
)

export default FedEx
