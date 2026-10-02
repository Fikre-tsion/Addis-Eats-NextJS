import { notFound } from 'next/navigation';
import Link from 'next/link';

const DISH_DETAILS = {
  kitfo: { name: 'Special Kitfo', price: 450, desc: 'Fresh minced beef seasoned in mitmita.' },
  shiro: { name: 'Tegabino Shiro', price: 200, desc: 'Slow-simmered spiced chickpea stew.' },
  'doro-wat': { name: 'Doro Wat', price: 550, desc: 'Traditional slow-cooked chicken.' },
};

export default async function DishDetailPage({ params }) {
  const { id } = await params;
  const dish = DISH_DETAILS[id];

  if (!dish) {
    notFound();
  }

  return (
    <main className="p-6 max-w-xl mx-auto mt-8 bg-white border border-slate-200 rounded-xl shadow-sm">
      <h1 className="text-2xl font-bold text-slate-900">{dish.name}</h1>
      <p className="mt-2 text-slate-600">{dish.desc}</p>
      <p className="mt-4 text-xl font-semibold text-slate-900">{dish.price} ETB</p>
      <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-100">
        <Link href="/menu" className="text-sm text-slate-500 hover:text-slate-800">&larr; Back to Menu</Link>
        <Link href="/cart" className="px-4 py-2 bg-amber-600 text-white text-sm font-medium rounded">Go to Cart</Link>
      </div>
    </main>
  );
}