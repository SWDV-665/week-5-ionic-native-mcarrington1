import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GroceriesService } from './groceries.service';


@Injectable({
  providedIn: 'root'
})
export class InputDialogService {

  constructor(public alertController: AlertController, public dataService: GroceriesService) { }

  // async showAddItemPrompt() {
  //   const alert = await this.alertController.create({
  //     cssClass: 'my-custom-class',
  //     header: 'Add Item',
  //     inputs: [
  //       {
  //         name: 'name',
  //         type: 'text',
  //         placeholder: 'Name'
  //       },
  //       {
  //         name: 'quantity',
  //         type: 'number',
  //         placeholder: 'Quantity'
  //       }
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         cssClass: 'secondary',
  //         handler: () => {
  //           console.log('Confirm Cancel');
  //         }
  //       }, {
  //         text: 'Save',
  //         handler: item => {
  //           this.dataService.addItem(item);
  //           console.log('Item Saved - ', item);
  //         }
  //       }
  //     ]
  //   });
  //   await alert.present();
  // }

  async showPrompt(item?, index?) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: item ? "Edit Item": "Add Item",
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Name',
          value: item ? item.name : null
        },
        {
          name: 'quantity',
          type: 'number',
          placeholder: 'Quantity',
          value: item ? item.quantity : null
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Save',
          handler: item => {

            if (index !== undefined) {
              this.dataService.editItem(item, index);
              console.log('Item Updated - ', item);
            } else {
              this.dataService.addItem(item);
              console.log('Item Saved - ', item);
            }
          }
        }
      ]
    });
    await alert.present();
  }

}
