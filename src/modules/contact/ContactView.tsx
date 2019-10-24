import * as React from 'react'
import { Input } from '../../components/Input/Input'

interface IContact {
  name: string
  email: string
  phone: string
}

export const ContactView: React.FC<any> = props => {
  const onInputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    // event.persist()
    const { name, value } = event.target
    setContact(prevState => {
      return {
        ...prevState,
        [name]: value,
      }
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    alert(JSON.stringify(contact))
  }

  const [contact, setContact] = React.useState<IContact>({
    name: '',
    email: '',
    phone: '',
  })

  return (
    <div>
      <h3>Contact</h3>
      <form id="contact-form" onSubmit={handleSubmit}>
        <ul>
          <li>
            <Input
              label="Name"
              name="name"
              type="text"
              value={contact.name}
              onChange={onInputChanged}
            />
          </li>
          <li>
            <Input
              label="Email"
              name="email"
              type="email"
              value={contact.email}
              onChange={onInputChanged}
            />
          </li>
          <li>
            <Input
              label="Phone"
              name="phone"
              type="text"
              value={contact.phone}
              onChange={onInputChanged}
            />
          </li>
          <li>
            <input type="submit" />
          </li>
        </ul>
      </form>
    </div>
  )
}
