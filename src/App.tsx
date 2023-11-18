function App() {
  const onRegistration = () => {
    alert("onRegistration");
  };

  return (
    <>
      <h1>Web Authn Test</h1>
      <p>
        <button onClick={onRegistration}>Registration</button>
      </p>
    </>
  );
}

export default App;
