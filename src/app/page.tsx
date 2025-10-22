export const dynamic = "force-dynamic";
import Authors from "@/_components/Authors/page";
import Banner from "@/_components/Banner/page";
import Weekend from "@/_components/Weekend/page";

export default function Home() {
  return (
    <div>
      <Banner />
      <Weekend />
      <Authors />
    </div>
  );
}
