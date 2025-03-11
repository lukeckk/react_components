import Contact from "./ContactInfo"

export default function BusinessCard({ name, title, email, phone, profileImage, tagline }) {
  return (
    <div className="card-container">
      <Contact
        name={name}
        title={title}
        email={email}
        phone={phone}
      />
      <img src={profileImage} alt="Profile Image" className="profile-image" />

      <div className="tagline">{tagline}</div>
    </div>
  )
}