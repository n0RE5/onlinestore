import { useSearchParams } from "react-router-dom";

export const useSearchQuery = () => {
    const [searchQuery, setSearchQuery] = useSearchParams()

    const updateParams = (key: string, e: string) => {
        let updatedSearchParams = new URLSearchParams(searchQuery.toString());
        updatedSearchParams.set(key, e);
        setSearchQuery(updatedSearchParams.toString());
    }

    return [searchQuery, updateParams, setSearchQuery] as const
}