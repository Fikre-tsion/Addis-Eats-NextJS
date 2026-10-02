import Link from 'next/link';

export default function NotFound() {
	return (
		<main className="p-8 max-w-md mx-auto text-center mt-16 bg-white rounded-xl shadow-sm border border-slate-200">
			<h2 className="text-2xl font-bold text-slate-800">404 - Not Found</h2>
			<p className="mt-2 text-slate-600">This page or dish does not exist.</p>
			<Link href="/menu" className="inline-block mt-4 px-4 py-2 bg-amber-600 text-white rounded">
				Back to Menu
			</Link>
		</main>
	);
}
