import { useProtectedPage } from "../hooks/useProtectedPage"

export default function PostDetailsPage(){

    useProtectedPage();

    return (
        <header>
            <h1>PostDetails Page</h1>
        </header>
    )

};
