import { Page, Navbar, Block, theme, BlockTitle, List, Card, CardHeader, Icon } from 'framework7-react';
import ListingsType from "@/components/Common/ListingsType";
import SpotlightListings from "@/components/Search/SpotlightListings";
import Features from "@/components/Common/Features";
import HeroBanner from "@/components/Common/HeroBanner";
import Faqs from "@/components/Common/Faqs";
import SearchForm from "@/components/Common/SearchForm";
import Services from "@/components/Common/Services";
//import EstimateForm from "@/components/Common/EstimateForm";
import LocationsLinks from "@/components/Common/LocationsLinks";

export default function Home() {
  return (
    <Page>
    <section
    className="padding-vertical-xl search-hero"
    id="search-home_hero"
  >
    <div className="hero-overlay">
      <img
        src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
        alt="hero"
      />
    </div>
    <div className="container">
      <div className="main-search__tabs">
          <Card>
          <CardHeader className="separator">
          <BlockTitle large>
        La piattaforma immobiliare per ristoranti e hotel.
      </BlockTitle>
          </CardHeader>
              <SearchForm />
          </Card>
  </div>
  </div>
  </section>
  <Features />
  
  <ListingsType />
  <SpotlightListings />
  <LocationsLinks />
  <HeroBanner  
  imageUrl="https://content.loft.com.br/_next/static/images/hero-background@3x-24f8cc98fdfcb97739e347ef9a70f6bf.jpg"
      title="Crea un account" 
      subtitle="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."/>

  </Page>
  )
}
