function StatBlock({ label, value, ...props }) {
  return (
    <div {...props}>
      {label && <div className="font-bold uppercase">{label}</div>}
      {value && <span className="capitalize">{value}</span>}
    </div>
  );
}

export default StatBlock;
