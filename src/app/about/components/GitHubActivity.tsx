"use client"

import { useEffect, useState } from "react";
import axios from "axios";
import GitHubCalendar from "react-github-calendar";

interface GitHubStats {
  followers: number;
  public_repos: number;
  totalStars: number;
  totalForks: number;
}

const GITHUB_USERNAME = "Soumyamanna123";

const GitHubActivity = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Basic user data
        const userRes = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}`);
        
        // Get all public repos to calculate total stars and forks
        const reposRes = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`);
        const repos = reposRes.data;

        const totalStars = repos.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);
        const totalForks = repos.reduce((acc: number, repo: any) => acc + repo.forks_count, 0);

        setStats({
          followers: userRes.data.followers,
          public_repos: userRes.data.public_repos,
          totalStars,
          totalForks,
        });
      } catch (err) {
        console.error("Error fetching GitHub stats:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <section className="bg-[#0d0d0d] text-white py-16 text-center">
      <h2 className="text-sm tracking-widest text-gray-400 mb-2">
        DEVELOPER INSIGHTS
      </h2>
      <h1 className="text-5xl font-bold mb-10">
        GitHub{" "}
        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-fuchsia-500 bg-clip-text text-transparent">
          Activity
        </span>
      </h1>

      {/* Contribution Graph */}
      <div className="flex justify-center mb-8">
        <GitHubCalendar username={GITHUB_USERNAME} colorScheme="dark" blockSize={12} blockMargin={5} />
      </div>

      <p className="text-gray-400 mb-10">Your live GitHub statistics</p>

      {/* Stats Grid */}
      {loading ? (
        <p className="text-gray-400">Loading stats...</p>
      ) : stats ? (
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-purple-900/20 px-8 py-6 rounded-2xl border border-purple-700/30 shadow-lg">
            <p className="text-gray-400">Followers</p>
            <h3 className="text-3xl font-bold mt-2">{stats.followers}</h3>
          </div>

          <div className="bg-yellow-900/20 px-8 py-6 rounded-2xl border border-yellow-700/30 shadow-lg">
            <p className="text-gray-400">Total Stars</p>
            <h3 className="text-3xl font-bold mt-2">{stats.totalStars}</h3>
          </div>

          <div className="bg-green-900/20 px-8 py-6 rounded-2xl border border-green-700/30 shadow-lg">
            <p className="text-gray-400">Public Repos</p>
            <h3 className="text-3xl font-bold mt-2">{stats.public_repos}</h3>
          </div>

          <div className="bg-blue-900/20 px-8 py-6 rounded-2xl border border-blue-700/30 shadow-lg">
            <p className="text-gray-400">Total Forks</p>
            <h3 className="text-3xl font-bold mt-2">{stats.totalForks}</h3>
          </div>
        </div>
      ) : (
        <p className="text-red-400">Failed to load stats</p>
      )}
    </section>
  );
};

export default GitHubActivity;
