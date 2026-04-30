
import TilesSearch from '@/Components/pages/TilesSearch';
import { getTiles } from '@/lib/api/data'


const AllTilesPage = async () => {
    const tiles = await getTiles();
    // console.log(tiles,'all tiles')
    return <TilesSearch tiles={tiles}></TilesSearch>
}

export default AllTilesPage