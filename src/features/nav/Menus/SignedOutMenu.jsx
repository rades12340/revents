import React from "react";
import { Menu, Button } from "semantic-ui-react";

const SignedOutMenu = ({ signIn, register, authenticated }) => {
  return (
    <Menu.Item position="right">
      <Button onClick={signIn} basic inverted content="Login" />
      {!authenticated ? (
        <Button
          onClick={register}
          basic
          inverted
          content="Register"
          style={{ marginLeft: "0.5em" }}
        />
      ) : (
        <Button
          onClick={signIn}
          basic
          inverted
          content="Sign Out"
          style={{ marginLeft: "0.5em" }}
        />
      )}
    </Menu.Item>
  );
};

export default SignedOutMenu;
