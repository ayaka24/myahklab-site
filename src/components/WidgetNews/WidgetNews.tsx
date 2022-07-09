import Card3Small from "components/Card3Small/Card3Small";
import CardNews from "components/CardNews/CardNews";
import WidgetHeading1 from "components/WidgetHeading1/WidgetHeading1";
import { PostDataType } from "data/types";
import React, { FC } from "react";

export interface WidgetPostsProps {
  className?: string;
  posts: PostDataType[];
}

const WidgetNews: FC<WidgetPostsProps> = ({
  className = "bg-neutral-100 dark:bg-neutral-800",
  posts,
}) => {
  return (
    <div
      className={`nc-WidgetPosts rounded-3xl overflow-hidden ${className}`}
      data-nc-id="WidgetPosts"
    >
      <div className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700">
        {posts.map((post) => (
          <CardNews
            className="p-4 xl:px-5 xl:py-6 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            key={post.id}
            post={post}
          />
        ))}
      </div>
    </div>
  );
};

export default WidgetNews;
