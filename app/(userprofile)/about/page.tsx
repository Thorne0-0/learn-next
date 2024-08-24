import Link from "next/link"

export default function About(){
    return (
        <div>
            <h1>About</h1>
            <div>这是abot页面</div>
            <Link href="/">跳转到首页 </Link>
        </div>
    )
}