/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import projects from "../api/projects.json";
import XSmall from "../components/Project/XSmall";
import Title from "../components/Title";
import Subheader from "../components/Subheader";
import { useRouter } from "next/router";
import Link from "next/link";
import PageContent from "../components/Layout/PageContent";
import PageHeader from "../components/Layout/PageHeader";
import Button from "../components/common/Button";

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [projectsText, setProjectsText] = useState("projects and counting!");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { query } = useRouter();

  // let shuffled = filteredProjects
  //   .map((value) => ({ value, sort: Math.random() }))
  //   .sort((a, b) => a.sort - b.sort)
  //   .map(({ value }) => value);

  const categories = [
    { id: "all", title: "all" },
    { id: "nfts", title: "nfts" },
    { id: "merch", title: "merch" },
    { id: "stats", title: "stats" },
    { id: "misc", title: "misc" },
  ];

  const getProjectsText = (curr: string) => {
    switch (curr) {
      case "all":
        return "projects and counting!";
      case "nfts":
        return "nft projects";
      case "merch":
        return "merch shops";
      case "stats":
        return "statistics dashboards";
      case "misc":
        return "miscellaneous projects";
      default:
        return curr;
    }
  };

  useEffect(() => {
    if (query.category) {
      setIsLoading(true);
      if (query.category === "all") {
        setFilteredProjects(projects);
        setIsLoading(false);
      } else {
        setFilteredProjects(
          projects.filter((p) => p.category.includes(query.category as string))
        );
        setIsLoading(false);
      }
    }
  }, [query.category]);

  const handleClick = (e) => {
    const curr = e.target.id;

    setProjectsText(getProjectsText(curr));

    router.push(`/projects?category=${curr}`);
  };

  return (
    <div className="mb-16">
      <PageHeader>
        <Header title="projects | mfers hub" />
        <Title title="projects" />
        <Subheader
          title={`${filteredProjects.length} ${projectsText}`}
          body="here's a list of projects in the mfers ecosystem. if you don't see your project here and would like to add it, click the button to have it added to the backlog. no representations are made regarding the projects listed here. you are encouraged to do your own research before interacting with any of the projects."
        />
        <Button
          link="https://www.addressform.io/form/afcd402f-fb07-4df0-80c5-6c3a6357f32f"
          text="submit your project, mfer"
        />
      </PageHeader>
      <PageContent>
        <div className="mb-4">
          <fieldset className="mt-2 text-black dark:text-white ">
            <div className="xs:grid xs:grid-cols-2 sm:grid-cols-4 sm:items-center sm:pl-24 sm:text-base sm:justify-center sm:mb-2">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="flex items-center xs:mb-4 sm:mb-0"
                >
                  <input
                    onClick={handleClick}
                    id={category.id}
                    type="radio"
                    name="category"
                    defaultChecked={
                      category.id === "all"
                        ? category.id === "all"
                        : category.id === query.category
                    }
                    className="focus:ring-blue-base h-4 w-4 text-blue-base border-gray-300"
                  />
                  <label
                    htmlFor={category.id}
                    className="xs:ml-1.5 sm:ml-3 block text-sm font-medium text-black "
                  >
                    {category.title}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        </div>

        {/* <div className="grid grid-cols-2 gap-x-4 gap-y-8 xs:grid-cols-3  sm:grid-cols-4 sm:gap-x-6 lg:grid-cols-6 xl:gap-x-8"> */}
        <div className="">
          <>
            {isLoading ? (
              <h3>loading...</h3>
            ) : (
              <div className="xs:hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredProjects &&
                  filteredProjects.map((project) => (
                    <XSmall key={project.title} project={project} />
                  ))}
              </div>
            )}
          </>
          <>
            {isLoading ? (
              <h3>loading...</h3>
            ) : (
              <ul
                role="list"
                className="grid sm:hidden rounded-xl divide-y divide-gray-200 "
              >
                {filteredProjects.map((project) => (
                  // <Link
                  //   href={
                  //     "/projects/" +
                  //     project.title.replace(/\s+/g, "-").toLowerCase()
                  //   }
                  //   passHref
                  //   key={project.title}
                  // >
                  <a
                    key={project.title}
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <li key={project.title} className="py-4 flex">
                      <img
                        className="h-24 w-full max-w-[6rem] object-cover rounded-md"
                        src={`/projects/${project.image}`}
                        alt={project.image}
                      />
                      <div className="ml-3">
                        <p className="text-lg font-medium text-gray-900  text-nouns tracking-wide">
                          {project.title}
                        </p>

                        {/* <p className="text-sm text-gray-500 w-1/3">
                    {project.category.join(" • ")}
                  </p> */}

                        <p className="text-gray-500 text-sm line-clamp-3">
                          {project.description}
                        </p>
                      </div>
                    </li>
                  </a>
                  // </Link>
                ))}
              </ul>
            )}
          </>
        </div>
      </PageContent>
    </div>
  );
};

export default Projects;
