import HeroSection from "@/components/homepage/HeroSection";
import React from "react";
import { PinnedMessage } from "./components/PinnedMessage";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import GuestbookHeader from "./components/GuestbookHeader";
import { Metadata } from "next";
import EntryForm from "./components/EntryForm";
import { SignInButton } from "./components/SignInButton";



export const metadata: Metadata = {
  title: "Soumya Manna's Gustbook",
  description: "Guestbook",
};


const page = () => {
  return (
    <div>
      {" "}
      <HeroSection
        backgroundImage="/images/assets/paper-texture-optmized.webp"
        height="600px"
        overlayOpacity={0.2}
        contentOverlap="500px" // Adjust this value
        className="opacity-30"
      />
      <MaxWidthWrapper>
        <GuestbookHeader />
        <PinnedMessage />
        {/* 
        {!isSignedIn ? <SignInButton/> : <EntryForm />} */}

        {/* {!isSignedIn ? (
        <div className="max-w-4xl mx-auto px-6 py-8 text-center">
          <SignInButton onClick={handleSignIn} />
        </div>
      ) : (
        <EntryForm onSubmit={handleSubmit} />
      )} */}

        {/* <EntryList entries={entries} /> */}
      </MaxWidthWrapper>
    </div>
  );
};

export default page;
