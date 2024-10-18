import TalbleOPerations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SoryBy from "../../ui/SoryBy";
function CabinTableOperations() {
  return (
    <TalbleOPerations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />

      <SoryBy
        options={[
          { value: "name-asc", label: "sort by name (A-Z)" },
          { value: "name-desc", label: "sort by name (Z-A)" },
          { value: "regularPrice-asc", label: "sort by price (low first)" },
          { value: "regularPrice-desc", label: "sort by price (high first)" },
          { value: "maxCapacity-asc", label: "sort by capacity (low first)" },
          { value: "maxCapacity-desc", label: "sort by capacity (high first)" }
        ]}
      />
    </TalbleOPerations>
  );
}
export default CabinTableOperations;
