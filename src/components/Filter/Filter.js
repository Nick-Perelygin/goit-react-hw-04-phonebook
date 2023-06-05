import { FilterInput } from "./Filter.styled";

export default function Filter({value, onChange}) {
    return(
    <label>Find contacts by name
    <FilterInput type="text" value={value} onChange={onChange}/>
    </label>
    )
}