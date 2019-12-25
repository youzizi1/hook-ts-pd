import { createGlobalStyle } from "styled-components";

export const IconStyle = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('iconfont.eot?t=1577125573914'); /* IE9 */
    src: url('iconfont.eot?t=1577125573914#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('iconfont.woff?t=1577125573914') format('woff'),
    url('iconfont.ttf?t=1577125573914') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('iconfont.svg?t=1577125573914#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-mark:before {
    content: "\e63a";
  }

  .icon-collect:before {
    content: "\e60a";
  }

  .icon-email:before {
    content: "\e610";
  }

  .icon-copy:before {
    content: "\e60c";
  }

  .icon-lock:before {
    content: "\e637";
  }

  .icon-comment:before {
    content: "\e60d";
  }

  .icon-edit:before {
    content: "\e840";
  }

  .icon-time:before {
    content: "\e618";
  }

  .icon-search:before {
    content: "\e612";
  }

  .icon-delete:before {
    content: "\e604";
  }

  .icon-like:before {
    content: "\e631";
  }
`;
