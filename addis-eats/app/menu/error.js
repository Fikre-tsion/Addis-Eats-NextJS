'use client';

export default function MenuError({ error, reset }) {
	return (
		<main className="p-8 max-w-md mx-auto text-center mt-12 bg-red-50 border border-red-200 rounded-xl">
			<h2 className="text-xl font-bold text-red-700">Error Loading Menu</h2>
			<button onClick={() => reset()} className="mt-4 px-4 py-2 bg-red-600 text-white rounded">
				Try Again
			</button>
		</main>
	);
}
