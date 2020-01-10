import { createGlobalStyle } from "styled-components";

export const IconStyle = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('iconfont.eot?t=1578646940039'); /* IE9 */
    src: url('iconfont.eot?t=1578646940039#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAPUAAsAAAAAB/AAAAOIAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDBgqDVINHATYCJAMMCwgABCAFhG0HORsQBxEVnHXIfhTGbXRwzqmktFKFUXxzr35j34d4eBqrvT8zq9pORLpjjWSSSBwhe4bQSYHSSSQvYf9X9/tb8rAEF23ZXCYOW4tYUFvNR3FdGSa+6NZ0LPVGRagu2fOtZ/kfSbvzlw/rPE6jFEIiJP9zuLSxBOe3LJe5Bka9AOOAAhp7kRXIAfkNYzcRNMTtBJrm2WCuw2JSoK4A/QLxpjA/E+oZtdKQG+pCtWJqgfgKFfXULHYG4Av/ffwHp5ACSSUDGHr/dWgOnP+y+eWV+f+8ZxQBnOmMMGaRsQsU4kWl+ZEchXchTU9cmlOripCm8s3+w9m+tLrRf7xEVAFkt8GmHEn8ssE0gl9eEQnXb6UqR78BP1Xs+AVF2lRR1tPWrmbVdh+5hwf27i6F1x1YUB9mHh+5+/vU7PBRm8NH70lqH50R1PI2HlruAIG/JxKBoY8nCA9pk0eYaXm4eRAeb0/p8fU9f8f2t6ikkG6TvGpqSi8/RdW5oQaWG5BblTPCgDrlcEs/EyUTQvvAuwmZuZKs3l7wro9Myqzx9GPcoixB7rwX0fKS067De7iXxz8+JogA6Qx5mOtl6+e+yQTRlRWKWpF8FKJMadVYpnGDE+as442Xlgc1jTSbr3MVWeNMRAwJMWYzGSyPNXYAOMo1jxMN/jJhfK6lqBUQroQVf0X8MoySzG8GNQcDQbBJy0hzSKQEDGkaaTUV2KMGAgMCA5vZKNj8nEXeOiNEnbH4HV9h0QUfFaZd6ZnC2nniN/fPnW+k3oE9OLs8o0wZdpW4LvAb6bZzjKgTXoHZYV5FPgDkTbGen/s3PptchKfL+3xJERHAD78Xo9w9OyzQXVq/dUvwKzkdK4rPA5pcXDZmh5bsJpUioelL/MB8GPoYLp10zibUTRJIauYgq1tFFuwuVLScQlXdGTTtCJ/dkhoRe1Ea2PaWIPR9IOn6DlnfF1mwP6iY+kNVPxA0PYjRki3rUWiuBK1iAPeCwfNKSKdG5B6xu81W0jxOvKKkwQdlVuRjLa4oU4xI965SJSDhBRppN5xnhig8otesV411nlPVhzLPy8a4IpClUACcFzDw2IpobWUK3z9CnZuZJQ1lPforJJKhcVDKFB2QrXjtVHYrtyR3nYpSBBDBFqCRjGiGYQZidacR8lSmHxCMarlSjbqKs+Wly/utgyawdo4UOYr6WxZMt1kPN1amzQY=') format('woff2'),
    url('iconfont.woff?t=1578646940039') format('woff'),
    url('iconfont.ttf?t=1578646940039') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('iconfont.svg?t=1578646940039#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-noresult:before {
    content: "\e62c";
  }

  .icon-mark:before {
    content: "\e63a";
  }
`;
