import React, {useCallback, useRef} from 'react';
import { NavLink } from 'react-router-dom'

import './styles.scss';

const Sidebar = () => {
  const list = useRef(null)

  const setActiveItem = useCallback((event) => {  
      
    [...list.current.children].forEach(item => {
      if (item.classList.contains('nav__item_active')) {
        item.classList.remove('nav__item_active')
      }
    })

    if (event.target.classList.contains('nav__item')){
      event.target.classList.add('nav__item_active')
    } else {
      event.target.parentNode.classList.add('nav__item_active')
    }
  }, [])

  return (
      <nav className="nav">
        <h1  className='nav__logo'>Логотип</h1>

        <ul className='nav__list' ref={list}>
          <li className='nav__item nav__item_active' onClick={setActiveItem}>
            <object
              type="image/svg+xml"
              data="/img/heart.svg"
            >
            </object>
            <NavLink to='/'>Профиль</NavLink>
          </li>
          <li className='nav__item' onClick={setActiveItem}>
            <object
              type="image/svg+xml"
              data="/img/Vector.svg">
            </object>
            <NavLink to='/'>Врачи и клиники</NavLink>
          </li>
          <li className='nav__item' onClick={setActiveItem}>
            <object
              type="image/svg+xml"
              data="/img/speak.svg">
            </object>
            <NavLink to='/'>Cообщения</NavLink>
          </li>
          <li className='nav__item' onClick={setActiveItem}>
            <object
              type="image/svg+xml"
              data="/img/test.svg">
            </object>
            <NavLink to='/'>Тестирование</NavLink>
          </li>
          <li className='nav__item' onClick={setActiveItem}>
            <object
              type="image/svg+xml"
              data="/img/book.svg">
            </object>
            <NavLink to='/'>Полезно знать</NavLink>
          </li>
      </ul>
      <button className='btn-primary'>Подать заявку</button>
      <div className='nav__help'>
        <img src='/img/help.svg' alt='profile'/>
        Помощь
      </div>
      <img src="/img/logo-img.png" alt='appvelox' className='nav__img-logo'></img>
    </nav>
  )
}

export default Sidebar