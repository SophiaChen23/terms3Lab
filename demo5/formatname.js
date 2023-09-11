//add function here

  const element = <h1>Hello, {formatName(user)}!</h1>;
  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  const user = {
    firstName:"West",
    lastName:"Cliff",
  };
  ReactDOM.render(element, document.getElementById('root'));
