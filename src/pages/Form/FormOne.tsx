import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InfoOne from "../../components/InfoOne"
import TextField from '@mui/material/TextField';

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
                <h3 className="mt-6">Identificación del bien</h3>
                <div className="grid grid-cols-2 " >
                    <div className='flex items-start flex-col my-3'>
                        <label htmlFor="">Nombre con el que se conoce el bien (si lo tiene)</label>
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
                        <label htmlFor="">CHIP</label>
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
                        <label htmlFor="">Matricula inmobiliaria</label>
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
                            <TextField id="outlined-basic" variant="outlined" size="small"
                            />

                        </FormControl>
                    </div>
                    <div className='flex items-start flex-col my-3'>
                        <label htmlFor="">Dirección oficial (actual) *</label>
                        <FormControl sx={{ m: 1, width: 300 }} size='small'>
                            <TextField id="outlined-basic" variant="outlined" size="small"
                            />

                        </FormControl>
                    </div>
                    <div className='flex items-start flex-col my-3'>
                        <label htmlFor="">
                            Dirección secundaria y/o incluye (actual)</label>
                        <FormControl sx={{ m: 1, width: 300 }} size='small'>
                            <TextField id="outlined-basic" variant="outlined" size="small"
                            />

                        </FormControl>
                    </div>
                    <div className='flex items-start flex-col my-3'>
                        <label htmlFor="">Direcciones anteriores
                        </label>
                        <FormControl sx={{ m: 1, width: 300 }} size='small'>
                            <TextField id="outlined-basic" variant="outlined" size="small"
                            />

                        </FormControl>
                    </div>
                    <div className='flex items-start flex-col my-3'>
                        <label htmlFor="">Dirección de declaratoria
                        </label>
                        <FormControl sx={{ m: 1, width: 300 }} size='small'>
                            <TextField id="outlined-basic" variant="outlined" size="small"
                            />

                        </FormControl>
                    </div>
                    <div className='flex items-start flex-col my-3'>
                        <label htmlFor="">Zona *
                        </label>
                        <FormControl sx={{ m: 1, width: 300 }} size='small'>
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
                        <label htmlFor="">Localidad *
                        </label>
                        <FormControl sx={{ m: 1, width: 300 }} size='small'>
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
                        <label htmlFor="">UPZ
                        </label>
                        <FormControl sx={{ m: 1, width: 300 }} size='small'>
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
                        <label htmlFor="">Barrio
                        </label>
                        <FormControl sx={{ m: 1, width: 300 }} size='small'>
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
                        <label htmlFor="">Barrio
                        </label>
                        <FormControl sx={{ m: 1, width: 300 }} size='small'>
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
                        <label htmlFor="">Vereda
                        </label>
                        <FormControl sx={{ m: 1, width: 300 }} size='small'>
                            <TextField id="outlined-basic" variant="outlined" size="small"
                            />

                        </FormControl>
                    </div>
                </div>
                <h3 className="mt-6">Descripción del bien</h3>
                <div className="grid grid-cols-2 " >
                    <div className='flex items-start flex-col my-3'>
                        <label htmlFor="">Área del predio en metros cuadrados
                        </label>
                        <FormControl sx={{ m: 1, width: 300 }} size='small'>
                            <TextField id="outlined-basic" variant="outlined" size="small"
                            />

                        </FormControl>
                    </div>
                    <div className='flex items-start flex-col my-3'>
                        <label htmlFor="">Área construida en metros cuadrados
                        </label>
                        <FormControl sx={{ m: 1, width: 300 }} size='small'>
                            <TextField id="outlined-basic" variant="outlined" size="small"
                            />

                        </FormControl>
                    </div>
                    <div className='flex items-start flex-col my-3'>
                        <label htmlFor="">Número de pisos
                        </label>
                        <FormControl sx={{ m: 1, width: 300 }} size='small'>
                            <TextField id="outlined-basic" variant="outlined" size="small"
                            />

                        </FormControl>
                    </div>
                    <div className='flex items-start flex-col my-3'>
                        <label htmlFor="">Uso original
                        </label>
                        <FormControl sx={{ m: 1, width: 300 }} size='small'>
                            <TextField id="outlined-basic" variant="outlined" size="small"
                            />

                        </FormControl>
                    </div>
                    <div className='flex items-start flex-col my-3'>
                        <label htmlFor="">Otro uso
                        </label>
                        <FormControl sx={{ m: 1, width: 300 }} size='small'>
                            <TextField id="outlined-basic" variant="outlined" size="small"
                            />

                        </FormControl>
                    </div>
                    <div className='flex items-start flex-col my-3'>
                        <label htmlFor="">Uso actual
                        </label>
                        <FormControl sx={{ m: 1, width: 300 }} size='small'>
                            <TextField id="outlined-basic" variant="outlined" size="small"
                            />

                        </FormControl>
                    </div>
                    <div className='flex items-start flex-col my-3'>
                        <label htmlFor="">Año de construcción
                        </label>
                        <FormControl sx={{ m: 1, width: 300 }} size='small'>
                            <TextField id="outlined-basic" variant="outlined" size="small"
                            />

                        </FormControl>
                    </div>
                    <div className='flex items-start flex-col my-3'>
                        <label htmlFor="">Arquitecto del diseño o construcción original
                        </label>
                        <FormControl sx={{ m: 1, width: 300 }} size='small'>
                            <TextField id="outlined-basic" variant="outlined" size="small"
                            />

                        </FormControl>
                    </div>
                    <div className='flex items-start flex-col my-3'>
                        <label htmlFor="">Licencia de construcción original
                        </label>
                        <FormControl sx={{ m: 1, width: 300 }} size='small'>
                            <TextField id="outlined-basic" variant="outlined" size="small"
                            />

                        </FormControl>
                    </div>
                    <div className='flex items-start flex-col my-3'>
                        <label htmlFor="">Otras licencias que haya tenido el inmueble (autorizaciones o permisos para intervención)
                        </label>
                        <FormControl sx={{ m: 1, width: 300 }} size='small'>
                            <TextField id="outlined-basic" variant="outlined" size="small"
                            />

                        </FormControl>
                    </div>
                    <div className='flex items-start flex-col my-3'>
                        <label htmlFor="">Acto administrativo por el cual se declaró el bien
                        </label>
                        <FormControl sx={{ m: 1, width: 300 }} size='small'>
                            <TextField id="outlined-basic" variant="outlined" size="small"
                            />

                        </FormControl>
                    </div>
                    <div className='flex items-start flex-col my-3'>
                        <label htmlFor="">Indique aquí la razón principal de la solicitud
                        </label>
                        <FormControl sx={{ m: 1, width: 300 }} size='small'>
                            <TextField id="outlined-basic" variant="outlined" size="small"
                            />

                        </FormControl>
                    </div>
                    <div className='flex items-start flex-col my-3'>
                        <label htmlFor="">Seleccione los criterios de valoración que considere permiten dar valor al bien
                        </label>
                        <FormControl sx={{ m: 1, width: 300 }} size='small'>
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
                        <label htmlFor="">Seleccione los valores que considere son atributos al bien
                        </label>
                        <FormControl sx={{ m: 1, width: 300 }} size='small'>
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
                <h3 className="mt-6">Adjuntar documentos</h3>

                <div className='mt-8'>
                    <h3 className="mt-6">Carta de solicitud de trámite *
                    </h3>
                    <h4 className="decoration-sky-500">Debe ingresar la carta de solicitud de trámite
                        Tipo de archivo permitido: .doc, .docx, .pdf hasta de 1Mb</h4>
                    <input type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs" />

                </div>
                <div className='mt-8'>
                    <h3 className="mt-6">Documento de identidad del solicitante *
                    </h3>
                    <h4 className="decoration-sky-500">Debe ingresar la carta de solicitud de trámite
                        Tipo de archivo permitido: .doc, .docx, .pdf hasta de 1Mb</h4>
                    <input type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs" />

                </div>
                <div className='mt-8'>
                    <h3 className="mt-6">Estudio de valoración *
                    </h3>
                    <h4 className="decoration-sky-500">Debe ingresar la carta de solicitud de trámite
                        Tipo de archivo permitido: .doc, .docx, .pdf hasta de 1Mb</h4>
                    <input type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs" />

                </div>
                <div className='mt-8'>
                    <h3 className="mt-6">Planos originales
                    </h3>
                    <h4 className="decoration-sky-500">Debe ingresar la carta de solicitud de trámite
                        Tipo de archivo permitido: .doc, .docx, .pdf hasta de 1Mb</h4>
                    <input type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs" />

                </div>
                <div className='mt-8'>
                    <h3 className="mt-6">Licencia de construcción original
                    </h3>
                    <h4 className="decoration-sky-500">Debe ingresar la carta de solicitud de trámite
                        Tipo de archivo permitido: .doc, .docx, .pdf hasta de 1Mb</h4>
                    <input type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs" />
                </div>
                <div className='mt-8'>
                    <h3 className="mt-6">Registro fotográfico interior y exterior *
                    </h3>
                    <h4 className="decoration-sky-500">Debe ingresar la carta de solicitud de trámite
                        Tipo de archivo permitido: .doc, .docx, .pdf hasta de 1Mb</h4>
                    <input type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs" />
                </div>
            </div>
        </div>
    </>)
}

export default FormOne;