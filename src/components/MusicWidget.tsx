import React, { useState } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, Music } from 'lucide-react';

const MusicWidget: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);

  const playlist = [
    {
      title: 'Coding Lo-Fi',
      artist: 'Code Beats',
      duration: '3:42',
      cover: 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg'
    },
    {
      title: 'Deep Focus',
      artist: 'Brain Waves',
      duration: '4:17',
      cover: 'https://images.pexels.com/photos/2952834/pexels-photo-2952834.jpeg'
    },
    {
      title: 'Chill Study Mix',
      artist: 'Study Vibes',
      duration: '3:28',
      cover: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg'
    }
  ];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    setCurrentSong((currentSong + 1) % playlist.length);
  };

  const prevSong = () => {
    setCurrentSong((currentSong - 1 + playlist.length) % playlist.length);
  };

  return (
    <section id="music" className="py-20 bg-white dark:bg-dark-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 text-dark-900 dark:text-white">Currently Vibing To</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-dark-600 dark:text-dark-200 max-w-3xl mx-auto">
            Music keeps me in the zone while coding. Here's what's playing in my headphones.
          </p>
        </div>

        <div className="max-w-md mx-auto bg-gradient-to-br from-dark-900 to-dark-700 text-white rounded-xl shadow-xl overflow-hidden">
          <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
            <img 
              src={playlist[currentSong].cover} 
              alt={playlist[currentSong].title} 
              className="w-full h-full object-cover transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
              <div className="flex items-center space-x-2">
                <Music size={16} className="text-primary-400" />
                <span className="text-sm text-primary-300">Now Playing</span>
              </div>
            </div>
          </div>

          <div className="p-4">
            <h3 className="text-xl font-semibold mb-1">{playlist[currentSong].title}</h3>
            <p className="text-gray-400 mb-4">{playlist[currentSong].artist}</p>

            <div className="mb-4">
              <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                  style={{ width: isPlaying ? '62%' : '0%', transition: 'width 0.2s' }}  
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{isPlaying ? '2:18' : '0:00'}</span>
                <span>{playlist[currentSong].duration}</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <button 
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                onClick={prevSong}
              >
                <SkipBack size={20} />
              </button>
              
              <button 
                className="p-3 rounded-full bg-primary-500 hover:bg-primary-600 transition-colors"
                onClick={togglePlay}
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </button>
              
              <button 
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                onClick={nextSong}
              >
                <SkipForward size={20} />
              </button>
              
              <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                <Volume2 size={20} />
              </button>
            </div>
          </div>

          <div className="px-4 py-3 border-t border-gray-800">
            <p className="text-sm text-center">
              <span className="font-mono">🎧</span> Lo-Fi Code Beats & Chill Vibes
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://open.spotify.com/user/f97dstx5ed8ta0bbawuplfyrg?si=02b187b3f2084f34"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center py-2 px-4 rounded-full bg-[#1DB954] text-white hover:bg-[#1ed760] transition-all"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            Follow My Spotify
          </a>
        </div>
      </div>
    </section>
  );
};

export default MusicWidget;