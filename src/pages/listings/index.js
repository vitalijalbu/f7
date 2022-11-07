import { Page, Navbar, Block } from "framework7-react";
import Link from "next/link";
export default function About() {
  return (
    <Page>
      <Navbar title="About" href="/" />

      <Block strong>
        <p>This is "listings" page.</p>
        <p><Link back>Go back</Link></p>
        <p><Link href="/"><a>Go back</a></Link></p>
      </Block>
    </Page>
  );
}
