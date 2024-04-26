import { Navigation } from "@/app/components/nav";

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen">
      <Navigation />
      {children}
    </div>
  );
};
