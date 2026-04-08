import React from 'react'

const ex17 = () => {
    const [textarea, Settextarea] = React.useState('')


  return <form>
    
        <textarea value={textarea} rows={10} onChange={({target}) => Settextarea(target.value) } />
       {textarea}
    </form>
   
}

export default ex17
