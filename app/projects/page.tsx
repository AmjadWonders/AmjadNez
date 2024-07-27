import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Eye } from "lucide-react";
import PortLayout from "@/app/components/ViewLayout";

const ProjectsPage = () => {
  // Ensure allProjects is populated correctly from contentlayer/generated
  const featured = allProjects.find((project) => project.slug === "albouri");
  const top2 = allProjects.find((project) => project.slug === "kuna");
  const top3 = allProjects.find((project) => project.slug === "whitespace");

  // Filter valid projects excluding featured ones
  const validProjects = [top2, top3].filter((project) => !!project);

  // Filter and sort remaining projects
  const sorted = allProjects
    .filter((p) => p.published)
    .filter(
      (project) =>
        project.slug !== (featured?.slug ?? "") &&
        project.slug !== (top2?.slug ?? "") &&
        project.slug !== (top3?.slug ?? "")
    )
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
    );

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            {featured ? (
              <Link href={`/projects/${featured.slug}`}>
                <article className="relative w-full h-full p-4 md:p-8">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-xs text-zinc-100">
                      {featured.date ? (
                        <time
                          dateTime={new Date(featured.date).toISOString()}
                        >
                          {Intl.DateTimeFormat(undefined, {
                            dateStyle: "medium",
                          }).format(new Date(featured.date))}
                        </time>
                      ) : (
                        <span>SOON</span>
                      )}
                    </div>
                    <span className="flex items-center gap-1 text-xs text-zinc-500">
                      <Eye className="w-4 h-4" />{" "}
                      <PortLayout slug={featured.slug} />
                    </span>
                  </div>
                  <h2
                    id="featured-post"
                    className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                  >
                    {featured.title}
                  </h2>
                  <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                    {featured.description}
                  </p>
                  <div className="absolute bottom-4 md:bottom-8">
                    <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                      Read more <span aria-hidden="true">&rarr;</span>
                    </p>
                  </div>
                </article>
              </Link>
            ) : (
              <div className="text-3xl text-zinc-100 relative w-full h-full p-4 md:p-8 leading-8 duration-150 group-hover:text-zinc-300">
                Add Featured Projects
              </div>
            )}
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {validProjects.map((project) =>
              project?.slug ? (
                <Card key={project.slug}>
                  <Article project={project} />
                </Card>
              ) : null
            )}
          </div>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 0)
              .map((project) =>
                project?.slug ? (
                  <Card key={project.slug}>
                    <Article project={project} />
                  </Card>
                ) : null
              )}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 1)
              .map((project) =>
                project?.slug ? (
                  <Card key={project.slug}>
                    <Article project={project} />
                  </Card>
                ) : null
              )}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 2)
              .map((project) =>
                project?.slug ? (
                  <Card key={project.slug}>
                    <Article project={project} />
                  </Card>
                ) : null
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
