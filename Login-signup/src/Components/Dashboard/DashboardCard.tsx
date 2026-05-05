function DashboardCard({ title, value }: any) {
  return (
    <div
      className="
        bg-white
        border
        border-slate-200
        shadow-sm
        p-5
        min-h-30
        flex
        flex-col
        justify-between
      "
    >
      <p className="text-slate-500 text-sm font-medium">
        {title}
      </p>

      <h2 className="text-3xl font-bold text-slate-800 mt-4">
        {value}
      </h2>
    </div>
  );
}

export default DashboardCard;