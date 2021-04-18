import { LightningElement } from "lwc";
import Contact_OBJECT from "@salesforce/schema/Contact";
import FIRSTNAME_FIELD from "@salesforce/schema/Contact.FirstName";
import LASTNAME_FIELD from "@salesforce/schema/Contact.LastName";
import Email_FIELD from "@salesforce/schema/Contact.Email";

export default class ContactCreator extends LightningElement {
  objectApiName = Contact_OBJECT;
  fields = [FIRSTNAME_FIELD, LASTNAME_FIELD, Email_FIELD];
  handleSuccess(event) {
    const toastEvent = new ShowToastEvent({
      title: "Contact created",
      message: "Record ID: " + event.detail.id,
      variant: "success"
    });
    this.dispatchEvent(toastEvent);
  }
}
