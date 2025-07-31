function App() {
  const name = "Dinesh Kumar"
  const a = 10;
  let b = 15;
  const user = { name: 'Anil', age: 23, email: 'dkkumar97855@gmail.com' }
  const marvel = ['IronMan', 'Thor', 'Captain America', 'Hulk']
  function DC(a, b) {
    return a / b
  }
  const path = "https://images.pexels.com/photos/16920103/pexels-photo-16920103.jpeg?cs=srgb&dl=pexels-gy1610-16920103.jpg&fm=jpg"
  return (
    <div>
      <h1>{name}</h1>
      <h1>{a + b}</h1>
      <h1>{user.email}</h1>
      <h1>{marvel[2]}</h1>
      <h1>{DC(100, 20)}</h1>
      <img style={{
        maxWidth: "300px",
        borderRadius: "10px",
        display: "block",
        marginLeft: "0"
      }} src={path} alt="Black Dog" />

    </div>
  )
}

export default App;