import { Component } from '@angular/core';
import {
  GlobalService,
  ThemeMode,
  ThemeModes,
  ThemeOption,
  ThemeOptions,
} from 'src/app/services/global.service';

@Component({
  selector: 'app-toggle-theme',
  templateUrl: './toggle-theme.component.html',
  styleUrls: ['./toggle-theme.component.scss'],
})
export class ToggleThemeComponent {
  themeOptions: ThemeOption[] = [
    {
      text: 'Blue',
      value: ThemeOptions.Blue,
    },
    {
      text: 'Dark Blue',
      value: ThemeOptions.DarkBlue,
    },
    {
      text: 'Indigo',
      value: ThemeOptions.Indigo,
    },
    {
      text: 'Aqua',
      value: ThemeOptions.Aqua,
    },
    {
      text: 'Green',
      value: ThemeOptions.Green,
    },
    {
      text: 'Dark Green',
      value: ThemeOptions.DarkGreen,
    },
    {
      text: 'Teal',
      value: ThemeOptions.Teal,
    },
    {
      text: 'Violet',
      value: ThemeOptions.Violet,
    },
    {
      text: 'Purple',
      value: ThemeOptions.Purple,
    },
    {
      text: 'Pink Red',
      value: ThemeOptions.PinkRed,
    },
    {
      text: 'Orange',
      value: ThemeOptions.Orange,
    },
    {
      text: 'Red',
      value: ThemeOptions.Red,
    },
    {
      text: 'Yellow Brown',
      value: ThemeOptions.YellowBrown,
    },
    {
      text: 'Brown',
      value: ThemeOptions.Brown,
    },
  ];

  themeModes: ThemeMode[] = [
    {
      text: 'Light',
      value: ThemeModes.Light,
    },
    {
      text: 'Dark',
      value: ThemeModes.Dark,
    },
  ];

  constructor(public gs: GlobalService) {
    this.gs.activeTheme = this.gs.activeTheme
      ? this.gs.activeTheme
      : this.themeOptions[11];
    this.gs.activeThemeMode = this.gs.activeThemeMode
      ? this.gs.activeThemeMode
      : this.themeModes[0];
  }

  themeChanged() {
    document.body.className = '';
    const className =
      this.gs.activeTheme.value + ' ' + this.gs.activeThemeMode.value;
    document.querySelector('body').className = className;
  }

  themeModeToggled() {
    document.body.className = '';
    const className =
      this.gs.activeTheme.value + ' ' + this.gs.activeThemeMode.value;
    document.querySelector('body').className = className;
  }
}
