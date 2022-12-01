export type ThemeModeType = 'dark' | 'light';

export type BaseTypeType =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info';

export type ThemeType = 'blur' | 'normal';

export interface BaseComponentProps {
  themeMode?: ThemeModeType;
  componentType?: BaseTypeType;
  theme?: ThemeType;
}
