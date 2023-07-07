import Link from "next/link";
import { signIn } from "next-auth/react";

export default function AccessDenied() {
  return (
    <div
      style={{
        position: "fixed",
        top: 90,
        right: 0,
        left: 0,
        cursor: "pointer",
        margin: "1.3rem",
        padding: "1.3rem",
        border: "1.3rem solid teal",
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "#673ab7",
        transition: "100ms ease-in background",
        alignItems: "center",
        marginBottom: "1rem",
        color: "#ffffff",
        fontSize: 14,
        lineHeight: 1.25,
      }}
    >
      <h1>Access Denied</h1>
      <p>
        <Link href="/api/auth/signin">
          <a
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            You must be signed in to view this page
          </a>
        </Link>
      </p>
    </div>
  );
}
