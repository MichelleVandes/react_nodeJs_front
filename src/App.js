import React, { useState, useEffect } from "react";
import UserForm from "./Components/SignupForm";
import LoginForm from "./Components/LoginForm";
import Title from "./Title";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";

function App() {
  const [userConnect, setUserConnect] = useState(true);
  const [newUser, setnewUser] = useState(true);
  const [myUser, setmyUser] = useState();

  //****** Basculler de création user à connexion  */
  const onLogin = (props) => {
    setUserConnect(true);
    setnewUser(false);
  };
const onSignup = (props) => {
  setUserConnect(false);
  setnewUser(true);
};
  //****** Ajouter un nouvel utilisateur  */
  const handleSignup = (data) => {
    const myUrl = "http://localhost:8080/signup";

    const myInitPost = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(myUrl, myInitPost)
      .then((response) =>
        response.json().then((resData) => {
          console.log(resData);
          console.log("error :", resData.error, "message :", resData.message);

          if (resData.message) {
            alert(resData.message);
            setUserConnect(true);
            setnewUser(false);
          } else {
            alert(resData.error);
          }
        })
      )
      .catch((error) => {
        console.log("catch erreur : ", error);
      });
  };

  //****** Connexion de l'utilisateur  */
  const handleLogin = (data) => {
    const myUrl = "http://localhost:8080/login";

    const myInitPost = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(myUrl, myInitPost)
      .then((response) => response.json())
      .then((data) => {
        console.log("App data :", data);
        setmyUser(data);
        console.log("App myUser :", myUser);
      })

      .catch((error) => {
        console.error(error);
      });
  };

  //**************************************************************************** */
  return (
    <div
    // style={{
    //   display: "block",
    //   width: 900,
    // }}
    >
      <Title myUser />
      <div className=" pt-4 bg-light">
        <Container>
          <Row>
            <Col md="4">
              {userConnect && (
                <LoginForm loginUser={handleLogin} onSignup={onSignup} />
              )}
            </Col>
            <Col md="3"></Col>

            <Col md="4">
              {newUser && (
                <UserForm addNewUser={handleSignup} onLogin={onLogin} />
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
