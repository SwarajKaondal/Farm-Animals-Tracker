import "../../App.css";
import { useSelector } from "react-redux";
import { IRootReducer } from "../../reducers/rootReducer";
import React, { useEffect, useState} from "react";
import {AgGridReact} from "ag-grid-react";
import {ColDef} from "ag-grid-community/dist/lib/entities/colDef";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {Movement} from "../../reducers/EntityTypes";
import {ICellRendererParams} from "ag-grid-community";
import 'ag-grid-enterprise';
import MovementDetails from "./MovementDetails";
import {Filters} from "./filters/Filters";

type filterType = {
    label: string;
    col: string;
    active: Boolean;
    selectedValue: string;
    options: string[];
    total: number;
}

const initialFilters = {
    "Reason": {label: "Reason", col: "reason", active: false, selectedValue: '', options: [], total: 0},
    "Company": {label: "Company", col: "company", active: false, selectedValue: '', options: [], total: 0},
    "Species": {label: "Species", col: "species", active: false, selectedValue: '', options: [], total: 0},
};

export const Table = (props: { gridApi: any; setGridApi: any; }) =>{
    const {gridApi, setGridApi} = props;
    const movements = useSelector((state: IRootReducer) => state.movements.data);
    const [filters, setFilters] = useState(initialFilters);

    const columnDefs:ColDef<Movement>[] = [
        {field: "company", headerName:"Company", cellRenderer: 'agGroupCellRenderer', maxWidth: 250},
        {field: "reason", headerName:"Reason", maxWidth: 230},
        {valueGetter: "data.originFarm.name", headerName:"Origin Farm", maxWidth: 230},
        {valueGetter: "data.destFarm.name", headerName:"Destination Farm", maxWidth: 230},
        {field: "species", headerName:"Species", maxWidth: 150},
        {field: "itemsMoved", headerName:"Items Moved", maxWidth: 200},
        {field: "movementDate", headerName:"Date", maxWidth: 180},
    ]

    const gridOptions = {
        defaultColDef: {
            sortable: true,
            resizable: true,
            filter: true,
        },
        statusBar: {
            statusPanels: [
                {
                    statusPanel: 'agTotalAndFilteredRowCountComponent',
                    align: 'right',
                }
            ]
        },
        detailRowHeight: 275,
    }

    const detailCellRenderer = (data: any) =>{
        return <div>
            <MovementDetails data={data.data}/>
        </div>
    }

    useEffect(() => {
        //@ts-ignore
        setFilters((prevFilters) => {
            let newFilters = {}

            for(let key in prevFilters){
                //@ts-ignore
                let newFilter: filterType = {...prevFilters[key]}
                //@ts-ignore
                newFilter.options = ['', ...new Set(movements.map(obj => obj[filters[key].col]))];
                newFilter.total = movements.length;
                // @ts-ignore
                newFilters[newFilter.label] = newFilter
            }
            return newFilters
        })
    },[movements])

    const handleFilterValueChange = (filter: filterType, selectedValue: string) => {
        //@ts-ignore
        setFilters((prevFilters) => {
            let newFilters = {}
            for(let key in prevFilters){
                //@ts-ignore
                let newFilter: filterType = {...prevFilters[key]}
                const filterComponent = gridApi?.getFilterInstance(newFilter.col);
                filterComponent?.setModel(null)

                newFilter.active = false
                newFilter.selectedValue = ''
                newFilter.total =movements.length;
                if(newFilter.label === filter.label){
                    newFilter.selectedValue = selectedValue;
                    if(selectedValue === ''){
                        filterComponent?.setModel(null)
                    } else {
                        newFilter.active = true
                        // @ts-ignore
                        newFilter.total = movements.filter(obj => obj[newFilter.col] === selectedValue).length;
                        filterComponent?.setModel({ values: [selectedValue] });
                    }
                }
                // @ts-ignore
                newFilters[newFilter.label] = newFilter
            }
            return newFilters
        })
        gridApi?.onFilterChanged();
    };

    return (
        <div>
            <div>
                <Filters filters={filters} handleFilterValueChange={handleFilterValueChange} />
                <div className="ag-theme-alpine" style={{ height:470, width: 1350}}>
                    <AgGridReact
                        rowData={movements}
                        columnDefs={columnDefs}
                        gridOptions={gridOptions}
                        masterDetail={true}
                        onGridReady={(params) => setGridApi(params.api)}
                        detailCellRenderer={detailCellRenderer}>
                    </AgGridReact>
                </div>
            </div>
        </div>

    )
}