import React, { useState } from 'react';
import { create } from '../../http/deviceAPI';

const AdminDeviceManager: React.FC = () => {

    const [price, setPrice] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [brandId, setBrand] = useState<string>("")
    const [typeId, setType] = useState<string>("")
    const [tag, setTag] = useState<string>("")
    const [info, setInfo] = useState<string>("")
    const [file, setFile] = useState<string>('')
    const [output, setOutput] = useState<string>('-!- Output console')
    const selectFile = (e: any, func: any) => {
        func(e.target.files[0])
    }

    const createDevice = async (e: any) => {
        try {
            e.preventDefault()
            if(!name || !price || !brandId || !typeId) {
                return setOutput("-!- Important fields are empty");
            }
            const formData = new FormData()
            formData.append("name", name)
            formData.append("price", price)
            formData.append("brandId", brandId)
            formData.append("typeId", typeId)
            formData.append("tag", tag)
            formData.append("img", file)
            const response = await create(formData)
            console.log(response)
            setOutput('Success')
        } catch (er: any) {
            setOutput(er.respose?.data?.message)
        }
    }

    return (
        <div className="admin_main_w">
            <div className="admin_main_title">Device Manager</div>
            <div className="admin_console">{output}</div>
            <hr className="admin_main_hr"/>
            <div className="admin_inputbox">
                <div className='admin_label'>Name</div>
                <input type="text" className='admin_input' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="admin_inputbox">
                <div className='admin_label'>Tag</div>
                <input type="text" className='admin_input' value={tag} onChange={(e) => setTag(e.target.value)} />
            </div>
            <div className="admin_inputbox">
                <div className='admin_label'>Price</div>
                <input type="text" className='admin_input' value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div className="admin_inputbox">
                <div className='admin_label'>Brand ID</div>
                <input type="text" className='admin_input' value={brandId} onChange={(e) => setBrand(e.target.value)} />
            </div>
            <div className="admin_inputbox">
                <div className='admin_label'>Type ID</div>
                <input type="text" className='admin_input' value={typeId} onChange={(e) => setType(e.target.value)} />
            </div>
            <div className="admin_inputbox">
                <div className='admin_label'>Image</div>
                <input type="file" className='admin_input' onChange={(e) => selectFile(e, setFile)} />
            </div>
            <button className="admin_button" onClick={createDevice}>Create Device</button>
        </div>
    );
};

export default AdminDeviceManager;