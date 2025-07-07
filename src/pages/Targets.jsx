import React from "react";
import TargetHero from "../components/block/targets/TargetHero";
import TargetGoals from "../components/block/targets/TargetGoals";
import TargetFun from "../components/block/targets/TargetFun";
import TargetChallenges from "../components/block/targets/TargetChallenges";

const Targets = () => {
  return (
    <div>
      <TargetHero />
      <TargetGoals />
      <TargetFun />
      <TargetChallenges />
    </div>
  );
};

export default Targets;
