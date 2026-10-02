export default function Loading() {
	return (
		<div className="p-6 max-w-4xl mx-auto animate-pulse">
			<div className="h-8 bg-slate-200 rounded w-1/3 mb-4"></div>
			<div className="h-6 bg-slate-200 rounded w-1/4 mb-6"></div>
			<div className="grid gap-4 sm:grid-cols-2">
				<div className="h-28 bg-slate-200 rounded-lg"></div>
				<div className="h-28 bg-slate-200 rounded-lg"></div>
			</div>
		</div>
	);
}
