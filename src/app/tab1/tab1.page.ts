import { Component } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  lstDevices:any=[]
  constructor(private bluetoothSerial: BluetoothSerial) {}

  searchBluetoothDevices() {
    this.bluetoothSerial.isEnabled().then(() => {
      this.bluetoothSerial.discoverUnpaired().then((devices) => {
        console.log(devices);
        this.lstDevices=devices;
      }).catch((error) => {
        console.log('Error discovering devices:', error);
      });
    }).catch((error) => {
      console.log('Bluetooth is not enabled:', error);
    });
  }

}
