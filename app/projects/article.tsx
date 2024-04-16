import Link from "next/link";

interface CustomProps {
  project: {
    id: string;
    type: string;
    title: string;
    dec: string;
    website: string;
    github: string;
    image: string;
    more: string;
    date: Date;
    technologies: Array<string>;
  };
}

export const Article = ({ project }: CustomProps) => {
  return (
    <Link href={`/projects/${project?.id}`}>
      <article className="p-4 md:p-8">
        <div className="flex justify-end gap-2 items-center">
          <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
            <time dateTime={project?.date.toISOString()}>
              {Intl.DateTimeFormat("en-En", { dateStyle: "medium" }).format(
                project?.date
              )}
            </time>
          </span>
        </div>
        <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
          {project?.title}
          <span className="z-20 ml-4 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
            {project?.type}
          </span>
        </h2>
        <p className="z-20 my-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
          {project?.dec}
        </p>
        {project?.technologies?.map((text) => (
          <span className="border inline-block m-1 text-sm px-2 border-gray-500 rounded-full text-gray-200">
            {text}
          </span>
        ))}
      </article>
    </Link>
  );
};
