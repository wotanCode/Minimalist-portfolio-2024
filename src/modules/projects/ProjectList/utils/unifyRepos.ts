import { IDS } from "@/consts/const";
import type { githubRepoResponse } from "@/interfaces/githubRepo-response";

export function unifyRepos(
  repo1: { data: Partial<githubRepoResponse>; btnText: string },
  repo2: { data: Partial<githubRepoResponse>; btnText: string },
) {
  return {
    name: `${repo1.data.name} + ${repo2.data.name}`,
    created_at: new Date(
      Math.min(
        new Date(repo1.data.created_at as Date).getTime(),
        new Date(repo2.data.created_at as Date).getTime(),
      ),
    ).toString(),
    primaryBtn: {
      text: repo1.btnText,
      link: repo1.data.html_url || "#",
      id: `${IDS.projects.githubRepositoryCardBtn}-${repo1.data.name}`,
    },
    extraButtons: [
      {
        text: repo2.btnText,
        link: repo2.data.html_url || "#",
        id: `${IDS.projects.githubRepositoryCardBtn}-${repo2.data.name}`,
      },
    ],
    description: `${repo1.data.description || ""}`.trim(),
    language:
      repo1.data.language === repo2.data.language
        ? repo1.data.language || ""
        : `${repo1.data.language}, ${repo2.data.language}`,
    topics: [
      ...new Set([...(repo1.data.topics || []), ...(repo2.data.topics || [])]),
    ],
  };
}
