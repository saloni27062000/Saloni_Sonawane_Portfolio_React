import { useEffect, useMemo, useState } from "react";

// Same breakpoints the original Bootstrap layout used: col-lg-4 (>=992px), col-md-6 (>=768px), full width below.
const getColumnCount = () => (window.innerWidth >= 992 ? 3 : window.innerWidth >= 768 ? 2 : 1);

function useColumnCount() {
  const [count, setCount] = useState(getColumnCount);
  useEffect(() => {
    const onResize = () => setCount(getColumnCount());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return count;
}

// Places each item into the currently shortest column (like Isotope's masonry mode),
// using the item's known aspect ratio, so no JS measuring is needed.
export default function Masonry({ items, renderItem }) {
  const count = useColumnCount();

  const columns = useMemo(() => {
    const cols = Array.from({ length: count }, () => ({ height: 0, items: [] }));
    items.forEach((item) => {
      const target = cols.reduce((min, c) => (c.height < min.height ? c : min), cols[0]);
      target.items.push(item);
      target.height += (item.ratio || 0.6) + 0.12; // +0.12 approximates the gap between cards
    });
    return cols;
  }, [items, count]);

  return (
    <div className="row">
      {columns.map((col, i) => (
        <div key={i} className={`col-${12 / count} d-flex flex-column gap-4`}>
          {col.items.map(renderItem)}
        </div>
      ))}
    </div>
  );
}
