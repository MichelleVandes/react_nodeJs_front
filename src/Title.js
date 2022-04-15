

function Title(myUser) {
  const title = "Bienvenue sur notre site";


  //const element = myUser;
    const Welcome = (name) => {
       console.log("welcome 1 : ", name);
    if (name) { 
    console.log('welcome 2 : ',name);
    <h3>Bonjour, {name}</h3> } else
    {  console.log('welcome 3 : ',name);
    <h3>Hello</h3>;}
   };
    const element = <Welcome/>;

  console.log('Title :', myUser)

  return (
    <div className="title">
      <h1>{title}</h1>
      <p>
   {element}
      </p>
    </div>
  );
}

export default Title;
