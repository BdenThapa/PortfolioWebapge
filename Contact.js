// Contact.js (React Component)

const { useState } = React;

function Contact() {
  const password = 'swordfish';
  const [authorized, setAuthorized] = useState(false);

  function checkPassword(input) {
    return input === password;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const enteredPassword = e.target.querySelector(
      'input[type="password"]').value;
    const auth = checkPassword(enteredPassword);
    setAuthorized(auth);
  }

  const login = (
    <form onSubmit={handleSubmit}>
      <input
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="Submit" />
    </form>
  );

  const contactInfo = (
    <ul>
      <li>client@example.com</li>
      <li>555.555.5555</li>
    </ul>
  );

  return (
    <div id="authorization">
      <h1>{authorized ? "Contact" : "Enter the password."}</h1>
      {authorized ? contactInfo : login}
    </div>
  );
}

// Render the React component into the DOM
ReactDOM.render(<Contact />, document.getElementById('contact-app'));
