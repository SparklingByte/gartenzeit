export type IndicatorColor = 'red' | 'green';

type StatusIndicatorProps = {
  color: IndicatorColor;
  text: string;
};

export default function StatusIndicator({ color, text }: StatusIndicatorProps) {
  const colorMap: { [key in IndicatorColor]: string } = {
    red: 'bg-semantic-warning',
    green: 'bg-semantic-success',
  };

  return (
    <div className='inline-flex items-center gap-2'>
      <div className={`${colorMap[color]} w-3 h-3 rounded-[3px]`} />
      <p className='text-text-100'>{text}</p>
    </div>
  );
}
