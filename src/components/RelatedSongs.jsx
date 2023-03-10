import React from 'react'
import SongBar  from './SongBar'

const RelatedSongs = ({ data, isPlaying, activeSong,
  handlePauseClickh, handlePlayClick, artistId }) => {

  return (
    <div className='flex flex-col'>
      <h1 className='font-bold text-3xl text-white'>Related Songs: </h1>
      <div className='mt-6 w-full flex flex-col'>
        {data?.map((song, i) => (
          <SongBar key={`${song.key}-${artistId}-${i}`} song={song} i={i} artistId={artistId}
          activeSong={activeSong} handlePauseClick={handlePauseClickh}
          handlePlayClick={handlePlayClick}/>
        ))}
      </div>
    </div>
  )
}

export default RelatedSongs

