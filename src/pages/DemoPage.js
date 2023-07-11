import {useFetch} from "../components/hooks/useFetch";



export function DemoPage () {

    const {refetch, data, error, isLoading} = useFetch('https://jsonplaceholder.typicode.com/posts')


   return <div>
        <div>
            <button onClick={() => refetch({
                params: {
                    _limit: 3
                }
            })}>
                Перезапросить
            </button>
        </div>
        {isLoading && 'Загрузка...'}
        {error && error}
        {data && !isLoading && data.map(item => <div key={item.id}>{item.title}</div>) }
    </div>
}