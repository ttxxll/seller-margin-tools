export interface CalculatorGuideSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

interface CalculatorGuideProps {
  title: string;
  intro: string;
  sections: CalculatorGuideSection[];
}

export default function CalculatorGuide({ title, intro, sections }: CalculatorGuideProps) {
  return (
    <section className="py-10 border-t border-gray-100">
      <article className="prose prose-gray max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-gray-600 leading-7 mb-6">{intro}</p>
        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.heading}>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{section.heading}</h3>
              <div className="space-y-3 text-gray-600 leading-7">
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul className="list-disc pl-5 space-y-2">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>
      </article>
    </section>
  );
}
