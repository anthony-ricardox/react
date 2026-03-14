const Ex08 = () => {
    
    function handleScroll(event){    
        console.log(event)
    }
    window.addEventListener('scroll', handleScroll)
  return <div style={{height: '200vh'}}>
    <button onClick={(event) => alert(event.target.innerText)} >Compre Coca </button>
    </div>
  
}


export default Ex08;