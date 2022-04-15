

function Title(myUser) {
  const title = "Bienvenue sur notre site";


  const element = myUser.name;
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
