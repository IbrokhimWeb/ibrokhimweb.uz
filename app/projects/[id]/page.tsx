import React from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/util/constants";

const Project = ({ params }: { params: { id: string } }) => {
  const project = projects?.find(({ id }: { id: string }) => id === params?.id);

  return (
    <main className="w-full h-full overflow-y-auto">
      <article className="w-full h-full px-52 py-32 max-[1500px]:px-32 max-[768px]:px-10">
        <div className="w-full flex items-end justify-between max-[500px]:items-start max-[500px]:flex-col">
          <h2
            id="featured-post"
            className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
          >
            {project?.title}
            <span className="z-20 ml-4 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
              {project?.type}
            </span>
          </h2>
          <time
            dateTime={project?.date.toISOString()}
            className="text-zinc-400 mr-10 mb-1"
          >
            {Intl.DateTimeFormat("en-En", {
              dateStyle: "medium",
            }).format(project?.date)}
          </time>
        </div>
        <div className="flex items-center gap-10 pb-10 max-[1300px]:flex-col max-[1300px]:gap-2">
          <Link
            target="_blank"
            href={String(project?.website)}
            className="w-[500px] h-auto flex py-5 max-[1300px]:w-full"
          >
            <Image
              width="0"
              height="0"
              sizes="100%"
              alt="Portfolio photo"
              src={`/${project?.image}`}
              className="w-full h-full rounded-2xl"
            />
          </Link>
          <div className="w-[calc(100%-500px)] max-[1300px]:w-full">
            <p className="mb-2 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
              {project?.dec}
            </p>
            <div>
              {project?.technologies?.map((text) => (
                <span className="inline-block m-1 border text-sm px-2 border-gray-500 rounded-full text-gray-200">
                  {text}
                </span>
              ))}
            </div>
            <div className="w-full flex items-center gap-5 mt-10 max-[600px]:flex-col">
              <Link
                target="_blank"
                href={String(project?.github)}
                className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30"
              >
                <svg
                  className="w-4 h-4 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clip-rule="evenodd"
                  />
                </svg>
                Open Github repositories
              </Link>
              <Link
                target="_blank"
                href={String(project?.website)}
                className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30"
              >
                🌐 Open demo {project?.type}
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Project;
