import { createContext } from 'react';

export type ThemeContextType = {
  color?: string;
};

export const ThemeContext = createContext<ThemeContextType>({
  color: 'aqua'
});
