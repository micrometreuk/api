import Link from "next/link";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Layout from "../components/layout";
import AccessDenied from "../components/access-denied";

export default function FormLayout({ children }) {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const [content, setContent] = useState();

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
  if (typeof window !== "undefined" && loading) return null;
  if (!session) {
    return (
      <Layout
      style={{
        borderRadius: "3px",
        border: "1px solid black",
        color: "black",
        padding: "0.5em 1em",
        cursor: "pointer",
        fontSize: "1.1em",
      }}
      >
        <AccessDenied />
      </Layout>
    );
  }
  return (
    <Layout>
      <main>{children}</main>
    </Layout>
  );
}
