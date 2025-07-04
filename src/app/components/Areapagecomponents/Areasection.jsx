"use client";
import React, { useState } from "react";
import GlobalReach from "./GlobalReach";
import GlobalMap from "./GlobalMap";
import ExpansionCTA from "./ExpansionCTA";
import RegionCards from "./RegionCards";

const Areasection = () => {

    const [activeCity, setActiveCity] = useState(null);


    const regions = [
        {
            name: "Northeast",
            cities: ["New York", "Boston", "Philadelphia", "Washington D.C.", "Baltimore"],
            description: "Our flagship region with the highest concentration of premium clients",
            projects: 128,
            color: "bg-blue-500",
            highlight: true,
        },
        {
            name: "Midwest",
            cities: ["Chicago", "Detroit", "Indianapolis", "Columbus", "Milwaukee"],
            description: "Rapidly growing market with innovative partnerships",
            projects: 76,
            color: "bg-emerald-500",
        },
        {
            name: "South",
            cities: ["Houston", "Atlanta", "Miami", "Dallas", "Charlotte"],
            description: "Sunbelt expansion with exceptional growth potential",
            projects: 92,
            color: "bg-amber-500",
            highlight: true,
        },
        {
            name: "West",
            cities: ["Los Angeles", "San Francisco", "Seattle", "Denver", "Phoenix"],
            description: "Tech-forward region with cutting-edge implementations",
            projects: 105,
            color: "bg-purple-500",
        },
        {
            name: "International",
            cities: ["Toronto", "London", "Sydney", "Dubai", "Tokyo"],
            description: "Global presence with localized excellence",
            projects: 64,
            color: "bg-rose-500",
            highlight: true,
        },
    ];

    const getCityPosition = (city) => {
        const positions = {
            "New York": "top-[30%] left-[80%]",
            "Boston": "top-[25%] left-[85%]",
            "Philadelphia": "top-[35%] left-[78%]",
            "Washington D.C.": "top-[40%] left-[75%]",
            "Baltimore": "top-[38%] left-[77%]",
            "Chicago": "top-[45%] left-[55%]",
            "Detroit": "top-[42%] left-[65%]",
            "Indianapolis": "top-[50%] left-[60%]",
            "Columbus": "top-[48%] left-[67%]",
            "Milwaukee": "top-[43%] left-[58%]",
            "Houston": "top-[65%] left-[55%]",
            "Atlanta": "top-[60%] left-[70%]",
            "Miami": "top-[75%] left-[75%]",
            "Dallas": "top-[62%] left-[50%]",
            "Charlotte": "top-[55%] left-[72%]",
            "Los Angeles": "top-[55%] left-[20%]",
            "San Francisco": "top-[45%] left-[15%]",
            "Seattle": "top-[30%] left-[20%]",
            "Denver": "top-[50%] left-[40%]",
            "Phoenix": "top-[60%] left-[30%]",
            "Toronto": "top-[30%] left-[70%]",
            "London": "top-[25%] left-[45%]",
            "Sydney": "top-[85%] left-[90%]",
            "Dubai": "top-[55%] left-[60%]",
            "Tokyo": "top-[40%] left-[90%]",
        };
        return positions[city] || "top-[50%] left-[50%]";
    };


    const toggleRegion = (index) => {
        setExpandedIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section className="relative py-12 md:py-24 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#FF6D00] blur-3xl" />
                <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-[#423F8D] blur-3xl" />
            </div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <GlobalReach />

                <GlobalMap
                    regions={regions}
                    activeCity={activeCity}
                    setActiveCity={setActiveCity}
                    getCityPosition={getCityPosition}
                />



                

           <RegionCards 
                    regions={regions}
                    activeCity={activeCity}
                    setActiveCity={setActiveCity}
                />
     

 
                <ExpansionCTA  />


            </div>
        </section>
    );
};

export default Areasection;
