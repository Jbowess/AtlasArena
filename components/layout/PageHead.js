import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Atlas Arena | Loot Boxes"}
                </title>
            </Head>
        </>
    )
}

export default PageHead