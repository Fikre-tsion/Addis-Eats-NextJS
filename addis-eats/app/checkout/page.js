import Link from 'next/link';

export default function CheckoutPage() {
  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <Link href="/" className="px-4 py-2 bg-amber-600 text-white rounded">Complete Order</Link>
    </main>
  );
}