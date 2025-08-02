import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <div>
      <ServicesSection/>
      <h1 className="font-bold text-3xl text-center">This is next js homepage</h1>
      <button className="btn btn-warning min-h-screen">Click</button>
    </div>
  );
}
