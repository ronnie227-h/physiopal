import Link from "next/link";
import Image from "next/image";

export type FeatureCardProps = {
  iconSrc: string;
  title: string;
  description: string;
  href?: string;
  iconContainerVariant: string;
  iconVariant: string;
};

export default function FeatureCard(props: FeatureCardProps) {
  const card = (
    <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] rounded-[14px] flex flex-col gap-6">
      <div className="grid auto-rows-min grid-rows-[auto_auto] gap-1.5 text-center pt-6 pb-4 px-6">
        <div className={`flex items-center justify-center h-16 w-16 mb-4 mx-auto rounded-full ${props.iconContainerVariant}`}>
          <Image src={props.iconSrc} alt="" width={32} height={32} className={`${props.iconVariant}`} />
        </div>
        <h4 className="text-xl leading-7">{props.title}</h4>
        <p className="text-slate-500">{props.description}</p>
      </div>
      <div className="pb-6 px-6">
        <div className="text-white text-sm font-medium inline-flex h-9 w-full items-center justify-center bg-sky-500 rounded-[10px]">
          Get Started
        </div>
      </div>
    </div>
  );

  return props.href ? <Link href={props.href}>{card}</Link> : card;
}


