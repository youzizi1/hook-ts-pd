import { createGlobalStyle } from "styled-components";

export const PrismStyle = createGlobalStyle`
  pre[class*="language-"] {
    padding: 14px;
    max-width: 300px;
  }

  code[class*="language-"],
  pre[class*="language-"] {
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace !important;
    font-weight: 400;
    font-size: 13px;
    line-height: 1.8;
    letter-spacing: 0;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #999988;
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.string,
  .token.attr-value {
    color: #e3116c;
  }

  .token.punctuation,
  .token.operator {
    color: #393a34;
  }

  .token.entity,
  .token.url,
  .token.symbol,
  .token.number,
  .token.boolean,
  .token.variable,
  .token.constant,
  .token.property,
  .token.regex,
  .token.inserted {
    color: #36acaa;
  }

  .token.atrule,
  .token.keyword,
  .token.attr-name,
  .language-autohotkey .token.selector {
    color: #00a4db;
  }

  .token.function,
  .token.deleted,
  .language-autohotkey .token.tag {
    color: #9a050f;
  }

  .token.tag,
  .token.selector,
  .language-autohotkey .token.keyword {
    color: #00009f;
  }
`;
