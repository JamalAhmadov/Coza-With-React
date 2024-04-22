interface SortProps {
  setSort: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const Sort: React.FC<SortProps> = ({ setSort }) => {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "inc" || value === "dec") {
      setSort(value);
    } else {
      setSort(undefined);
    }
  };

  return (
    <div className="border p-1 ">
      <select className="outline-none" onChange={handleSortChange} defaultValue="">
        <option disabled value="">Sort</option>
        <option value="inc">Increase</option>
        <option value="dec">Decrease</option>
      </select>
    </div>
  );
};

export default Sort;
