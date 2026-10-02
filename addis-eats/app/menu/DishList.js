import Link from 'next/link';

export default function DishList({ dishes }) {
	return (
		<div className="grid gap-4 sm:grid-cols-2 mt-4">
			{dishes.map((dish) => (
				<div key={dish.id} className="p-4 border rounded-lg bg-white flex flex-col justify-between">
					<div>
						<h3 className="font-semibold text-lg">{dish.name}</h3>
						<p className="text-slate-500 text-sm">{dish.price} ETB</p>
					</div>
					<Link href={`/menu/${dish.id}`} className="mt-3 text-sm font-medium text-amber-600">
						View Details &rarr;
					</Link>
				</div>
			))}
		</div>
	);
}
