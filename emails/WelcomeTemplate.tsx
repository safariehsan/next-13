import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
  Tailwind,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body style={body} className="text-gray-500">
          <Container>
            <Text style={heading}>Hello {name}!</Text>
            <Link href="https://ehsansafari.com">EhsanSafari.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

const body: CSSProperties = {
  background: "lightgray",
  fontFamily: "tahoma",
};

const heading: CSSProperties = {
  fontWeight: "bold",
  fontSize: "20px",
};

export default WelcomeTemplate;
