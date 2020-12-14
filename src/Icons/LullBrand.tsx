import React from 'react'

interface Props {
  width?: string | number
  height?: string | number
  fillColor?: string
  [x: string]: unknown
}

const LullBrand: React.FunctionComponent<Props> = ({ width = 149, height = 90, fillColor = '#000', ...rest }) => (
  <svg width={width} height={height} viewBox="0 0 149 90" {...rest}>
    <g stroke="none" strokeWidth="1" fillRule="evenodd">
      <g transform="translate(30.000000, 0.000000)" fill={fillColor} fillRule="nonzero">
        <g transform="translate(45.000000, 45.000000) scale(-1, 1) rotate(-180.000000) translate(-45.000000, -45.000000)">
          <path d="M0,45 L0,0 L45,0 L90,0 L90,45 L90,90 L45,90 L0,90 L0,45 Z M87.3259053,45 L87.3259053,2.67409471 L45,2.67409471 L2.67409471,2.67409471 L2.67409471,45 L2.67409471,87.3259053 L45,87.3259053 L87.3259053,87.3259053 L87.3259053,45 Z" />
          <path d="M16.1532033,35.7910864 L16.1699164,20.5988858 L16.362117,19.8969359 C16.8802228,17.9582173 17.8746518,16.913649 19.6796657,16.4122563 C20.0139276,16.3203343 20.6490251,16.2618384 21.5849582,16.2367688 L22.9805014,16.1949861 L22.9805014,17.4401114 L22.9805014,18.6935933 L22.1532033,18.7437326 C21.183844,18.810585 20.3816156,19.0362117 19.913649,19.3788301 C19.454039,19.7130919 19.0779944,20.4818942 18.9693593,21.3091922 C18.9192201,21.6935933 18.8857939,27.6350975 18.8857939,36.45961 L18.8857939,50.9749304 L17.5069638,50.9749304 L16.1281337,50.9749304 L16.1532033,35.7910864 Z" />
          <path d="M55.9888579,36.2841226 C55.9888579,26.6155989 56.0222841,21.3593315 56.0724234,20.8913649 C56.3816156,18.4261838 57.3844011,17.0724234 59.356546,16.4791086 C59.9247911,16.3119777 60.2841226,16.270195 61.4456825,16.2367688 L62.8412256,16.1866295 L62.8412256,17.4568245 L62.8412256,18.718663 L62.3649025,18.718663 C61.7130919,18.7270195 60.6935933,18.9108635 60.2423398,19.1114206 C59.8245125,19.2952646 59.3899721,19.6963788 59.189415,20.0891365 C58.7715877,20.8913649 58.7966574,20.1058496 58.7715877,36.0835655 L58.7381616,50.9749304 L57.367688,50.9749304 L55.9888579,50.9749304 L55.9888579,36.2841226 Z" />
          <path d="M67.1030641,36.0250696 C67.1030641,23.1058496 67.1197772,20.9832869 67.2284123,20.356546 C67.7381616,17.4651811 69.4094708,16.2200557 72.810585,16.2116992 L73.9554318,16.2116992 L73.9554318,17.4651811 L73.9554318,18.718663 L73.545961,18.718663 C72.810585,18.718663 71.8328691,18.8941504 71.3398329,19.1114206 C70.7548747,19.3788301 70.362117,19.7966574 70.1030641,20.4401114 L69.902507,20.9331476 L69.8774373,35.9582173 L69.8607242,50.9749304 L68.4818942,50.9749304 L67.1030641,50.9749304 L67.1030641,36.0250696 Z" />
          <path d="M27.091922,33.2423398 C27.1253482,21.7688022 27.091922,22.5877437 27.5682451,21.3008357 C28.4791086,18.8774373 31.0362117,17.0807799 34.5710306,16.3704735 C35.6991643,16.1532033 37.9805014,16.0612813 39.0668524,16.2033426 C40.0612813,16.3286908 41.3899721,16.6629526 42.1337047,16.9721448 C43.3203343,17.4568245 44.6155989,18.4011142 45.1587744,19.1615599 L45.4428969,19.5626741 L45.5849582,19.1448468 C45.8857939,18.2423398 46.6545961,17.3314763 47.5153203,16.8635097 C48.3008357,16.4373259 49.0529248,16.2785515 50.5821727,16.2367688 L51.9777159,16.1866295 L51.9777159,17.4401114 L51.9777159,18.6935933 L51.2005571,18.7520891 C49.3454039,18.8774373 48.4846797,19.3871866 48.0752089,20.5821727 C47.9331476,20.9916435 47.9247911,21.7520891 47.8997214,32.4066852 L47.8830084,43.7883008 L46.5041783,43.7883008 L45.1337047,43.7883008 L45.1002786,33.6601671 C45.0752089,22.5292479 45.1086351,23.264624 44.5738162,22.1532033 C44.2896936,21.5766017 43.1949861,20.4651811 42.5097493,20.0640669 C40.2785515,18.7520891 36.6518106,18.4679666 33.9275766,19.3871866 C31.9554318,20.0473538 30.6267409,21.183844 30.0584958,22.6880223 L29.8746518,23.189415 L29.8495822,33.4930362 L29.8245125,43.7883008 L28.4456825,43.7883008 L27.0668524,43.7883008 L27.091922,33.2423398 Z" />
        </g>
      </g>
    </g>
  </svg>
)

export default LullBrand