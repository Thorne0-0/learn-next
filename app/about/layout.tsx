export default function AboutLayout({children}:Readonly<{children:React.ReactNode}>){
    return(
        <>
            <div className="bg-red-500">About Layout</div>
            {children}
        </>
    )
}