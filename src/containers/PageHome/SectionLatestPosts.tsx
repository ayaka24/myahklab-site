import React, { FC } from "react";
import Card3 from "components/Card3/Card3";
import { POSTS } from "data/posts";
import { PostDataType } from "data/types";
import WidgetNews from "components/WidgetNews/WidgetNews";
import Heading from "components/Heading/Heading";

const news: PostDataType[] = POSTS.filter((_, i) => i > -1 && i < 4);

export interface SectionLatestPostsProps {
  heading: string;
  subHeading: string;
  posts?: PostDataType[];
  widgetPosts?: PostDataType[];
  className?: string;
}

const SectionLatestPosts: FC<SectionLatestPostsProps> = ({
  heading,
  subHeading,
  widgetPosts = news,
  className = "",
}) => {
  return (
    <div className={`nc-SectionLatestPosts relative ${className}`}>
      <Heading desc={subHeading} isCenter hasDesc>
        {heading}
      </Heading>
      <div className="w-full space-y-7 mt-0 lg:mt-0 lg:pl-10 xl:pl-0">
        <WidgetNews posts={widgetPosts} />
      </div>
    </div>
  );
};

export default SectionLatestPosts;
