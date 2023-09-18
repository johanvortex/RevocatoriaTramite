import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InfoOne from "../../components/InfoOne"
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const data = [
    'Dato 1',
    'Dato 2',
    'Dato 3',
    'Dato 4',
    'Dato 5',
    'Dato 6'

];
function getStyles(name: string, personName: string[], theme: Theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}
const FormOne = () => {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (<>
        <div className="container">
                <InfoOne></InfoOne>
            <div className="p-6">
                <h3 className="mt-6">Tipo de solicitud</h3>
                <h4 className="decoration-sky-500">Todos los campos marcados con * son obligatorios</h4>
                <div className="grid grid-cols-2 " >
                    <div className='flex items-start flex-col my-3'>
                        <label htmlFor="">Tipo de solicitud *</label>
                        <FormControl sx={{ m: 1, width: 300 }} size='small'>
                            <InputLabel id="demo-multiple-name-label">Selecciona</InputLabel>
                            <Select
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                multiple
                                value={personName}
                                onChange={handleChange}
                                input={<OutlinedInput label="Name" />}
                                MenuProps={MenuProps}
                            >
                                {data.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(name, personName, theme)}
                                    >
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div className='flex items-start flex-col my-3'>
                        <label htmlFor="">Tipo de bien *</label>
                        <FormControl sx={{ m: 1, width: 300 }} size='small'>
                            <InputLabel id="demo-multiple-name-label">Selecciona</InputLabel>
                            <Select
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                multiple
                                value={personName}
                                onChange={handleChange}
                                input={<OutlinedInput label="Name" />}
                                MenuProps={MenuProps}
                            >
                                {data.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(name, personName, theme)}
                                    >
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div className='flex items-start flex-col my-3'>
                        <label htmlFor="">Calidad en la que actúa *</label>
                        <FormControl sx={{ m: 1, width: 300 }} size='small'>
                            <InputLabel id="demo-multiple-name-label">Selecciona</InputLabel>
                            <Select
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                multiple
                                value={personName}
                                onChange={handleChange}
                                input={<OutlinedInput label="Name" />}
                                MenuProps={MenuProps}
                            >
                                {data.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(name, personName, theme)}
                                    >
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div className='flex items-start flex-col my-3'>
                        <label htmlFor="">Interés en el que actúa *</label>
                        <FormControl sx={{ m: 1, width: 300 }} size='small'>
                            <InputLabel id="demo-multiple-name-label">Selecciona</InputLabel>
                            <Select
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                multiple
                                value={personName}
                                onChange={handleChange}
                                input={<OutlinedInput label="Name" />}
                                MenuProps={MenuProps}
                            >
                                {data.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(name, personName, theme)}
                                    >
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                </div>
                                        

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Dirección</th>
                                <th>¿Conoce el propietario?</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">

                                        <div>
                                            <div className="font-bold">Hart Hagerty</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                </td>
                                <td>Si</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Eliminar</button>
                                    <button className="btn btn-ghost btn-xs">Editar</button>
                                </th>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">

                                        <div>
                                            <div className="font-bold">Brice Swyre</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Carroll Group
                                    <br />
                                </td>
                                <td>No</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Eliminar</button>
                                    <button className="btn btn-ghost btn-xs">Editar</button>
                                </th>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div>

    </>)
}

export default FormOne;