import {Layout} from "../../Components/Layout/index.jsx";
import {Card} from "../../Components/Card/index.jsx";
import {useEffect, useState} from "react";
import {ProductDetail} from "../../Components/ProductDetail/index.jsx";

function Home() {
    const [items, setItems] = useState(null)

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data))
    }, []);

    return (
        <Layout>
            Home
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                {items?.map((item) => (
                    <Card key={item.id} data={item}/>
                ))}
            </div>
            <ProductDetail/>
        </Layout>
    )
}

export {Home};