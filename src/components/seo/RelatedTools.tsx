import Link from 'next/link';
import type { Tool, ToolId } from '@/lib/content/tools';

type RelatedToolsDict = Record<ToolId, { name: string; shortDescription: string }>;

interface RelatedToolsProps {
  title: string;
  tools: Tool[];
  locale: string;
  dict: RelatedToolsDict;
}

export default function RelatedTools({ title, tools, locale, dict }: RelatedToolsProps) {
  const prefix = locale === 'zh' ? '/zh' : '';

  return (
    <section className="py-8 border-t">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((tool) => {
          const toolDict = dict[tool.id];
          if (!toolDict) return null;

          return (
            <Link
              key={tool.id}
              href={`${prefix}/${tool.slug}`}
              className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div className="text-2xl mb-2">{tool.icon}</div>
              <h3 className="font-semibold text-gray-900">{toolDict.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{toolDict.shortDescription}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
