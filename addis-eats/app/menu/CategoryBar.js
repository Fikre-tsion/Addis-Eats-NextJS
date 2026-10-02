export default function CategoryBar() {
	const categories = ['All', 'Traditional', 'Vegetarian (Fast)', 'Beverages'];
	return (
		<nav className="flex gap-2 my-4">
			{categories.map((category) => (
				<span key={category} className="px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-sm">
					{category}
				</span>
			))}
		</nav>
	);
}
