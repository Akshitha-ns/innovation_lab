class Contact {
  constructor(name, phone, email) {
    this.name = name;
    this.phone = phone;
    this.email = email;
  }
  displayInfo() {
    const { name, phone, email } = this;
    console.log(`Name: ${name}, Phone: ${phone}, Email: ${email}`);
  }
}
const contacts = [
  new Contact('John Doe', '123-456-7890', 'john@example.com'),
  new Contact('Jane Doe', '987-654-3210', 'jane@example.com'),
];
console.log(contacts[0].name); 
console.log(contacts[0]['phone']); 
contacts.forEach((contact) => {
  contact.displayInfo();
});
function addContacts(...contacts) {
  contacts.forEach((contact) => {
    console.log(`Adding contact: ${contact.name}`);
  });
}
addContacts(
  new Contact('Alice Smith', '555-123-4567', 'alice@example.com'),
  new Contact('Bob Johnson', '555-901-2345', 'bob@example.com')
);
const newContacts = [
  new Contact('Charlie Brown', '555-111-2222', 'charlie@example.com'),
  new Contact('David Lee', '555-333-4444', 'david@example.com'),
];
const allContacts = [...contacts, ...newContacts];
allContacts.forEach((contact) => {
  contact.displayInfo();
});
const contact1 = new Contact('Eve Adams', '555-555-5555', 'eve@example.com');
const contact2 = { name: 'Frank Miller', phone: '555-666-6666', email: 'frank@example.com' };
Contact.prototype.displayInfo.call(contact2);
Contact.prototype.displayInfo.apply(contact2);
const boundDisplayInfo = Contact.prototype.displayInfo.bind(contact2);
boundDisplayInfo();
