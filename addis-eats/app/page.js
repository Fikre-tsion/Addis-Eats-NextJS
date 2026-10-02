import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="p-8 max-w-2xl mx-auto text-center mt-12">
      <h1 className="text-4xl font-extrabold text-amber-900">Addis Eats</h1>
      <div className="mt-8">
        <Link href="/menu" className="px-6 py-3 bg-amber-600 text-white rounded-lg">Explore Menu</Link>
      </div>
    </main>
  );
}
