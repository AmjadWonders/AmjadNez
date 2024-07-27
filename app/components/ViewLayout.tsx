"use client";
import { FC, useEffect } from 'react';
import PageViews from './PageViews';

interface PortLayoutProps {
  slug: string;
}

const PortLayout: FC<PortLayoutProps> = ({ slug }) => {
  useEffect(() => {
    fetch(`/api/views/${slug}`, {
      method: 'GET'
    });
  }, [slug]);

  return (
    <PageViews slug={slug} />
  );
};

export default PortLayout;