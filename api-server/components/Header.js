import { useSession, signIn, signOut } from "next-auth/react";
const style = {
  containerStyles: {
    position: "fixed",
    top: 20,
    border: "0.3rem solid teal",
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#673ab7",
    padding: "0.1rem",
    alignItems: "center",
  },

  titleStyles: {
    fontSize: "0.9rem",
    color: "#ffffff",
  },
  buttonStyles: {
    display: "flex",
    justifyContent: "space-around",
    margin: "0.3rem",
    padding: "0.1rem",
  },
};

function Header() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div style={style.containerStyles}>
        <h1 style={style.titleStyles}>Signed in as {session.user.email}</h1>
        <br />
        <button style={style.buttonStyles} onClick={() => signOut()}>
          <h1 style={style.titleStyles}>Sign out</h1>
        </button>
      </div>
    );
  }
  return (
    <div style={style.containerStyles}>
      <h1 style={style.titleStyles}>Not signed in</h1>
      <br />
      <button style={style.buttonStyles} onClick={() => signIn()}>
        <h1 style={style.titleStyles}>Sign in</h1>
      </button>
    </div>
  );
}
export default Header;
