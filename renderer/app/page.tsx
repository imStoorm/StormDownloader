"use client"

import { useCallback, useState } from 'react'
import Header from './_components/header'
import localFont from 'next/font/local'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import debounce from 'lodash.debounce';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import DownloadButton from './_components/download-button'

const myFont = localFont({ src: './_fonts/ClashGrotesk-Semibold.woff' })
function IndexPage() {
  const [format, setFormat] = useState('')
  const [type, setType] = useState('')
  const [link, setLink] = useState('')

  const [match, setMatch] = useState(true)

  const handleSetFormat = (e) => {
    setFormat(e)
  }
  const handleSetType = (e) => {
    setType(e)
  }
  const handleSetLink = (e) => {
    const regex = /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]+)/g;


    if (regex.test(e.target.value) || e.target.value === '') {
      setMatch(true)
    } else {
      setMatch(false)
    }
    setLink(e.target.value)
  }

  const debouncedSetLink = useCallback(debounce(handleSetLink, 500), []);

  return (
    <div className="bg-[#1c2424] flex flex-col min-h-screen">
      <Header font={myFont} />
      <div className="h-[90vh] w-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-2 mx-2 justify-center w-full">
        <h1 className={`${myFont.className} text-xl font-semibold text-[#d9e9e9]`}>
          Insira o link abaixo
        </h1>
        <div className='flex gap-2'>
          <Input onChangeCapture={debouncedSetLink} className="w-[70vh]" placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ" /> 
          <DownloadButton format={format} type={type} link={link} match={match}/>
        </div>
        {!match && (
          <div>
            <h1 className={`${myFont.className} text-sm text-[#c95155]`}>O link inserido é inválido.</h1>
          </div> 
        )
        }
        <div className='flex gap-2'>
          <Button className={`bg-[${type === 'video' ? '#b3dbdb' : '#b3dbdb'}] transition-opacity ${type === 'video' ? 'opacity-100' : 'opacity-50'} rounded-xl`} onClick={e => handleSetType('video')}>
            <p className="color-[#d9e9e9] text-[#1c2424] hover:text-[#6ebab3]">Vídeo</p>
          </Button>
          <Button className={`bg-[${type === 'playlist' ? '#b3dbdb' : '#b3dbdb'}] transition-opacity ${type === 'playlist' ? 'opacity-100' : 'opacity-50'} rounded-xl`} onClick={e => handleSetType('playlist')}>
            <p className={`color-[#d9e9e9] text-[#1c2424] hover:text-[#6ebab3] `}>Playlist</p>
          </Button>
          <Select onValueChange={handleSetFormat}>
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Formato" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="mp3">MP3</SelectItem>
                <SelectItem value="mp4">MP4</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        
      </div>
    </div>
    </div>
  )
}

export default IndexPage
