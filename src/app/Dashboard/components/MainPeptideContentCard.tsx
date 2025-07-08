import Image from 'next/image'
import React from 'react'

export default function MainPeptideContentCard({ obj }:any) {
  return (
      <div className="overflow-hidden">
         {/* Information Grid */}
         <div className="grid grid-cols-1  gap-2 ">
           <div className="text-[#25292A] text-[32px] font-semibold">
             <h2>
               {obj.peptide} <q>nuda {obj.nudaName}</q>
             </h2>
           </div>
           <div className="flex flex-col ">
             <div className="flex">
               <Image
                 src="/Dashboard/pep-database/nudu-name.svg"
                 alt="peptide"
                 width={32}
                 height={32}
               />
               <h2 className=" pl-1 text-lg  text-[#51595A]">Nuda Name</h2>
             </div>
             <p className="text-[#25292A] text-lg font-medium pl-9 -mt-2">
               {obj.nudaName}
             </p>
           </div>
           <div className="flex flex-col">
             <div className="flex">
               <Image
                 src="/Dashboard/pep-database/primary-application.svg"
                 alt="peptide"
                 width={32}
                 height={32}
               />
               <h2 className=" pl-1 text-lg  text-[#51595A]">
                 Primary Application
               </h2>
             </div>
             <p className="text-[#25292A] text-lg font-medium pl-9 -mt-2">
               {obj.primaryApplications}
             </p>
           </div>
           <div className="flex flex-col">
             <div className="flex">
               <Image
                 src="/Dashboard/pep-database/fda.svg"
                 alt="peptide"
                 width={32}
                 height={32}
               />
               <h2 className=" pl-1 text-lg  text-[#51595A]">FDA Status</h2>
             </div>
             <p className="text-[#25292A] text-lg font-medium pl-9 -mt-2">
               {obj.status}
             </p>
           </div>
           <div className="flex flex-col">
             <div className="flex">
               <Image
                 src="/Dashboard/pep-database/fda-description.svg"
                 alt="peptide"
                 width={32}
                 height={32}
               />
               <h2 className=" pl-1 text-lg  text-[#51595A]">FDA Description</h2>
             </div>
             <p className="text-[#25292A] text-lg font-medium pl-9 -mt-2">
               {obj.status} approved; classified as a research compound
             </p>
           </div>
           <div className="flex flex-col">
             <div className="flex">
               <Image
                 src="/Dashboard/pep-database/duration.svg"
                 alt="peptide"
                 width={32}
                 height={32}
               />
               <h2 className=" pl-1 text-lg  text-[#51595A]">
                 Protocol Duration
               </h2>
             </div>
             <p className="text-[#25292A] text-lg font-medium pl-9 -mt-2">
               {obj.protocolDuration}
             </p>
           </div>
           <div className="flex flex-col">
             <div className="flex">
               <Image
                 src="/Dashboard/pep-database/chart.svg"
                 alt="peptide"
                 width={32}
                 height={32}
               />
               <h2 className=" pl-1 text-lg  text-[#51595A]">
                 Experience Level
               </h2>
             </div>
             <p className="text-[#25292A] text-lg font-medium pl-9 -mt-2">
               {obj.experiencesLevel}
             </p>
           </div>
           <div className="flex flex-col">
             <div className="flex">
               <Image
                 src="/Dashboard/pep-database/side-effect.svg"
                 alt="peptide"
                 width={32}
                 height={32}
               />
               <h2 className=" pl-1 text-lg  text-[#51595A]">
                 Side Effect Profile
               </h2>
             </div>
             <p className="text-[#25292A] text-lg font-medium pl-9 -mt-2">
               {obj.sideEffectProfile}
             </p>
           </div>
           <div className="flex flex-col">
             <div className="flex">
               <Image
                 src="/Dashboard/pep-database/pop-comb.svg"
                 alt="peptide"
                 width={32}
                 height={32}
               />
               <h2 className=" pl-1 text-lg  text-[#51595A]">
                 Popular Combinations
               </h2>
             </div>
             <p className="text-[#25292A] text-lg font-medium pl-9 -mt-2">
               CJC-1295, Semaglutide, Carnitine
             </p>
           </div>
         </div>
 
         <div className="flex flex-col gap-4">
           {/* Quote Section */}
           <div className="pt-4">
             <p className="italic text-[#25292A] text-xl font-medium">
               "We've named this elegant peptide Ardeo for its remarkable ability
               to ignite your body's natural fat burning processes, like a
               controlled flame that selectively consumes stored energy while
               preserving lean tissue."
             </p>
           </div>
 
           {/* Introduction Section */}
           <div className="">
             <h2 className="text-2xl font-semibold text-[#25292A] mb-2">
               Introduction
             </h2>
             <p className="text-[#51595A] text-xl ">
               AOD-9604 represents a fascinating advancement in peptide science.
               A modified fragment of human growth hormone that retains the fat
               burning benefits without affecting blood sugar or growth. This
               elegant 15 amino acid sequence speaks directly to your fat cells,
               encouraging the breakdown of stored fat while potentially
               supporting the body's natural fat burning processes. What makes
               AOD-9604 particularly valuable in our precision wellness approach
               is its targeted action. Specific. It works exclusively on lipid
               metabolism without the broader systemic effects of complete growth
               hormone. While many clients notice changes in stubborn areas of
               body fat within several weeks, we appreciate that AOD-9604 works
               with your body's natural processes, creating gradual, sustainable
               shifts in composition rather than dramatic overnight changes.
             </p>
           </div>
 
           {/* Historical Context Section */}
           <div className="">
             <h2 className="text-2xl font-semibold text-[#25292A] mb-2">
               Historical Context
             </h2>
             <p className="text-[#51595A] text-xl ">
               AOD-9604 emerged from research in the late 1990s at Monash
               University in Australia, where scientists were investigating ways
               to isolate and enhance specific benefits of human growth hormone
               while minimizing unwanted effects. Researchers identified the
               fat-reducing region of the growth hormone molecule (amino acids
               176-191) and modified it to create this specialized peptide
               fragment. Innovative. The initial premise was
               revolutionary—harness the metabolic benefits of growth hormone
               without stimulating growth, affecting insulin sensitivity, or
               triggering other systemic changes. Early animal studies showed
               promising results for fat loss without adverse effects on blood
               sugar, and human research began in the early 2000s with a focus on
               obesity treatment. Though initially developed as a potential
               pharmaceutical for obesity, AOD-9604 has since found its place in
               the precision wellness space, where its targeted approach to fat
               metabolism continues to be studied and refined
             </p>
           </div>
 
           {/* Key Information Section */}
           <div className="">
             <h2 className="text-2xl font-semibold text-[#25292A] mb-2">
               Key Information
             </h2>
 
             <ul className="list-disc ml-8 space-y-2">
               <li className="text-lg ml-2">
                 <span className="font-medium  text-[#25292A]">
                   Peptide Category:
                 </span>
                 <span className=" pl-1 text-[#51595A]">
                   Growth Hormone Fragment
                 </span>
               </li>
               <li className="text-lg ml-2">
                 <span className="font-medium  text-[#25292A]">
                   Number of Amino Acids:
                 </span>
                 <span className=" pl-1 text-[#51595A]">15</span>
               </li>
               <li className="text-lg ml-2">
                 <span className="font-medium  text-[#25292A]">
                   Biological Activity:
                 </span>
                 <span className=" pl-1 text-[#51595A]">
                   Lipolytic (fat-burning)
                 </span>
               </li>
               <li className="text-lg ml-2">
                 <span className="font-medium  text-[#25292A]">Origin:</span>
                 <span className=" pl-1 text-[#51595A]">
                   Exogenous (synthetic)
                 </span>
               </li>
               <li className="text-lg ml-2">
                 <span className="font-medium  text-[#25292A]">
                   Primary Applications:
                 </span>
                 <span className=" pl-1 text-[#51595A]">
                   Weight management, fat loss
                 </span>
               </li>
               <li className="text-lg ml-2">
                 <span className="font-medium  text-[#25292A]">
                   Current Research Status:
                 </span>
                 <span className=" pl-1 text-[#51595A]">
                   Not FDA approved; classified as a research compound
                 </span>
               </li>
             </ul>
           </div>
 
           {/* How It Works Section */}
           <div className="">
             <h2 className="text-2xl font-semibold text-[#25292A] mb-2">
               How It Works
             </h2>
             <p className="text-[#51595A] text-xl ">
               AOD-9604 functions by mimicking the way natural growth hormone
               interacts with fat cells, but with greater specificity. At its
               core, this peptide stimulates lipolysis—the breakdown of stored
               fat—while inhibiting lipogenesis, the creation of new fat cells.
               Think of it as recalibrating your body's fat storage instructions
               to favor release rather than accumulation. The peptide primarily
               works by binding to specific receptors on fat cells, triggering a
               cascade of signaling events that activate hormone-sensitive
               lipase, the enzyme responsible for breaking down triglycerides
               into free fatty acids that can be used for energy.
             </p>
             <p className="mt-8">
               What distinguishes AOD-9604 from many metabolic compounds is its
               selectivity. Targeted. Unlike complete growth hormone, it doesn't
               affect blood sugar metabolism, stimulate IGF-1 production, or
               influence cell growth in other tissues. This focused approach
               potentially allows for fat metabolism support without the broader
               systemic effects that can make complete growth hormone problematic
               for some individuals. By working through pathways similar to your
               body's natural fat-burning processes, AOD-9604 promotes a gradual
               recomposition rather than dramatic weight fluctuations that can be
               difficult to maintain.
             </p>
           </div>
 
           {/* Bioavailability & Pharmacokinetics */}
           <div className="">
             <h2 className="text-2xl font-semibold text-[#25292A] mb-2">
               Bioavailability & Pharmacokinetics
             </h2>
             <p className="text-[#51595A] text-xl ">
               AOD-9604 demonstrates limited oral bioavailability due to
               degradation in the digestive system, making subcutaneous injection
               the preferred administration method for optimal effectiveness.
               Following subcutaneous injection, the peptide reaches systemic
               circulation with approximately 65-75% bioavailability. Balance.
               The peptide has a relatively short half-life of about 20-30
               minutes, but its metabolic effects persist beyond this timeframe
               as it initiates cellular signaling cascades that continue after
               the peptide itself has been cleared.
             </p>
             <p className="mt-8">
               Distribution occurs primarily to adipose (fat) tissue, where
               receptor density is highest, explaining its targeted effects on
               fat metabolism. AOD-9604 is metabolized primarily through
               enzymatic breakdown in the liver and kidneys, with metabolites
               excreted through urine. The short half-life explains why
               consistent administration is important for maintaining its
               fat-mobilizing effects. While single doses can increase fat
               metabolism temporarily, the cumulative effect of regular
               administration over 8-12 weeks provides the most noticeable and
               sustainable changes in body composition, particularly when
               combined with appropriate nutrition and physical activity.
             </p>
           </div>
 
           {/* Potential Benefits Section */}
           <div className="">
             <h2 className="text-2xl font-semibold text-[#25292A] mb-2">
               Potential Benefits
             </h2>
 
             <ul className="list-disc ml-8 space-y-2">
               <li className="text-lg ml-2">
                 <span className="font-medium  text-[#25292A]">
                   Enhanced Fat Metabolism:
                 </span>
                 <span className=" pl-1 text-[#51595A]">
                   Growth Hormone Fragment
                 </span>
               </li>
               <li className="text-lg ml-2">
                 <span className="font-medium  text-[#25292A]">
                   Preserved Muscle Tissue:
                 </span>
                 <span className=" pl-1 text-[#51595A]">15</span>
               </li>
               <li className="text-lg ml-2">
                 <span className="font-medium  text-[#25292A]">
                   Biological Activity:
                 </span>
                 <span className=" pl-1 text-[#51595A]">
                   Lipolytic (fat-burning)
                 </span>
               </li>
               <li className="text-lg ml-2">
                 <span className="font-medium  text-[#25292A]">Origin:</span>
                 <span className=" pl-1 text-[#51595A]">
                   Exogenous (synthetic)
                 </span>
               </li>
               <li className="text-lg ml-2">
                 <span className="font-medium  text-[#25292A]">
                   Primary Applications:
                 </span>
                 <span className=" pl-1 text-[#51595A]">
                   Weight management, fat loss
                 </span>
               </li>
               <li className="text-lg ml-2">
                 <span className="font-medium  text-[#25292A]">
                   Current Research Status:
                 </span>
                 <span className=" pl-1 text-[#51595A]">
                   Not FDA approved; classified as a research compound
                 </span>
               </li>
             </ul>
           </div>
           {/* Weight Management */}
           <div className="">
             <h2 className="text-2xl font-semibold text-[#25292A] mb-2">
               Weight Management
             </h2>
             <p className="text-[#51595A] text-xl ">
               AOD-9604 demonstrates limited oral bioavailability due to
               degradation in the digestive system, making subcutaneous injection
               the preferred administration method for optimal effectiveness.
               Following subcutaneous injection, the peptide reaches systemic
               circulation with approximately 65-75% bioavailability. Balance.
               The peptide has a relatively short half-life of about 20-30
               minutes, but its metabolic effects persist beyond this timeframe
               as it initiates cellular signaling cascades that continue after
               the peptide itself has been cleared.
             </p>
             <p className="mt-8">
               Distribution occurs primarily to adipose (fat) tissue, where
               receptor density is highest, explaining its targeted effects on
               fat metabolism. AOD-9604 is metabolized primarily through
               enzymatic breakdown in the liver and kidneys, with metabolites
               excreted through urine. The short half-life explains why
               consistent administration is important for maintaining its
               fat-mobilizing effects. While single doses can increase fat
               metabolism temporarily, the cumulative effect of regular
               administration over 8-12 weeks provides the most noticeable and
               sustainable changes in body composition, particularly when
               combined with appropriate nutrition and physical activity.
             </p>
           </div>
         </div>
       </div>
   )
}
