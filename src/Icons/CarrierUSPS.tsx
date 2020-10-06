import React from 'react'

interface Props {
  width?: string | number
  height?: string | number
  transform?: string
  fillColor?: string
  [x: string]: unknown // for the rest property
}

const USPS: React.FunctionComponent<Props> = ({
  width = '44',
  height = '27',
  fillColor = '#2D2926',
  transform = '',
  ...rest
}) => (
  <svg width={width} height={height} viewBox="0 0 44 27" transform={transform} fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.72542 0.13498H5.92743L6.26535 0.2011L6.66939 0.269049L7.7465 0.539016L9.22857 0.807148L10.0376 1.011L10.9136 1.2121L11.8566 1.34709L12.7988 1.61706L13.8098 1.75112L14.8199 2.02108L18.053 2.62622L19.064 2.89619L20.1421 3.09821L21.0833 3.30022L22.0952 3.50224L23.0374 3.70425L23.9813 3.83924L24.7894 4.04218L25.5984 4.17624L26.2715 4.37734L26.8775 4.51324L27.4156 4.57936L27.8876 4.64731L28.2255 4.71526L28.4266 4.78229H28.5607L29.4376 4.98431L30.2457 5.11929L30.9197 5.32131L31.4578 5.45538L31.9977 5.65831L32.4018 5.79329L32.9399 6.06234L33.1419 6.19733L33.4789 6.53341V6.60137L33.5477 6.6684V6.73543H36.4421L36.713 6.80338H36.982L37.1841 6.87042H37.3861L37.5881 6.93836L38.1271 7.2065L38.1941 7.3424L38.6661 8.08252L38.8011 8.95761L38.6661 10.0366L38.33 11.0467L37.9251 12.0567L37.5201 12.8657L37.1841 13.4047L37.05 13.6068L36.915 13.6756L36.578 13.8079L36.106 14.0108L35.432 14.2798L34.691 14.5507L33.7488 14.9538L32.7378 15.3579L31.5928 15.7628L30.3127 16.3009L28.9647 16.7729L27.6195 17.311L24.6553 18.525L23.1053 19.131L21.5553 19.6709L20.0071 20.3413L18.391 20.9492L16.8409 21.4873L15.358 22.1622L13.8098 22.7021L12.3947 23.2402L9.69964 24.3173L8.48754 24.7893L7.34247 25.1933L6.33238 25.5965L5.45728 25.9335L4.71533 26.2705L4.1102 26.4734L3.63821 26.6763L3.36824 26.7425L3.30029 26.8086H38.1271L43.7854 0H5.72542V0.13498Z"
      fill={fillColor}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M31.7958 8.82447L31.5929 8.89242L30.2458 9.16055H29.9088L29.6388 9.22758H29.3707L28.9648 9.29646L28.7637 9.36349L28.6287 9.43052L28.5608 9.56642V9.69957L28.6967 9.83455H28.9648L29.2348 9.90159H29.9088L30.3128 9.83455H30.7169L31.6608 9.69957H32.1328L32.6709 9.63162L33.142 9.56642L33.5479 9.49756L34.018 9.43052H35.8371L36.0382 9.49756L36.1741 9.56642L36.3082 9.76752V10.0366L36.2411 10.3056L36.1741 10.6426L36.0382 11.0467L35.8371 11.5186L35.7021 11.9906L35.6351 12.2597L35.7691 12.3947L35.9041 12.3267L36.1741 12.0567L36.3082 11.8556L36.5102 11.5186L36.7131 11.1146L36.9151 10.6426L37.1162 10.2395L37.2512 9.83455L37.3182 9.49756V9.09352L37.1842 8.75652L36.9822 8.5545L36.7131 8.35249L36.3761 8.2175L35.9712 8.15047L35.501 8.08252H32.6709L32.6039 8.15047H32.5359L32.4019 8.2175L32.266 8.48747L32.1328 8.5545L31.9978 8.68948L31.7958 8.82447Z"
      fill={fillColor}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.44621 6.19727L0 26.8085L0.202936 26.7424L0.60697 26.4733L1.28005 26.2043L2.15699 25.7323L3.16616 25.2612L4.31215 24.6552L5.65923 24.0482L6.93929 23.3742L8.28637 22.7682L9.56551 22.0942L10.8456 21.4872L12.0577 20.8811L13.0687 20.3412L13.9438 19.9381L14.6178 19.6029L15.0898 19.4L15.7628 19.063L16.3698 18.726L17.1099 18.3881L17.851 17.985L18.525 17.648L19.333 17.311L20.0741 16.9069L20.8821 16.5718L21.6911 16.1659L25.7324 14.4827L27.5515 13.8757L27.8205 13.8078L28.0896 13.6756L28.4266 13.6067L29.6387 13.2027L31.0546 12.7986L31.5257 12.7307L32.9398 12.3266L33.7488 12.1926L34.0178 12.1246L34.2199 12.0567H34.4228L34.6239 11.9906L34.7589 11.8556H34.8268V11.7867L34.6909 11.5186L34.4889 11.4515L34.2199 11.3836H33.9508L33.5477 11.3175H33.1418L32.6707 11.3836L31.8627 11.4515L30.9867 11.5856L30.0436 11.7867L29.0326 11.9906L28.0234 12.2596L26.9454 12.5966L25.9344 12.9336L24.8573 13.2697L23.8472 13.6756L22.8353 14.0107L21.8931 14.3477L21.018 14.6847L20.2081 15.0888L19.535 15.3578L18.929 15.6287L18.457 15.8978L15.8978 7.94838H32.1997L32.2658 7.6123L31.9977 7.27438L31.5927 7.07236L30.9867 6.87035L30.3127 6.66833L28.5606 6.39928L25.7324 6.19727H4.44621Z"
      fill={fillColor}
    />
  </svg>
)

export default USPS
