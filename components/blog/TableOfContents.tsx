// components/blog/TableOfContents.tsx
export default function TableOfContents() {
    return (
      <div className="mt-[50px] max-900:w-full">
        <p className="mb-[20px]">Table of Contents</p>
        <ul className="bg-black text-white p-6 text-[15px] rounded-lg space-y-[24.2px] list-disc list-outside">
          {[
            "Introduction",
            "AI in Diagnostic Imaging",
            "Predictive Analytics and Disease Prevention",
            "Personalized Treatment Plans",
            "Drug Discovery and Research",
            "AI in Telemedicine",
            "Ethical Considerations",
            "The Future of AI in Healthcare",
            "Conclusion",
          ].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
  