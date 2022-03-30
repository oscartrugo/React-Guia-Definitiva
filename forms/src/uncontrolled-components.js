function App() {
  const submit = (e) =>{
    e.preventDefault()
    const data = Array.from(new FormData(e.target))
    console.log(Object.fromEntries(data))
  }
  return (
    <form onSubmit={submit}>
      <div>
        <span>
          Lala
        </span>
        <input name='campo'/>
      </div>

      <input name="campo-2"/>
      <input type='file' name='campo-2' /> {/**Inputs tipo file son solo lectura, por lo que siempre debemos usar un ref */}
      <input type='submit' value='Enviar' />
      <input/>
    </form>
  );
}

export default App;
