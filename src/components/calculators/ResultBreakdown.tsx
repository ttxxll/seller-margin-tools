interface ResultRow {
  label: string;
  value: number;
  highlight?: boolean;
  negative?: boolean;
  isPercent?: boolean;
}

interface ResultBreakdownProps {
  title: string;
  rows: ResultRow[];
  currency?: string;
  compact?: boolean;
}

export default function ResultBreakdown({ title, rows, currency = '$', compact = false }: ResultBreakdownProps) {
  const formatValue = (row: ResultRow) => {
    if (row.isPercent) {
      return `${(row.value * 100).toFixed(2)}%`;
    }
    const formatted = Math.abs(row.value).toFixed(2);
    const prefix = row.value < 0 ? '-' : '';
    return `${prefix}${currency}${formatted}`;
  };

  return (
    <div className={compact ? 'overflow-hidden' : 'bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden animate-fade-in hover:shadow-md transition-shadow'}>
      <div className={compact ? 'py-3 border-t border-b border-gray-100' : 'px-5 py-4 border-b border-gray-100'}>
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{title}</h3>
      </div>
      <div className="divide-y divide-gray-100">
        {rows.map((row, index) => (
          <div
            key={index}
            className={`flex justify-between items-center ${compact ? 'py-3' : 'px-5 py-3.5'} transition-colors ${
              row.highlight
                ? compact ? 'text-blue-600' : 'bg-blue-50/50'
                : compact ? '' : 'hover:bg-gray-50'
            }`}
          >
            <span className={`text-sm ${row.highlight ? 'font-semibold text-gray-900' : 'text-gray-500'}`}>
              {row.label}
            </span>
            <span
              className={`text-sm font-medium tabular-nums ${
                row.highlight
                  ? 'text-lg font-bold text-blue-600'
                  : row.negative
                  ? 'text-red-500'
                  : 'text-gray-900'
              }`}
            >
              {formatValue(row)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
