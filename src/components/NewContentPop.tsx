import * as React from "react";
import lang from "@/i18n/lang";
import LocalizedString from "@/i18n/LocalizedString";
import styled, { keyframes } from "styled-components";

interface Props {

}

const enter = keyframes`
  0% {
    top: 0;
  }
  100% {
    top: 30px;
  }
`;

const NewContentPopContainer = styled.div`
  position: fixed;

  left: 50%;
  transform: translate(-50%, -50%);

  animation: ${enter} 0.3s forwards;
  z-index: 2000;
  background-color: white;
  padding: 8px;
  border: 1px solid gray;
  border-radius: 16px;

`;

const root = lang.newContentPop;

export default function NewContentPop(props: Props) {
  return (
    <NewContentPopContainer className="nonewcontent">
      <a href="" onClick={() => location.reload()}>
        <LocalizedString id={root.refresh} />
      </a>
      <LocalizedString id={root.other} />
    </NewContentPopContainer>
  );
}
