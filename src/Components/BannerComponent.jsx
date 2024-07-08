import React from 'react'

const BannerComponent = ({ title, subtitle, img, color }) => {
    return (
        <>
            <div className={`flex pb-3 pt-1 my-3 bg-${color} rounded-3xl`}>
                <div className="my-14 ml-14 w-1/2">
                    <div className="w-full text-light-White">
                        <h1 className="text-4xl font-medium">
                            <b>{title}</b>
                        </h1>
                        <p className="text-xl font-medium">
                            {subtitle}
                        </p>
                    </div>
                </div>
                <div className="w-[17rem] hidden sm:flex relative">
                    <img
                        src={img}
                        alt="Ilustration"
                        className="absolute right-[-180px] bottom-[-6%]"
                    />
                </div>
            </div>
        </>
    )
}

export { BannerComponent }
