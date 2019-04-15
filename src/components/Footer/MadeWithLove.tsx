import React from "react";
import LocalizedString from "@/i18n/LocalizedString";
import lang from "@/i18n/lang";
import styled from "styled-components";

const root = lang;

const Container = styled.p`
    text-align: center;
`;

export default function MadeWithLove() {
  return (
    <Container>
      © {new Date().getFullYear()} | <LocalizedString id={root.footer.madeWithLove} />
    </Container>
  );
}
