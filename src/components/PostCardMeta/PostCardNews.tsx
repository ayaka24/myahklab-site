import React, { FC } from "react";
import Avatar from "components/Avatar/Avatar";
import { PostDataType } from "data/types";
import { Link } from "react-router-dom";

export interface PostCardNewsProps {
  className?: string;
  meta: Pick<PostDataType, "date" | "author">;
  hiddenAvatar?: boolean;
  size?: "large" | "normal";
}

const PostCardNews: FC<PostCardNewsProps> = ({
  className = "leading-none",
  meta,
  size = "normal",
}) => {
  const { date, author } = meta;
  return (
    <div
      className={`nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 ${
        size === "normal" ? "text-xs" : "text-base"
      } ${className}`}
      data-nc-id="PostCardMeta"
    >
      <>
        <span className="text-neutral-500 dark:text-neutral-400 font-normal">
          {date}
        </span>
      </>
    </div>
  );
};

export default PostCardNews;
