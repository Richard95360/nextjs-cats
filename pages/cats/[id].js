import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DefaultLayout from "../../components/layout/Default";
import Head from "next/head";



function Cat() {

    const [cat, setCat] = useState();

    const router = useRouter()
    const {id} = router.query

    const fetchCat = async () => {
        const res = await fetch(`/api/cats/${id}`);
        const data = await res.json();
        console.log({data : data})
        setCat(data);
    }

    useEffect(() => {
         fetchCat()
    
    }, []);

    return ( 
        <div>
        <Head>
        <title>{id}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <DefaultLayout>
            {cat && (
          <div className="container mt-5" style={{ display: "flex" }}>
            <img src={cat.image.url} alt={cat.image.alt}/>
            <div className="mx-5">
              <h1>{cat.name}</h1>
              <p>{cat.description} </p>
            </div>
          </div>
        )}

        </DefaultLayout>
        </div>
     );
}

export default Cat;
