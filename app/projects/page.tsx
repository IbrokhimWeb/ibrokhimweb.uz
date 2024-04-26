import React from "react";
import Link from "next/link";
import { Article } from "./article";
import { Card } from "../components/card";
import { projects } from "@/util/constants";
import { Navigation } from "../components/nav";

export default async () => {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight capitalize text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            There are {projects?.length} projects in total
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <Link href={`/projects/${projects[0]?.id}`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-end gap-2">
                  <div className="text-xs text-zinc-100">
                    <time dateTime={projects[0]?.date.toISOString()}>
                      {Intl.DateTimeFormat("en-En", {
                        dateStyle: "medium",
                      }).format(projects[0]?.date)}
                    </time>
                  </div>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  {projects[0]?.title}
                  <span className="z-20 ml-4 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {projects[0]?.type}
                  </span>
                </h2>
                <p className="my-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {projects[0]?.dec}
                </p>
                {projects[0]?.technologies?.map((text) => (
                  <span className="inline-block m-1 border text-sm px-2 border-gray-500 rounded-full text-gray-200">
                    {text}
                  </span>
                ))}
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {[projects[1], projects[2]].map((project) => (
              <Card key={project?.id}>
                <Article project={project} />
              </Card>
            ))}
          </div>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-2 gap-4 mx-auto lg:mx-0 max-lg:grid-cols-1">
          {projects?.slice(3).map((project) => (
            <Card key={project?.id}>
              <Article project={project} />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
