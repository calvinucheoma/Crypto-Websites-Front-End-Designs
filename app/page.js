import Dashboard from '@/components/Dashboard';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <Navbar />
      <Dashboard />
    </main>
  );
}
