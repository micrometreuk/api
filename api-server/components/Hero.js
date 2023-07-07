import Image from "next/image";
import data from "../data/data.json";
const style = {
  pathDivStyles: {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#673ab7",
    transition: "100ms ease-in background",
    margin: "0.3rem",
    padding: "0.1rem",
    alignItems: "center",
    marginBottom: "1rem",
  },
  pathLinkStyles: {
    display: "flex",
    position: "relative",
  },

  pathHrefStyles: {
    padding: "0.4rem",
  },
  pathTextStyles: {
    fontSize: "1.3rem",
    color: "#ffffff",
  },
};

function NavBarPhones() {
  return (
    <>
      <div
        style={{
          margin: "7rem",
          border: "0.3rem solid teal",
          padding: "0.3rem",
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: data.firstName }}></div>
        <div dangerouslySetInnerHTML={{ __html: data.domain }}></div>
        <div dangerouslySetInnerHTML={{ __html: data.email }}></div>
      </div>
      <style jsx>{`
        .path-text {
          line-height: 2.5;
          font-size: 3.5rem;
          color: #ffffff;
        }
        @media (max-width: 600px) {
          .container {
            width: 100%;
          }

          .path-text {
            min-height: 100vh;
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}

export default NavBarPhones;
