import { Component, HostListener, isDevMode } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Susobhan Dash Resume';
  name = 'Susobhan';

  navBarItems = [
    {label: 'About Me', icon: 'fas fa-user', link: '/home'},
    {label: 'Projects', icon: 'fas fa-code-fork', link: '/projects'},
    {label: 'Skills', icon: 'fas fa-list-check', link: '/skills'},
    {label: 'Contact', icon: 'fas fa-phone'},
  ];
  activeIdx = 0;
  deviceInfo = null;

  @HostListener('window:orientationchange', ['$event'])
  onOrientationChange(event) {
    setTimeout(() => {
      let orientation = event.target.orientation === 90 ? 'landscape' : 'portrait';
      this.checkDeviceType(orientation);
    }, 250);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    setTimeout(() => {
      this.setHeight();
    }, 250);
  }

  constructor(
    private deviceService: DeviceDetectorService,
    public globalService: GlobalService
  ) {
    this.checkDeviceType(null);
  }

  checkDeviceType(orientation = null) {
    if (!orientation) {
      this.deviceInfo = this.deviceService.getDeviceInfo();
      this.globalService.deviceOrientation = this.deviceInfo.orientation;

      // remove this code for production
      if (isDevMode()) {
        this.globalService.deviceType = this.globalService.deviceOrientation == 'portrait' ? 'mobile' : 'tablet';
      }
    } else {
      this.globalService.deviceOrientation = orientation;
    }

    setTimeout(() => {
      this.setHeight();
    });

    // const isMobile = this.deviceService.isMobile();
    // const isTablet = this.deviceService.isTablet();
    // const isDesktopDevice = this.deviceService.isDesktop();
  }

  setHeight() {
    const doc = document.documentElement;
    doc.style.setProperty('--app-height', `${window.innerHeight}px`);
  }
}
