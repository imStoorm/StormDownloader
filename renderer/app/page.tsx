import React from 'react'
import Image from 'next/image'
import Header from './_components/header'
import localFont from 'next/font/local'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'

const myFont = localFont({ src: './fonts/ClashGrotesk-Semibold.woff' })
function IndexPage() {


  return (
    <div className="bg-[#1c2424] flex flex-col min-h-screen">
      <Header font={myFont} />
      <div className="h-[90vh] w-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-2 my-2 mx-2 justify-center w-full">
        <h1 className={`${myFont.className} text-xl font-semibold text-[#d9e9e9]`}>
          Insira o link abaixo
        </h1>
        <Input className="w-[70vh]" placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />

        <div className='w-[50vh] flex gap-2'>
          <Button asChild>
            <Link href="/">
              <p className="color-[#d9e9e9] text-[#d9e9e9] hover:text-[#6ebab3]">Vídeo</p>
            </Link>
          </Button>
          <Button asChild>
            <Link href="/">
              <p className="color-[#d9e9e9] text-[#d9e9e9] hover:text-[#6ebab3]">Playlist</p>
            </Link>
          </Button>
          <Select>
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
