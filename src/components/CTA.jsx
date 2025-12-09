import React, { useState, useEffect } from "react";
import {
  ArrowRight
} from "lucide-react";

const CTASection = () => (
  <section className="py-20 px-6 ">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Ready to land your dream job?
      </h2>
      <p className="text-xl text-gray-600 mb-8">
        Join 1,200+ developers who used CareerCoach to get hired. Start learning
        the smart way today.
      </p>
      <button className="px-8 py-4 bg-cyan-600 text-white rounded-xl font-semibold text-lg hover:bg-cyan-700 transition-all hover:shadow-xl hover:shadow-cyan-600/30 inline-flex items-center gap-2 group">
        Get Your Free Roadmap
        <ArrowRight
          className="group-hover:translate-x-1 transition-transform"
          size={20}
        />
      </button>
    </div>
  </section>
);

export default CTASection;
