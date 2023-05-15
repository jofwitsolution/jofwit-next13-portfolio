"use client"

import Image from 'next/image';
import { useEffect, useState } from 'react';
import {BsUpload} from "react-icons/bs"
import {MdFileUpload} from "react-icons/md"
import axios from "axios"

const AboutForm = () => {
  const [state, setState] = useState({
    title: "",
    description: "",
    imgUrl: ""
  })

  const handleChange = (e) => {
    console.log(e.target.name)
    const value = e.target.name !== "imgUrl" ? e.target.value : e.target.files[0]
    setState((prev) => ({...prev, [e.target.name]: value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()

    formData.append("file", state.imgUrl)
    formData.append("title", state.title)
    formData.append("description", state.description)

    try {  
      // const response = await fetch("/api/abouts/create", {
      //   method: "POST",
      //   body: formData,
      //   // headers: {
      //   //   'Content-Type': 'multipart/form-data',
      //   // },
      // })
      // const data = await response.json()
      const { data } = await axios.post("/api/abouts/create",
         formData,
       {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })

      console.log(data)
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <label htmlFor="title" className="inline-block">Title</label>
        <input type="text" id="title" name="title" className="form_input" onChange={handleChange}/>
      </div>
      <div className="mb-6">
        <label htmlFor="description" className="inline-block">Description</label>
        <input type="text" id="description" name="description" className="form_input" onChange={handleChange}/>
      </div>
      <div className="mb-6">
        <label htmlFor="" className="inline-block">ImgUrl</label>
        <label htmlFor="imgUrl" className="block image_input">
          <span>Upload</span> <span><BsUpload /></span>
        </label>
        <input type="file" id="imgUrl" name="imgUrl" className="form_input hidden" onChange={handleChange}/>
        {state?.imgUrl && (
          <Image src={URL.createObjectURL(state.imgUrl)} alt="about img" width={400} height={100} className='w-full h-[100px]'/>
        )}
      </div>
      <div className='w-full flex justify-end'>
          <button type='submit' className="flex items-center justify-center gap-2 px-4 py-2 text-white bg-secondaryColor rounded-sm">
            <span><MdFileUpload /></span><span>Publish</span>
          </button>
      </div>
    </form>
  );
};

export default AboutForm;
