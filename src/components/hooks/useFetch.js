import {useState, useEffect, useCallback} from 'react'


export function useFetch(url) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [data, setData] = useState([]);

    const refetch = async ({params}) => {
        setIsLoading(true);
        setError('')
        try {
            const response = await fetch(`${url}?_limit=${params._limit}`);


            if(response.status >= 200 && response.status <= 204) {
                const data = await response.json()
                setData(data)
            }else  {
                throw Error('Произошла ошибка')
            }

        } catch (e) {
            setError(e.message)
        }finally {
            setIsLoading(false)
        }
    }


    useEffect(() => {
        refetch({
            params: {
                _limit: 10
            }
        })
    }, [])

    return {refetch, isLoading, error, data}


}