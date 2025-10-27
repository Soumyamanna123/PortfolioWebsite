"use client";

import GitHubCalendar from "react-github-calendar";
import { GlowCard } from "@/components/nurui/spotlight-card";
import {
  GitFork,
  Star,
  Users,
  FolderGit2,
  Activity,
  Github,
} from "lucide-react";
import { useGitHubStats } from "@/hooks/useGitHubStats";
import GradientText from "@/components/nurui/gradient-text";

const GITHUB_USERNAME = "Soumyamanna123";

const GitHubActivity = () => {
  const { stats, loading, error } = useGitHubStats();

  return (
    <section className="text-white py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Activity className="w-5 h-5 text-gray-400" />
          <h2 className="text-sm tracking-widest text-gray-400 uppercase">
            Developer Insights
          </h2>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          GitHub{" "}
          <span>
            <GradientText
              colors={["#3ca2fa", "#80eeb4", "#3ca2fa", "#80eeb4", "#3ca2fa"]}
              animationSpeed={3}
              showBorder={false}
              className="text-6xl font-black"
            >
              Activity
            </GradientText>
          </span>
        </h1>
        <GradientText
          colors={["#3ca2fa", "#80eeb4", "#3ca2fa", "#80eeb4", "#3ca2fa"]}
          animationSpeed={3}
          showBorder={false}
          className="text-6xl font-black"
        >
          Activity
        </GradientText>
        <div className="p-10"></div>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Track my coding journey and contributions across open source projects
        </p>
      </div>

      {/* Contribution Graph */}
      <div className="flex justify-center mb-12">
        <div className=" overflow-x-auto">
          <GitHubCalendar
            username={GITHUB_USERNAME}
            colorScheme="dark"
            blockSize={12}
            blockMargin={5}
            fontSize={14}
          />
        </div>
      </div>

      {/* Stats Section */}
      {loading ? (
        <div className="flex justify-center items-center py-12">
          <div className="relative">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Github className="w-6 h-6 text-purple-400 animate-pulse" />
            </div>
          </div>
        </div>
      ) : error ? (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-900/20 rounded-full mb-4">
            <Activity className="w-8 h-8 text-red-400" />
          </div>
          <p className="text-red-400 mb-2 font-semibold">{error}</p>
          <p className="text-gray-500 text-sm">
            Please check your internet connection or try again later
          </p>
        </div>
      ) : stats ? (
        <>
          {/* Stats using GlowCard */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-12">
            {/* Followers Card */}
            <GlowCard
              glowColor="white"
              size="sm"
              customSize
              width={200}
              height={180}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <Users className="w-10 h-10 text-purple-400 mb-3" />
                <p className="text-gray-400 text-sm mb-2">Followers</p>
                <h3 className="text-4xl font-bold">{stats.followers}</h3>
              </div>
            </GlowCard>

            {/* Total Stars Card */}
            <GlowCard
              glowColor="orange"
              size="sm"
              customSize
              width={200}
              height={180}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <Star className="w-10 h-10 text-yellow-400 mb-3" />
                <p className="text-gray-400 text-sm mb-2">Total Stars</p>
                <h3 className="text-4xl font-bold">{stats.totalStars}</h3>
              </div>
            </GlowCard>

            {/* Public Repos Card */}
            <GlowCard
              glowColor="green"
              size="sm"
              customSize
              width={200}
              height={180}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <FolderGit2 className="w-10 h-10 text-green-400 mb-3" />
                <p className="text-gray-400 text-sm mb-2">Public Repos</p>
                <h3 className="text-4xl font-bold">{stats.public_repos}</h3>
              </div>
            </GlowCard>

            {/* Total Forks Card */}
            <GlowCard
              glowColor="blue"
              size="sm"
              customSize
              width={200}
              height={180}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <GitFork className="w-10 h-10 text-blue-400 mb-3" />
                <p className="text-gray-400 text-sm mb-2">Total Forks</p>
                <h3 className="text-4xl font-bold">{stats.totalForks}</h3>
              </div>
            </GlowCard>
          </div>
        </>
      ) : null}

      {/* GitHub Profile Link */}
      {/* <div className="text-center mt-12">
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-medium transition-all hover:scale-105 shadow-lg hover:shadow-purple-500/50"
          >
            <Github className="w-5 h-5" />
            View GitHub Profile
          </a>
        </div> */}
    </section>
  );
};

export default GitHubActivity;
