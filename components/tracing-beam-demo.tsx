"use client";
import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-primary text-primary-foreground rounded-full text-sm w-fit px-4 py-1 mb-4 font-bold">
              {item.badge}
            </h2>

            <p className="text-2xl mb-4 font-bold text-foreground">
              {item.title}
            </p>

            <div className="text-sm prose prose-sm dark:prose-invert text-foreground/70">
              {item?.image && (
                <img
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Innovating AI Engineering",
    description: (
      <>
        <p>
          At OgiTech, we push the boundaries of what's possible with artificial intelligence. 
          Our approach combines rigorous academic research with practical industrial application, 
          ensuring that our models are not just powerful, but also reliable and scalable.
        </p>
      </>
    ),
    badge: "AI Excellence",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=3540",
  },
  {
    title: "Secure IoT Architectures",
    description: (
      <>
        <p>
          Security is at the heart of our IoT solutions. We design systems that are resilient to 
          attacks while providing seamless connectivity across devices. Our dual-discipline approach 
          allows us to identify vulnerabilities before they can be exploited.
        </p>
      </>
    ),
    badge: "Security First",
    image:
      "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=3540",
  },
];
