export default function SingleLineInput(
  props: React.HTMLProps<HTMLInputElement>,
) {
  return (
    <input
      className='bg-orange-50 text-slate-900 p-3 rounded-md'
      {...props}
    ></input>
  );
}
