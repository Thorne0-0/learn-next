export default function Products({params}:{params:{id:string}})
{
    return(
        <div>
            <h1>可以打印出paramsId</h1>
            <h1>{params.id}</h1>
        </div>
    )
}