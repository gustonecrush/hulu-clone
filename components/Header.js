import Image from "next/image";

function Header() {
  return (
    <header className="bg-[#06202A]">
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        alt="Hulu's Logo"
      />
    </header>
  );
}

export default Header;
