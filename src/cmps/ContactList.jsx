import { ContactPreview } from './ContactPreview';

export function ContactList({ contacts }) {
  return (
    <section>
      <ul className="contact-list clean-list">
        {contacts.map((contact) => (
          <li key={contact._id}>
            <ContactPreview contact={contact} />
          </li>
        ))}
      </ul>
    </section>
  );
}
