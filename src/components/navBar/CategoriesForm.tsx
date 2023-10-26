import React from 'react'
// icons 
import { FaChevronRight } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
const CategoriesForm = () => {
    const className= {
        div: "flex flex-col gap-3 bg-white shadow-lg shadow-amber-950 px-2 py-3 rounded-md duration-500 ",
        links: " flex gap-2 flex-row",
        ChevronIcon: " text-xl text-amber-900",
        span: " text-lg font-medium hover:text-amber-900 duration-300",
        UList: " flex flex-col gap-1",
        UDiv: " flex flex-row gap-12",
        h3: " text-center text-xl text-amber-900 font-bold font-serif"
    }
  return (
    <div className={className.div}>
        {/* hot news */}
        <h3 className={className.h3}>All Categories</h3>
        <div className={className.UDiv}>
            <ul className= {className.UList}>
                <li>
                    <NavLink to="/sport" className={className.links}>
                        <FaChevronRight className={className.ChevronIcon}/>
                        <span className={className.span}>Sport</span>
                    </NavLink>
                </li>
                <li >
                    <a href="./" className={className.links}>
                        <FaChevronRight className={className.ChevronIcon}/>
                        <span className={className.span}> Entertainment</span>
                    </a>
                </li>
                <li >
                    <a href="./" className={className.links}>
                        <FaChevronRight className={className.ChevronIcon}/>
                        <span className={className.span}> Music</span>
                    </a>
                </li>
                <li >
                    <a href="./" className={className.links}>
                        <FaChevronRight className={className.ChevronIcon}/>
                        <span className={className.span}> Games</span>
                    </a>
                </li>
                <li >
                    <a href="./" className={className.links}>
                        <FaChevronRight className={className.ChevronIcon}/>
                        <span className={className.span}> Funny Stories</span>
                    </a>
                </li>
            </ul>
    
            <ul className= {className.UList}>
                <li>
                    <a href="./" className={className.links}>
                        <FaChevronRight className={className.ChevronIcon}/>
                        <span className={className.span}>Business</span>
                    </a>
                </li>
                <li >
                    <a href="./" className={className.links}>
                        <FaChevronRight className={className.ChevronIcon}/>
                        <span className={className.span}> Politics</span>
                    </a>
                </li>
                <li >
                    <a href="./" className={className.links}>
                        <FaChevronRight className={className.ChevronIcon}/>
                        <span className={className.span}> Finance</span>
                    </a>
                </li>
                <li >
                    <a href="./" className={className.links}>
                        <FaChevronRight className={className.ChevronIcon}/>
                        <span className={className.span}> Technology</span>
                    </a>
                </li>
                <li >
                    <a href="./" className={className.links}>
                        <FaChevronRight className={className.ChevronIcon}/>
                        <span className={className.span}> Health</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default CategoriesForm
