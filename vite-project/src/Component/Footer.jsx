import React from 'react'

const Footer = () => {
  return (
<>
<hr />
<footer className="footer footer-horizontal footer-center bg-gray- text-base-content rounded p-10 md-block w-full   p-4 text-center dark:bg-black dark:text-white  ">
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a href="https://twitter.com/@iPoojaTanwar ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a>
      <a href="https://github.com/iPoojatanwar" >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <g>
      <path fill="currentColor" d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.388.6.111.827-.26.827-.577v-2.206c-3.338.727-4.037-1.608-4.037-1.608-.547-1.392-1.337-1.765-1.337-1.765-1.091-.744.083-.729.083-.729 1.207.085 1.843 1.238 1.843 1.238 1.072 1.835 2.813 1.302 3.494.997.107-.777.419-1.303.762-1.603-2.667-.303-5.467-1.336-5.467-5.933 0-1.31.468-2.382 1.236-3.221-.124-.303-.536-1.523.118-3.173 0 0 1.008-.322 3.303 1.227a11.51 11.51 0 0 1 3.004-.404c1.013 0 2.042.136 2.998.404 2.294-1.549 3.301-1.227 3.301-1.227.654 1.65.245 2.87.121 3.173.768.839 1.236 1.912 1.236 3.221 0 4.603-2.803 5.63-5.479 5.933.429.367.824 1.098.824 2.219v3.293c0 .319.227.692.834.576 4.767-1.588 8.207-6.085 8.207-11.388 0-6.627-5.373-12-12-12z"></path>
    </g>
  </svg>
      </a>
    </div>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by XYZ Industries Ltd</p>
  </aside>
</footer>
</>
  )
}

export default Footer