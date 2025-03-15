import Image from "next/image";

import { ImageProps } from "next/image";

export default function CustomImage(props: ImageProps) {
    return <Image {...props} priority style={{ display: "block" }} />;
}
