import React, { FC, useState } from "react";
import NcImage from "components/NcImage/NcImage";
import PostCardSaveAction from "components/PostCardSaveAction/PostCardSaveAction";
import { PostDataType } from "data/types";
import { Link } from "react-router-dom";
import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";
import PostFeaturedMedia from "components/PostFeaturedMedia/PostFeaturedMedia";
import CardAuthor2 from "components/CardAuthor2/CardAuthor2";

export interface ServiceCardProps {
  className?: string;
  title: string;
  disc: string;
  href: string;
  galleryType?: 1 | 2;
  Img: string;
}

const ServiceCard: FC<ServiceCardProps> = ({
  className = "h-full",

  Img,
  title,
  disc,
  href,
}) => {
  const renderGallery = () => {
    return (
      <div className="w-full h-full">
        <div className="">
          <NcImage
            containerClassName="relative"
            className="bject-cover w-full h-full"
            src={Img}
          />
        </div>
      </div>
    );
  };

  return (
    <div
      className={`nc-Card10V3 group relative flex flex-col ${className}`}
      data-nc-id="Card10V3"
    >
      <div className="block group rounded-3xl flex-shrink-0 relative w-full aspect-w-16 aspect-h-10 sm:aspect-h-9 overflow-hidden will-change-transform">
        <div>{renderGallery()}</div>

        <Link
          to={href}
          className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"
        ></Link>
      </div>

      <div className="space-y-2.5 mt-4 px-4">
        <h2 className="nc-card-title block sm:text-lg font-semibold text-neutral-900 dark:text-neutral-100 ">
          <Link to={href} className="line-clamp-1" title={title}>
            {title}
          </Link>
        </h2>
        <p className="nc-card-title block sm:text-lg text-neutral-900 dark:text-neutral-100 ">
          <Link to={href} className="line-clamp-1">
            {disc}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
