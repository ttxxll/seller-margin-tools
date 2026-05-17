'use client';

interface CalculatorFieldProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  type?: 'number' | 'percent';
  suffix?: string;
  hint?: string;
  min?: number;
  max?: number;
  step?: number;
}

export default function CalculatorField({
  label,
  value,
  onChange,
  type = 'number',
  suffix,
  hint,
  min = 0,
  max,
  step,
}: CalculatorFieldProps) {
  const displayValue = type === 'percent' ? value * 100 : value;
  const defaultStep = type === 'percent' ? 0.1 : 0.01;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = parseFloat(e.target.value) || 0;
    const clamped = Math.max(min, max !== undefined ? Math.min(max, raw) : raw);
    onChange(type === 'percent' ? clamped / 100 : clamped);
  };

  return (
    <div className="group">
      <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">
        {label}
      </label>
      <div className="relative">
        {type === 'number' && suffix && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
            {suffix}
          </span>
        )}
        <input
          type="number"
          value={displayValue === 0 ? '' : displayValue}
          placeholder="0"
          onChange={handleChange}
          min={type === 'percent' ? min * 100 : min}
          max={type === 'percent' && max !== undefined ? max * 100 : max}
          step={step ?? defaultStep}
          className={`w-full rounded-xl border border-gray-200 bg-white py-2.5 text-sm font-medium text-gray-900 placeholder-gray-400 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none group-hover:border-gray-300 ${
            type === 'number' && suffix ? 'pl-8 pr-3' : 'px-3'
          } ${type === 'percent' ? 'pr-8' : ''}`}
        />
        {type === 'percent' && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
            %
          </span>
        )}
      </div>
      {hint && <p className="mt-1 text-xs text-gray-400">{hint}</p>}
    </div>
  );
}
