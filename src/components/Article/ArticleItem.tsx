import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import I18nStore from "@/stores/I18nStore";
import MetadataStore from "@/stores/MetadataStore";
import ArticleFrontmatter from "./ArticleFrontmatter";
import { ArticleNode } from "@/models/ArticleNode";
import { useStore } from "simstate";
import containsChinese from "@/utils/containsChinese";

interface Props {
  article: ArticleNode;
  currentArticleLanguage: string;
}

const StyledPost = styled.div`
  margin-bottom: 24px;
`;

const StyledTitle = styled(Link)`
  :hover {
    cursor: pointer;
    text-decoration: underline;
    color: black;
  }

  color: black;
  font-size: 32px;
  padding: 4px 0;
`;

function limitLength(content: string): string {
  const lengthLimit = containsChinese(content) ? 130 : 300;
  return content.substring(0, lengthLimit) + "...";
}

const ArticleItem: React.FC<Props> = ({ article, currentArticleLanguage }) => {
  const { frontmatter: { id, title, tags, date }, wordCount: { words }, excerpt } = article;

  const { language } = useStore(I18nStore);
  const metadataStore = useStore(MetadataStore);

  const langPaths = metadataStore.getLangPathMap(id);

  return (
    <StyledPost>
      <StyledTitle to={langPaths.get(language.metadata.id) || langPaths.values().next().value}>
        {title}
      </StyledTitle>

      <ArticleFrontmatter
        currentArticleLanguage={currentArticleLanguage}
        date={date}
        wordCount={words}
        tags={tags}
        articleId={id}
      />

      <p>{limitLength(excerpt)}</p>
      <hr />
    </StyledPost>
  );
}

export default ArticleItem;
