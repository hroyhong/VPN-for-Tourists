"use client";
import { LineText } from "@/components/LineText";

const Hero = ({ locale, CTALocale }: { locale: any; CTALocale: any }) => {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-16 md:pt-24 text-center">
        <h1>
          {locale.title1} <LineText>{locale.title2}</LineText> {locale.title3}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-2xl tracking-tight text-slate-700 dark:text-slate-400">
          {locale.description}
        </p>
        <button>{CTALocale.buttonText}</button>
      </section>
    </>
  );
};

export default Hero;