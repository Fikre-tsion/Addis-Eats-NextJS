import Link from 'next/link';

export default function CartPage() {
  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      <div className="flex justify-between mt-6">
        <Link href="/menu" className="text-amber-600">&larr; Keep Shopping</Link>
        <Link href="/checkout" className="px-4 py-2 bg-emerald-600 text-white rounded">Checkout &rarr;</Link>
      </div>
    </main>
  );
}