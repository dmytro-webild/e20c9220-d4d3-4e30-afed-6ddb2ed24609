"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import { Award, Flame, Smile } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="mediumLargeSizeLargeTitles"
        background="fluid"
        cardStyle="gradient-bordered"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="layered"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Início",
          id: "hero",
        },
        {
          name: "Essência",
          id: "about",
        },
        {
          name: "Cardápio",
          id: "product",
        },
        {
          name: "Contato",
          id: "contact",
        },
      ]}
      brandName="TEKIM"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "gradient-bars",
      }}
      title="O sabor tradicional que conquistou Piumhi."
      description="Lanches de chapa bem recheados, ingredientes selecionados e aquele sabor marcante que faz parte da cidade há anos."
      buttons={[
        {
          text: "Faça seu Pedido Agora",
          href: "https://wa.me/5537999665545",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/bun-with-sesame-table_140725-9347.jpg",
          imageAlt: "Lanche de chapa tradicional",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/tasty-sandwich-wooden-cutting-board-dark-mix-color-surface_179666-42267.jpg",
          imageAlt: "Lanche de chapa tradicional",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-delicious-american-hamburger_23-2149637307.jpg",
          imageAlt: "Lanche de chapa tradicional",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/guy-black-gloves-holds-juicy-cheeseburger-brown-bread_140725-7028.jpg",
          imageAlt: "Lanche de chapa tradicional",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/tasty-burger-with-melted-cheese-fries_23-2148290669.jpg",
          imageAlt: "Lanche de chapa tradicional",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-cook-placing-fried-bacon-slice-ofcheese-while-layering-burger_181624-57745.jpg",
          imageAlt: "Lanche de chapa tradicional",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Nossa Essência"
      description="O Tekim Lanches é tradição em Piumhi. Um lugar conhecido pelo atendimento de qualidade, ambiente acolhedor e lanches de chapa caprichados que conquistam clientes há gerações. Cada pedido é preparado com dedicação, ingredientes selecionados e aquele sabor que já virou referência na cidade."
      bulletPoints={[
        {
          title: "Tradição Local",
          description: "Atendendo gerações em Piumhi.",
        },
        {
          title: "Qualidade Reconhecida",
          description: "Ingredientes sempre selecionados.",
        },
        {
          title: "Sabor Marcante",
          description: "Lanche de chapa como deve ser.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/nice-cupcakes-inside-oven_23-2147758422.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="product" data-section="product">
      <ProductCardOne
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "X-Tudo",
          price: "Consulte",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-hamburgers-arrangement_23-2148614059.jpg",
        },
        {
          id: "2",
          name: "X-Bacon",
          price: "Consulte",
          imageSrc: "http://img.b2bpic.net/free-photo/american-burger-with-chicken-bacon-homemade-barbecue-sauce_2829-13871.jpg",
        },
        {
          id: "3",
          name: "X-Salada",
          price: "Consulte",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-delicious-burger-assortment_23-2148868222.jpg",
        },
        {
          id: "4",
          name: "X-Tudo Especial",
          price: "Consulte",
          imageSrc: "http://img.b2bpic.net/free-photo/freshly-baked-burger-bun-with-sesame-sprinkles_140725-8727.jpg",
        },
        {
          id: "5",
          name: "X-Bacon Premium",
          price: "Consulte",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-ready-be-served-burger-with-cutlery_23-2148290640.jpg",
        },
        {
          id: "6",
          name: "X-Salada Fresco",
          price: "Consulte",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-creative-arrangement-with-hamburger-menu_23-2148614121.jpg",
        },
      ]}
      title="Nosso Cardápio"
      description="Consulte o valor atualizado no WhatsApp"
    />
  </div>

  <div id="metric" data-section="metric">
      <MetricCardThree
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "1",
          icon: Award,
          title: "Sabor Nº 1",
          value: "Aprovado",
        },
        {
          id: "2",
          icon: Smile,
          title: "Satisfação",
          value: "100%",
        },
        {
          id: "3",
          icon: Flame,
          title: "Tradição",
          value: "Referência",
        },
      ]}
      title="Números de Sucesso"
      description="O que nos faz referência em Piumhi."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Faça seu pedido agora"
      title="Quer um sabor marcante hoje?"
      description="Estamos prontos para preparar o seu lanche de chapa caprichado. Chame no WhatsApp!"
      buttons={[
        {
          text: "Chamar no WhatsApp",
          href: "https://wa.me/5537999665545",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Tekim Lanches",
          items: [
            {
              label: "Rua Getúlio Vargas, 1865",
              href: "#",
            },
            {
              label: "Piumhi - MG",
              href: "#",
            },
          ],
        },
        {
          title: "Horário",
          items: [
            {
              label: "Ter a Dom - a partir das 17h",
              href: "#",
            },
          ],
        },
        {
          title: "Pedidos",
          items: [
            {
              label: "(37) 3371-4411",
              href: "tel:3733714411",
            },
            {
              label: "(37) 99966-5545",
              href: "https://wa.me/5537999665545",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 Tekim Lanches - Todos os direitos reservados"
      bottomRightText="Piumhi - MG"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
