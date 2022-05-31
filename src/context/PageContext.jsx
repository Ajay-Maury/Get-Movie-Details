import {createContext, useState} from 'react'

export const PageContext = createContext();
const PageContextProvider = ({ children }) => {
    const [page, setPage] = useState(1)
    const handlePage = (val) => {
        setPage(page + val);
    }
  return ( 
      <PageContext.Provider value={{page,handlePage}}>
          {children}
    </PageContext.Provider>
  )
}

export default PageContextProvider;
