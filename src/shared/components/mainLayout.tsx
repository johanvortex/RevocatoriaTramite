
interface Props {
    children: JSX.Element
}

const MainLayout = ({ children }: Props) => {
    return (<>
        <div className="grid grid-rows ">
            <h1>Header</h1>
        </div>
        <div className="flex flex-row">
            <main
                style={{ backgroundColor: '#f7f7f7' }}
                className='rounded-3xl flex grow bg-content pt-2 px-5 basis-7/12'
            >
                {children}
            </main>
            <div className="basis-1/5	">Conteindo</div>
        </div>
    </>)
}
export default MainLayout;