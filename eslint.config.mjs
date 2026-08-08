import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    rules: {
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: '@mui/material',
              message: 'Use deep MUI imports, for example @mui/material/Box.',
            },
            {
              name: '@mui/icons-material',
              message: 'Use deep MUI icon imports, for example @mui/icons-material/Add.',
            },
          ],
        },
      ],
    },
  },
];

export default eslintConfig;
