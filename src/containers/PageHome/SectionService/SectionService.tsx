import Card10 from "components/Card10/Card10";
import Card10V3 from "components/Card10/Card10V3";
import Heading from "components/Heading/Heading";
import ServiceCard from "components/ServiceCard/ServiceCard";
import { DEMO_POSTS_GALLERY } from "data/posts";
import { PostDataType } from "data/types";
import React, { FC } from "react";

const postsDemo: PostDataType[] = DEMO_POSTS_GALLERY.filter(
  (_, i) => i > 7 && i < 17
);

export interface SectionServiceProps {
  posts?: PostDataType[];
  className?: string;
}

const SectionService: FC<SectionServiceProps> = ({
  posts = postsDemo,
  className = "",
}) => {
  return (
    <div className={`nc-SectionMagazine7 relative ${className}`}>
      <Heading
        className="mb-8 text-neutral-900 dark:text-neutral-50 text-center"
        isCenter
      >
        主な活動
      </Heading>
      <div className={`grid grid-cols-1 gap-6 md:gap-8`}>
        <div className={`grid gap-6 md:gap-8 lg:grid-cols-2`}>
          <ServiceCard
            title="宮古島冬まつり"
            disc="説明"
            href="/"
            Img="https://images.pexels.com/photos/4982737/pexels-photo-4982737.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <ServiceCard
            title="プログラミング教室"
            disc="説明"
            href="/"
            Img="https://images.pexels.com/photos/4982737/pexels-photo-4982737.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionService;
