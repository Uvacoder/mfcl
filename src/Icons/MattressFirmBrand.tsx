import React from 'react'

interface Props {
  width?: string | number
  height?: string | number
  fillColor?: string
  [x: string]: unknown
}

const MattressFirmBrand: React.FunctionComponent<Props> = ({
  width = 190,
  height = 30,
  fillColor = '#E50D73',
  ...rest
}) => (
  <svg width={width} height={height} viewBox="0 0 147 21" {...rest}>
    <g fillRule="evenodd">
      <g fill={fillColor}>
        <path d="M0 14.27h3.961l1.904-9.83h.04l.504 9.83h3.165l4.544-9.83h.038l-2.135 9.83h3.961L18.934.005h-6.078L9.07 7.676H9.03L8.856.006H2.894L0 14.27zm24.102-7.792h.034l.394 3.552h-2.22l1.792-3.552zm-7.586 7.787h3.615l.888-1.694h3.76l.194 1.694h3.492l-1.797-11.85H23.18l-6.665 11.85zm12.975.005h3.552l1.773-8.816h3.197l.613-3.04h-9.942l-.613 3.04h3.196L29.49 14.27zm10.782 0h3.551L45.6 5.454h3.195l.613-3.04h-9.94l-.614 3.04h3.195l-1.775 8.816zm7.555 0h3.485l.84-4.135h1.533c.984 0 1.443.466 1.443 1.08 0 .614-.179 1.328-.179 1.89 0 .53.017.862.146 1.161h3.39c-.292-.698-.162-1.91-.162-3.022 0-1.112-.146-2.125-1.195-2.429v-.032c1.656-.28 2.687-1.536 2.687-3.263 0-2.508-1.63-3.104-3.761-3.104h-5.839L47.828 14.27zm5.325-9.032h1.92c.919 0 1.194.564 1.194 1.03 0 .713-.548 1.327-1.726 1.327h-1.872l.484-2.357zm6.15 9.032h9.65l.613-3.039h-6.1l.307-1.478h5.551l.564-2.822h-5.534l.306-1.477h5.97l.598-3.04h-9.52L59.302 14.27zm21.624-8.268c.064-2.924-2.148-3.87-4.6-3.87-2.325 0-4.84 1.23-4.84 3.903.003 1.976 1.354 2.737 2.758 3.22 1.597.548 2.775.664 2.775 1.528 0 .78-.855 1.146-1.549 1.146-.58 0-1-.034-1.312-.299-.29-.3-.435-.697-.435-1.35h-3.433c-.144 3.023 2.243 4.268 4.89 4.268 2.502 0 5.196-1.35 5.196-4.201 0-1.412-.677-2.54-2.678-3.27-1.13-.416-2.856-.465-2.856-1.362 0-.78.774-.963 1.37-.963.405 0 .775.066 1.033.27.258.204.42.498.404.98h3.277zm10.604 0c.064-2.924-2.146-3.87-4.6-3.87-2.323 0-4.84 1.23-4.84 3.903 0 1.976 1.354 2.738 2.754 3.22 1.599.548 2.78.664 2.78 1.528 0 .78-.854 1.146-1.548 1.146-.581 0-1.001-.034-1.312-.299-.291-.3-.436-.697-.436-1.35h-3.436c-.142 3.027 2.245 4.272 4.895 4.272 2.503 0 5.197-1.35 5.197-4.2 0-1.413-.678-2.54-2.68-3.27-1.128-.417-2.855-.466-2.855-1.363 0-.78.774-.963 1.372-.963.402 0 .774.066 1.032.27.259.204.42.498.404.98l3.273-.004zm.783 8.268h4.272l1.106-5.434h5.457l.68-3.397h-5.456l.369-1.778h6.427l.737-3.656h-10.7L92.314 14.27zm11.845 0h4.272L111.307.005h-4.274L104.16 14.27zm6.268 0h4.197l1.012-4.976h1.844c1.18 0 1.729.56 1.729 1.3 0 .72-.215 1.598-.215 2.278 0 .638.02 1.038.175 1.398h4.079c-.35-.84-.196-2.294-.196-3.635 0-1.342-.173-2.565-1.436-2.918v-.04c2-.34 3.242-1.859 3.242-3.936-.004-3.016-1.963-3.74-4.528-3.74h-7.03l-2.873 14.27zm6.409-10.87h2.31c1.107 0 1.443.676 1.443 1.24 0 .86-.656 1.598-2.077 1.598h-2.259l.583-2.837zm7.786 10.87h3.962l1.903-9.83h.04l.503 9.83h3.167l4.542-9.83h.04l-2.136 9.83h3.962L143.556.005h-6.079l-3.785 7.671h-.041l-.173-7.67h-5.963l-2.893 14.264zM91.83 16.94s12.093-1.42 27.107-1.69c15.1-.27 21.346.995 21.346.995l-.322 1.727s-6.146-1.23-20.988-.96c-14.93.269-28.687 3.238-28.687 3.238l1.544-3.31zM145.152 0c.711.005 1.284.602 1.28 1.334-.005.731-.585 1.32-1.296 1.317-.711-.005-1.285-.6-1.28-1.332 0-.353.136-.69.38-.938s.574-.385.916-.38zm0 2.455c.289 0 .565-.123.764-.337.2-.214.306-.503.295-.8.014-.398-.185-.773-.52-.977-.333-.203-.748-.203-1.082 0-.334.204-.533.579-.52.978-.01.297.097.586.297.8.2.215.477.336.766.336zM144.65.549h.582c.36 0 .525.145.525.443 0 .298-.172.397-.393.422l.43.683h-.252l-.41-.665h-.247v.665h-.235V.55zm.235.687h.245c.206 0 .394-.01.394-.255 0-.205-.175-.237-.332-.237h-.31l.003.492z" />
      </g>
    </g>
  </svg>
)

export default MattressFirmBrand