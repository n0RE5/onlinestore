import React, { useState } from 'react';
import { createBrand, getAllBrands, getBrand } from '../../http/brandAPI';
import { createType, getAllTypes, getType } from '../../http/typeAPI';

const AdminBrandTypeManager: React.FC = () => {

    const [name, setName] = useState<string>('')
    const [mode, setMode] = useState<boolean>(true)
    const [id, setId] = useState<string>('')
    const [output, setOutput] = useState<string>('-!- Output console')

    const createBrandType = async (e: any) => {
        try {
            e.preventDefault()
            let response
            if (mode) {
                response = await createBrand(name)
            } else {
                response = await createType(name)
            }
            console.log(response);
            setOutput(`Created ${mode ? "Brand" : "Type"} with Name [${name}], ID: ${response.data?.id}`)
        } catch (er: any) {
            setOutput(er.response?.data?.message)
        }
    }

    const getAllBrandType = async (e: any) => {
        try {
            e.preventDefault()
            let response
            if (mode) {
                response = await getAllBrands()
            } else {
                response = await getAllTypes()
            }
            console.log(response);
        } catch (er: any) {
            console.log(er);
        }
    }

    const getBrandType =  async (e: any) => {
        try {
            e.preventDefault()
            let response
            if (mode) {
                response = await getBrand(Number(id))
            } else {
                response = await getType(Number(id))
            }
            console.log(response);
        } catch (er: any) {
            console.log(er);
        }
    }
    return (
        <div className="admin_main_w">
            <div className="admin_main_title">Brand & Type Manager</div>
            <div className="admin_console">{output}</div>
            <hr className="admin_main_hr"/>
            <div className="admin_inputbox">
                <div className='admin_label'>Name</div>
                <input type="text" className='admin_input' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="admin_inputbox">
                <div className='admin_label'>ID (optional)</div>
                <input type="text" className='admin_input' value={id} onChange={(e) => setId(e.target.value)} />
            </div>
            <button className="admin_button" onClick={() => setMode((prev) => !prev)}>Switch</button>
            <button className="admin_button" onClick={createBrandType}>Create {mode ? "Brand" : "Type"}</button>
            <button className="admin_button" onClick={getAllBrandType}>Get All {mode ? "Brands" : "Types"} (console output)</button>
            <button className="admin_button" onClick={getBrandType}>Get {mode ? "Brand" : "Type"} (console output)</button>
        </div>
    );
};

export default AdminBrandTypeManager;