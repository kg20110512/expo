import * as Constants from '~/common/constants';

export const globalExtras = `
  img.wide-image {
    max-width: 900px;
  }

  img[src*="https://placehold.it/15"] {
    width: 15px !important;
    height: 15px !important;
  }

  .react-player > video {
    outline: none;
  }

  blockquote {
    background: ${Constants.expoColors.gray[100]};
  }

  details {
    margin-bottom: 20px;
    padding-top: 20px;
  }

  details summary {
    outline: none;
    cursor: pointer;
    margin-bottom: 15px;
  }

  details summary h3 {
    font-size: 1.2rem;
    font-family: expo-brand-bold,sans-serif;
    display: inline;
  }

  details summary h4 {
    font-size: 1.1rem;
    font-family: expo-brand-bold,sans-serif;
    display: inline;
  }

  details summary p {
    margin-top: 10px;
    margin-right: 15px;
    line-height: 1.725rem;
  }

  details summary:hover {
    opacity: 0.75;
  }

  details p {
    margin-left: 15px;
  }

  .snack-inline-example-button {
    display: inline-block;
    border: none;
    border-radius: 4px;
    padding: 0rem 1rem;
    height: 40px;
    margin: 0;
    margin-bottom: 0.5rem;
    text-decoration: none;
    background: ${Constants.expoColors.primary[500]};;
    color: ${Constants.expoColors.white};;
    font-family: ${Constants.fontFamilies.demi};;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    -webkit-appearance: none;
    -moz-appearance: none;
    transition: all 170ms linear;
  }

  .snack-inline-example-button:hover, .snack-inline-example-button:focus  {
    box-shadow: 0 2px 8px rgba(0, 1, 0, 0.2);
    opacity: 0.85;
  }

  .snack-inline-example-button:focus {
    outline: 0;
    border: 0;
  }

  .snack-inline-example-button:active {
    outline: 0;
    border: 0;
  }

  .diff-container {
    border: 1px solid #e3e3e3;
    border-radius: 2px;
    margin-bottom: 10px;
  }

  .diff-container table {
    font-size: 0.9rem;
    border-radius: none;
    border: none;
  }

  .diff-container td, .diff-container th {
    border-bottom: none;
    border-right: none;
  }
`;
