import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Sun,
  Droplet,
  Bug,
  Truck,
  Home,
  Laptop,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function PlantsomeUpdatedSections() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Header */}
      <section className="flex flex-col md:flex-row gap-6 mb-16">
        <div className="md:w-2/3 relative">
          <Link href="#">
            <Image
              src="/plant.png"
              alt="Plants background"
              width={1000}
              height={500}
              className="w-full h-[500px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 p-8 text-white rounded-lg flex flex-col justify-between">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Buy more, save more!
                </h1>
                <p className="text-lg md:text-xl mb-4">
                  Treat yourself & get a little extra, emailed right to your
                  inbox!
                </p>
                <ul className="text-lg md:text-xl mb-4 space-y-2">
                  <li>Spend $100 and receive a $20 credit</li>
                  <li>Spend $200 and receive a $50 credit</li>
                  <li>Spend $350 and receive a $100 credit</li>
                </ul>
                <p className="text-base md:text-lg">
                  Gift cards and gift boxes excluded. Valid from 10/4 to 10/10.
                </p>
              </div>
              <Button
                variant="outline"
                className="bg-white text-black h-14 w-[20rem] hover:bg-gray-200 self-start mt-4 text-lg py-3 px-6 transition-all duration-300 transform hover:scale-105"
              >
                SHOP PLANTS
              </Button>
            </div>
          </Link>
        </div>
        <div className="md:w-1/3 flex flex-col gap-6">
          <Link href="#" className="block">
            <div className="bg-blue-100 p-6 rounded-lg flex items-center h-[244px]">
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">
                  Use our plant finder!
                </h2>
                <p className="text-lg">
                  Having a hard time deciding? We&apos;ll take you there in 5
                  easy steps!
                </p>
              </div>
              <Image
                src="/plant.png"
                alt="Person holding a plant"
                width={120}
                height={120}
                className="ml-4"
              />
            </div>
          </Link>
          <Link href="#" className="block">
            <div className="bg-orange-100 p-6 rounded-lg flex items-center h-[244px]">
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">
                  Spooky season is here!
                </h2>
                <p className="text-lg">
                  Deck the hallowed halls with our scariest amigos. So on brand
                  for fall.
                </p>
              </div>
              <Image
                src="/plant.png"
                alt="Person with a spooky plant"
                width={120}
                height={120}
                className="ml-4"
              />
            </div>
          </Link>
        </div>
      </section>

      {/* Recently Added */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Recently Added</h2>
          <Link href="#">
            <Button variant="outline" className="text-lg py-3 px-6">
              View All
            </Button>
          </Link>
        </div>
        <Carousel className="w-full">
          <CarouselContent>
            {[...Array(6)].map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <Link href="#">
                  <Card>
                    <CardContent className="p-6">
                      <Image
                        src="/plant.png"
                        alt={`Plant ${index + 1}`}
                        width={240}
                        height={240}
                        className="w-full h-60 object-cover mb-4 rounded-md"
                      />
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-xl font-bold">Plant Name</h3>
                          <p className="text-lg text-muted-foreground">
                            Scientific Name
                          </p>
                        </div>
                        <span className="text-xl font-bold">$129.00</span>
                      </div>
                      <div className="flex items-center text-lg text-muted-foreground">
                        <span className="mr-2">70 cm tall</span>
                        <ChevronRight className="w-5 h-5" />
                        <span className="ml-2">25 cm pot</span>
                      </div>
                      <div className="flex mt-3 space-x-3">
                        <Sun className="w-6 h-6" />
                        <Droplet className="w-6 h-6" />
                        <Bug className="w-6 h-6" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="" />
          <CarouselNext className="" />
        </Carousel>
      </section>

      {/* Plants on Sale */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Plants on Sale</h2>
          <Link href="#">
            <Button variant="outline" className="text-lg py-3 px-6">
              View All Sales
            </Button>
          </Link>
        </div>
        <Carousel className="w-full">
          <CarouselContent>
            {[...Array(3)].map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/3">
                <Link href="#">
                  <Card>
                    <CardContent className="p-6">
                      <Image
                        src="/plant.png"
                        alt={`Sale Plant ${index + 1}`}
                        width={240}
                        height={240}
                        className="w-full h-60 object-cover mb-4 rounded-md"
                      />
                      <div className="bg-orange-100 text-orange-800 text-lg font-bold px-3 py-2 rounded-full inline-block mb-3">
                        On sale for a limited time!
                      </div>
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-xl font-bold">Sale Plant</h3>
                          <p className="text-lg text-muted-foreground">
                            Scientific Name
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="text-xl font-bold text-red-600">
                            $19.00
                          </span>
                          <span className="text-lg text-muted-foreground line-through ml-2">
                            $29.00
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center text-lg text-muted-foreground">
                        <span className="mr-2">23 cm tall</span>
                        <ChevronRight className="w-5 h-5" />
                        <span className="ml-2">10 cm pot</span>
                      </div>
                      <div className="flex mt-3 space-x-3">
                        <Sun className="w-6 h-6" />
                        <Droplet className="w-6 h-6" />
                        <Bug className="w-6 h-6" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Popular categories */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Popular categories</h2>
          <Link href="#">
            <Button variant="outline" className="text-lg py-3 px-6">
              View All Categories
            </Button>
          </Link>
        </div>
        <Carousel className="w-full">
          <CarouselContent>
            {[
              "Bundle and save",
              "Pet friendly plants",
              "Fruit Bearing Plants",
              "Large plants",
              "Easy-peasy plants",
            ].map((category, index) => (
              <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/5">
                <Link href="#">
                  <Card className="overflow-hidden">
                    <Image
                      src="/plant.png"
                      alt={category}
                      width={240}
                      height={240}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-4">
                      <h3 className="text-xl font-bold text-center">
                        {category}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Featured Reviews */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Featured Reviews</h2>
          <Link href="#">
            <Button variant="outline" className="text-lg py-3 px-6">
              LEAVE REVIEW
            </Button>
          </Link>
        </div>
        <Carousel className="w-full">
          <CarouselContent>
            {[...Array(6)].map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <Card className="h-[512px]">
                  <CardContent className="p-6">
                    <Image
                      src="/plant.png"
                      alt={`Review ${index + 1}`}
                      width={240}
                      height={240}
                      className="w-full h-60 object-cover mb-4 rounded-md"
                    />
                    <h3 className="text-xl font-bold mb-3">Customer Name</h3>
                    <p className="text-lg text-muted-foreground mb-4 line-clamp-4">
                      Great experience with my new plant! The delivery was
                      quick, and the plant arrived in perfect condition.
                      I&apos;m already seeing new growth!
                    </p>
                    <Link href="#">
                      <Button
                        variant="outline"
                        className="w-full hover:bg-green-800 hover:text-white bg-green-700 h-10 text-white text-lg py-3 transition-all duration-300 transform hover:scale-105"
                      >
                        SHOP PLANTS
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Why order plants online from Plantsome? */}
      <section className="mb-16 bg-green-50 rounded-lg p-12">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Why order plants online from Plantsome?
        </h2>
        <p className="text-xl text-center mb-12">
          Thanks for asking. Here are some great reasons why!
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Truck,
              title: "Meep Meep! Order your plants online",
              description: "we'll take care of the rest.",
              href: "#",
            },
            {
              icon: Home,
              title: "Our green amigo's are hand picked",
              description: "fresh from only the best Canadian growers.",
              href: "#",
            },
            {
              icon: Laptop,
              title: "Kick back and relax!",
              description:
                "Browse through hundreds of plants and pots from the comfort of your home.",
              href: "#",
            },
            {
              icon: Clock,
              title: "Warranty Included!",
              description:
                "We provide an unbeatable 3-month happy plant guarantee on all of our plants.",
              href: "#",
            },
          ].map((item, index) => (
            <Link href={item.href} key={index} className="block">
              <div className="flex flex-col items-center text-center">
                <item.icon className="w-16 h-16 mb-6 text-green-600" />
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-lg">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent blog posts */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Recent blog posts</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Seasonal Plant Changes to Watch Out For This Fall",
              description:
                "Learn about the changes your plants go through during autumn and how to care for them.",
              slug: "seasonal-plant-changes-fall",
            },
            {
              title:
                "Tropical Plants and Superstition: Green Myths and Symboli...",
              description:
                "Explore the fascinating world of plant folklore and the symbolic meanings behind popular tropical plants.",
              slug: "tropical-plants-superstition",
            },
            {
              title:
                "Why You Need Office Plants: A Green Boost for Productivit...",
              description:
                "Discover the benefits of incorporating plants into your workspace and how they can improve productivity.",
              slug: "office-plants-productivity",
            },
          ].map((post, index) => (
            <Link href="#" key={index}>
              <Card className="h-[470px]">
                <Image
                  src="/plant.png"
                  alt={post.title}
                  width={360}
                  height={240}
                  className="w-full h-60 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-lg text-muted-foreground line-clamp-2">
                    {post.description}
                  </p>
                  <Button variant="link" className="mt-3 p-0 text-lg">
                    Read more
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* The mission */}
      <section className="flex flex-col md:flex-row items-start gap-12 mb-16">
        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-6">The mission:</h1>
          <p className="text-xl mb-8">
            At Plantsome we&apos;re all about empowering you on your journey to
            &apos;Plant Parenthood,&apos;. It is our mission to seamlessly
            connect everyone with nature by offering a curated selection of
            quality plants, made accessible through our store. We strive to make
            the process of buying, and caring for plants joyful and effortless.
            So what are you waiting for, it&apos;s in your nature!
          </p>
          <Link href="#">
            <Button className="bg-green-700 hover:bg-green-800 text-white font-semibold text-lg py-3 px-6 transition-all duration-300 transform hover:scale-105">
              READ MORE ABOUT OUR MISSION
            </Button>
          </Link>
        </div>
        <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full text-green-200"
          >
            <path
              d="M7 21C7 21 7.5 17 9 15C10.5 13 13.5 12 15.5 12C17.5 12 20 13 21 14C22 15 22 17.5 22 17.5C22 17.5 20.5 16.5 18.5 16.5C16.5 16.5 14 18 13 19.5C12 21 12 23 12 23M7 21C7 21 7 17.5 8.5 15.5C10 13.5 13 11.5 16 11.5C19 11.5 21.5 13 22 14C22.5 15 23 16 23 16C23 16 21 14.5 19 14.5C17 14.5 14 16 13 18C12 20 12 23 12 23M7 21C7 21 6.5 18 7.5 15.5C8.5 13 11 10.5 14.5 10C18 9.5 21 11 22 12C23 13 23 14.5 23 14.5C23 14.5 21 13 19 13C17 13 14 14.5 12.5 17C11 19.5 12 23 12 23"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* Buying Plants online at Plantsome */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">
          Buying Plants online at Plantsome
        </h2>
        <p className="text-xl mb-6">
          Here at Plantsome, we try to take the hassle out of buying a plant
          online. We bring you the perfect plant that&apos;s right for your
          home, right to your home! We believe that buying a new plant should be
          fun! Besides, we love giving you advice when buying a plant online.
          Did you know that all plants are great at purifying the air and
          generating oxygen? Some are better than others so we&apos;ve already
          curated a list of best purifying plants. Ahh yes, that makes shopping
          easy!
        </p>
        <Link href="#">
          <Button
            variant="link"
            className="text-green-700 hover:text-green-800 font-semibold p-0 text-xl"
          >
            Read more
          </Button>
        </Link>
      </section>
    </div>
  );
}
