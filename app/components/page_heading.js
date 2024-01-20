import './components.css'

function Page_heading ({ heading, desc }) {
  return (
    <>
      <div className='page-header'>
        <div className='heading'>{heading}</div>
        <div className='desc'>{desc}</div>
      </div>
    </>
  )
}

export default Page_heading
