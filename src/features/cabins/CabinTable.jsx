import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";

function CabinTable() {
  const { isLoading, cabins } = useCabins();

  
  const [searchParams] = useSearchParams();
  // 1) Filter
  const filterValue = searchParams.get("discount") || "all";
  let filteredCabins;
  if (filterValue === "all") filteredCabins = cabins;
  else if (filterValue === "no-discount")
  filteredCabins = cabins?.filter((cabin) => cabin.discount === 0);
else filteredCabins = cabins?.filter((cabin) => cabin.discount > 0);

// 2) Sort
const sortBy = searchParams.get("sortBy") || "startData-asc";
const [field, direction] = sortBy.split("-");
const modifier = direction === "asc" ? 1 : -1;
const sortedCabins = filteredCabins?.sort(
  (a, b) => (a[field] - b[field]) * modifier
  );
  
  if (isLoading) return <Spinner />;
  
  if(!cabins.length) return <Empty resourceName="cabins" /> ; 
  
  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>cabin</div>
          <div>capacity</div>
          <div>Price</div>
          <div>discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          // data={cabins}
          // data={filteredCabins}
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}
export default CabinTable;
