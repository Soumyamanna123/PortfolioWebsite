import React from "react";
import { BentoCard, BentoGrid } from "./Bento";

interface IProps {
  features: {
    name: string;
    description: string;
    href: string;
    previewComponentName: string;
    className?: string;
    background: React.JSX.Element;
  }[];
  container?: boolean;
  className?: string;
}

const BentoDemo: React.FC<IProps> = ({ features, container, className }) => {
  return (
    <BentoGrid container={container} className={className}>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
};

export default BentoDemo;
