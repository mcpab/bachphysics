/**
 * TypographyStyles.tsx
 * 
 * This file contains reusable React components for various typography styles
 * using Material-UI's Typography component. These components ensure consistent
 * styling across the application for different text elements such as headings
 * and body text.
 * 
 * Components:
 * - H1: Heading 1
 * - H2: Heading 2
 * - H3: Heading 3
 * - H4: Heading 4
 * - H5: Heading 5
 * - H6: Heading 6
 * - Body1: Body text 1
 * - Body2: Body text 2
 * 
 * Usage:
 * Import the desired component and use it to wrap your text content.
 * 
 * Example:
 * import { H1, Body1 } from './TypographyStyles';
 * 
 * function MyComponent() {
 *   return (
 *     <div>
 *       <H1>My Heading</H1>
 *       <Body1>This is some body text.</Body1>
 *     </div>
 *   );
 * }
 * 
 */
import React from 'react';
import Typography from '@mui/material/Typography';

interface TypographyProps {
    children: React.ReactNode;
    sx?: object;
    component?: React.ElementType;
  }
  

export const H1: React.FC<TypographyProps> = ({ children, sx }) => (
  <Typography variant="h1" gutterBottom sx={sx}>
    {children}
  </Typography>
);

export const H2: React.FC<TypographyProps> = ({ children, sx }) => (
  <Typography variant="h2" gutterBottom sx={sx}>
    {children}
  </Typography>
);

export const H3: React.FC<TypographyProps> = ({ children, sx }) => (
  <Typography variant="h3" gutterBottom sx={sx}>
    {children}
  </Typography>
);

export const H4: React.FC<TypographyProps> = ({ children, sx }) => (
  <Typography variant="h4" gutterBottom sx={sx}>
    {children}
  </Typography>
);

export const H5: React.FC<TypographyProps> = ({ children, sx }) => (
  <Typography variant="h5" gutterBottom sx={sx}>
    {children}
  </Typography>
);

export const H6: React.FC<TypographyProps> = ({ children, sx }) => (
  <Typography variant="h6" gutterBottom sx={sx}>
    {children}
  </Typography>
);

export const Body1: React.FC<TypographyProps> = ({ children, sx, component = 'div' }) => (
    <Typography variant="body1" gutterBottom sx={sx} component={component}>
      {children}
    </Typography>
  );
  
  export const Body2: React.FC<TypographyProps> = ({ children, sx, component = 'div' }) => (
    <Typography variant="body2" gutterBottom sx={sx} component={component}>
      {children}
    </Typography>
  );