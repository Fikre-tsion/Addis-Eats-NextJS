import DishList from './DishList';
import CategoryBar from './CategoryBar';
import Link from 'next/link';

const DISHES = [
  { id: 'kitfo', name: 'Special Kitfo', price: 450 },
  { id: 'shiro', name: 'Tegabino Shiro', price: 200 },
  { id: 'doro-wat', name: 'Doro Wat', price: 550 },
];

export default async function MenuPage() {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <header className="flex justify-between items-center pb-4 border-b border-slate-200">
        <h1 className="text-3xl font-bold">Menu</h1>
        <Link href="/cart" className="text-amber-600 font-medium hover:underline">View Cart</Link>
      </header>
      <CategoryBar />
      <DishList dishes={DISHES} />

      <div className="mt-8 pt-4 border-t border-slate-200">
        <Link href="/menu/unknown" className="text-xs text-red-500 underline">
          Test notFound() routing
        </Link>
      </div>
    </main>
  );
}