import { EventAggregator } from 'aurelia-event-aggregator';
import { inject } from 'aurelia-framework';
import { ContactUpdated, ContactViewed } from 'messages';
import { WebAPI } from "web-api";
@inject(WebAPI, EventAggregator)
export class ContactList {
  contacts;
  selectedId = 0;

  constructor(private api: WebAPI, private ea: EventAggregator) { 
    ea.subscribe(ContactViewed, msg => this.select(msg.contact));
    ea.subscribe(ContactUpdated, msg => {
      const id = msg.contact.id;
      const found = this.contacts.find(contact => contact.id === id);
      Object.assign(found, msg.contact);
    })

  }
  created() { 
    this.api.getContactList().then(contacts => this.contacts =contacts);

  }

  select(contact) {
    this.selectedId = contact.id;
    return true;
  }
}
