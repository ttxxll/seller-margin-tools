interface AdSlotProps {
  position: 'top' | 'middle' | 'bottom';
  className?: string;
}

export default function AdSlot({ position, className = '' }: AdSlotProps) {
  return (
    <div
      className={`bg-gray-50 border border-gray-200/80 rounded-2xl p-6 text-center ${className}`}
      data-ad-position={position}
    >
      <p className="text-xs text-gray-300 font-medium tracking-wide uppercase">Advertisement</p>
    </div>
  );
}
