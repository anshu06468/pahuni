import PageTable from './PageTable';

import { ExportToExcel } from '../Table/ExportToExcel/ExportToExcel';

const Table=()=>{
    return(
        <div className='container pt-5'>
            <h2 className='text-center'>Overall Report with detailed comments</h2>

            
            <PageTable/>
        </div>
        
    )
}

export default Table