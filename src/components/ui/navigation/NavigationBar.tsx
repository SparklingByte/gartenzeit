import Link from "next/link";
import { Paragraph } from "../../typography/Typography";
import { FaCirclePlus, FaHouse, FaCompass } from "react-icons/fa6";

export default function NavigationBar() {
  return (
    <div className="grid grid-cols-3 w-fit text-medium-heading text-background-50 gap-5 p-5 bg-primary-120 rounded-xl shadow-xl">
      <Link href={"/"}>
        <div className="text-center flex flex-col items-center">
          <FaHouse />
          <Paragraph>Home</Paragraph>
        </div>
      </Link>
      <Link href={"/harvest/create"}>
        <div className="text-center flex flex-col items-center">
          <FaCirclePlus />
          <Paragraph>Create harvest</Paragraph>
        </div>
      </Link>
      <Link href={"/discover"}>
        <div className="text-center flex flex-col items-center">
          <FaCompass />
          <Paragraph>Discover</Paragraph>
        </div>
      </Link>
    </div>
  );
}
