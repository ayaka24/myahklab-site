import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import { PostDataType, TaxonomyType } from "data/types";
import { Link, NavLink } from "react-router-dom";
import PostCardMeta from "components/PostCardMeta/PostCardMeta";
import PostCardNews from "components/PostCardMeta/PostCardNews";

export interface CardNewsProps {
  className?: string;
  post: PostDataType;
}

const CardNews: FC<CardNewsProps> = ({ className = "h-full", post }) => {
  const { title, href, featuredImage } = post;

  return (
    <div
      className={`nc-Card3Small relative flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center ${className}`}
      data-nc-id="Card3Small"
    >
      <Link to={href} className=" absolute inset-0" title={title}></Link>
      <div className="relative space-y-2">
        <PostCardNews meta={{ ...post }} />
        <h2 className="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100">
          <Link to={href} className=" line-clamp-2" title={title}>
            {title}
          </Link>
        </h2>
      </div>

      <Link
        to={href}
        title={title}
        className={`block sm:w-20 flex-shrink-0 relative rounded-lg overflow-hidden will-change-transform mb-5 sm:ml-4 sm:mb-0 group`}
      ></Link>
    </div>
  );
};

export default CardNews;
