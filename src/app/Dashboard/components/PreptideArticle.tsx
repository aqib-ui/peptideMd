"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ShareDialog from "./ShareDialog";
import { useRouter } from "next/navigation";

type VideoType = {
  id: string;
  title: string;
  image: string;
  description: string;
  date: string;
  recommended: boolean;
};
export default function PeptidesArticle({
  Obj,
  page,
}: {
  Obj: VideoType;
  page: string;
}) {
    const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [archives, setArchives] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleArchive = () => {
    setArchives(!archives);
    const isArchiving = !archives;

    if (!isArchiving) {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2500);
    }

    setArchives(isArchiving);
  };
  return (
    <div className="max-w-[1128px] mx-auto text-xl px-4 py-10 text-[#51595A]">
      {/*top section */}
      <div className="mb-10 flex justify-between ">
        <div
          onClick={() => router.back()} className="cursor-pointer"
        >
          <Image
            width={40}
            height={40}
            src="/Dashboard/videos/left-arrow.svg"
            alt=""
            className="cursor-pointer w-[40px] h-[40px]"
          />
        </div>
        {/* Right section : archives add and share buttons */}
        <div className="flex items-center gap-4">
          {/* Archives button */}
          <button
            className="flex p-2 items-center gap-2 bg-[#F2F5F6] rounded-full cursor-pointer"
            onClick={toggleArchive}
          >
            {archives ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.5 11.4004H9.5C9.09 11.4004 8.75 11.0604 8.75 10.6504C8.75 10.2404 9.09 9.90039 9.5 9.90039H14.5C14.91 9.90039 15.25 10.2404 15.25 10.6504C15.25 11.0604 14.91 11.4004 14.5 11.4004Z"
                  fill="#25292A"
                />
                <path
                  d="M12 13.96C11.59 13.96 11.25 13.62 11.25 13.21V8.20996C11.25 7.79996 11.59 7.45996 12 7.45996C12.41 7.45996 12.75 7.79996 12.75 8.20996V13.21C12.75 13.62 12.41 13.96 12 13.96Z"
                  fill="#25292A"
                />
                <path
                  d="M19.0703 22.75C18.5603 22.75 18.0003 22.6 17.4603 22.29L12.5803 19.58C12.2903 19.42 11.7203 19.42 11.4303 19.58L6.55031 22.29C5.56031 22.84 4.55031 22.9 3.78031 22.44C3.01031 21.99 2.57031 21.08 2.57031 19.95V5.86C2.57031 3.32 4.64031 1.25 7.18031 1.25H16.8303C19.3703 1.25 21.4403 3.32 21.4403 5.86V19.95C21.4403 21.08 21.0003 21.99 20.2303 22.44C19.8803 22.65 19.4803 22.75 19.0703 22.75ZM12.0003 17.96C12.4703 17.96 12.9303 18.06 13.3003 18.27L18.1803 20.98C18.6903 21.27 19.1603 21.33 19.4603 21.15C19.7603 20.97 19.9303 20.54 19.9303 19.95V5.86C19.9303 4.15 18.5303 2.75 16.8203 2.75H7.18031C5.47031 2.75 4.07031 4.15 4.07031 5.86V19.95C4.07031 20.54 4.24031 20.98 4.54031 21.15C4.84031 21.32 5.31031 21.27 5.82031 20.98L10.7003 18.27C11.0703 18.06 11.5303 17.96 12.0003 17.96Z"
                  fill="#25292A"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16.8203 1.91016H7.18031C5.06031 1.91016 3.32031 3.65016 3.32031 5.77016V19.8602C3.32031 21.6602 4.61031 22.4202 6.19031 21.5502L11.0703 18.8402C11.5903 18.5502 12.4303 18.5502 12.9403 18.8402L17.8203 21.5502C19.4003 22.4302 20.6903 21.6702 20.6903 19.8602V5.77016C20.6803 3.65016 18.9503 1.91016 16.8203 1.91016ZM15.6203 9.03016L11.6203 13.0302C11.4703 13.1802 11.2803 13.2502 11.0903 13.2502C10.9003 13.2502 10.7103 13.1802 10.5603 13.0302L9.06031 11.5302C8.77031 11.2402 8.77031 10.7602 9.06031 10.4702C9.35031 10.1802 9.83031 10.1802 10.1203 10.4702L11.0903 11.4402L14.5603 7.97016C14.8503 7.68016 15.3303 7.68016 15.6203 7.97016C15.9103 8.26016 15.9103 8.74016 15.6203 9.03016Z"
                  fill="#DD6F94"
                />
              </svg>
            )}
          </button>
          {/* Tooltip when archiving  */}
          {showTooltip && (
            <div className="absolute top-10 right-10 w-[300px] h-[48px]  flex items-center gap-2 bg-white shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] border border-gray-300 rounded-lg px-4 py-2 z-50 animate-fade-in">
              <div className="w-5 h-5  rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10.0003 1.66699C5.40866 1.66699 1.66699 5.40866 1.66699 10.0003C1.66699 14.592 5.40866 18.3337 10.0003 18.3337C14.592 18.3337 18.3337 14.592 18.3337 10.0003C18.3337 5.40866 14.592 1.66699 10.0003 1.66699ZM13.9837 8.08366L9.25866 12.8087C9.14199 12.9253 8.98366 12.992 8.81699 12.992C8.65033 12.992 8.49199 12.9253 8.37533 12.8087L6.01699 10.4503C5.77533 10.2087 5.77533 9.80866 6.01699 9.56699C6.25866 9.32533 6.65866 9.32533 6.90033 9.56699L8.81699 11.4837L13.1003 7.20033C13.342 6.95866 13.742 6.95866 13.9837 7.20033C14.2253 7.44199 14.2253 7.83366 13.9837 8.08366Z"
                    fill="#224674"
                  />
                </svg>
              </div>
              <span className="text-sm font-semibold text-[#25292A]">
                Video saved.
              </span>
            </div>
          )}

          {/* share button */}
          <button
            onClick={() => setIsDialogOpen(true)}
            className="cursor-pointer"
          >
            <Image
              src="/Dashboard/videos/share-button.svg"
              alt=""
              width={40}
              height={40}
            />
          </button>
        </div>
      </div>
      {/* ---------- Share DialogBox ----------  */}
      {isDialogOpen && <ShareDialog onClose={() => setIsDialogOpen(false)} />}
      {/* ---------- Top Image ---------- */}
      <div className="w-full h-[580px] relative mb-6 rounded-xl overflow-hidden ">
        <Image
          src={Obj.image} // ← apni image ka path yahan update karẽ
          alt="Person pinching belly fat"
          width={1128}
          height={580}
          className="object-ontain w-full h-full"
        />
      </div>

      {/* ---------- Tag ---------- */}

      {Obj.recommended && page === "articles" && (
        <span className="bg-[#C8E4FC] inline-block rounded-full text-base font-medium text-[#224674] px-3 py-1  mb-4">
          Recommended
        </span>
      )}

      {/* ---------- Title ---------- */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
        {Obj.title}
      </h1>

      {/* ---------- Publish Date ---------- */}
      <p className="text-sm text-gray-500 mb-8">{Obj.date}</p>

      {/* ========== ARTICLE BODY ========== */}
      {/* Intro */}
      <p className="mb-5">
        In recent years, peptides have become the secret weapon of biohackers,
        bodybuilders, and wellness enthusiasts seeking to optimize their health
        — especially in the realm of fat loss. But can peptides really help you
        burn fat? Let’s unpack the science behind these metabolism-boosting
        compounds and separate fact from hype.
      </p>

      {/* What Are Peptides */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">
        What Are Peptides, and Why Are They Important?
      </h2>
      <p className="mb-4">
        Peptides are short chains of amino acids — the building blocks of
        proteins — that occur naturally in the body. They act as signaling
        molecules, instructing cells to perform specific functions like
        producing hormones, healing tissues, or regulating metabolism.
      </p>
      <p className="mb-5">
        While some peptides are naturally produced, scientists have also
        developed synthetic versions to mimic or enhance these functions. It’s
        these lab-made peptides that are now being explored for their
        fat-burning potential.
      </p>

      {/* Link Between Peptides & Fat Loss */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">
        The Link Between Peptides and Fat Loss
      </h2>
      <p className="mb-5">
        Certain peptides are known to influence hormones that control fat
        metabolism, appetite, and muscle growth. Here are some of the most
        researched fat-burning peptides:
      </p>

      {/* 1. CJC-1295 + Ipamorelin */}
      <h3 className="text-xl font-bold mt-6 mb-2">1. CJC-1295 + Ipamorelin</h3>
      <p className="mb-3">
        These two peptides are often used together to stimulate growth hormone
        (GH) release. Elevated GH levels increase lipolysis — the breakdown of
        fat — and promote lean muscle mass. Unlike synthetic HGH, this combo
        works with your body&apos;s natural rhythms and is considered safer when
        used under medical supervision.
      </p>
      <ul className="list-disc ml-6 mb-4 space-y-1">
        <li>
          <span className="font-semibold">Benefit:</span> Stimulates fat loss
          and improves sleep and recovery.
        </li>
        <li>
          <span className="font-semibold">Risk:</span> May cause water retention
          or tingling.
        </li>
      </ul>

      {/* 2. AOD-9604 */}
      <h3 className="text-xl font-bold mt-6 mb-2">2. AOD-9604</h3>
      <p className="mb-3">
        Known as the “anti-obesity drug,” AOD-9604 is a peptide fragment derived
        from HGH, specifically designed to trigger fat breakdown without
        affecting blood sugar or muscle.
      </p>
      <ul className="list-disc ml-6 mb-4 space-y-1">
        <li>
          <span className="font-semibold">Benefit:</span> Targets stubborn fat
          areas and supports weight loss.
        </li>
        <li>
          <span className="font-semibold">Research Status:</span> Approved in
          some regions as a prescription treatment for obesity.
        </li>
      </ul>

      {/* 3. Tesamorelin */}
      <h3 className="text-xl font-bold mt-6 mb-2">3. Tesamorelin</h3>
      <p className="mb-3">
        Originally developed for HIV-related lipodystrophy (abnormal fat
        distribution), Tesamorelin helps reduce visceral fat (fat around the
        organs), making it a promising tool for metabolic health.
      </p>
      <ul className="list-disc ml-6 mb-4 space-y-1">
        <li>
          <span className="font-semibold">Benefit:</span> Reduces deep belly fat
          and supports insulin sensitivity.
        </li>
        <li>
          <span className="font-semibold">Note:</span> Requires medical
          prescription and monitoring.
        </li>
      </ul>

      {/* 4. BPC-157 */}
      <h3 className="text-xl font-bold mt-6 mb-2">4. BPC-157</h3>
      <p className="mb-3">
        Although primarily known for healing and tissue regeneration, BPC-157
        can indirectly support weight loss by reducing inflammation and
        improving digestion, which are critical for metabolic health.
      </p>
      <ul className="list-disc ml-6 mb-4 space-y-1">
        <li>
          <span className="font-semibold">Benefit:</span> Supports gut health
          and recovery.
        </li>
        <li>
          <span className="font-semibold">Best for:</span> Those with chronic
          inflammation or GI issues.
        </li>
      </ul>

      {/* How Peptides Influence Metabolism */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">
        How Peptides Influence Metabolism
      </h2>
      <p className="mb-3">
        Peptides affect fat loss through various biological mechanisms:
      </p>
      <ul className="list-disc ml-6 mb-8 space-y-1">
        <li>
          <span className="font-semibold">
            Stimulating Growth Hormone Secretion →
          </span>{" "}
          Increases fat oxidation
        </li>
        <li>
          <span className="font-semibold">Regulating Appetite Hormones →</span>{" "}
          Reduces food intake
        </li>
        <li>
          <span className="font-semibold">Increasing Lean Muscle Mass →</span>{" "}
          Higher resting metabolic rate
        </li>
      </ul>

      {/* Are Peptides Safe? */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">Are Peptides Safe?</h2>
      <p className="mb-4">
        Peptides can offer real results, but safety depends on sourcing, dosage,
        and supervision. Many peptide therapies are still under clinical review,
        and some are only approved for specific conditions.
      </p>
      <p className="mb-2">
        If you’re considering peptides for fat loss, consult a licensed medical
        professional familiar with hormone optimization. Avoid buying from
        unverified online vendors, as low-quality peptides may be ineffective or
        dangerous.
      </p>
      <div className="w-full h-[580px] relative mb-6 rounded-xl overflow-hidden ">
        <Image
          src="/Dashboard/rec-art/injection.png" // ← apni image ka path yahan update karẽ
          alt="Person pinching belly fat"
          width={1128}
          height={580}
          className="object-ontain w-full h-full"
        />
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Can Peptides Help You Burn Fat?
      </h2>
      <p className="mb-4">
        Peptides can offer real results, but safety depends on sourcing, dosage,
        and supervision. Many peptide therapies are still under clinical review,
        and some are only approved for specific conditions. Peptides can offer
        real results, but safety depends on sourcing, dosage, and supervision.
        Many peptide therapies are still under clinical review, and some are
        only approved for specific conditions.
      </p>
    </div>
  );
}
