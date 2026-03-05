import React from 'react'
import { Link } from 'react-router-dom'
import { useFavoritesContext } from '../contexts/FavoritesContext'

const FavoritesPage = () => {

  const {Favorites, remove}= useFavoritesContext()
  return (
    <div className='rounded-2xl border bg-white p-6 shadow-sm'>
        <h1 className='text-lg fonst-semibold'>Favorits</h1>
        <p className='mt-2 text-sm text-slate-600'>
          {Favorites.length>0 ? `총 ${Favorites.length}개의 즐겨 찾기`:'즐겨찾기 한 장소가 없습니다.'}
        </p>
        {Favorites.length>0 &&(
          <ul className='mt-4 space-y-2. max-h[60vh] overflow-auto'>
            {Favorites.map((item, idx)=> (
              <li key={idx}
                 className='flex-items-start justify-between gap-3 rounded-xl border p-3
                 hover:bg-slate-50'
              >
                <div className='min-w-0 flex-1'>
                  <div className='text-sm font-semibold'>
                  {item.name}
                </div>
                <div className='mt-1 text-xs text-slate-500'>
                  {item.detail}
                </div>
                <div className='mt-1 text-xs text-slate-500'>
                  {item.phone}
                </div>
                </div>
                <div>
                  <link
                  className='text-xs text-slate-600 hover:text-slate-900 underline'
                  to='/map'
                  state={{selectedSpot:item}}
                  >지도보기</link>
                  <button 
                  className='text-lg cursor-pointer select-all'
                  onClick={()=>remove(item)}>
                    ❤
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      
    </div>
  )
}

export default FavoritesPage
