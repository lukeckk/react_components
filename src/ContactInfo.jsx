export default function Contact({ name, title, email, phone }) {
  return (
    <div className="contact-info">
      <div className="name">{name}</div>
      <div className="title">{title}</div>
      <div className="email">{email}</div>
      <div className="phone">{phone}</div>
    </div>
  );
}
