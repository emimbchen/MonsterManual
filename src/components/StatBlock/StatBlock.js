function StatBlock({ label, value, ...props }) {
  return (
    <div {...props}>
      <div className="font-bold uppercase">{label}</div>
      <span className="capitalize">{value}</span>
    </div>
  );
}

export default StatBlock;
