import { Component, ComponentFactoryResolver } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { GroceriesService } from '../groceries.service';
import { InputDialogService } from '../input-dialog.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';




@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  loadItems() {
    return this.dataService.getItems();
  }

  async removeItem(item, index) {

    const toast = await this.toastController.create({
      message: 'Removing Item - ' + item.name,
      duration: 2000
    });
    toast.present();

    this.dataService.removeItem(index);
  }

  async shareItem(item, index) {

    const toast = await this.toastController.create({
      message: 'Sharing Item - ' + item.name,
      duration: 2000
    });
    toast.present();

    let message = "Grocery item - Name: " + item.name + " - Quantity: " + item.Quantity;
    let subject = "Shared via groceries app";

    this.socialSharing.share(message, subject).then(() => {
      // Sharing via email is possible
      console.log("message shared successfully!")
    }).catch((error) => {
      // Sharing via email is not possible
      console.log("Error while sharing :: ", error)
    });
  }

  async editItem(item, index) {

    const toast = await this.toastController.create({
      message: 'Editing Item - ' + item.name,
      duration: 2000
    });
    toast.present();
    this.inputDialogService.showPrompt(item, index);
  }

  async addItem() {
    this.inputDialogService.showPrompt();
  }


  constructor(public toastController: ToastController, public alertController: AlertController, public dataService: GroceriesService, public inputDialogService: InputDialogService, public socialSharing: SocialSharing) {}

}
