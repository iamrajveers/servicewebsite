"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import TeamMember from "./TeamMember";

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=987&q=80",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=987&q=80",
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=987&q=80",
  },
  {
    name: "David Wilson",
    role: "Director of Client Success",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&w=987&q=80",
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Global Leadership"
          subtitle="The visionaries driving our worldwide success"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <TeamMember key={index} delay={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
