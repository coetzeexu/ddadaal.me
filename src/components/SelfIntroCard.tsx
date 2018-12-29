import * as React from "react";
import { Card, CardBody, CardLink, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { FaEllipsisH, FaEnvelope, FaFile } from "react-icons/fa";
import { Link } from "gatsby";
import StackedDiv from "../layouts/components/StackedDiv";
import I18nString from "../i18n/I18nString";
import lang from "../i18n/lang";
import withStores, { WithStoresProps } from "@/stores/withStores";
import { ArticleStore } from "@/stores/ArticleStore";
import { I18nStore } from "@/stores/I18nStore";

interface Props extends WithStoresProps {
}

const root = lang.selfIntro;

export default withStores(ArticleStore, I18nStore)(function SelfIntroCard(props: Props) {

  const articleStore = props.useStore(ArticleStore);
  const i18nStore = props.useStore(I18nStore);

  return (
    <Card>
      <CardBody>
        <CardTitle>
          <I18nString id={root.author} />
        </CardTitle>
        <CardSubtitle>
          <I18nString id={root.name} />
        </CardSubtitle>
      </CardBody>
      <CardBody>
        <CardText>
          <I18nString id={root.brief} />
        </CardText>
        <CardText>
          <I18nString id={root.major} />
        </CardText>
        <StackedDiv>
          <Link className="card-link" to={articleStore.getNodeFromLang("resume", i18nStore.state.language).path!}>
            <FaFile />
            <I18nString id={root.resume} />
          </Link>
          <CardLink href="mailto://smallda@outlook.com">
            <FaEnvelope />
            <I18nString id={root.mailToMe} />
          </CardLink>
          <Link className="card-link" to={articleStore.getNodeFromLang("about-me", i18nStore.state.language).path!}>
            <FaEllipsisH />
            <I18nString id={root.more} />
          </Link>
        </StackedDiv>
      </CardBody>
    </Card>
  );
});
