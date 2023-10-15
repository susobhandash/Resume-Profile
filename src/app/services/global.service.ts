import { Injectable } from '@angular/core';

export interface ThemeOption {
  text: string;
  value: ThemeOptions;
}

export enum ThemeOptions {
  Red = 'red',
  Aqua = 'aqua',
  Blue = 'blue',
  Green = 'green',
  DarkGreen = 'dark-green',
  Teal = 'teal',
  Purple = 'purple',
  Orange = 'orange',
  Violet = 'violet',
  PinkRed = 'pink-red',
  YellowBrown = 'yellow-brown',
  DarkBlue = 'dark-blue',
  Brown = 'brown',
  Indigo = 'indigo',
}

export interface ThemeMode {
  text: string;
  value: ThemeModes;
}

export enum ThemeModes {
  Light = 'light-mode',
  Dark = 'dark-mode',
}

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  public deviceOrientation;
  public deviceType;
  public activeTheme: ThemeOption;
  public activeThemeMode: ThemeMode;
}
