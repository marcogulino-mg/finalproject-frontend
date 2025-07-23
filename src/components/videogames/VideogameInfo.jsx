export default function VideogameInfo({ vg }) {

    return <h2>{vg?.vgName || "Loading..."}</h2>;
}