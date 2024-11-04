import type { githubRepoResponse } from "@/interfaces/githubRepo-response";

async function fetchRepos(): Promise<githubRepoResponse[]> {
  const url = "https://api.github.com/users/wotanCode/repos";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: githubRepoResponse[] = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching repositories:", error.message);
    } else {
      console.error("Unknown error:", error);
    }
    return [];
  }
}
export const reposData = await fetchRepos();
