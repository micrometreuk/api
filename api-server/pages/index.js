import Link from "next/link";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Layout from "../components/layout";
import AccessDenied from "../components/access-denied";
const style = {
  containerStyles: {
    display: "flex",
    marginTop: "3.3rem",
    padding: "0.1rem",
    alignItems: "center",
  },
  mainStyles: {
    display: "flex",
    position: "relative",
  },

  titleStyles: {
    padding: "0.4rem",
  },
  gridtStyles: {
    fontSize: "1.3rem",
    color: "#ffffff",
  },
  cardStyles: {
    color: "#fff",
    backgroundColor: "#088413",
    border: "5px solid teal",
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 1,
    borderRadius: 6,
    display: "inline-block",
    padding: "4px",
    marginLeft: 10,
    lineHeight: 1,
    fontSize: "1.3rem",
    color: "#ffffff",
  },
};

export default function ProtectedPage() {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const [content, setContent] = useState();

  // Fetch content from protected route
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/examples/protected");
      const json = await res.json();
      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);
  // When rendering client side don't display anything until loading is complete
  if (typeof window !== "undefined" && loading) return null;
  // If no session exists, display access denied message
  if (!session) {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    );
  }
  // If session exists, display content
  return (
    <Layout>
      <p>
        <strong>{content ?? "\u00a0"}</strong>
      </p>
      <div style={style.containerStyles}>
        <main style={style.mainStyles}>
          <div style={style.gridtStyles}>
            <Link href="/form">
              <a style={style.cardStyles}>
                <h2>Capture Data &rarr;</h2>
              </a>
            </Link>
            <Link href="/data">
              <a style={style.cardStyles}>
                <h2>Fetch Data&rarr;</h2>
              </a>
            </Link>
          </div>
        </main>
      </div>
    </Layout>
  );
}
