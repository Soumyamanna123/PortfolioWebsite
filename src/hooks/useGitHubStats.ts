// hooks/useGitHubStats.ts
import { useEffect, useState } from "react";
import axios from "axios";

export interface GitHubStats {
  followers: number;
  public_repos: number;
  totalStars: number;
  totalForks: number;
}

const GITHUB_USERNAME = "Soumyamanna123";

export const useGitHubStats = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const userRes = await axios.get(
          `https://api.github.com/users/${GITHUB_USERNAME}`
        );
        const reposRes = await axios.get(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`
        );

        const repos = reposRes.data;
        const totalStars = repos.reduce(
          (acc: number, repo: any) => acc + repo.stargazers_count,
          0
        );
        const totalForks = repos.reduce(
          (acc: number, repo: any) => acc + repo.forks_count,
          0
        );

        setStats({
          followers: userRes.data.followers,
          public_repos: userRes.data.public_repos,
          totalStars,
          totalForks,
        });
      } catch (err) {
        setError("Failed to fetch GitHub stats");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return { stats, loading, error };
};
