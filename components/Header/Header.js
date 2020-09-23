import React from "react";
import { Box, Button, IconButton } from "@material-ui/core";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";

export default function Header() {
  const [session, loading] = useSession();

  return (
    <>
      <Box className="Box" display="flex" p={3} alignItems="center">
        <Link href="/">
          <h1 className="title">all about skin</h1>
        </Link>
        <Box>
          <div className="dropdown">
            <Button>products</Button>
            <div className="dropdown-content">
              <Link href="/cleansers">Cleansers</Link>
              <Link href="/toners">Toners</Link>
              <Link href="/moisturizers">Moisturizers</Link>
              <Link href="/cleansers">Cleansers</Link>
            </div>
          </div>

          <Button color="primary">Link</Button>
        </Box>
        <Box flexGrow={1} textAlign="right">
          {!session && (
            <>
              <Button href={`/api/auth/signin`} onClick={signIn}>
                Sign in
              </Button>
            </>
          )}
          {session && (
            <>
              Signed in as {session.user.email} <br />
              <Button onClick={signOut}>Sign out</Button>
            </>
          )}
        </Box>
      </Box>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Titan+One&family=Varela+Round&display=swap");
        * {
          font-family: "Varela Round", sans-serif;
        }
        Box.MuiBox-root-10 {
          background-image: url("https://i.pinimg.com/474x/c6/f6/a7/c6f6a7aba29e0eec8150d914b5e6271a.jpg");
        }

        h1.title {
          font-family: "Titan One", cursive;
          font-size: 3rem;
        }

        h1 {
          font-weight: bold;
        }

        .MuiButton-label {
          font-size: 1.5rem;
          font-family: "Titan One", cursive;
        }

        .dropdown {
          position: relative;
          display: inline-block;
        }

        .dropdown-content {
          display: none;
          position: absolute;
          background-color: #f9f9f9;
          width: 200px;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          padding: 12px 16px;
          z-index: 1;
        }

        .dropdown:hover .dropdown-content {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  );
}
