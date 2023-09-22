//Takes the Hook Setters for Email and Pasword as a Input Parameter
//When Any Input from the User is done it will Update the Email and Password
export default function LoginInputFields({ setEmail, setPassword }) {
    //Need this for the default Input field behavior
    function handleSubmit(e){
        e.preventDefault();
    }

    return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Email">Email: </label>
        <input id="Email" type="email"onChange={e => setEmail(e.target.value)} />

        <label htmlFor="Password">Password: </label>
        <input id="Password" type="password"onChange={e => setPassword(e.target.value)} />
      </form>

    </>
  )
}
