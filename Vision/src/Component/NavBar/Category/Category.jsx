import React from 'react'

const Category = () => {
  return (
    <div>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li>
          <a className="dropdown-item" href="#">
            Tranding
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Winter clothes
          </a>
        </li>
        {/* <li>
                    <hr className="dropdown-divider" />
                  </li>*/}
        <li>
          <a className="dropdown-item" href="#">
            Summer clothes
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Category
