
import React from 'react'

// /assets/images/medical.png
interface Props {
    bg: string,
    text: string,
}

const PageBanner = ({bg, text}: Props) => {
  return (
    <section>
        <div
            className={`fluid-container px-8 bg-[url('${bg}')] bg-cover bg-center h-full w-full relative`}
            >
            <div className="page-banner-box">
                <div dangerouslySetInnerHTML={{ __html: text }} />
            </div>
        </div>
    </section>
  )
}

export default PageBanner
