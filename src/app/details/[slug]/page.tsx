import React, { JSX, use } from "react";
export type ParamsType = Promise<{ slug: string }>;
interface PageProps {
  params: ParamsType;
}

const Page = ({ params }: PageProps) => {
  const pageData: Record<string, { title: JSX.Element; content: JSX.Element }> =
    {
      "mental-health": {
        title: (
          <h1
            className="flex  max-md:flex-col text-4xl font-bold text-[72px] max-md:text-[60px] leading-[100%] text-left"
            style={{ fontFamily: "Afacad, sans-serif" }}
          >
            Mental Health &
            <span style={{ color: "#224674" }} className="italic ml-1 md:ml-4">
              Peptides
            </span>
          </h1>
        ),
        content: (
          <div className="mx-auto text-left">
            <h2
              className="text-[34px] max-md:text-[28px] max-md:mt-5 font-medium leading-[100%] mt-4 mb-10"
              style={{ fontFamily: "Afacad, sans-serif" }}
            >
              Understanding the Role of Peptides in Mental Health
            </h2>

            {/* "Peptide Overview" Button */}

            {/* <div className="gradient-border w-[184px] h-[66px] rounded-full mb-10">
              <button
                className="w-full h-full rounded-full bg-app text-black text-[clamp(16px,0.284vw+16.1px,20px)] font-medium
    flex items-center justify-center transition-colors duration-100 
    ease-in-out hover:bg-gradient-to-tr hover:from-[#5CB0E2] hover:to-[#EB6793] hover:text-white"
                style={{ fontFamily: "Afacad, sans-serif" }}
              >
                Explore More
              </button>
            </div> */}

{/* "Peptide Overview" Button */}
<div className="gradient-border">
            <button
            className="w-full h-full rounded-full bg-app text-black text-[clamp(16px,0.284vw+16.1px,20px)] font-medium
            flex items-center justify-center transition-colors duration-100 
            ease-in-out hover:bg-gradient-to-tr hover:from-[#5CB0E2] hover:to-[#EB6793] hover:text-white"
              style={{ fontFamily: "Afacad, sans-serif" }}
            >
              Explore More
            </button>
          </div>
            
            <p
              className="text-[24px] font-medium leading-[130%] mt-10 mb-10"
              style={{ fontFamily: "Afacad, sans-serif" }}
            >
              Mental health is an important part of overall well-being. Many
              people struggle with conditions like depression, anxiety,
              attention deficit disorder (ADD), and sexual dysfunction. While
              traditional treatments such as therapy and medication can help,
              researchers are exploring new ways to improve mental health. One
              promising option is peptides.
            </p>

            <p
              className="text-[24px] font-medium leading-[130%] mb-10"
              style={{ fontFamily: "Afacad, sans-serif" }}
            >
              What Are Peptides? Peptides are small chains of amino acids, which
              are the building blocks of proteins. They help the body perform
              important functions. Some peptides act like hormones, sending
              signals in the brain and body. Scientists have discovered that
              certain peptides can help with mood, stress, focus, and even
              sexual health.
            </p>

            <p
              className="text-[24px] font-medium leading-[130%] mb-10"
              style={{ fontFamily: "Afacad, sans-serif" }}
            >
              How Can Peptides Help with Mental Health? Peptides work by
              interacting with the brain&apos;s chemical messengers. These
              messengers, known as neurotransmitters, affect mood, emotions, and
              behavior. Some peptides help increase serotonin and dopamine,
              which are chemicals that make people feel happy and calm.
            </p>

            <h3
              className="text-[24px] font-medium leading-[120%] mt-6"
              style={{ fontFamily: "Afacad, sans-serif" }}
            >
              Key Applications in Mental Health:
            </h3>
            <ul
              className="text-[24px] font-medium leading-[130%] mb-10 mt-6 space-y-8"
              style={{ fontFamily: "Afacad, sans-serif" }}
            >
              <li className="">
                <span className="text-[#88D3FF] font-bold mb-20">1.</span>
                Peptides for Depression Depression is a serious condition that
                makes people feel sad and tired. Studies show that some
                peptides, like Selank and Semax, can help. These peptides boost
                serotonin and dopamine levels, improving mood and energy. A
                study in Molecular Neurobiology (2016) found that Selank has
                anti-anxiety and antidepressant effects.
              </li>
              <li className="">
                <span className="text-[#88D3FF] font-bold">2.</span> Peptides
                for Anxiety Anxiety causes worry and fear. Peptides like Selank
                and Oxytocin can help people feel calmer. Oxytocin is sometimes
                called the &quot;love hormone&quot; because it increases
                feelings of trust and bonding. Research in Neuroscience and
                Behavioral Physiology (2018) showed that Selank helps lower
                stress and improve relaxation.
              </li>
              <li className="">
                <span className="text-[#88D3FF] font-bold">3.</span> Peptides
                for ADD/ADHD Attention Deficit Disorder (ADD) and Attention
                Deficit Hyperactivity Disorder (ADHD) make it hard for people to
                focus. Semax is a peptide that may help improve attention and
                memory. Research from the Journal of Biomedical Science (2017)
                suggests that Semax increases brain activity related to focus
                and learning.
              </li>
              <li className="">
                <span className="text-[#88D3FF] font-bold">4.</span> Peptides
                for Sexual Dysfunction Sexual health is part of mental
                well-being. Some peptides, like PT-141 (Bremelanotide), help
                increase sexual desire. PT-141 works by stimulating dopamine in
                the brain. The Journal of Sexual Medicine (2019) found that
                PT-141 helped both men and women with low libido.
              </li>
            </ul>

            <p
              className="text-[24px] font-medium leading-[130%] mb-10"
              style={{ fontFamily: "Afacad, sans-serif" }}
            >
              Why Choose Peptides? Many people use medications like
              antidepressants or stimulants to treat mental health conditions.
              While these can help, they sometimes have side effects like weight
              gain, sleep problems, or addiction. Peptides offer a different
              approach because they work naturally with the body. Research
              suggests that peptides may have fewer side effects than
              traditional medications.
            </p>

            <h3
              className="text-[28px] font-medium leading-[120%] mt-6 mb-2"
              style={{ fontFamily: "Afacad, sans-serif" }}
            >
              Important Research Citations:
            </h3>

            <ul
              className=" text-[24px] font-medium leading-[130%] mb-10 "
              style={{ fontFamily: "Afacad, sans-serif" }}
            >
              <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2.5 before:h-2.5 before:rounded-full before:border-3 before:border-[#88D3FF]">
                Ashina, H., et al. (2016). Molecular Neurobiology. Study on
                Selank&apos;s antidepressant effects.
              </li>
              <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2.5 before:h-2.5 before:rounded-full before:border-3 before:border-[#88D3FF]">
                Zharkovsky, A., et al. (2018). Neuroscience and Behavioral
                Physiology. Research on Selank&apos;s impact on anxiety.
              </li>
              <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2.5 before:h-2.5 before:rounded-full before:border-3 before:border-[#88D3FF]">
                Petrov, S., et al. (2017). Journal of Biomedical Science. Study
                on Semax and cognitive function.
              </li>
              <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2.5 before:h-2.5 before:rounded-full before:border-3 before:border-[#88D3FF]">
                Diamond, L., et al. (2019). Journal of Sexual Medicine. Research
                on PT-141 for sexual dysfunction.
              </li>
              <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2.5 before:h-2.5 before:rounded-full before:border-3 before:border-[#88D3FF]">
                Dmitriev, Y., et al. (2020). Pharmacology & Therapeutics. Review
                of peptide safety and effectiveness.
              </li>
            </ul>

            <p
              className="text-[24px] font-medium leading-[130%] mb-10"
              style={{ fontFamily: "Afacad, sans-serif" }}
            >
              Note: Always consult with healthcare professionals before starting
              any new treatment approach.
            </p>
          </div>
        ),
      },
      "physical-health": {
        title: (
          <h1
            className="flex  max-md:flex-col text-4xl font-bold text-[72px] max-md:text-[60px] leading-[100%] text-left"
            style={{ fontFamily: "Afacad, sans-serif" }}
          >
            Essential Peptide
            <span style={{ color: "#224674" }} className="italic ml-1 md:ml-4">
              Knowledge
            </span>
          </h1>
        ),
        content: (
          <div className="max-w-4xl text-left">
            <h2
              className="text-[34px] font-medium leading-[100%] mt-4"
              style={{ fontFamily: "Afacad, sans-serif" }}
            >
              Understanding Essentials
            </h2>

            {/* "Peptide Overview" Button */}
            {/* 
            <div className="gradient-border w-[184px] h-[66px] rounded-full mb-10">
              <button
                className="w-full h-full rounded-full bg-app text-black text-[clamp(16px,0.284vw+16.1px,20px)] font-medium
    flex items-center justify-center transition-colors duration-100 
    ease-in-out hover:bg-gradient-to-tr hover:from-[#5CB0E2] hover:to-[#EB6793] hover:text-white"
                style={{ fontFamily: "Afacad, sans-serif" }}
              >
                Explore More
              </button>
            </div> */}
            {/* "Peptide Overview" Button */}
            <div className="gradient-border">
              <button
                className="w-full h-full rounded-full bg-app text-black text-[clamp(16px,0.284vw+16.1px,20px)] font-medium
            flex items-center justify-center transition-colors duration-100 
            ease-in-out hover:bg-gradient-to-tr hover:from-[#5CB0E2] hover:to-[#EB6793] hover:text-white"
                style={{ fontFamily: "Afacad, sans-serif" }}
              >
                Explore More
              </button>
            </div>

            <p
              className="text-[24px] font-medium leading-[130%] mt-10"
              style={{ fontFamily: "Afacad, sans-serif" }}
            >
              For General Readers:
            </p>
            <p
              className="text-[24px] font-medium leading-[130%] mb-4"
              style={{ fontFamily: "Afacad, sans-serif" }}
            >
              Basic concepts to understand:
            </p>

            <ul
              className="text-[24px] font-medium leading-[120%] mt-10 space-y-1"
              style={{ fontFamily: "Afacad, sans-serif" }}
            >
              <li
                className="relative pl-6 before:content-[''] before:w-3 before:h-3 
                before:border-3 before:border-[#88D3FF] before:rounded-full before:absolute
                before:left-0 before:top-1/2 before:-translate-y-1/2"
              >
                What Are Peptides?
              </li>
              <li
                className="relative pl-6 before:content-[''] before:w-3 before:h-3 
                before:border-3 before:border-[#88D3FF] before:rounded-full before:absolute
                before:left-0 before:top-1/2 before:-translate-y-1/2"
              >
                How they work in the body
              </li>
              <li
                className="relative pl-6 before:content-[''] before:w-3 before:h-3 before:border-3 
                before:border-[#88D3FF] before:rounded-full before:absolute before:left-0 
                before:top-1/2 before:-translate-y-1/2"
              >
                Different types and uses
              </li>
              <li
                className="relative pl-6 before:content-[''] before:w-3 before:h-3 before:border-3 
                before:border-[#88D3FF] before:rounded-full before:absolute before:left-0 
                before:top-1/2 before:-translate-y-1/2"
              >
                Important safety information
              </li>
            </ul>

            <h3
              className="text-[24px] font-medium leading-[120%] mt-10"
              style={{ fontFamily: "Afacad, sans-serif" }}
            >
              For Healthcare Professionals:
            </h3>
            <ul
              className="text-[24px] font-medium leading-[120%] mt-2 space-y-1"
              style={{ fontFamily: "Afacad, sans-serif" }}
            >
              <li
                className="relative pl-6 before:content-[''] before:w-3 before:h-3 before:border-3 
                before:border-[#88D3FF] before:rounded-full before:absolute before:left-0 
                before:top-1/2 before:-translate-y-1/2"
              >
                Advanced concepts:
              </li>
              <li
                className="relative pl-6 before:content-[''] before:w-3 before:h-3 before:border-3 
                before:border-[#88D3FF] before:rounded-full before:absolute before:left-0 
                before:top-1/2 before:-translate-y-1/2"
              >
                Molecular mechanisms
              </li>
              <li
                className="relative pl-6 before:content-[''] before:w-3 before:h-3 before:border-3 
                before:border-[#88D3FF] before:rounded-full before:absolute before:left-0 
                before:top-1/2 before:-translate-y-1/2"
              >
                Pharmacokinetics
              </li>
              <li
                className="relative pl-6 before:content-[''] before:w-3 before:h-3 before:border-3 
              before:border-[#88D3FF] before:rounded-full before:absolute before:left-0 
              before:top-1/2 before:-translate-y-1/2"
              >
                Clinical applications
              </li>
              <li
                className="relative pl-6 before:content-[''] before:w-3 before:h-3 before:border-3
              before:border-[#88D3FF] before:rounded-full before:absolute before:left-0 
              before:top-1/2 before:-translate-y-1/2"
              >
                Treatment protocols
              </li>
            </ul>

            <h3
              className="text-[24px] font-medium leading-[120%] mt-10"
              style={{ fontFamily: "Afacad, sans-serif" }}
            >
              Stay Informed About:
            </h3>
            <ul
              className="text-[24px] font-medium leading-[120%] mt-2 space-y-1"
              style={{ fontFamily: "Afacad, sans-serif" }}
            >
              <li
                className="relative pl-6 before:content-[''] before:w-3 before:h-3 before:border-3 
                before:border-[#88D3FF] before:rounded-full before:absolute before:left-0 
                before:top-1/2 before:-translate-y-1/2"
              >
                New research findings
              </li>
              <li
                className="relative pl-6 before:content-[''] before:w-3 before:h-3 before:border-3 
                before:border-[#88D3FF] before:rounded-full before:absolute before:left-0 
                before:top-1/2 before:-translate-y-1/2"
              >
                Regulatory updates
              </li>
              <li
                className="relative pl-6 before:content-[''] before:w-3 before:h-3 before:border-3 
                before:border-[#88D3FF] before:rounded-full before:absolute before:left-0 
                before:top-1/2 before:-translate-y-1/2"
              >
                Clinical best practices
              </li>
              <li
                className="relative pl-6 before:content-[''] before:w-3 before:h-3 before:border-3 
                before:border-[#88D3FF] before:rounded-full before:absolute before:left-0
                before:top-1/2 before:-translate-y-1/2"
              >
                Patient selection criteria
              </li>
            </ul>
          </div>
        ),
      },
      longevity: {
        title: <h1 className="text-4xl font-bold">Longevity</h1>,
        content: (
          <p>
            Learn about peptides that may support healthy aging and vitality.
          </p>
        ),
      },
      "research-focus": {
        title: <h1 className="text-4xl font-bold">Research Focus</h1>,
        content: (
          <p>
            Latest scientific discoveries and clinical applications of peptides.
          </p>
        ),
      },
      "safety-first": {
        title: <h1 className="text-4xl font-bold">Safety First</h1>,
        content: (
          <p>
            Understanding safety guidelines and best practices for using
            peptides.
          </p>
        ),
      },
      "in-the-know": {
        title: <h1 className="text-4xl font-bold">In the Know</h1>,
        content: (
          <p>Stay updated with emerging developments in peptide science.</p>
        ),
      },
    };

  const { slug } = use(params);

  const data = pageData[slug];

  if (!data) {
    return <div>Page not found</div>;
  }

  return (
    <div className="p-8">
      {data.title}
      {data.content}
    </div>
  );
};

export async function generateStaticParams() {
  const slugs = [
    "mental-health",
    "physical-health",
    "longevity",
    "research-focus",
    "safety-first",
    "in-the-know",
  ];
  return slugs.map((slug) => ({
    slug,
  }));
}

export default Page;
