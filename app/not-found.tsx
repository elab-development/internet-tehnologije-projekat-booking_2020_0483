import Container from "./components/Container";
import Image from "next/image";
import Link from "next/link";
import {TbError404} from "react-icons/tb";

const NotFound = () => {
    return (
        <Container>
            <div data-test={'404-page'} className={"flex justify-around"}>
                <div className={"w-1/3"}>
                    <h1 className={"text-7xl text-gray-700 py-8"}>Oops!</h1>
                    <h3 className={"text-4xl text-gray-700 py-5"}>{`We can't seem to find the page you're looking for`}</h3>
                    <p className={"text-xl text-gray-500 py-3"}>Error code: 404</p>
                    <p className={"text-lg text-gray-700 py-3"}>Here are some helpful links instead:</p>
                    <Link className={"text-lg text-red-500"} href="/">Home</Link>
                </div>
                <div className={"flex content-end justify-center flex-wrap w-1/3"}>
                    <TbError404 size={300} className={"text-red-400"}/>
                </div>
            </div>
        </Container>
    );
}

export default NotFound;