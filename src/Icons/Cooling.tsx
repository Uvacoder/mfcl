import React from 'react'

interface Props {
  width?: string | number
  height?: string | number
  fillColor?: string
  [x: string]: unknown // for the rest property
}

const Cooling: React.FunctionComponent<Props> = ({ width = '22', height = '26', fillColor = '#2D2926', ...rest }) => (
  <svg width={width} height={height} fill="none" viewBox="0 0 22 26" {...rest}>
    <mask id="m882qegnba" width="22" height="26" x="0" y="0" maskUnits="userSpaceOnUse">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M21.7 18.81l-1.67-1 1.72-1.29c.113-.082.187-.206.206-.344.019-.138-.02-.277-.106-.386-.082-.112-.205-.187-.342-.207-.137-.02-.277.014-.388.097l-2.07 1.56-1-.57 1.59-1.2c.112-.082.186-.205.207-.342.02-.137-.014-.277-.097-.388-.18-.226-.506-.27-.74-.1l-1.94 1.45-1.39-.81v-4.59l1.39-.81L19 11.33c.235.165.557.121.74-.1.083-.111.118-.251.097-.388-.02-.137-.095-.26-.207-.342l-1.59-1.2 1-.57 2.07 1.56c.09.064.199.1.31.1.228.006.433-.137.506-.353.073-.215-.002-.453-.186-.587L20 8.16l1.67-1c.16-.095.259-.268.257-.455-.001-.186-.102-.358-.265-.45-.162-.092-.361-.09-.522.005l-1.3.76V5.7c.06-.212-.02-.44-.2-.567-.18-.128-.42-.128-.6 0-.18.127-.26.355-.2.567v2l-1 .61V6.74c-.064-.223-.268-.377-.5-.377-.232 0-.436.154-.5.377v2.13l-1.56.91-3.76-2.29V6l1.8-.9c.257-.13.36-.443.23-.7-.13-.257-.443-.36-.7-.23l-1.33.66v-.9l1.8-.9c.166-.084.275-.25.285-.436.01-.186-.079-.363-.235-.465-.156-.102-.354-.113-.52-.03l-1.33.66V1.52c.06-.211-.02-.439-.2-.566-.18-.128-.42-.128-.6 0-.18.127-.26.355-.2.567v1.24L9.15 2.1c-.257-.13-.57-.027-.7.23s-.027.57.23.7l1.8.9v.92l-1.33-.66c-.257-.13-.57-.027-.7.23s-.027.57.23.7l1.8.9v1.47L6.82 9.78l-1.56-.91V6.74c-.064-.223-.268-.377-.5-.377-.232 0-.436.154-.5.377v1.53l-1.09-.61v-2c.06-.212-.02-.44-.2-.567-.18-.128-.42-.128-.6 0-.18.127-.26.355-.2.567v1.39l-1.3-.76c-.16-.095-.36-.097-.522-.005-.163.092-.264.264-.265.45-.002.187.096.36.257.455l1.67 1L.25 9.45c-.184.134-.26.372-.186.588.073.215.278.358.506.352.111 0 .22-.036.31-.1L3 8.73l1 .57-1.66 1.2c-.112.082-.186.205-.207.342-.02.137.014.277.097.388.104.125.257.198.42.2.112.002.22-.033.31-.1l2-1.45 1.39.81v4.62l-1.39.81L3 14.67c-.147-.131-.355-.168-.538-.096-.183.072-.309.242-.326.437-.018.196.077.385.244.489l1.59 1.2-1 .57-2.09-1.56c-.111-.083-.25-.118-.388-.097-.137.02-.26.095-.342.207-.087.109-.125.248-.106.386.019.138.093.262.206.344L2 17.84l-1.67 1c-.248.143-.333.461-.19.71.096.162.271.261.46.26.091 0 .181-.024.26-.07L2.13 19v1.3c-.06.212.02.44.2.567.18.127.42.127.6 0 .18-.128.26-.355.2-.567v-2l1.05-.61v1.53c-.06.212.02.44.2.567.18.128.42.128.6 0s.26-.355.2-.567v-2.09l1.56-.91 3.66 2.29V20l-1.8.9c-.257.13-.36.443-.23.7.13.257.443.36.7.23l1.33-.66v.92l-1.8.9c-.166.084-.275.25-.285.436-.01.186.079.363.235.465.156.102.354.113.52.029l1.33-.66v1.24c-.06.212.02.44.2.567.18.128.42.128.6 0s.26-.355.2-.567v-1.26l1.33.66c.074.038.156.059.24.06.254.016.482-.155.54-.403.056-.248-.075-.5-.31-.597l-1.8-.9v-.92l1.33.66c.074.038.156.059.24.06.254.016.482-.155.54-.403.056-.248-.075-.5-.31-.597l-1.8-.9v-1.45l3.66-2.29 1.56.91v2.13c.064.223.268.377.5.377.232 0 .436-.154.5-.377v-1.53l1 .61v2c-.06.212.02.44.2.567.18.128.42.128.6 0s.26-.355.2-.567V19l1.3.76c.079.046.169.07.26.07.189.001.364-.098.46-.26.113-.09.184-.223.196-.367.011-.144-.038-.287-.136-.393zm-11.22-7.9v1.25l-1.33-.67c-.257-.125-.567-.023-.7.23-.063.123-.074.266-.03.397.043.132.136.24.26.303l1.15.58-1.15.58c-.235.096-.366.35-.31.597.058.248.286.419.54.403.084-.001.166-.022.24-.06l1.33-.67v1.25c-.06.212.02.44.2.567.18.127.42.127.6 0 .18-.128.26-.355.2-.567v-1.26l1.33.67c.074.038.156.059.24.06.254.016.482-.155.54-.403.056-.248-.075-.5-.31-.597L12.17 13l1.15-.58c.123-.062.217-.171.26-.303.043-.13.033-.274-.03-.397-.133-.253-.443-.355-.7-.23l-1.33.67v-1.25c-.064-.223-.268-.377-.5-.377-.232 0-.436.154-.5.377h-.04zM11 17.6l3.7-2.28-.05-4.64L11 8.4l-3.65 2.28v4.64L11 17.6z"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#m882qegnba)">
      <path fill={fillColor} d="M-4 -2H26V28H-4z" />
    </g>
  </svg>
)

export default Cooling