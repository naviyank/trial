import AppSidebar from "./components/AppSidebar";


export default function DashboardHome({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="w-full h-full">
      <AppSidebar />
      <div className="w-full h-full lg:ps-64">
       {children}
      </div>
    </section>
  );
}
