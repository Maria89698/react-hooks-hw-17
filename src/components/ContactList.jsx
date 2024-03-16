import { Contact } from "./Contact";

export function ContactList({ contacts }) {
    
    return (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
            {contacts.map((contact) => {
               return <Contact key={contact.id} contact={contact}></Contact>
            })}
        </ul>
    );
}