import { Link } from 'react-router-dom';
import { ContactEdit } from '../pages/ContactEdit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function ContactPreview({ contact }) {
  return (
    <article className="contact-preview m20">
      <Link to={`/contact/details/${contact._id}`} className="info">
        <h2>{contact.name}</h2>
        <h3>{contact.email}</h3>
        <h3>{contact.phone}</h3>
        <Link className="edit-link" to={`/contact/edit/${contact._id}`}>
          <FontAwesomeIcon icon="user-edit" />
        </Link>
      </Link>
    </article>
  );
}
