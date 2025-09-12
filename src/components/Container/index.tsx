export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-7xl mx-auto px-1 sm:px-4 lg:px-6 rounded-xl m-1 border-4 border-[#ede6bc]">
      {children}
    </div>
  );
}