import React from 'react';
import RootLayout from './src/components/root-layout/root-layout';
import './src/global-styles/global.css';

export const wrapRootElement = ({ element }) => <RootLayout>{element}</RootLayout>;