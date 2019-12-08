import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import { colors } from '~/styles/variables';

export default createGlobalStyle`
  .Toastify__toast {
    border-radius: 8px !important;
  }

  .Toastify__toast--info {
    background: ${colors.primary} !important;
  }
`;
